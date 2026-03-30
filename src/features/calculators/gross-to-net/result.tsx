import { ResultCard } from "@/src/components/shared/result-card";
import { formatCurrency, formatPercent } from "@/src/lib/format";

import type { GrossToNetResult as GrossToNetResultValue } from "./schema";

type GrossToNetResultProps = {
  result: GrossToNetResultValue;
};

export function GrossToNetResult({ result }: GrossToNetResultProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <ResultCard label="Net amount" value={formatCurrency(result.netAmount)} hint="Amount left after tax." />
      <ResultCard label="Tax withheld" value={formatCurrency(result.taxAmount)} hint="Amount taken out for tax." />
      <ResultCard label="Retention rate" value={formatPercent(result.retentionRate)} hint="Share of the gross amount you keep." />
    </div>
  );
}