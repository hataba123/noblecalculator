import type { CalculatorSeoContent } from "../shared/types";

export const latePaymentFeeSeoContent: CalculatorSeoContent = {
	metaDescription: "Estimate the fee added when an invoice is paid late.",
	keywords: ["late payment fee calculator", "invoice late fee", "payment penalty", "accounts receivable"],
	intro: "Use this calculator when you need a quick late-fee estimate for an overdue invoice and want the total due to stay clear.",
	formulaTitle: "Late fee formula",
	formula: "Late fee = Invoice amount × Monthly fee rate × (Days late ÷ 30). Total due = Invoice amount + Late fee.",
	formulaNote: "The fee is prorated by days late, so a partial month only charges part of the monthly rate.",
	whenToUse: "Use it when you send payment reminders, calculate overdue charges, or update a client before the balance keeps growing.",
	examples: [
		{ title: "Small overdue invoice", scenario: "Invoice is $8,500, fee rate is 1.5% per month, and payment is 18 days late.", result: "Late fee is about $76.50.", explanation: "The fee scales with time, so shorter delays create smaller charges." },
		{ title: "Large unpaid bill", scenario: "Invoice is $20,000 at 2% per month and 30 days late.", result: "Late fee is $400.", explanation: "A full month at a higher rate can add up quickly." },
		{ title: "Short delay", scenario: "Invoice is $3,000 at 1% per month and 6 days late.", result: "Late fee is about $6.", explanation: "This helps keep the penalty fair when a payment is only slightly overdue." },
	],
	commonMistakes: [
		"Charging a full monthly fee when the invoice is only late for a few days.",
		"Forgetting to add the late fee to the original invoice amount.",
		"Using a fee policy that does not match your contract terms.",
	],
	faq: [
		{ question: "Is this a legal fee calculator?", answer: "No. It only estimates the amount based on your chosen rate and timing. Always follow your local rules and contract terms." },
		{ question: "Can I change the fee policy later?", answer: "Yes. If your late-fee terms change, update the rate and rerun the calculation." },
	],
	ctaTitle: "Need cleaner collections?",
	ctaText: "QuickBooks or Xero can help if you want overdue invoices, reminders, and payments in one place.",
	ctaNote: "Use the calculator again whenever the invoice amount or delay changes.",
};
