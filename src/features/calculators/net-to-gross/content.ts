import type { CalculatorSeoContent } from "../shared/types";

export const netToGrossSeoContent: CalculatorSeoContent = {
	metaDescription: "Work backward from take-home pay to the gross amount before tax.",
	keywords: ["net to gross calculator", "gross-up calculator", "take-home pay", "tax gross up"],
	intro: "Use this calculator when you know the amount you want to keep and need to work out the bigger gross number behind it.",
	formulaTitle: "Net to gross formula",
	formula: "Gross amount = Net amount ÷ (1 - Tax rate). Tax amount = Gross amount - Net amount.",
	formulaNote: "It is the reverse of a standard take-home pay calculation.",
	whenToUse: "Use it when you need to quote a pre-tax fee, negotiate a salary, or reverse-engineer the invoice amount behind a target net figure.",
	examples: [
		{ title: "Target salary", scenario: "You want to keep $4,000 after 25% tax.", result: "Gross needs to be about $5,333.33.", explanation: "You have to earn more upfront so the tax still leaves the target net amount." },
		{ title: "Client fee", scenario: "You want $1,200 net with 20% tax.", result: "Gross invoice should be $1,500.", explanation: "This helps when you quote a fee and want to protect your take-home amount." },
		{ title: "Higher tax band", scenario: "You need $6,000 net with 35% tax.", result: "Gross lands at about $9,230.77.", explanation: "The higher the tax rate, the more the gross amount has to rise to hit the same net target." },
	],
	commonMistakes: [
		"Forgetting that the tax rate must be below 100%.",
		"Treating the gross amount as the final amount instead of the pre-tax value.",
		"Using the wrong tax rate for the country, contract, or income type.",
	],
	faq: [
		{ question: "Why does the gross amount jump so much?", answer: "Because tax is taken from the gross figure, so the starting amount must be higher to leave the desired net value." },
		{ question: "Can I use this for invoices?", answer: "Yes. It is helpful when you know the amount you want to keep and need to add tax back on top." },
	],
	ctaTitle: "Keep client billing simple",
	ctaText: "If you send invoices often, QuickBooks or Xero can help keep gross, tax, and payment history organized.",
	ctaNote: "Recheck the gross-up any time the tax rate changes.",
};