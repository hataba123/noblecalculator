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
	{
		slug: "break-even",
		title: "Break-even Calculator",
		description: "See how many sales you need before you cover your fixed costs.",
	},
	{
		slug: "gross-to-net",
		title: "Gross to Net Calculator",
		description: "See how much of a gross amount remains after tax.",
	},
	{
		slug: "net-to-gross",
		title: "Net to Gross Calculator",
		description: "Work backward from take-home pay to the gross amount.",
	},
	{
		slug: "late-payment-fee",
		title: "Late Payment Fee Calculator",
		description: "Estimate the fee added when an invoice is paid late.",
	},
	{
		slug: "payment-processing-fee",
		title: "Payment Processing Fee Calculator",
		description: "See what payment processors keep from each payment.",
	},
	{
		slug: "roi",
		title: "ROI Calculator",
		description: "Measure the return earned from an investment.",
	},
	{
		slug: "roas",
		title: "ROAS Calculator",
		description: "Check how much revenue your ad spend brings back.",
	},
	{
		slug: "website-cost",
		title: "Website Cost Calculator",
		description: "Estimate the cost of designing and building a website.",
	},
	{
		slug: "self-employed-tax-estimator",
		title: "Self-employed Tax Estimator",
		description: "Estimate how much tax to set aside from self-employed income.",
	},
	{
		slug: "utilization-rate",
		title: "Utilization Rate Calculator",
		description: "Measure how much of your available time is billable.",
	},
	{
		slug: "monthly-income-target",
		title: "Monthly Income Target Calculator",
		description: "Find the monthly revenue you need to cover income, taxes, and expenses.",
	},
	{
		slug: "cac",
		title: "CAC Calculator",
		description: "See how much it costs to acquire one customer.",
	},
	{
		slug: "cpm-cpc",
		title: "CPM / CPC Calculator",
		description: "Compare cost per thousand impressions and cost per click.",
	},
	{
		slug: "day-rate-to-hourly-rate",
		title: "Day Rate to Hourly Rate Calculator",
		description: "Convert a day rate into an hourly rate and weekly equivalent.",
	},
];

export function getCalculatorDefinition(slug: string) {
	return calculatorRegistry.find((calculator) => calculator.slug === slug);
}
