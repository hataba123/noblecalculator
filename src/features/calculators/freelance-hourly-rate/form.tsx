"use client";

import { NumberField } from "../shared/number-field";
import type { FreelanceHourlyRateInput } from "./schema";

type FreelanceHourlyRateFormProps = {
  value: FreelanceHourlyRateInput;
  onChange: (nextValue: FreelanceHourlyRateInput) => void;
};

export function FreelanceHourlyRateForm({ value, onChange }: FreelanceHourlyRateFormProps) {
  return (
    <form className="grid gap-4 sm:grid-cols-2" onSubmit={(event) => event.preventDefault()}>
      <NumberField
        label="Income goal"
        value={value.targetIncome}
        onChange={(targetIncome) => onChange({ ...value, targetIncome })}
        placeholder="60000"
        helpText="How much you want to earn in the selected period."
      />
      <NumberField
        label="Billable hours"
        value={value.billableHours}
        onChange={(billableHours) => onChange({ ...value, billableHours })}
        placeholder="120"
        min={0}
        helpText="Hours you expect to bill a client."
      />
    </form>
  );
}
