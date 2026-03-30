import type { CalculatorSeoContent } from "../shared/types";

export const dayRateToHourlyRateSeoContent: CalculatorSeoContent = {
	metaDescription: "Convert a day rate into an hourly rate and weekly equivalent.",
	keywords: ["day rate to hourly rate calculator", "freelance rate calculator", "hourly equivalent", "contractor rate"],
	intro: "Use this calculator when a client offers a day rate and you want to see what that looks like as an hourly number.",
	formulaTitle: "Day rate to hourly rate formula",
	formula: "Hourly rate = Day rate ÷ Billable hours per day. Weekly equivalent = Day rate × 5. Monthly equivalent = Day rate × 20.",
	formulaNote: "This makes it easier to compare a day fee with hourly work, retained work, or full-time pay.",
	whenToUse: "Use it when comparing freelance offers, setting your own rate, or deciding whether a day rate is actually worth it.",
	examples: [
		{ title: "Standard contractor day", scenario: "A $640 day rate over 8 billable hours.", result: "Hourly rate is $80.", explanation: "This is the cleanest way to compare against hourly contracts." },
		{ title: "Higher specialist rate", scenario: "A $1,000 day rate over 7 billable hours.", result: "Hourly rate is about $142.86.", explanation: "Shorter billable days can make the hourly equivalent look much higher." },
		{ title: "Long day on site", scenario: "A $720 day rate over 9 billable hours.", result: "Hourly rate is $80.", explanation: "This helps when on-site work stretches beyond the usual 8-hour assumption." },
	],
	commonMistakes: [
		"Assuming every day has the same billable hours.",
		"Ignoring travel, prep, or admin time that is not billable.",
		"Comparing a day rate without checking how many days are actually guaranteed.",
	],
	faq: [
		{ question: "Should I always divide by eight hours?", answer: "Not always. Use the number of billable hours that actually applies to the job." },
		{ question: "Why does the monthly equivalent use 20 days?", answer: "It is a practical working-month estimate, not a legal or payroll rule." },
	],
	ctaTitle: "Want invoice and cost tracking with it?",
	ctaText: "QuickBooks or Xero can help you keep day rates, expenses, and client payments organized in one system.",
	ctaNote: "Update the rate whenever your billable hours or working pattern changes.",
};