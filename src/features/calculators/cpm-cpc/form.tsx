"use client";

import { NumberField } from "../shared/number-field";
import type { CpmCpcInput } from "./schema";

type CpmCpcFormProps = {
  value: CpmCpcInput;
  onChange: (nextValue: CpmCpcInput) => void;
};

export function CpmCpcForm({ value, onChange }: CpmCpcFormProps) {
  return (
    <form className="grid gap-4 sm:grid-cols-2" onSubmit={(event) => event.preventDefault()}>
      <NumberField label="Ad spend" value={value.adSpend} onChange={(adSpend) => onChange({ ...value, adSpend })} placeholder="2500" helpText="Total campaign spend." />
      <NumberField label="Impressions" value={value.impressions} onChange={(impressions) => onChange({ ...value, impressions })} placeholder="120000" min={0} step={1} helpText="How many times the ad was shown." />
      <NumberField label="Clicks" value={value.clicks} onChange={(clicks) => onChange({ ...value, clicks })} placeholder="1600" min={0} step={1} helpText="How many clicks the campaign generated." />
    </form>
  );
}