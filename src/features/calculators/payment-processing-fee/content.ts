import type { CalculatorSeoContent } from "../shared/types";

export const paymentProcessingFeeSeoContent: CalculatorSeoContent = {
	metaDescription: "See what card processors or payment platforms keep from each payment.",
	keywords: ["payment processing fee calculator", "card fee calculator", "merchant fee", "processor fee"],
	intro: "Use this calculator when you want to see the real amount left after a processor takes its percentage fee plus any fixed charge.",
	formulaTitle: "Processing fee formula",
	formula: "Fee = Amount × Percentage rate + Fixed fee. Net payout = Amount - Fee.",
	formulaNote: "This is useful for cards, payment links, and platforms that charge both a percent and a flat amount.",
	whenToUse: "Use it before you send an invoice or take a payment so you can price around the fee instead of guessing later.",
	examples: [
		{ title: "Card payment", scenario: "A $2,500 payment has a 2.9% fee and a $0.30 flat charge.", result: "Fee is $72.80 and net payout is $2,427.20.", explanation: "The percentage fee does most of the work, but the fixed fee still matters on smaller payments." },
		{ title: "Smaller online sale", scenario: "A $90 payment has a 3.2% fee and a $0.30 flat charge.", result: "Fee is about $3.18.", explanation: "Flat fees are more noticeable when the payment itself is small." },
		{ title: "Higher ticket order", scenario: "A $12,000 payment has a 2.5% fee and a $0.30 flat charge.", result: "Fee is about $300.30.", explanation: "At larger amounts, the percentage rate becomes the main cost driver." },
	],
	commonMistakes: [
		"Ignoring the fixed fee when estimating margins.",
		"Treating net payout as the same as profit.",
		"Using the wrong rate for a different payment method or region.",
	],
	faq: [
		{ question: "Does this include refunds or chargebacks?", answer: "No. It only estimates the normal processing fee for a payment." },
		{ question: "Why is my payout lower than the invoice amount?", answer: "Because the processor removes the fee before the money reaches your account." },
	],
	ctaTitle: "Want cleaner invoice totals?",
	ctaText: "If you invoice often, QuickBooks or Xero can help you track payment fees, revenue, and outstanding balances together.",
	ctaNote: "Recalculate whenever the payment size or processor rate changes.",
};