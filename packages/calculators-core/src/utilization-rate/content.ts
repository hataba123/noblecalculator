import type { CalculatorSeoContent } from "../shared/types";

export const utilizationRateSeoContent: CalculatorSeoContent = {
	metaDescription: "Measure how much of your available time is billable with a utilization rate calculator.",
	keywords: ["utilization rate calculator", "billable hours calculator", "capacity planning", "freelancer utilization"],
	intro: "Use this calculator when you want to know how much of your working time is actually earning money.",
	formulaTitle: "Utilization rate formula",
	formula: "Utilization rate = Billable hours ÷ Total available hours × 100.",
	formulaNote: "The higher the rate, the more of your time is being converted into revenue.",
	whenToUse: "Use it when checking whether your work week has enough billable time to support your pricing and income goal.",
	examples: [
		{ title: "Solid week", scenario: "You bill 120 hours out of 160 available.", result: "Utilization rate is 75%.", explanation: "A healthy sign that most of your available time is productive." },
		{ title: "Busy but inefficient", scenario: "You bill 90 hours out of 160 available.", result: "Utilization rate is 56.25%.", explanation: "This may mean too much time is being lost to admin or unbillable work." },
		{ title: "High utilization", scenario: "You bill 140 hours out of 160 available.", result: "Utilization rate is 87.5%.", explanation: "Great in the short term, but it can be hard to sustain every week." },
	],
	commonMistakes: [
		"Counting all working hours as billable.",
		"Forgetting admin, sales, and unpaid prep time.",
		"Treating a very high utilization rate as automatically better without checking burnout risk.",
	],
	faq: [
		{ question: "What is a good utilization rate?", answer: "It depends on the business model, but you usually want a rate that leaves room for admin and rest without starving revenue." },
		{ question: "Can utilization be over 100%?", answer: "In practice, not for a normal working period. If it happens, the time inputs likely need a second look." },
	],
	ctaTitle: "Need better time and money tracking?",
	ctaText: "QuickBooks or Xero can help you connect time, invoices, and revenue so your utilization targets are easier to manage.",
	ctaNote: "Recheck the rate whenever your billable schedule changes.",
};
