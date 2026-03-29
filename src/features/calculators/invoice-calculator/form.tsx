"use client";

import { NumberField } from "../shared/number-field";
import type { InvoiceCalculatorInput } from "./schema";

type InvoiceCalculatorFormProps = {
  value: InvoiceCalculatorInput;
  onChange: (nextValue: InvoiceCalculatorInput) => void;
};

export function InvoiceCalculatorForm({ value, onChange }: InvoiceCalculatorFormProps) {
  return (
    <form className="grid gap-4 sm:grid-cols-2" onSubmit={(event) => event.preventDefault()}>
      <NumberField
        label="Amount"
        value={value.amount}
        onChange={(amount) => onChange({ ...value, amount })}
        placeholder="2500"
        helpText="Giá trị invoice trước thuế."
      />
      <NumberField
        label="Tax rate (%)"
        value={value.taxRate}
        onChange={(taxRate) => onChange({ ...value, taxRate })}
        placeholder="10"
        min={0}
        step={0.1}
        helpText="Thuế áp dụng cho hóa đơn."
      />
    </form>
  );
}
