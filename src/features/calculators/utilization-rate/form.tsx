"use client";

import { NumberField } from "../shared/number-field";
import type { UtilizationRateInput } from "./core";

type UtilizationRateFormProps = {
  value: UtilizationRateInput;
  onChange: (nextValue: UtilizationRateInput) => void;
};

export function UtilizationRateForm({ value, onChange }: UtilizationRateFormProps) {
  return (
    <form className="grid gap-4 sm:grid-cols-2" onSubmit={(event) => event.preventDefault()}>
      <NumberField label="Billable hours" value={value.billableHours} onChange={(billableHours) => onChange({ ...value, billableHours })} placeholder="120" min={0} step={0.1} helpText="Hours you can invoice or charge for." />
      <NumberField label="Total available hours" value={value.totalAvailableHours} onChange={(totalAvailableHours) => onChange({ ...value, totalAvailableHours })} placeholder="160" min={0} step={0.1} helpText="All working hours available in the period." />
    </form>
  );
}
