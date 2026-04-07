import type { CalculatorSeoContent } from "../shared/types";

export const grossToNetSeoContent: CalculatorSeoContent = {
	metaDescription: "Convert gross pay into net pay and see how much tax is withheld.",
	keywords: ["gross to net calculator", "net pay calculator", "tax withheld", "take-home pay"],
	intro: "Use this when you already know the gross amount and want to see the amount that actually lands in your pocket after tax.",
	formulaTitle: "Gross to net formula",
	formula: "Tax amount = Gross amount × Tax rate. Net amount = Gross amount - Tax amount.",
	formulaNote: "It is a quick way to estimate take-home pay without opening a spreadsheet.",
	whenToUse: "Use it for salary planning, freelance quotes, or any situation where a tax rate reduces the final amount you keep.",
	examples: [
		{ title: "Monthly pay", scenario: "Gross pay is $5,000 and tax is 25%.", result: "Net pay is $3,750 and tax withheld is $1,250.", explanation: "The take-home amount is the gross value minus the tax slice." },
		{ title: "Side job income", scenario: "Gross income is $2,400 with a 15% tax rate.", result: "Net is $2,040.", explanation: "A lower tax rate keeps more of the gross amount available for spending or saving." },
		{ title: "High-rate contract", scenario: "Gross amount is $8,000 with a 35% tax rate.", result: "Net pay is $5,200.", explanation: "This is useful when a contract looks big on paper but leaves less after tax." },
	],
	commonMistakes: [
		"Using net pay as the starting point instead of gross pay.",
		"Entering a tax rate above 100% by mistake.",
		"Assuming the calculator includes deductions that are not part of the chosen tax rate.",
	],
	faq: [
		{ question: "Is this the same as take-home pay?", answer: "Yes. Net pay is the amount left after the tax is removed from the gross amount." },
		{ question: "Does it include employer costs?", answer: "No. It only shows the reduction from the chosen tax rate." },
	],
	ctaTitle: "Keep payroll and invoices tidy",
	ctaText: "QuickBooks or Xero can help if you want salary, tax, and expense tracking in one workflow.",
	ctaNote: "Use this calculator again whenever your tax rate or gross offer changes.",
};
