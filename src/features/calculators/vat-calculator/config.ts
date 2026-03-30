import type { VatCalculatorInput } from "./schema";

export const vatCalculatorConfig = {
  title: "VAT Calculator",
  defaultValue: {
    amount: 1000,
    vatRate: 20,
  } satisfies VatCalculatorInput,
};
