import type { BreakEvenInput, BreakEvenResult } from "./schema";

export function calculateBreakEven({ fixedCosts, variableCostPerUnit, sellingPrice }: BreakEvenInput): BreakEvenResult {
  const contributionMargin = sellingPrice - variableCostPerUnit;
  const breakEvenUnits = contributionMargin > 0 ? fixedCosts / contributionMargin : 0;
  const breakEvenRevenue = breakEvenUnits * sellingPrice;

  return { contributionMargin, breakEvenUnits, breakEvenRevenue };
}