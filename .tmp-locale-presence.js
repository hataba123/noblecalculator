const fs = require('fs');
const path = require('path');
const text = fs.readFileSync(path.join(process.cwd(), 'src', 'i18n', 'index.ts'), 'utf8');
const locales = ['es', 'de', 'fr', 'ja', 'pt', 'ru'];
const candidates = [
    'Amount you want to send before fees.',
    'Copy, images, and content work.',
    'Customers acquired from that spend.',
    'Enter the feet part of your height.',
    'Enter the remaining inches.',
    'Estimate how much tax to set aside from self-employed income.',
    'Find the monthly revenue you need to cover income, taxes, and expenses.',
    'Measure how much of your available time is billable.',
];
function block(locale) {
    const startMarker = `const ${locale}StringTranslations: Record<string, string> = {`;
    const start = text.indexOf(startMarker);
    if (start < 0) return '';
    const next = text.slice(start + startMarker.length).match(/\nconst [a-z]{2}(?:Extra)?StringTranslations: Record<string, string> = \{/);
    const end = next ? start + startMarker.length + next.index : text.length;
    return text.slice(start, end);
}
for (const candidate of candidates) {
    const result = [];
    for (const locale of locales) {
        const b = block(locale);
        result.push(`${locale}:${b.includes(`"${candidate}"`) ? 'yes' : 'no'}`);
    }
    console.log(`${candidate} -> ${result.join(', ')}`);
}
