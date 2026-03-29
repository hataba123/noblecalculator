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
        label="Target income"
        value={value.targetIncome}
        onChange={(targetIncome) => onChange({ ...value, targetIncome })}
        placeholder="60000"
        helpText="Thu nhập mục tiêu trong một chu kỳ tính toán."
      />
      <NumberField
        label="Billable hours"
        value={value.billableHours}
        onChange={(billableHours) => onChange({ ...value, billableHours })}
        placeholder="120"
        min={0}
        helpText="Số giờ có thể tính phí cho khách hàng."
      />
    </form>
  );
}
