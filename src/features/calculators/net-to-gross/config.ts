import type { NetToGrossInput } from "./schema";

export const netToGrossConfig = {
  title: "Net to Gross Calculator",
  defaultValue: {
    netAmount: 4000,
    taxRate: 25,
  } satisfies NetToGrossInput,
};