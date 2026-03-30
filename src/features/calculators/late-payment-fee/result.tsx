import { ResultCard } from "@/src/components/shared/result-card";
import { formatCurrency, formatPercent } from "@/src/lib/format";

import type { LatePaymentFeeResult as LatePaymentFeeResultValue } from "./schema";

type LatePaymentFeeResultProps = {
  result: LatePaymentFeeResultValue;
};

export function LatePaymentFeeResult({ result }: LatePaymentFeeResultProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <ResultCard label="Late fee" value={formatCurrency(result.feeAmount)} hint="Extra fee charged for the delay." />
      <ResultCard label="Total due" value={formatCurrency(result.totalDue)} hint="Invoice amount plus the fee." />
      <ResultCard label="Effective rate" value={formatPercent(result.effectiveFeeRate)} hint="Actual fee as a share of the invoice." />
    </div>
  );
}