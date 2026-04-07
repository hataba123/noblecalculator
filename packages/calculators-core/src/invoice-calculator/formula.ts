import type { InvoiceCalculatorInput, InvoiceCalculatorResult } from "./schema";

export function calculateInvoice({ amount, taxRate }: InvoiceCalculatorInput): InvoiceCalculatorResult {
  const taxAmount = amount * (taxRate / 100);
  const total = amount + taxAmount;

  return { amount, taxAmount, total };
}
