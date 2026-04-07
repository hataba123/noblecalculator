const fs = require('fs');
const path = require('path');
const text = fs.readFileSync(path.join(process.cwd(), 'src', 'i18n', 'index.ts'), 'utf8');
const keys = [
    'All working hours available in the period.',
    'BMI',
    'Deductible business costs.',
    'Estimated income tax rate.',
    'Estimated self-employment tax rate.',
    'Estimated tax rate to reserve.',
    'Fixed expenses that must be covered each month.',
    'Flat fee per transaction.',
    'Gain',
    'Hours you can invoice or charge for.',
    'Markup rate (%)',
    'Revenue generated per dollar spent.',
    'Revenue minus ad spend.',
    'The net income you want to keep each month.',
    'Total customer payment before fees.',
    'Total self-employed income before expenses.',
    'Variable percentage charged by the processor.',
    'VAT breakdown',
    'What you can charge before tax.',
];
for (const key of keys) {
    const matches = [...text.matchAll(new RegExp(`"${key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`, 'g'))].length;
    console.log(`${key}: ${matches}`);
}
