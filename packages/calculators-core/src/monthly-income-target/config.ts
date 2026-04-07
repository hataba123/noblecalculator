import type { MonthlyIncomeTargetInput } from "./schema";

export const monthlyIncomeTargetConfig = {
  title: "Monthly Income Target Calculator",
  defaultValue: {
    desiredTakeHomeMonthly: 6000,
    monthlyBusinessExpenses: 1500,
    taxRate: 25,
  } satisfies MonthlyIncomeTargetInput,
};
