import type { NetToGrossInput, NetToGrossResult } from "./schema";

export function calculateNetToGross({ netAmount, taxRate }: NetToGrossInput): NetToGrossResult {
  const grossAmount = taxRate < 100 ? netAmount / (1 - taxRate / 100) : 0;
  const taxAmount = grossAmount - netAmount;
  const grossUpFactor = netAmount > 0 ? grossAmount / netAmount : 0;

  return { netAmount, taxAmount, grossAmount, grossUpFactor };
}