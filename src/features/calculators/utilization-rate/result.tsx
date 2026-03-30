import { ResultCard } from "@/src/components/shared/result-card";
import { formatPercent } from "@/src/lib/format";

import type { UtilizationRateResult as UtilizationRateResultValue } from "./schema";

type UtilizationRateResultProps = {
  result: UtilizationRateResultValue;
};

export function UtilizationRateResult({ result }: UtilizationRateResultProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <ResultCard label="Utilization rate" value={formatPercent(result.utilizationRate)} hint="Billable hours as a share of available hours." />
      <ResultCard label="Billable hours" value={`${result.billableHours.toFixed(2)}h`} hint="Time you can charge for." />
      <ResultCard label="Non-billable hours" value={`${result.nonBillableHours.toFixed(2)}h`} hint="Hours left for admin, sales, and downtime." />
    </div>
  );
}