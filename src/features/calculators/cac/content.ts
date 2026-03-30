import type { CalculatorSeoContent } from "../shared/types";

export const cacSeoContent: CalculatorSeoContent = {
	metaDescription: "See how much it costs to acquire one customer.",
	keywords: ["CAC calculator", "customer acquisition cost", "marketing efficiency", "acquisition cost"],
	intro: "Use this calculator when you want a quick read on whether your marketing spend is efficient enough to keep growing.",
	formulaTitle: "CAC formula",
	formula: "CAC = Marketing spend ÷ New customers.",
	formulaNote: "Lower CAC usually means you are acquiring customers more efficiently, but it still needs to be checked against revenue and lifetime value.",
	whenToUse: "Use it when reviewing campaign performance, comparing channels, or checking whether growth is coming at a healthy cost.",
	examples: [
		{ title: "Campaign review", scenario: "You spend $12,000 and win 150 new customers.", result: "CAC is $80.", explanation: "This tells you what it costs, on average, to bring in one customer." },
		{ title: "Launch month", scenario: "You spend $5,000 and get 40 new customers.", result: "CAC is $125.", explanation: "That may be fine for a premium product, but it is high for a low-ticket offer." },
		{ title: "Efficient channel", scenario: "You spend $3,000 and get 75 new customers.", result: "CAC is $40.", explanation: "This helps show which channel is pulling its weight best." },
	],
	commonMistakes: [
		"Counting leads as customers.",
		"Leaving out the full marketing spend.",
		"Comparing CAC without looking at what a customer is worth over time.",
	],
	faq: [
		{ question: "Should CAC include sales costs?", answer: "If your sales team is part of acquisition, yes. Otherwise keep the definition consistent and use the same rule every time." },
		{ question: "Is lower CAC always better?", answer: "Lower is usually good, but only if the customer quality and revenue stay strong." },
	],
	ctaTitle: "Keep the full revenue picture close",
	ctaText: "If you want to line up marketing spend with revenue and invoices, QuickBooks or Xero can help you keep the back office tidy.",
	ctaNote: "Use this together with ROAS and profit checks, not on its own.",
};