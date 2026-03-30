import { ResultCard } from "@/src/components/shared/result-card";
import { formatCurrency, formatMultiple } from "@/src/lib/format";

import type { RoasResult as RoasResultValue } from "./schema";

type RoasResultProps = {
  result: RoasResultValue;
};

export function RoasResult({ result }: RoasResultProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <ResultCard label="Revenue" value={formatCurrency(result.revenue)} hint="Sales attributed to the ad campaign." />
      <ResultCard label="ROAS" value={formatMultiple(result.roas)} hint="Revenue generated per dollar spent." />
      <ResultCard label="Profit" value={formatCurrency(result.profit)} hint="Revenue minus ad spend." />
    </div>
  );
}