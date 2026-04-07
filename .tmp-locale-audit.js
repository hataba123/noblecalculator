const fs = require('fs');
const path = require('path');

const root = process.cwd();
const i18nPath = path.join(root, 'src', 'i18n', 'index.ts');
const i18nText = fs.readFileSync(i18nPath, 'utf8');
const locales = ['es', 'de', 'fr', 'ja', 'pt', 'ru'];

function getBlock(locale) {
    const startMarker = `const ${locale}StringTranslations: Record<string, string> = {`;
    const start = i18nText.indexOf(startMarker);
    if (start < 0) return '';
    const next = i18nText.slice(start + startMarker.length).match(/\nconst [a-z]{2}(?:Extra)?StringTranslations: Record<string, string> = \{/);
    const end = next ? start + startMarker.length + next.index : i18nText.length;
    return i18nText.slice(start, end);
}

function collectKeys(block) {
    return new Set([...block.matchAll(/^\s*"((?:\\.|[^"\\])+)":/gm)].map((match) => match[1]));
}

function collectSourceStrings() {
    const files = [];
    const walk = (dir) => {
        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
            const full = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                walk(full);
            } else if (entry.isFile() && full.endsWith('.tsx')) {
                files.push(full);
            }
        }
    };
    walk(path.join(root, 'src'));

    const patterns = [
        /translateText\(locale,\s*"([^"]+)"\)/g,
        /translateText\(locale,\s*'([^']+)'\)/g,
        /label="([^"]+)"/g,
        /helpText="([^"]+)"/g,
        /hint="([^"]+)"/g,
        /placeholder="([^"]+)"/g,
        /title="([^"]+)"/g,
        /description="([^"]+)"/g,
        /aria-label="([^"]+)"/g,
    ];

    const strings = new Set();
    for (const file of files) {
        const text = fs.readFileSync(file, 'utf8');
        for (const pattern of patterns) {
            for (const match of text.matchAll(pattern)) {
                const value = match[1].trim();
                if (/[A-Za-zА-Яа-я]/.test(value) && value.length > 2) {
                    strings.add(value);
                }
            }
        }
    }
    return [...strings].sort();
}

const sourceStrings = collectSourceStrings();
const missingByLocale = {};
for (const locale of locales) {
    const block = getBlock(locale);
    const keys = collectKeys(block);
    const missing = sourceStrings.filter((string) => !keys.has(string));
    missingByLocale[locale] = new Set(missing);
    console.log(`${locale}: ${missing.length} missing`);
}
const commonMissing = sourceStrings.filter((string) => locales.every((locale) => missingByLocale[locale].has(string)));
console.log(`common across all locales: ${commonMissing.length}`);
for (const item of commonMissing) {
    console.log(`- ${item}`);
}

const frequency = new Map();
for (const string of sourceStrings) {
    let count = 0;
    for (const locale of locales) {
        if (missingByLocale[locale].has(string)) {
            count += 1;
        }
    }
    frequency.set(string, count);
}

const frequentMissing = [...frequency.entries()]
    .filter(([, count]) => count >= 3)
    .sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0]))
    .slice(0, 40);

console.log(`missing in 3+ locales: ${frequentMissing.length}`);
for (const [item, count] of frequentMissing) {
    console.log(`- [${count}] ${item}`);
}
