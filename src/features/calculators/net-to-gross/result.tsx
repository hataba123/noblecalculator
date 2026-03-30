import { ResultCard } from "@/src/components/shared/result-card";
import { formatCurrency, formatMultiple } from "@/src/lib/format";

import type { NetToGrossResult as NetToGrossResultValue } from "./schema";

type NetToGrossResultProps = {
  result: NetToGrossResultValue;
};

export function NetToGrossResult({ result }: NetToGrossResultProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <ResultCard label="Gross amount" value={formatCurrency(result.grossAmount)} hint="Pre-tax amount before withholding." />
      <ResultCard label="Tax added" value={formatCurrency(result.taxAmount)} hint="Amount added on top of the net value." />
      <ResultCard label="Gross-up factor" value={formatMultiple(result.grossUpFactor)} hint="How much larger gross is than net." />
    </div>
  );
}