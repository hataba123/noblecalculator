"use client";

import { NumberField } from "../shared/number-field";
import type { InternationalTransferFeeInput } from "./schema";

type InternationalTransferFeeFormProps = {
  value: InternationalTransferFeeInput;
  onChange: (nextValue: InternationalTransferFeeInput) => void;
};

export function InternationalTransferFeeForm({ value, onChange }: InternationalTransferFeeFormProps) {
  return (
    <form className="grid gap-4 sm:grid-cols-2" onSubmit={(event) => event.preventDefault()}>
      <NumberField
        label="Amount"
        value={value.amount}
        onChange={(amount) => onChange({ ...value, amount })}
        placeholder="1000"
        helpText="Số tiền cần chuyển trước phí."
      />
      <NumberField
        label="Fee rate (%)"
        value={value.feeRate}
        onChange={(feeRate) => onChange({ ...value, feeRate })}
        placeholder="2.5"
        min={0}
        step={0.1}
        helpText="Tỷ lệ phí chuyển tiền quốc tế."
      />
    </form>
  );
}
