import { ResultCard } from "@/src/components/shared/result-card";
import { formatCurrency, formatPercent } from "@/src/lib/format";

import type { SelfEmployedTaxEstimatorResult as SelfEmployedTaxEstimatorResultValue } from "./schema";

type SelfEmployedTaxEstimatorResultProps = {
  result: SelfEmployedTaxEstimatorResultValue;
};

export function SelfEmployedTaxEstimatorResult({ result }: SelfEmployedTaxEstimatorResultProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
      <ResultCard label="Taxable profit" value={formatCurrency(result.taxableProfit)} hint="Revenue after business expenses." />
      <ResultCard label="Total tax" value={formatCurrency(result.totalTax)} hint="Income tax plus self-employment tax." />
      <ResultCard label="After-tax income" value={formatCurrency(result.afterTaxIncome)} hint="Estimated amount left after tax." />
      <ResultCard label="Quarterly estimate" value={formatCurrency(result.quarterlyTaxEstimate)} hint="Set aside this amount each quarter." />
      <ResultCard label="Effective tax rate" value={formatPercent(result.effectiveTaxRate)} hint="Tax as a share of annual revenue." />
    </div>
  );
}