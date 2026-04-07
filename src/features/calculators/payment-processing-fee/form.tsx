"use client";

import { NumberField } from "../shared/number-field";
import type { PaymentProcessingFeeInput } from "./core";

type PaymentProcessingFeeFormProps = {
  value: PaymentProcessingFeeInput;
  onChange: (nextValue: PaymentProcessingFeeInput) => void;
};

export function PaymentProcessingFeeForm({ value, onChange }: PaymentProcessingFeeFormProps) {
  return (
    <form className="grid gap-4 sm:grid-cols-2" onSubmit={(event) => event.preventDefault()}>
      <NumberField label="Payment amount" value={value.amount} onChange={(amount) => onChange({ ...value, amount })} placeholder="2500" helpText="Total customer payment before fees." />
      <NumberField label="Percentage fee rate (%)" value={value.percentageFeeRate} onChange={(percentageFeeRate) => onChange({ ...value, percentageFeeRate })} placeholder="2.9" min={0} step={0.1} helpText="Variable percentage charged by the processor." />
      <NumberField label="Fixed fee" value={value.fixedFee} onChange={(fixedFee) => onChange({ ...value, fixedFee })} placeholder="0.30" min={0} step={0.01} helpText="Flat fee per transaction." />
    </form>
  );
}
