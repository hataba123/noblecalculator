"use client";

import { NumberField } from "../shared/number-field";
import type { ProfitMarginInput } from "./schema";

type ProfitMarginFormProps = {
  value: ProfitMarginInput;
  onChange: (nextValue: ProfitMarginInput) => void;
};

export function ProfitMarginForm({ value, onChange }: ProfitMarginFormProps) {
  return (
    <form className="grid gap-4 sm:grid-cols-2" onSubmit={(event) => event.preventDefault()}>
      <NumberField
        label="Revenue"
        value={value.revenue}
        onChange={(revenue) => onChange({ ...value, revenue })}
        placeholder="12000"
        helpText="Tổng doanh thu trước khi trừ chi phí."
      />
      <NumberField
        label="Cost"
        value={value.cost}
        onChange={(cost) => onChange({ ...value, cost })}
        placeholder="7500"
        helpText="Tổng chi phí để tạo ra doanh thu đó."
      />
    </form>
  );
}
