import type { CalculatorSeoContent } from "../shared/types";

export const selfEmployedTaxEstimatorSeoContent: CalculatorSeoContent = {
	metaDescription: "Estimate how much tax to set aside from self-employed income.",
	keywords: ["self employed tax estimator", "freelancer tax calculator", "quarterly tax estimate", "business tax reserve"],
	intro: "Use this calculator when you want a practical estimate of the tax you should keep aside from self-employed income.",
	formulaTitle: "Self-employed tax formula",
	formula: "Taxable profit = Revenue - Business expenses. Total tax = Income tax + Self-employment tax. After-tax income = Taxable profit - Total tax.",
	formulaNote: "The quarterly estimate is a simple planning number, not a replacement for professional tax advice.",
	whenToUse: "Use it when you want to check whether a month of freelance work is enough to cover both tax and personal income.",
	examples: [
		{ title: "Healthy year", scenario: "Annual revenue is $120,000, expenses are $32,000, income tax is 22%, and self-employment tax is 15.3%.", result: "Total tax is $32,824 and quarterly estimate is $8,206.", explanation: "This shows how much cash to keep aside so tax does not surprise you later." },
		{ title: "Lean operation", scenario: "Annual revenue is $75,000, expenses are $18,000, income tax is 18%, and self-employment tax is 15.3%.", result: "Total tax is about $17,964.", explanation: "A cleaner expense base can make tax planning easier to read." },
		{ title: "Higher-income month", scenario: "Annual revenue is $180,000, expenses are $44,000, income tax is 24%, and self-employment tax is 15.3%.", result: "Total tax rises sharply and should be reserved throughout the year.", explanation: "The more you earn, the more important it is to reserve tax regularly instead of waiting until the deadline." },
	],
	commonMistakes: [
		"Treating all revenue as take-home pay.",
		"Forgetting to subtract business expenses before estimating tax.",
		"Ignoring the quarterly reserve and only planning at year-end.",
	],
	faq: [
		{ question: "Is this a replacement for an accountant?", answer: "No. It is a planning tool that helps you estimate and reserve money more confidently." },
		{ question: "Why is the effective tax rate lower than the sum of the rates?", answer: "Because the tax is measured against profit, and the effective rate is compared to total revenue." },
	],
	ctaTitle: "Want bookkeeping to feel lighter?",
	ctaText: "QuickBooks or Xero can help you track income, expenses, and reserve amounts so tax planning stays organized.",
	ctaNote: "Update your estimate whenever revenue or deductible costs change.",
};