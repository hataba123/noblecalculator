import { ResultCard } from "@/src/components/shared/result-card";
import { formatCurrency, formatPercent } from "@/src/lib/format";

import type { ProfitMarginResult as ProfitMarginResultValue } from "./schema";

type ProfitMarginResultProps = {
  result: ProfitMarginResultValue;
};

export function ProfitMarginResult({ result }: ProfitMarginResultProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <ResultCard label="Profit" value={formatCurrency(result.profit)} hint="Revenue minus cost." />
      <ResultCard label="Margin" value={formatPercent(result.margin)} hint="Profit as a share of revenue." />
      <ResultCard label="Markup" value={formatPercent(result.markup)} hint="Profit as a share of cost." />
    </div>
  );
}
