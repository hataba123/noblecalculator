import type { CalculatorSeoContent } from "../shared/types";

export const roasSeoContent: CalculatorSeoContent = {
	metaDescription: "Check how much revenue your ad spend brings back with ROAS.",
	keywords: ["ROAS calculator", "ad spend calculator", "revenue per ad dollar", "campaign performance"],
	intro: "Use this when you want a simple view of whether your ads are bringing back enough revenue for the money spent.",
	visual: {
		variant: "roas",
		title: "Revenue per ad dollar",
		summary: "ROAS gives you a quick health check, but it works best when you look at revenue and profit together.",
		stats: [
			{ label: "Spend", value: "$1.2k" },
			{ label: "Revenue", value: "$5.4k" },
			{ label: "ROAS", value: "4.5x" },
		],
	},
	formulaTitle: "ROAS formula",
	formula: "ROAS = Revenue ÷ Ad spend.",
	formulaNote: "A higher ROAS means more revenue per dollar of ad spend.",
	whenToUse: "Use it when you are comparing campaigns, channels, or creatives and want a fast revenue-to-spend ratio.",
	examples: [
		{ title: "Paid search", scenario: "You spend $1,200 and the campaign brings in $5,400 in revenue.", result: "ROAS is 4.5x.", explanation: "Each dollar spent returns $4.50 in revenue." },
		{ title: "Small test", scenario: "You spend $300 and generate $900 in revenue.", result: "ROAS is 3.0x.", explanation: "That is a solid early signal, but you still want to check profit after other costs." },
		{ title: "Scaling spend", scenario: "You spend $8,000 and bring in $20,000.", result: "ROAS is 2.5x.", explanation: "This helps you judge whether higher spend still keeps the campaign efficient." },
	],
	commonMistakes: [
		"Using ROAS as if it were profit.",
		"Forgetting to attribute the correct revenue to the correct campaign.",
		"Comparing campaigns with different reporting windows.",
	],
	faq: [
		{ question: "Is ROAS the same as ROI?", answer: "No. ROAS compares revenue to ad spend, while ROI compares profit to the original investment." },
		{ question: "What is a good ROAS?", answer: "It depends on margins and overhead, but higher is generally better as long as the campaign still makes profit." },
	],
	ctaTitle: "Want ad results and expenses in one place?",
	ctaText: "If you want ad spend, invoices, and expenses together, QuickBooks or Xero can make reporting much easier.",
	ctaNote: "Use this alongside profit tracking, not as a replacement for it.",
};