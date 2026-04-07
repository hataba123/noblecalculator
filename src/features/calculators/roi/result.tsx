import { ResultCard } from "@/src/components/shared/result-card";
import { formatCurrency, formatMultiple, formatPercent } from "@/src/lib/format";

import type { RoiResult as RoiResultValue } from "./core";

type RoiResultProps = {
  result: RoiResultValue;
};

export function RoiResult({ result }: RoiResultProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <ResultCard label="Gain" value={formatCurrency(result.gain)} hint="Return minus the original investment." />
      <ResultCard label="ROI" value={formatPercent(result.roi)} hint="Return as a percentage of the investment." />
      <ResultCard label="Return multiple" value={formatMultiple(result.returnMultiple)} hint="How many times the investment came back." />
    </div>
  );
}
