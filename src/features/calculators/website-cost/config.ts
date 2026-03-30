import type { WebsiteCostInput } from "./schema";

export const websiteCostConfig = {
  title: "Website Cost Calculator",
  defaultValue: {
    designHours: 18,
    developmentHours: 42,
    contentHours: 12,
    hourlyRate: 95,
    fixedExpenses: 800,
  } satisfies WebsiteCostInput,
};