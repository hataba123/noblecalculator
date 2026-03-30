export type SelfEmployedTaxEstimatorInput = {
  annualRevenue: number;
  businessExpenses: number;
  incomeTaxRate: number;
  selfEmploymentTaxRate: number;
};

export type SelfEmployedTaxEstimatorResult = {
  taxableProfit: number;
  incomeTax: number;
  selfEmploymentTax: number;
  totalTax: number;
  afterTaxIncome: number;
  effectiveTaxRate: number;
  quarterlyTaxEstimate: number;
};