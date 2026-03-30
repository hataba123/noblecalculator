"use client";

import { NumberField } from "../shared/number-field";
import type { CacInput } from "./schema";

type CacFormProps = {
  value: CacInput;
  onChange: (nextValue: CacInput) => void;
};

export function CacForm({ value, onChange }: CacFormProps) {
  return (
    <form className="grid gap-4 sm:grid-cols-2" onSubmit={(event) => event.preventDefault()}>
      <NumberField label="Marketing spend" value={value.marketingSpend} onChange={(marketingSpend) => onChange({ ...value, marketingSpend })} placeholder="12000" helpText="Total cost spent on marketing and sales." />
      <NumberField label="New customers" value={value.newCustomers} onChange={(newCustomers) => onChange({ ...value, newCustomers })} placeholder="150" min={0} step={1} helpText="Customers acquired from that spend." />
    </form>
  );
}