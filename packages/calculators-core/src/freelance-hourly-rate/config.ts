import type { FreelanceHourlyRateInput } from "./schema";

export const freelanceHourlyRateConfig = {
  title: "Freelance Hourly Rate Calculator",
  defaultValue: {
    targetIncome: 60000,
    billableHours: 120,
  } satisfies FreelanceHourlyRateInput,
};
