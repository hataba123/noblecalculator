export type BreakEvenInput = {
  fixedCosts: number;
  variableCostPerUnit: number;
  sellingPrice: number;
};

export type BreakEvenResult = {
  contributionMargin: number;
  breakEvenUnits: number;
  breakEvenRevenue: number;
};