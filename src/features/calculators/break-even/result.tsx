import { ResultCard } from "@/src/components/shared/result-card";
import { formatCurrency } from "@/src/lib/format";

import { formatDecimal } from "../support-tools/shared";
import type { BreakEvenResult as BreakEvenResultValue } from "./schema";

type BreakEvenResultProps = {
  result: BreakEvenResultValue;
};

export function BreakEvenResult({ result }: BreakEvenResultProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <ResultCard label="Contribution margin" value={formatCurrency(result.contributionMargin)} hint="Selling price minus variable cost." />
      <ResultCard label="Break-even units" value={formatDecimal(result.breakEvenUnits)} hint="Units required to cover fixed costs." />
      <ResultCard label="Break-even revenue" value={formatCurrency(result.breakEvenRevenue)} hint="Revenue needed at break-even." />
    </div>
  );
}