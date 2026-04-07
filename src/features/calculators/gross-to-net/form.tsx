"use client";

import { NumberField } from "../shared/number-field";
import type { GrossToNetInput } from "./core";

type GrossToNetFormProps = {
  value: GrossToNetInput;
  onChange: (nextValue: GrossToNetInput) => void;
};

export function GrossToNetForm({ value, onChange }: GrossToNetFormProps) {
  return (
    <form className="grid gap-4 sm:grid-cols-2" onSubmit={(event) => event.preventDefault()}>
      <NumberField label="Gross amount" value={value.grossAmount} onChange={(grossAmount) => onChange({ ...value, grossAmount })} placeholder="5000" helpText="Starting amount before tax." />
      <NumberField label="Tax rate (%)" value={value.taxRate} onChange={(taxRate) => onChange({ ...value, taxRate })} placeholder="25" min={0} step={0.1} max={100} helpText="Tax withheld from the gross amount." />
    </form>
  );
}
