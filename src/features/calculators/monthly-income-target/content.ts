import type { CalculatorSeoContent } from "../shared/types";

export const monthlyIncomeTargetSeoContent: CalculatorSeoContent = {
	metaDescription: "Work backward from take-home income to the monthly revenue you need.",
	keywords: ["monthly income target calculator", "income goal calculator", "tax reserve", "freelancer income"],
	intro: "Use this calculator when you want a realistic monthly revenue target instead of a vague income goal.",
	visual: {
		variant: "income",
		title: "Work backward from take-home pay",
		summary: "Start with the amount you want to keep, then add overhead and tax so the monthly target is based on real numbers.",
		stats: [
			{ label: "Take-home", value: "$6k" },
			{ label: "Expenses", value: "$1.5k" },
			{ label: "Gross target", value: "$10k" },
		],
	},
	formulaTitle: "Monthly income target formula",
	formula: "Gross monthly target = (Desired take-home + Monthly business expenses) ÷ (1 - Tax rate).",
	formulaNote: "It shows the amount you need to earn before tax so your net income goal still holds up.",
	whenToUse: "Use it when setting a freelance target, planning a self-employed month, or checking whether your current bookings can cover both personal income and business costs.",
	examples: [
		{ title: "Simple monthly goal", scenario: "You want to keep $6,000, have $1,500 in business costs, and reserve 25% for tax.", result: "Gross monthly target is $10,000.", explanation: "The tool turns a net goal into a realistic revenue number you can actually aim for." },
		{ title: "Higher overhead", scenario: "You want $8,000 take-home, $2,500 expenses, and 30% tax.", result: "Gross monthly target is about $15,000.", explanation: "The more overhead you have, the higher the target has to be." },
		{ title: "Lean month", scenario: "You want $4,000 take-home, $900 expenses, and 20% tax.", result: "Gross monthly target is about $6,125.", explanation: "This is useful when you are checking whether a quieter month still works financially." },
	],
	commonMistakes: [
		"Confusing take-home income with gross revenue.",
		"Forgetting to include monthly business expenses.",
		"Using a tax rate that is too low for the real year-end bill.",
	],
	faq: [
		{ question: "Does this include retirement or savings?", answer: "Only if you include them inside the monthly business expenses or desired take-home amount." },
		{ question: "Can I use this for annual planning?", answer: "Yes. Multiply the monthly target by 12 to get a rough yearly view." },
	],
	ctaTitle: "Need the bookkeeping side to match the plan?",
	ctaText: "QuickBooks or Xero can help you keep income, expenses, and tax reserves organized as your target changes.",
	ctaNote: "Revisit the target whenever your costs or tax rate move.",
};