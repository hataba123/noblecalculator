import type { SelfEmployedTaxEstimatorInput, SelfEmployedTaxEstimatorResult } from "./schema";

export function calculateSelfEmployedTaxEstimator({
  annualRevenue,
  businessExpenses,
  incomeTaxRate,
  selfEmploymentTaxRate,
}: SelfEmployedTaxEstimatorInput): SelfEmployedTaxEstimatorResult {
  const taxableProfit = Math.max(annualRevenue - businessExpenses, 0);
  const incomeTax = taxableProfit * (incomeTaxRate / 100);
  const selfEmploymentTax = taxableProfit * (selfEmploymentTaxRate / 100);
  const totalTax = incomeTax + selfEmploymentTax;
  const afterTaxIncome = Math.max(taxableProfit - totalTax, 0);
  const effectiveTaxRate = annualRevenue > 0 ? (totalTax / annualRevenue) * 100 : 0;
  const quarterlyTaxEstimate = totalTax / 4;

  return {
    taxableProfit,
    incomeTax,
    selfEmploymentTax,
    totalTax,
    afterTaxIncome,
    effectiveTaxRate,
    quarterlyTaxEstimate,
  };
}
