"use client";

import { NumberField } from "../shared/number-field";
import type { VatCalculatorInput } from "./schema";

type VatCalculatorFormProps = {
  value: VatCalculatorInput;
  onChange: (nextValue: VatCalculatorInput) => void;
};

export function VatCalculatorForm({ value, onChange }: VatCalculatorFormProps) {
  return (
    <form className="grid gap-4 sm:grid-cols-2" onSubmit={(event) => event.preventDefault()}>
      <NumberField
        label="Amount"
        value={value.amount}
        onChange={(amount) => onChange({ ...value, amount })}
        placeholder="1000"
        helpText="Giá trị trước VAT."
      />
      <NumberField
        label="VAT rate (%)"
        value={value.vatRate}
        onChange={(vatRate) => onChange({ ...value, vatRate })}
        placeholder="20"
        min={0}
        step={0.1}
        helpText="Tỷ lệ VAT áp dụng cho amount."
      />
    </form>
  );
}
