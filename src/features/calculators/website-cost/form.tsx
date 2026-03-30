"use client";

import { NumberField } from "../shared/number-field";
import type { WebsiteCostInput } from "./schema";

type WebsiteCostFormProps = {
  value: WebsiteCostInput;
  onChange: (nextValue: WebsiteCostInput) => void;
};

export function WebsiteCostForm({ value, onChange }: WebsiteCostFormProps) {
  return (
    <form className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3" onSubmit={(event) => event.preventDefault()}>
      <NumberField label="Design hours" value={value.designHours} onChange={(designHours) => onChange({ ...value, designHours })} placeholder="18" min={0} step={0.5} helpText="Time spent on layout and visual design." />
      <NumberField label="Development hours" value={value.developmentHours} onChange={(developmentHours) => onChange({ ...value, developmentHours })} placeholder="42" min={0} step={0.5} helpText="Time spent building the site." />
      <NumberField label="Content hours" value={value.contentHours} onChange={(contentHours) => onChange({ ...value, contentHours })} placeholder="12" min={0} step={0.5} helpText="Copy, images, and content work." />
      <NumberField label="Hourly rate" value={value.hourlyRate} onChange={(hourlyRate) => onChange({ ...value, hourlyRate })} placeholder="95" min={0} step={1} helpText="Your blended hourly rate." />
      <NumberField label="Fixed expenses" value={value.fixedExpenses} onChange={(fixedExpenses) => onChange({ ...value, fixedExpenses })} placeholder="800" min={0} step={1} helpText="Hosting, plugins, domains, and other fixed costs." />
    </form>
  );
}