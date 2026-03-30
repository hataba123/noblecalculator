import type { CalculatorSeoContent } from "../shared/types";

export const roiSeoContent: CalculatorSeoContent = {
	metaDescription: "Measure the return earned from an investment with a simple ROI calculator.",
	keywords: ["ROI calculator", "return on investment", "investment return", "profit percentage"],
	intro: "Use this when you need a fast read on whether an investment produced enough return to justify the money you put in.",
	visual: {
		variant: "roi",
		title: "Return versus original spend",
		summary: "This view helps you compare the gain against the cash you actually put in, which is the part that matters for ROI.",
		stats: [
			{ label: "Spend", value: "$12k" },
			{ label: "Return", value: "$16.2k" },
			{ label: "ROI", value: "35%" },
		],
	},
	formulaTitle: "ROI formula",
	formula: "ROI = (Return amount - Investment) ÷ Investment × 100.",
	formulaNote: "A positive ROI means the return beat the original spend. A negative result means the investment lost value.",
	whenToUse: "Use it for campaigns, equipment purchases, projects, or any decision where you want to compare gain against the original cost.",
	examples: [
		{ title: "Marketing campaign", scenario: "You invest $12,000 and get back $16,200.", result: "ROI is 35%.", explanation: "The return exceeded the original spend by $4,200." },
		{ title: "Equipment buy", scenario: "You spend $8,000 and the asset saves or earns $9,600.", result: "ROI is 20%.", explanation: "This helps compare the purchase against other ways to use that capital." },
		{ title: "Project test", scenario: "You put in $5,000 and only recover $4,000.", result: "ROI is -20%.", explanation: "A negative ROI signals the project did not pay back enough." },
	],
	commonMistakes: [
		"Using revenue instead of return amount.",
		"Forgetting to subtract the original investment before dividing.",
		"Comparing ROI numbers without checking whether the time frame is the same.",
	],
	faq: [
		{ question: "Is ROI the same as profit?", answer: "No. Profit is the dollar gain. ROI turns that gain into a percentage of the money invested." },
		{ question: "Can ROI be negative?", answer: "Yes. If the return is lower than the original investment, ROI falls below zero." },
	],
	ctaTitle: "Want a cleaner view of costs and returns?",
	ctaText: "QuickBooks or Xero can help you keep project costs, invoices, and returns in one place so ROI is easier to track later.",
	ctaNote: "Check ROI again whenever the return amount or spend changes.",
};