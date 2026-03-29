import type { VatCalculatorInput, VatCalculatorResult } from "./schema";

export function calculateVat({ amount, vatRate }: VatCalculatorInput): VatCalculatorResult {
  const vatAmount = amount * (vatRate / 100);
  const grossAmount = amount + vatAmount;

  return { amount, vatAmount, grossAmount };
}
