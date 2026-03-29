import type { CalculatorDefinition } from "./types";

export const calculatorRegistry: CalculatorDefinition[] = [
	{
		slug: "profit-margin",
		title: "Profit Margin Calculator",
		description: "Calculate profit, margin, and markup from revenue and cost.",
	},
	{
		slug: "markup",
		title: "Markup Calculator",
		description: "Work out markup percentage and selling price from cost.",
	},
	{
		slug: "freelance-hourly-rate",
		title: "Freelance Hourly Rate Calculator",
		description: "Turn income goals, working hours, and expenses into a target hourly rate.",
	},
	{
		slug: "vat-calculator",
		title: "VAT Calculator",
		description: "Add or remove VAT and see the net, tax, and gross values.",
	},
	{
		slug: "invoice-calculator",
		title: "Invoice Calculator",
		description: "Estimate invoice totals from hours, rates, and fixed fees.",
	},
	{
		slug: "international-transfer-fee",
		title: "International Transfer Fee Calculator",
		description: "Estimate the real cost of cross-border transfers and fees.",
	},
];

export function getCalculatorDefinition(slug: string) {
	return calculatorRegistry.find((calculator) => calculator.slug === slug);
}
