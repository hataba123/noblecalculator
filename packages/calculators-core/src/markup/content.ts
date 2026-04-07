import type { CalculatorSeoContent } from "../shared/types";

export const markupSeoContent: CalculatorSeoContent = {
	metaDescription: "Find the right selling price from your cost and target markup.",
	keywords: ["markup calculator", "selling price calculator", "pricing calculator", "profit markup"],
	intro: "Use this when you already know your cost and need a selling price that leaves enough room for profit.",
	formulaTitle: "Markup formula",
	formula: "Markup amount = Cost × Markup rate. Selling price = Cost + Markup amount. Margin = Markup amount ÷ Selling price × 100.",
	formulaNote: "It helps you build a price from the bottom up instead of guessing what the market will accept.",
	whenToUse: "Use it when pricing a product, quoting a service, or checking whether a target margin is realistic.",
	examples: [
		{ title: "Product pricing", scenario: "Cost is $100 and markup is 30%.", result: "Selling price is $130.", explanation: "A quick way to test whether the final price still feels competitive." },
		{ title: "Higher margin item", scenario: "Cost is $75 and markup is 60%.", result: "Selling price is $120.", explanation: "This helps when the product needs to carry more overhead per sale." },
		{ title: "Service quote", scenario: "Cost is $250 and markup is 20%.", result: "Selling price is $300.", explanation: "A simple starting point for a quote before you check market fit." },
	],
	commonMistakes: [
		"Mixing markup and margin as if they were the same thing.",
		"Forgetting to include all direct costs before adding markup.",
		"Rounding the selling price too early and losing part of the margin.",
	],
	faq: [
		{ question: "Why does my margin look lower than my markup?", answer: "Because margin is measured against selling price, while markup is measured against cost." },
		{ question: "Can I use this for services?", answer: "Yes. It works well for quoting services when you know your internal cost base." },
	],
	ctaTitle: "Need the invoicing side too?",
	ctaText: "QuickBooks or Xero can help you connect quotes, invoices, and actual costs so your markup stays realistic.",
	ctaNote: "Revisit the price whenever cost or margin targets change.",
};
