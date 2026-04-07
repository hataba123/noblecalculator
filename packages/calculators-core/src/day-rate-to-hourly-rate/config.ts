import type { DayRateToHourlyRateInput } from "./schema";

export const dayRateToHourlyRateConfig = {
  title: "Day Rate to Hourly Rate Calculator",
  defaultValue: {
    dayRate: 640,
    billableHoursPerDay: 8,
  } satisfies DayRateToHourlyRateInput,
};
