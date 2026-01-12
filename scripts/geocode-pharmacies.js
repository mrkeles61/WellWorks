const fs = require('fs');
const path = require('path');
const axios = require('axios');
const crypto = require('crypto');

// CONFIG
const RAW_DATA_PATH = path.join(__dirname, '../src/data/raw_cities.js');
const CACHE_PATH = path.join(__dirname, 'pharmacies-cache.json');
const ERRORS_PATH = path.join(__dirname, 'geocode-errors.json');
const OUTPUT_PATH = path.join(__dirname, '../public/pharmacies_with_coords.json');

// Nominatim requirements
const USER_AGENT = 'WellWorks-StoreLocator/1.0';
const FROM_EMAIL = 'dev@wellworksturkey.com';
const DELAY_MS = 1500; // 1 req per 1.5s
const MAX_RETRIES = 3;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Turkish-safe normalization (CRITICAL for correct hashing)
function turkishNormalize(str) {
    if (!str) return '';
    return str
        .replace(/İ/g, 'i')
        .replace(/I/g, 'ı')
        .replace(/Ş/g, 's').replace(/ş/g, 's')
        .replace(/Ğ/g, 'g').replace(/ğ/g, 'g')
        .replace(/Ç/g, 'c').replace(/ç/g, 'c')
        .replace(/Ö/g, 'o').replace(/ö/g, 'o')
        .replace(/Ü/g, 'u').replace(/ü/g, 'u')
        .toLowerCase()
        .trim()
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'"]/g, '');
}

function generateHash(address, county, city) {
    const normalized = turkishNormalize(address) + '|' +
        turkishNormalize(county) + '|' +
        turkishNormalize(city) + '|turkey';
    return crypto.createHash('md5').update(normalized).digest('hex');
}

function loadRawData() {
    let content = fs.readFileSync(RAW_DATA_PATH, 'utf8');
    const start = content.indexOf('[');
    const end = content.lastIndexOf(']');

    if (start === -1 || end === -1) {
        throw new Error('Could not find array brackets in raw_cities.js');
    }

    const jsonString = content.substring(start, end + 1);
    return JSON.parse(jsonString);
}

function getCache() {
    if (fs.existsSync(CACHE_PATH)) {
        return JSON.parse(fs.readFileSync(CACHE_PATH, 'utf8'));
    }
    return {};
}

function saveCache(cache) {
    fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2));
}

function getErrors() {
    if (fs.existsSync(ERRORS_PATH)) {
        return JSON.parse(fs.readFileSync(ERRORS_PATH, 'utf8'));
    }
    return [];
}

function saveErrors(errors) {
    fs.writeFileSync(ERRORS_PATH, JSON.stringify(errors, null, 2));
}

async function geocodeWithRetry(query, retries = MAX_RETRIES) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const response = await axios.get('https://nominatim.openstreetmap.org/search', {
                params: {
                    q: query,
                    format: 'json',
                    limit: 1,
                    addressdetails: 1
                },
                headers: {
                    'User-Agent': USER_AGENT,
                    'From': FROM_EMAIL
                }
            });

            if (response.data && response.data.length > 0) {
                const hit = response.data[0];
                return {
                    lat: parseFloat(hit.lat),
                    lng: parseFloat(hit.lon),
                    display_name: hit.display_name
                };
            }
            return null; // No results
        } catch (error) {
            console.error(`  Attempt ${attempt}/${retries} failed: ${error.message}`);
            if (attempt < retries) {
                const backoff = Math.pow(2, attempt) * 1000; // 2s, 4s, 8s
                console.log(`  Retrying in ${backoff / 1000}s...`);
                await sleep(backoff);
            }
        }
    }
    return null; // All retries failed
}

async function geocodePharmacy(pharmacy, county, city) {
    // Primary query: name + address + county + city
    const primaryQuery = `${pharmacy.name}, ${pharmacy.address}, ${county}, ${city}, Türkiye`;
    console.log(`  Primary: ${primaryQuery}`);

    let result = await geocodeWithRetry(primaryQuery);

    // Fallback query: just address + city
    if (!result) {
        const fallbackQuery = `${pharmacy.address}, ${city}, Türkiye`;
        console.log(`  Fallback: ${fallbackQuery}`);
        result = await geocodeWithRetry(fallbackQuery);
    }

    return result;
}

async function main() {
    console.log('=== Store Locator Geocoding Pipeline (v2) ===\n');

    const cities = loadRawData();
    const cache = getCache();
    const errors = getErrors();
    const pharmacies = [];

    let totalCount = 0;
    let geocodedCount = 0;
    let cachedCount = 0;
    let apiCalls = 0;

    // Flatten: City -> County -> Shopping (Pharmacies)
    for (const city of cities) {
        for (const county of city.counties) {
            if (!county.shopping) continue;

            for (const pharmacy of county.shopping) {
                totalCount++;
                const addressHash = generateHash(pharmacy.address, county.name, city.city);
                let coords = null;

                // Check cache first (resume-safe)
                if (cache[addressHash]) {
                    coords = cache[addressHash].coords;
                    cachedCount++;
                    if (coords) geocodedCount++;
                } else {
                    // Geocode
                    console.log(`[${totalCount}] ${pharmacy.name}`);
                    coords = await geocodePharmacy(pharmacy, county.name, city.city);
                    apiCalls++;

                    // Update cache
                    cache[addressHash] = {
                        coords,
                        timestamp: Date.now(),
                        originalAddress: pharmacy.address
                    };
                    saveCache(cache); // Save after each to be crash-safe

                    if (coords) {
                        geocodedCount++;
                        console.log(`  ✓ Found: ${coords.lat}, ${coords.lng}`);
                    } else {
                        console.log(`  ✗ Not found`);
                        errors.push({
                            name: pharmacy.name,
                            address: pharmacy.address,
                            county: county.name,
                            city: city.city,
                            timestamp: new Date().toISOString()
                        });
                        saveErrors(errors);
                    }

                    // Rate limit
                    await sleep(DELAY_MS);
                }

                pharmacies.push({
                    id: addressHash,
                    name: pharmacy.name,
                    phone: pharmacy.phone || '',
                    email: pharmacy.email || '',
                    address: pharmacy.address,
                    city: city.city,
                    county: county.name,
                    lat: coords ? coords.lat : null,
                    lng: coords ? coords.lng : null
                });
            }
        }
    }

    // Generate output with metadata
    const output = {
        meta: {
            generatedAt: new Date().toISOString(),
            totalCount: totalCount,
            geocodedCount: geocodedCount,
            missingCount: totalCount - geocodedCount
        },
        pharmacies: pharmacies
    };

    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2));

    console.log('\n=== Complete ===');
    console.log(`Total pharmacies: ${totalCount}`);
    console.log(`Geocoded: ${geocodedCount}`);
    console.log(`Missing coords: ${totalCount - geocodedCount}`);
    console.log(`From cache: ${cachedCount}`);
    console.log(`API calls: ${apiCalls}`);
    console.log(`Output: ${OUTPUT_PATH}`);
}

main().catch(err => {
    console.error('Pipeline failed:', err);
    process.exit(1);
});
