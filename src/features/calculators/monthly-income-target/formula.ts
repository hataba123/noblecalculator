import type { MonthlyIncomeTargetInput, MonthlyIncomeTargetResult } from "./schema";

export function calculateMonthlyIncomeTarget({ desiredTakeHomeMonthly, monthlyBusinessExpenses, taxRate }: MonthlyIncomeTargetInput): MonthlyIncomeTargetResult {
  const preTaxMonthlyNeed = desiredTakeHomeMonthly + monthlyBusinessExpenses;
  const grossMonthlyTarget = taxRate < 100 ? preTaxMonthlyNeed / (1 - taxRate / 100) : 0;
  const grossAnnualTarget = grossMonthlyTarget * 12;
  const monthlyTaxReserve = grossMonthlyTarget * (taxRate / 100);

  return {
    desiredTakeHomeMonthly,
    monthlyBusinessExpenses,
    preTaxMonthlyNeed,
    grossMonthlyTarget,
    grossAnnualTarget,
    monthlyTaxReserve,
  };
}