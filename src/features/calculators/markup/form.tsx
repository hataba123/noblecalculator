"use client";

import { NumberField } from "../shared/number-field";
import type { MarkupInput } from "./schema";

type MarkupFormProps = {
  value: MarkupInput;
  onChange: (nextValue: MarkupInput) => void;
};

export function MarkupForm({ value, onChange }: MarkupFormProps) {
  return (
    <form className="grid gap-4 sm:grid-cols-2" onSubmit={(event) => event.preventDefault()}>
      <NumberField
        label="Cost"
        value={value.cost}
        onChange={(cost) => onChange({ ...value, cost })}
        placeholder="100"
        helpText="Giá vốn của sản phẩm hoặc dịch vụ."
      />
      <NumberField
        label="Markup rate (%)"
        value={value.markupRate}
        onChange={(markupRate) => onChange({ ...value, markupRate })}
        placeholder="30"
        min={0}
        step={0.1}
        helpText="Phần trăm cộng thêm trên giá vốn."
      />
    </form>
  );
}
