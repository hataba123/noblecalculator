import type { UtilizationRateInput } from "./schema";

export const utilizationRateConfig = {
  title: "Utilization Rate Calculator",
  defaultValue: {
    billableHours: 120,
    totalAvailableHours: 160,
  } satisfies UtilizationRateInput,
};