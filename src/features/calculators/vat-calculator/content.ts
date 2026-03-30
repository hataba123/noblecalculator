import type { CalculatorSeoContent } from "../shared/types";

export const vatCalculatorSeoContent: CalculatorSeoContent = {
	metaDescription: "Add VAT to a price and see the gross amount including tax.",
	keywords: ["VAT calculator", "VAT added calculator", "gross amount", "tax calculator"],
	intro: "Use this when you have a pre-tax amount and want to see the final price after VAT is added.",
	formulaTitle: "VAT formula",
	formula: "VAT amount = Amount × VAT rate. Gross amount = Amount + VAT amount.",
	formulaNote: "If you need to work backward from a gross amount, use the gross-to-net calculator instead.",
	whenToUse: "Use it for pricing, invoicing, or checking the tax-inclusive total that should appear on a quote or receipt.",
	examples: [
		{ title: "Standard VAT", scenario: "Amount is $1,000 and VAT is 20%.", result: "VAT is $200 and gross amount is $1,200.", explanation: "This is the simplest way to see the tax-inclusive total." },
		{ title: "Lower-rate VAT", scenario: "Amount is $480 and VAT is 10%.", result: "VAT is $48 and gross amount is $528.", explanation: "Helpful when a lower rate applies to a product or service." },
		{ title: "Larger invoice", scenario: "Amount is $5,000 and VAT is 15%.", result: "VAT is $750 and gross amount is $5,750.", explanation: "This makes it easier to quote the full amount due before sending the invoice." },
	],
	commonMistakes: [
		"Adding VAT to a figure that already includes VAT.",
		"Using the wrong rate for the customer region.",
		"Forgetting that the calculator only adds VAT and does not reverse it.",
	],
	faq: [
		{ question: "Can this remove VAT too?", answer: "No. This calculator adds VAT to a base amount. Use gross-to-net if you need to work backward." },
		{ question: "Is VAT the same as sales tax?", answer: "Not exactly, but the calculation pattern is similar for tax-inclusive pricing." },
	],
	ctaTitle: "Keep invoices organized",
	ctaText: "QuickBooks or Xero can help if you want VAT, invoices, and payments tracked together without extra manual steps.",
	ctaNote: "Recalculate whenever the base amount or VAT rate changes.",
};