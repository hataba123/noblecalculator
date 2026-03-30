import type { CalculatorSeoContent } from "../shared/types";

export const breakEvenSeoContent: CalculatorSeoContent = {
	metaDescription: "See how many sales you need to cover fixed and variable costs with this break-even calculator.",
	keywords: ["break-even calculator", "fixed costs", "sales target", "pricing calculator"],
	intro: "Use this calculator when you want a fast answer to a practical question: how many units, jobs, or orders do I need before the business starts paying for itself?",
	formulaTitle: "Break-even formula",
	formula: "Break-even units = Fixed costs ÷ (Selling price - Variable cost per unit). Break-even revenue = Break-even units × Selling price.",
	formulaNote: "If your selling price is too close to variable cost, the number of units you need rises quickly.",
	whenToUse: "Use it when you are setting a price, testing a new offer, or checking whether a month of sales can cover rent, payroll, and tools.",
	examples: [
		{ title: "Small service business", scenario: "Fixed costs are $15,000, variable cost is $28, and the price is $65.", result: "Break-even is about 405 sales and roughly $26.4k revenue.", explanation: "The margin per sale is strong enough, but you still need a decent volume to cover fixed costs." },
		{ title: "Product launch", scenario: "Fixed costs are $8,000, variable cost is $12, and the price is $30.", result: "Break-even is 444 units and $13.3k revenue.", explanation: "A lower price means more units, so the launch needs more demand to pay back the setup cost." },
		{ title: "Premium package", scenario: "Fixed costs are $5,000, variable cost is $40, and the price is $120.", result: "Break-even lands at about 63 sales.", explanation: "Higher margin helps a lot when the offer is positioned as a premium service." },
	],
	commonMistakes: [
		"Mixing fixed costs and variable cost per unit in the same field.",
		"Forgetting to subtract variable cost from selling price before dividing.",
		"Rounding too early and getting an unrealistically neat break-even number.",
	],
	faq: [
		{ question: "What if the selling price is below variable cost?", answer: "Then the calculator should show zero break-even units, because every sale loses money instead of covering costs." },
		{ question: "Does break-even include profit?", answer: "No. Break-even only shows the point where costs are covered. Anything after that is profit." },
	],
	ctaTitle: "Need cleaner cash flow tracking?",
	ctaText: "If you want a fuller view of invoices, expenses, and profit, QuickBooks or Xero can keep the numbers in one place.",
	ctaNote: "Revisit break-even anytime your price, supplier cost, or fixed overhead changes.",
};