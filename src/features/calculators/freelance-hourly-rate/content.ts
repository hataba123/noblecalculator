import type { CalculatorSeoContent } from "../shared/types";

export const freelanceHourlyRateSeoContent: CalculatorSeoContent = {
	metaDescription: "Set an hourly freelance rate that matches your income goal and billable hours.",
	keywords: ["freelance hourly rate calculator", "hourly rate calculator", "freelancer pricing", "billable hours"],
	intro: "Use this when you want a rate that can actually support your income goal instead of guessing a number that feels safe.",
	visual: {
		variant: "rate",
		title: "Price for the hours you can sell",
		summary: "A useful freelance rate has to cover the hours you can invoice, not the hours that disappear into admin and prep.",
		stats: [
			{ label: "Target", value: "$60k" },
			{ label: "Billable", value: "1,200h" },
			{ label: "Rate", value: "$50/hr" },
		],
	},
	formulaTitle: "Freelance hourly rate formula",
	formula: "Hourly rate = Target income ÷ Billable hours.",
	formulaNote: "If your billable time is limited, your hourly rate has to carry the full income target.",
	whenToUse: "Use it when quoting freelance work, planning a retainer, or checking whether a project will realistically pay the bills.",
	examples: [
		{ title: "Simple target", scenario: "You want $60,000 a year and can bill 1,200 hours.", result: "Hourly rate is $50.", explanation: "That is a clean starting point for pricing." },
		{ title: "Fewer billable hours", scenario: "You want $72,000 a year and can only bill 900 hours.", result: "Hourly rate is $80.", explanation: "Less billable time means each hour has to earn more." },
		{ title: "Part-time capacity", scenario: "You want $36,000 a year and can bill 600 hours.", result: "Hourly rate is $60.", explanation: "Useful when freelance work is only part of your income." },
	],
	commonMistakes: [
		"Using all working hours instead of billable hours.",
		"Forgetting taxes, admin, and downtime in the target income.",
		"Pricing from a competitor rate without checking your own capacity.",
	],
	faq: [
		{ question: "What counts as billable hours?", answer: "Only the hours you can actually invoice or charge for, not admin, marketing, or unpaid prep." },
		{ question: "Should I round the result?", answer: "Usually yes. Round to a rate you can explain and quote confidently." },
	],
	ctaTitle: "Need quotes and invoices to stay in sync?",
	ctaText: "QuickBooks or Xero can help you keep your quotes, invoices, and expenses aligned as your rate changes.",
	ctaNote: "Recalculate whenever your billable hours or income goal changes.",
};