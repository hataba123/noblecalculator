import { ResultCard } from "@/src/components/shared/result-card";
import { formatCurrency } from "@/src/lib/format";

import type { MonthlyIncomeTargetResult as MonthlyIncomeTargetResultValue } from "./schema";

type MonthlyIncomeTargetResultProps = {
  result: MonthlyIncomeTargetResultValue;
};

export function MonthlyIncomeTargetResult({ result }: MonthlyIncomeTargetResultProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <ResultCard label="Gross monthly target" value={formatCurrency(result.grossMonthlyTarget)} hint="Monthly revenue needed before tax." />
      <ResultCard label="Gross annual target" value={formatCurrency(result.grossAnnualTarget)} hint="Yearly revenue needed to hit the same target." />
      <ResultCard label="Monthly tax reserve" value={formatCurrency(result.monthlyTaxReserve)} hint="Amount to set aside for tax each month." />
      <ResultCard label="Pre-tax monthly need" value={formatCurrency(result.preTaxMonthlyNeed)} hint="Take-home income plus expenses." />
    </div>
  );
}