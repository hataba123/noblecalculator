"use client";

import { NumberField } from "../shared/number-field";
import type { NetToGrossInput } from "./schema";

type NetToGrossFormProps = {
  value: NetToGrossInput;
  onChange: (nextValue: NetToGrossInput) => void;
};

export function NetToGrossForm({ value, onChange }: NetToGrossFormProps) {
  return (
    <form className="grid gap-4 sm:grid-cols-2" onSubmit={(event) => event.preventDefault()}>
      <NumberField label="Net amount" value={value.netAmount} onChange={(netAmount) => onChange({ ...value, netAmount })} placeholder="4000" helpText="Take-home amount after tax." />
      <NumberField label="Tax rate (%)" value={value.taxRate} onChange={(taxRate) => onChange({ ...value, taxRate })} placeholder="25" min={0} step={0.1} max={100} helpText="Tax rate used to gross up the amount." />
    </form>
  );
}