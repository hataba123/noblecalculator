import { ResultCard } from "@/src/components/shared/result-card";
import { formatCurrency } from "@/src/lib/format";

import type { VatCalculatorResult as VatCalculatorResultValue } from "./core";

type VatCalculatorResultProps = {
  result: VatCalculatorResultValue;
};

export function VatCalculatorResult({ result }: VatCalculatorResultProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <ResultCard label="Net amount" value={formatCurrency(result.amount)} hint="Amount before VAT." />
      <ResultCard label="VAT amount" value={formatCurrency(result.vatAmount)} hint="Tax added on top." />
      <ResultCard label="Gross amount" value={formatCurrency(result.grossAmount)} hint="Total including VAT." />
    </div>
  );
}
