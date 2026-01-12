import fs from 'fs';
import path from 'path';
import vm from 'vm';

const RAW_PATH = path.join(process.cwd(), 'src', 'data', 'raw_cities.js');
const OUT_PATH = path.join(process.cwd(), 'public', 'cities.json');

// Helper to fix mojibake (Latin1 interpreted as UTF-8 reverser)
function fixEncoding(str) {
    if (typeof str !== 'string') return str;
    // If string contains common mojibake chars like Ã, it might be double-encoded
    // We try to interpret the string as latin1 bytes and decode as utf-8
    try {
        // This naive check is usually enough for the specific Ã‡ case (Ç)
        if (str.includes('Ã')) {
            return Buffer.from(str, 'binary').toString('utf-8');
        }
    } catch (e) {
        return str;
    }
    return str;
}

function recursiveFix(obj) {
    if (Array.isArray(obj)) {
        return obj.map(recursiveFix);
    } else if (obj && typeof obj === 'object') {
        const newObj = {};
        for (const key in obj) {
            newObj[key] = recursiveFix(obj[key]);
        }
        return newObj;
    } else if (typeof obj === 'string') {
        return fixEncoding(obj);
    }
    return obj;
}

try {
    console.log('Reading raw file...');
    const rawCode = fs.readFileSync(RAW_PATH, 'utf8');

    console.log('Evaluating in sandbox...');
    const sandbox = { cities: null };
    vm.createContext(sandbox);
    vm.runInContext(rawCode, sandbox);

    if (!Array.isArray(sandbox.cities)) {
        throw new Error('cities variable is not an array');
    }

    console.log(`Found ${sandbox.cities.length} cities. Fixing encoding...`);
    const fixedData = recursiveFix(sandbox.cities);

    console.log('Writing to public/cities.json...');
    fs.writeFileSync(OUT_PATH, JSON.stringify(fixedData, null, 2), 'utf8');

    console.log('Conversion valid!');
} catch (err) {
    console.error('Error converting cities:', err);
    process.exit(1);
}
