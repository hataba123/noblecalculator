import { ResultCard } from "@/src/components/shared/result-card";
import { formatCurrency } from "@/src/lib/format";

import type { FreelanceHourlyRateResult as FreelanceHourlyRateResultValue } from "./schema";

type FreelanceHourlyRateResultProps = {
  result: FreelanceHourlyRateResultValue;
};

export function FreelanceHourlyRateResult({ result }: FreelanceHourlyRateResultProps) {
  return (
    <div className="grid gap-4">
      <ResultCard label="Hourly rate" value={formatCurrency(result.hourlyRate)} hint="Target income divided by billable hours." />
    </div>
  );
}
