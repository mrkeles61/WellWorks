const fs = require('fs');
const path = require('path');
const axios = require('axios');
const crypto = require('crypto');

// CONFIG
const RAW_DATA_PATH = path.join(__dirname, '../src/data/raw_cities.js');
const CACHE_PATH = path.join(__dirname, 'pharmacies-cache.json');
const OUTPUT_PATH = path.join(__dirname, '../public/pharmacies_with_coords.json');
const USER_AGENT = 'WellWorks-StoreLocator/1.0 (internal-dev-usage)'; // Required by Nominatim

// Rate Limiting: 1 request per 1.5 seconds to be safe with Nominatim free tier
const DELAY_MS = 1500;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function loadRawData() {
    // raw_cities.js format is: { var cities = [ ... ] ... } or similar
    // We will extract the array content.
    let content = fs.readFileSync(RAW_DATA_PATH, 'utf8');

    // Find the first '[' and last ']'
    const start = content.indexOf('[');
    const end = content.lastIndexOf(']');

    if (start === -1 || end === -1) {
        throw new Error('Could not find array brackets in raw_cities.js');
    }

    const jsonString = content.substring(start, end + 1);
    try {
        return JSON.parse(jsonString);
    } catch (e) {
        console.error('JSON parsing failed. Attempting to fix common trailing commas if any...');
        // Simple fallback if valid JSON but has JS quirks (like single quotes or trailing commas are NOT valid in JSON but might be in JS file)
        // Since the snippet showed standard double quotes, JSON.parse might work. 
        // If not, we might need a looser parser, but let's try strict first.
        throw e;
    }
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

async function geocodeAddress(address) {
    try {
        const url = 'https://nominatim.openstreetmap.org/search';
        const params = {
            q: address,
            format: 'json',
            limit: 1,
            addressdetails: 1
        };

        console.log(`Fetching: ${address}`);
        const response = await axios.get(url, {
            params,
            headers: { 'User-Agent': USER_AGENT }
        });

        if (response.data && response.data.length > 0) {
            const hit = response.data[0];
            return {
                lat: parseFloat(hit.lat),
                lng: parseFloat(hit.lon),
                display_name: hit.display_name
            };
        }
        return null; // Not found
    } catch (error) {
        console.error(`Error geocoding ${address}:`, error.message);
        return null;
    }
}

function generateHash(str) {
    return crypto.createHash('md5').update(str).digest('hex');
}

async function main() {
    console.log('Starting Geocoding Pipeline...');

    const cities = loadRawData();
    const cache = getCache();
    const output = [];
    let apiCalls = 0;

    // Flatten logic: City -> County -> Shopping (Pharmacy)
    for (const city of cities) {
        for (const county of city.counties) {
            // "shopping" array contains pharmacies
            if (!county.shopping) continue;

            for (const pharmacy of county.shopping) {
                // Construct full address for geocoding accuracy
                const fullAddress = `${pharmacy.address}, ${county.name}, ${city.city}, Turkey`;
                const addressHash = generateHash(fullAddress);

                let coords = null;

                // Check Cache
                if (cache[addressHash]) {
                    coords = cache[addressHash].coords;
                    // console.log(`[CACHE] ${pharmacy.name}`);
                } else {
                    // Geocode
                    console.log(`[GEOCODE] ${pharmacy.name} (${fullAddress})`);
                    coords = await geocodeAddress(fullAddress);
                    apiCalls++;

                    if (coords) {
                        cache[addressHash] = {
                            coords,
                            timestamp: Date.now(),
                            originalAddress: fullAddress
                        };
                        // Save cache periodically or after each hit to prevent data loss on crash
                        saveCache(cache);
                    }

                    // Rate limit wait
                    await sleep(DELAY_MS);
                }

                output.push({
                    id: addressHash, // Stable ID
                    name: pharmacy.name,
                    phone: pharmacy.phone,
                    email: pharmacy.email,
                    address: pharmacy.address, // Display address (short)
                    city: city.city,
                    county: county.name,
                    lat: coords ? coords.lat : null,
                    lng: coords ? coords.lng : null
                });
            }
        }
    }

    // Write final output
    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2));
    console.log(`\nDone! Processed ${output.length} pharmacies.`);
    console.log(`API Calls made: ${apiCalls}`);
    console.log(`Output saved to: ${OUTPUT_PATH}`);
}

main();
