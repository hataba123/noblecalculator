import { ResultCard } from "@/src/components/shared/result-card";
import { formatCurrency } from "@/src/lib/format";

import type { FreelanceHourlyRateResult as FreelanceHourlyRateResultValue } from "./core";

type FreelanceHourlyRateResultProps = {
  result: FreelanceHourlyRateResultValue;
};

export function FreelanceHourlyRateResult({ result }: FreelanceHourlyRateResultProps) {
  return (
    <div className="grid gap-4">
      <ResultCard label="Hourly rate" value={formatCurrency(result.hourlyRate)} hint="Your income goal spread across billable hours." />
    </div>
  );
}
