import type { GrossToNetInput, GrossToNetResult } from "./schema";

export function calculateGrossToNet({ grossAmount, taxRate }: GrossToNetInput): GrossToNetResult {
  const taxAmount = grossAmount * (taxRate / 100);
  const netAmount = grossAmount - taxAmount;
  const retentionRate = grossAmount > 0 ? (netAmount / grossAmount) * 100 : 0;

  return { grossAmount, taxAmount, netAmount, retentionRate };
}
