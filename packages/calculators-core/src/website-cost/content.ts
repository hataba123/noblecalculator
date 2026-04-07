import type { CalculatorSeoContent } from "../shared/types";

export const websiteCostSeoContent: CalculatorSeoContent = {
	metaDescription: "Estimate the cost of designing, building, and launching a website.",
	keywords: ["website cost calculator", "web design estimate", "website budget", "project cost"],
	intro: "Use this when you need a quick website budget that feels realistic, not just a rough guess.",
	visual: {
		variant: "build",
		title: "Break the build into parts",
		summary: "Separating design, development, and content makes the budget much easier to explain and defend.",
		stats: [
			{ label: "Design", value: "18h" },
			{ label: "Development", value: "42h" },
			{ label: "Total", value: "$7,640" },
		],
	},
	formulaTitle: "Website cost formula",
	formula: "Total cost = (Design hours + Development hours + Content hours) × Hourly rate + Fixed expenses.",
	formulaNote: "This is handy when you want to quote a client or plan your own build budget before work starts.",
	whenToUse: "Use it when you are pricing a new site, reviewing a proposal, or checking whether the project scope still fits the budget.",
	examples: [
		{ title: "Small business site", scenario: "18 design hours, 42 development hours, 12 content hours, $95 per hour, and $800 fixed expenses.", result: "Estimated total is $7,640.", explanation: "A compact site can still take real time once design and content are included." },
		{ title: "Landing page", scenario: "8 design hours, 14 development hours, 4 content hours, $120 per hour, and $250 fixed expenses.", result: "Estimated total is $2,890.", explanation: "Even a small page needs a realistic buffer for design and launch work." },
		{ title: "Custom build", scenario: "40 design hours, 90 development hours, 25 content hours, $110 per hour, and $1,500 fixed expenses.", result: "Estimated total is $17,750.", explanation: "This helps you see why larger builds need a broader budget." },
	],
	commonMistakes: [
		"Leaving out content, revisions, or QA time.",
		"Forgetting fixed costs like hosting, plugins, or domains.",
		"Using a rate that is too low for the full scope of the work.",
	],
	faq: [
		{ question: "Does this include hosting?", answer: "It can, if you include hosting inside fixed expenses." },
		{ question: "Can I use it for client quotes?", answer: "Yes. It is a quick way to estimate build cost before you draft the final proposal." },
	],
	ctaTitle: "Need the project finances to stay tidy?",
	ctaText: "QuickBooks or Xero can help you track deposits, project costs, and remaining balances after the site is delivered.",
	ctaNote: "Recalculate when the scope or hourly rate changes.",
};
