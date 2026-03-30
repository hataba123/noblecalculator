import type { CalculatorDefinition } from "./types";

export const calculatorRegistry: CalculatorDefinition[] = [
	{
		slug: "profit-margin",
		title: "Profit Margin Calculator",
		description: "See how much profit you keep after costs.",
	},
	{
		slug: "markup",
		title: "Markup Calculator",
		description: "Find the right selling price from your cost and target markup.",
	},
	{
		slug: "freelance-hourly-rate",
		title: "Freelance Hourly Rate Calculator",
		description: "Set an hourly rate that fits your income goal.",
	},
	{
		slug: "vat-calculator",
		title: "VAT Calculator",
		description: "Add VAT to a price or split it back out.",
	},
	{
		slug: "invoice-calculator",
		title: "Invoice Calculator",
		description: "Estimate the final invoice amount before you send it.",
	},
	{
		slug: "international-transfer-fee",
		title: "International Transfer Fee Calculator",
		description: "Check the real cost of sending money abroad.",
	},
];

export function getCalculatorDefinition(slug: string) {
	return calculatorRegistry.find((calculator) => calculator.slug === slug);
}
