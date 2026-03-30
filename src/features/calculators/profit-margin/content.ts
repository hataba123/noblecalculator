import type { CalculatorSeoContent } from "../shared/types";

export const profitMarginSeoContent: CalculatorSeoContent = {
	metaDescription: "See how much profit you keep after costs with a simple profit margin calculator.",
	keywords: ["profit margin calculator", "profit calculator", "margin calculator", "business profit"],
	intro: "Use this when you want to see how much of your revenue is still left after the costs are paid.",
	visual: {
		variant: "margin",
		title: "See where the money stays",
		summary: "This quick snapshot shows the three numbers that matter most before you decide whether a price is worth it.",
		stats: [
			{ label: "Revenue", value: "$12k" },
			{ label: "Cost", value: "$7.5k" },
			{ label: "Margin", value: "37.5%" },
		],
	},
	formulaTitle: "Profit margin formula",
	formula: "Profit = Revenue - Cost. Margin = Profit ÷ Revenue × 100. Markup = Profit ÷ Cost × 100.",
	formulaNote: "It gives you both the profit amount and the percentage view so you can price with more confidence.",
	whenToUse: "Use it when reviewing a sale, checking a pricing model, or comparing two offers with different cost structures.",
	examples: [
		{ title: "Simple sale", scenario: "Revenue is $12,000 and cost is $7,500.", result: "Profit is $4,500 and margin is 37.50%.", explanation: "This shows the share of revenue that stays after costs." },
		{ title: "Lower-cost job", scenario: "Revenue is $5,000 and cost is $3,200.", result: "Profit is $1,800 and margin is 36.00%.", explanation: "A similar margin can still be healthy on a smaller project." },
		{ title: "Tight pricing", scenario: "Revenue is $9,000 and cost is $8,100.", result: "Profit is $900 and margin is 10.00%.", explanation: "This is a useful warning sign that the offer may be underpriced." },
	],
	commonMistakes: [
		"Using gross revenue and ignoring the real cost of delivery.",
		"Confusing margin with markup.",
		"Comparing profits without checking whether the revenue level is the same.",
	],
	faq: [
		{ question: "What is the difference between margin and markup?", answer: "Margin compares profit to revenue. Markup compares profit to cost." },
		{ question: "Can profit be negative?", answer: "Yes. If costs are higher than revenue, the calculator will show a loss instead of profit." },
	],
	ctaTitle: "Want cleaner numbers in one place?",
	ctaText: "QuickBooks or Xero can help you keep revenue, costs, and profit together instead of spread across separate tabs.",
	ctaNote: "Recalculate margin whenever your pricing or supplier cost changes.",
};