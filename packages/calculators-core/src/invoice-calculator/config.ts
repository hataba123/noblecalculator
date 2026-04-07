import type { InvoiceCalculatorInput } from "./schema";

export const invoiceCalculatorConfig = {
  title: "Invoice Calculator",
  defaultValue: {
    amount: 2500,
    taxRate: 10,
  } satisfies InvoiceCalculatorInput,
};
