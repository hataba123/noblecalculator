export type DayRateToHourlyRateInput = {
  dayRate: number;
  billableHoursPerDay: number;
};

export type DayRateToHourlyRateResult = {
  dayRate: number;
  billableHoursPerDay: number;
  hourlyRate: number;
  weeklyEquivalent: number;
  monthlyEquivalent: number;
};