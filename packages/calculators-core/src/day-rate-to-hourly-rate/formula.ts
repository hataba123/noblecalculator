import type { DayRateToHourlyRateInput, DayRateToHourlyRateResult } from "./schema";

export function calculateDayRateToHourlyRate({ dayRate, billableHoursPerDay }: DayRateToHourlyRateInput): DayRateToHourlyRateResult {
  const hourlyRate = billableHoursPerDay > 0 ? dayRate / billableHoursPerDay : 0;
  const weeklyEquivalent = dayRate * 5;
  const monthlyEquivalent = dayRate * 20;

  return { dayRate, billableHoursPerDay, hourlyRate, weeklyEquivalent, monthlyEquivalent };
}
