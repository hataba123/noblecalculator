"use client";

import { NumberField } from "../shared/number-field";
import type { LatePaymentFeeInput } from "./core";

type LatePaymentFeeFormProps = {
  value: LatePaymentFeeInput;
  onChange: (nextValue: LatePaymentFeeInput) => void;
};

export function LatePaymentFeeForm({ value, onChange }: LatePaymentFeeFormProps) {
  return (
    <form className="grid gap-4 sm:grid-cols-2" onSubmit={(event) => event.preventDefault()}>
      <NumberField label="Invoice amount" value={value.invoiceAmount} onChange={(invoiceAmount) => onChange({ ...value, invoiceAmount })} placeholder="8500" helpText="Original invoice value." />
      <NumberField label="Monthly fee rate (%)" value={value.monthlyFeeRate} onChange={(monthlyFeeRate) => onChange({ ...value, monthlyFeeRate })} placeholder="1.5" min={0} step={0.1} helpText="Late fee rate per month." />
      <NumberField label="Days late" value={value.daysLate} onChange={(daysLate) => onChange({ ...value, daysLate })} placeholder="18" min={0} step={1} helpText="How many days the payment is overdue." />
    </form>
  );
}
