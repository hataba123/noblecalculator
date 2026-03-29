import { ResultCard } from "@/src/components/shared/result-card";
import { formatCurrency } from "@/src/lib/format";

import type { InvoiceCalculatorResult as InvoiceCalculatorResultValue } from "./schema";

type InvoiceCalculatorResultProps = {
  result: InvoiceCalculatorResultValue;
};

export function InvoiceCalculatorResult({ result }: InvoiceCalculatorResultProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <ResultCard label="Amount" value={formatCurrency(result.amount)} hint="Original invoice amount." />
      <ResultCard label="Tax amount" value={formatCurrency(result.taxAmount)} hint="Tax added to the invoice." />
      <ResultCard label="Total" value={formatCurrency(result.total)} hint="Final invoice total." />
    </div>
  );
}
