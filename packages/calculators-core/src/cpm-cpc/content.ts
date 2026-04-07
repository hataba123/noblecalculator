import type { CalculatorSeoContent } from "../shared/types";

export const cpmCpcSeoContent: CalculatorSeoContent = {
	metaDescription: "Compare CPM and CPC to understand your ad campaign efficiency.",
	keywords: ["CPM calculator", "CPC calculator", "CTR calculator", "ad efficiency"],
	intro: "Use this calculator when you want a clear, quick way to compare how much your ads cost per impression and per click.",
	formulaTitle: "CPM / CPC formula",
	formula: "CPM = Ad spend ÷ Impressions × 1,000. CPC = Ad spend ÷ Clicks. CTR = Clicks ÷ Impressions × 100.",
	formulaNote: "CPM tells you exposure cost. CPC tells you traffic cost. CTR shows how often people click.",
	whenToUse: "Use it when comparing creatives, audiences, or channels and you want the basic media numbers in one place.",
	examples: [
		{ title: "Display campaign", scenario: "You spend $2,500, get 120,000 impressions, and 1,600 clicks.", result: "CPM is about $20.83 and CPC is $1.56.", explanation: "This shows how much each exposure and click costs you." },
		{ title: "Lower-volume test", scenario: "You spend $500, get 20,000 impressions, and 180 clicks.", result: "CPM is $25 and CPC is about $2.78.", explanation: "Useful for early tests when traffic is small but direction matters." },
		{ title: "High-click ad", scenario: "You spend $900, get 45,000 impressions, and 1,200 clicks.", result: "CPC is $0.75 and CTR is 2.67%.", explanation: "A strong click-through rate often helps CPC stay efficient." },
	],
	commonMistakes: [
		"Mixing impressions and clicks in the wrong formula.",
		"Judging ad performance on CPM alone.",
		"Comparing campaigns that ran for very different lengths of time.",
	],
	faq: [
		{ question: "Which metric matters more, CPM or CPC?", answer: "It depends on your goal. CPM matters more for awareness, while CPC matters more when you want clicks." },
		{ question: "Is CTR the same as conversion rate?", answer: "No. CTR shows clicks per impression. Conversion rate shows how many of those clicks became outcomes." },
	],
	ctaTitle: "Need the finance side too?",
	ctaText: "If you want campaign numbers alongside invoices and expenses, QuickBooks or Xero can make reporting easier later on.",
	ctaNote: "Use CPM, CPC, and ROAS together to get the full picture.",
};
