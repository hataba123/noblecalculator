"use client";

import { NumberField } from "../shared/number-field";
import type { SelfEmployedTaxEstimatorInput } from "./core";

type SelfEmployedTaxEstimatorFormProps = {
  value: SelfEmployedTaxEstimatorInput;
  onChange: (nextValue: SelfEmployedTaxEstimatorInput) => void;
};

export function SelfEmployedTaxEstimatorForm({ value, onChange }: SelfEmployedTaxEstimatorFormProps) {
  return (
    <form className="grid gap-4 sm:grid-cols-2" onSubmit={(event) => event.preventDefault()}>
      <NumberField label="Annual revenue" value={value.annualRevenue} onChange={(annualRevenue) => onChange({ ...value, annualRevenue })} placeholder="120000" helpText="Total self-employed income before expenses." />
      <NumberField label="Business expenses" value={value.businessExpenses} onChange={(businessExpenses) => onChange({ ...value, businessExpenses })} placeholder="32000" helpText="Deductible business costs." />
      <NumberField label="Income tax rate (%)" value={value.incomeTaxRate} onChange={(incomeTaxRate) => onChange({ ...value, incomeTaxRate })} placeholder="22" min={0} step={0.1} max={100} helpText="Estimated income tax rate." />
      <NumberField label="Self-employment tax rate (%)" value={value.selfEmploymentTaxRate} onChange={(selfEmploymentTaxRate) => onChange({ ...value, selfEmploymentTaxRate })} placeholder="15.3" min={0} step={0.1} max={100} helpText="Estimated self-employment tax rate." />
    </form>
  );
}
