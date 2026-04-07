import type { SelfEmployedTaxEstimatorInput } from "./schema";

export const selfEmployedTaxEstimatorConfig = {
  title: "Self-employed Tax Estimator",
  defaultValue: {
    annualRevenue: 120000,
    businessExpenses: 32000,
    incomeTaxRate: 22,
    selfEmploymentTaxRate: 15.3,
  } satisfies SelfEmployedTaxEstimatorInput,
};
