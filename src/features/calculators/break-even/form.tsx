"use client";

import { NumberField } from "../shared/number-field";
import type { BreakEvenInput } from "./schema";

type BreakEvenFormProps = {
  value: BreakEvenInput;
  onChange: (nextValue: BreakEvenInput) => void;
};

export function BreakEvenForm({ value, onChange }: BreakEvenFormProps) {
  return (
    <form className="grid gap-4 sm:grid-cols-2" onSubmit={(event) => event.preventDefault()}>
      <NumberField
        label="Fixed costs"
        value={value.fixedCosts}
        onChange={(fixedCosts) => onChange({ ...value, fixedCosts })}
        placeholder="15000"
        helpText="Rent, salaries, and other costs you pay even before selling."
      />
      <NumberField
        label="Variable cost per unit"
        value={value.variableCostPerUnit}
        onChange={(variableCostPerUnit) => onChange({ ...value, variableCostPerUnit })}
        placeholder="28"
        helpText="Cost to produce or deliver one unit."
      />
      <NumberField
        label="Selling price"
        value={value.sellingPrice}
        onChange={(sellingPrice) => onChange({ ...value, sellingPrice })}
        placeholder="65"
        helpText="Price you charge for one unit."
      />
    </form>
  );
}