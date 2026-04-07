export type MonthlyIncomeTargetInput = {
  desiredTakeHomeMonthly: number;
  monthlyBusinessExpenses: number;
  taxRate: number;
};

export type MonthlyIncomeTargetResult = {
  desiredTakeHomeMonthly: number;
  monthlyBusinessExpenses: number;
  preTaxMonthlyNeed: number;
  grossMonthlyTarget: number;
  grossAnnualTarget: number;
  monthlyTaxReserve: number;
};
