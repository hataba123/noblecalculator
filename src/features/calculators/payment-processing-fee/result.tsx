import { ResultCard } from "@/src/components/shared/result-card";
import { formatCurrency, formatPercent } from "@/src/lib/format";

import type { PaymentProcessingFeeResult as PaymentProcessingFeeResultValue } from "./schema";

type PaymentProcessingFeeResultProps = {
  result: PaymentProcessingFeeResultValue;
};

export function PaymentProcessingFeeResult({ result }: PaymentProcessingFeeResultProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <ResultCard label="Fee amount" value={formatCurrency(result.feeAmount)} hint="What the processor keeps." />
      <ResultCard label="Net payout" value={formatCurrency(result.netPayout)} hint="Amount left after fees." />
      <ResultCard label="Effective fee" value={formatPercent(result.effectiveFeeRate)} hint="Fee as a share of the payment." />
    </div>
  );
}