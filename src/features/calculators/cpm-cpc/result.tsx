import { ResultCard } from "@/src/components/shared/result-card";
import { formatCurrency, formatPercent } from "@/src/lib/format";

import type { CpmCpcResult as CpmCpcResultValue } from "./core";

type CpmCpcResultProps = {
  result: CpmCpcResultValue;
};

export function CpmCpcResult({ result }: CpmCpcResultProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <ResultCard label="CPM" value={formatCurrency(result.cpm)} hint="Cost per 1,000 impressions." />
      <ResultCard label="CPC" value={formatCurrency(result.cpc)} hint="Cost per click." />
      <ResultCard label="CTR" value={formatPercent(result.ctr)} hint="Clicks as a share of impressions." />
    </div>
  );
}
