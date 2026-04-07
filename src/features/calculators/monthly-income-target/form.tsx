"use client";

import { NumberField } from "../shared/number-field";
import type { MonthlyIncomeTargetInput } from "./core";

type MonthlyIncomeTargetFormProps = {
  value: MonthlyIncomeTargetInput;
  onChange: (nextValue: MonthlyIncomeTargetInput) => void;
};

export function MonthlyIncomeTargetForm({ value, onChange }: MonthlyIncomeTargetFormProps) {
  return (
    <form className="grid gap-4 sm:grid-cols-2" onSubmit={(event) => event.preventDefault()}>
      <NumberField label="Desired take-home per month" value={value.desiredTakeHomeMonthly} onChange={(desiredTakeHomeMonthly) => onChange({ ...value, desiredTakeHomeMonthly })} placeholder="6000" helpText="The net income you want to keep each month." />
      <NumberField label="Monthly business expenses" value={value.monthlyBusinessExpenses} onChange={(monthlyBusinessExpenses) => onChange({ ...value, monthlyBusinessExpenses })} placeholder="1500" helpText="Fixed expenses that must be covered each month." />
      <NumberField label="Tax rate (%)" value={value.taxRate} onChange={(taxRate) => onChange({ ...value, taxRate })} placeholder="25" min={0} step={0.1} max={100} helpText="Estimated tax rate to reserve." />
    </form>
  );
}
