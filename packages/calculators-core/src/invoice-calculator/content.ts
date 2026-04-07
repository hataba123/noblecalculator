import type { CalculatorSeoContent } from "../shared/types";

export const invoiceCalculatorSeoContent: CalculatorSeoContent = {
	metaDescription: "Estimate the final invoice amount after adding tax to the base amount.",
	keywords: ["invoice calculator", "invoice total", "tax invoice calculator", "freelance invoice"],
	intro: "Use this when you want a clean invoice total before you send it to a client or customer.",
	formulaTitle: "Invoice formula",
	formula: "Tax amount = Base amount × Tax rate. Invoice total = Base amount + Tax amount.",
	formulaNote: "It is a simple way to turn a pre-tax fee into the full amount the client should pay.",
	whenToUse: "Use it when drafting invoices, quoting new work, or checking whether tax is being added correctly.",
	examples: [
		{ title: "Freelance project", scenario: "Base amount is $1,200 and tax is 20%.", result: "Invoice total is $1,440.", explanation: "This gives you the full amount to place on the invoice." },
		{ title: "Retainer fee", scenario: "Base amount is $2,500 and tax is 10%.", result: "Invoice total is $2,750.", explanation: "Good for monthly retainers where tax is added on top." },
		{ title: "Small job", scenario: "Base amount is $480 and tax is 15%.", result: "Invoice total is $552.", explanation: "Useful for quick estimates before sending the invoice draft." },
	],
	commonMistakes: [
		"Adding tax twice after the invoice is already grossed up.",
		"Forgetting to change the tax rate for a different client region.",
		"Using the invoice total as if it were the full take-home amount.",
	],
	faq: [
		{ question: "Is this the same as a receipt total?", answer: "Yes, in practice it is the amount due after tax is added to the base amount." },
		{ question: "Can I use this for deposits?", answer: "Yes. Just enter the deposit base amount and the tax rate you need to apply." },
	],
	ctaTitle: "Keep invoices and payments tidy",
	ctaText: "QuickBooks or Xero can help if you want invoicing, expenses, and payment history in one place.",
	ctaNote: "Recalculate the total whenever the base amount or tax rate changes.",
};
