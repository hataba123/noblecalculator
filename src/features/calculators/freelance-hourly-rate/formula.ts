import type { FreelanceHourlyRateInput, FreelanceHourlyRateResult } from "./schema";

export function calculateFreelanceHourlyRate({ targetIncome, billableHours }: FreelanceHourlyRateInput): FreelanceHourlyRateResult {
  const hourlyRate = billableHours > 0 ? targetIncome / billableHours : 0;

  return { hourlyRate };
}
