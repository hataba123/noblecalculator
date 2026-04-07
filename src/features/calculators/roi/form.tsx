"use client";

import { NumberField } from "../shared/number-field";
import type { RoiInput } from "./core";

type RoiFormProps = {
  value: RoiInput;
  onChange: (nextValue: RoiInput) => void;
};

export function RoiForm({ value, onChange }: RoiFormProps) {
  return (
    <form className="grid gap-4 sm:grid-cols-2" onSubmit={(event) => event.preventDefault()}>
      <NumberField label="Investment" value={value.investment} onChange={(investment) => onChange({ ...value, investment })} placeholder="12000" helpText="Money you put into the project or asset." />
      <NumberField label="Return amount" value={value.returnAmount} onChange={(returnAmount) => onChange({ ...value, returnAmount })} placeholder="16200" helpText="Money you get back from the investment." />
    </form>
  );
}
