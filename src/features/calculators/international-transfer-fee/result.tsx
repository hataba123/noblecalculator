import { ResultCard } from "@/src/components/shared/result-card";
import { formatCurrency } from "@/src/lib/format";

import type { InternationalTransferFeeResult as InternationalTransferFeeResultValue } from "./core";

type InternationalTransferFeeResultProps = {
  result: InternationalTransferFeeResultValue;
};

export function InternationalTransferFeeResult({ result }: InternationalTransferFeeResultProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <ResultCard label="Amount" value={formatCurrency(result.amount)} hint="Base transfer amount." />
      <ResultCard label="Fee amount" value={formatCurrency(result.feeAmount)} hint="Transfer fee charged on top." />
      <ResultCard label="Total debit" value={formatCurrency(result.totalDebit)} hint="Total cash needed to fund the transfer." />
    </div>
  );
}
