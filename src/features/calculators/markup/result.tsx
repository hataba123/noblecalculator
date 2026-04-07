import { ResultCard } from "@/src/components/shared/result-card";
import { formatCurrency, formatPercent } from "@/src/lib/format";

import type { MarkupResult as MarkupResultValue } from "./core";

type MarkupResultProps = {
  result: MarkupResultValue;
};

export function MarkupResult({ result }: MarkupResultProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <ResultCard label="Markup amount" value={formatCurrency(result.markupAmount)} hint="Extra amount added to cost." />
      <ResultCard label="Selling price" value={formatCurrency(result.sellingPrice)} hint="What you can charge before tax." />
      <ResultCard label="Margin" value={formatPercent(result.margin)} hint="Profit share of the final price." />
    </div>
  );
}
