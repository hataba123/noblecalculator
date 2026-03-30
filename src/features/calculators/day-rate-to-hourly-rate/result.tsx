import { ResultCard } from "@/src/components/shared/result-card";
import { formatCurrency } from "@/src/lib/format";
import type { DayRateToHourlyRateResult as DayRateToHourlyRateResultValue } from "./schema";

type DayRateToHourlyRateResultProps = {
  result: DayRateToHourlyRateResultValue;
};

export function DayRateToHourlyRateResult({ result }: DayRateToHourlyRateResultProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <ResultCard label="Hourly rate" value={formatCurrency(result.hourlyRate)} hint="Day rate divided by billable hours." />
      <ResultCard label="Weekly equivalent" value={formatCurrency(result.weeklyEquivalent)} hint="Assumes a five-day week." />
      <ResultCard label="Monthly equivalent" value={formatCurrency(result.monthlyEquivalent)} hint="Assumes four working weeks." />
    </div>
  );
}