import type { UtilizationRateInput, UtilizationRateResult } from "./schema";

export function calculateUtilizationRate({ billableHours, totalAvailableHours }: UtilizationRateInput): UtilizationRateResult {
  const utilizationRate = totalAvailableHours > 0 ? (billableHours / totalAvailableHours) * 100 : 0;
  const nonBillableHours = Math.max(totalAvailableHours - billableHours, 0);

  return { billableHours, totalAvailableHours, utilizationRate, nonBillableHours };
}
