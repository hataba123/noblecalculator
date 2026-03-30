"use client";

import { NumberField } from "../shared/number-field";
import type { DayRateToHourlyRateInput } from "./schema";

type DayRateToHourlyRateFormProps = {
  value: DayRateToHourlyRateInput;
  onChange: (nextValue: DayRateToHourlyRateInput) => void;
};

export function DayRateToHourlyRateForm({ value, onChange }: DayRateToHourlyRateFormProps) {
  return (
    <form className="grid gap-4 sm:grid-cols-2" onSubmit={(event) => event.preventDefault()}>
      <NumberField label="Day rate" value={value.dayRate} onChange={(dayRate) => onChange({ ...value, dayRate })} placeholder="640" helpText="Your daily charge or pay rate." />
      <NumberField label="Billable hours per day" value={value.billableHoursPerDay} onChange={(billableHoursPerDay) => onChange({ ...value, billableHoursPerDay })} placeholder="8" min={0} step={0.1} helpText="How many hours the day rate covers." />
    </form>
  );
}