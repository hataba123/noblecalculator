import type { CalculatorSeoContent } from "../shared/types";

export const internationalTransferFeeSeoContent: CalculatorSeoContent = {
	metaDescription: "Estimate the real cost of sending money abroad with an international transfer fee calculator.",
	keywords: ["international transfer fee calculator", "wire transfer fee", "money transfer cost", "Wise fee"],
	intro: "Use this calculator when you want to see the true cost of sending money internationally before you press send.",
	formulaTitle: "Transfer fee formula",
	formula: "Fee amount = Transfer amount × Fee rate. Total debit = Transfer amount + Fee amount.",
	formulaNote: "It helps you compare the stated transfer amount with the amount that actually leaves your account.",
	whenToUse: "Use it when sending invoices overseas, paying a contractor abroad, or comparing transfer services before choosing one.",
	examples: [
		{ title: "Standard transfer", scenario: "You send $2,000 with a 1.8% fee.", result: "Fee is $36 and total debit is $2,036.", explanation: "This shows the extra cost on top of the money you intended to send." },
		{ title: "Large payment", scenario: "You send $10,000 with a 1.2% fee.", result: "Fee is $120 and total debit is $10,120.", explanation: "Useful when you need to budget for cross-border supplier payments." },
		{ title: "Small remittance", scenario: "You send $500 with a 2.5% fee.", result: "Fee is $12.50 and total debit is $512.50.", explanation: "Fees feel much bigger on smaller transfers, so the rate matters more." },
	],
	commonMistakes: [
		"Looking only at the transfer amount and forgetting the fee.",
		"Comparing services without checking the final total debit.",
		"Missing bank or intermediary charges that are separate from the displayed fee.",
	],
	faq: [
		{ question: "Is this the same as an exchange-rate calculator?", answer: "No. This calculator only estimates the transfer fee. Exchange rates can add another layer of cost." },
		{ question: "Can I use this to compare Wise with a bank?", answer: "Yes. It is a quick way to see the fee side before you compare the rest of the transfer terms." },
	],
	ctaTitle: "Want a cheaper transfer workflow?",
	ctaText: "If you move money abroad often, Wise is worth comparing against your bank before you send the next payment.",
	ctaNote: "Recheck the fee any time the transfer amount or provider changes.",
};