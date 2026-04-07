import type { GrossToNetInput } from "./schema";

export const grossToNetConfig = {
  title: "Gross to Net Calculator",
  defaultValue: {
    grossAmount: 5000,
    taxRate: 25,
  } satisfies GrossToNetInput,
};
