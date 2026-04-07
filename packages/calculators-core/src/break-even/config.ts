import type { BreakEvenInput } from "./schema";

export const breakEvenConfig = {
  title: "Break-even Calculator",
  defaultValue: {
    fixedCosts: 15000,
    variableCostPerUnit: 28,
    sellingPrice: 65,
  } satisfies BreakEvenInput,
};
