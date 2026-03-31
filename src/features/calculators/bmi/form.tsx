"use client";

import { NumberField } from "../shared/number-field";
import { translateText } from "@/src/i18n";
import { useLanguage } from "@/src/components/shared/language-provider";

import { convertImperialToMetricInput, convertMetricToImperialInput } from "./formula";
import type { BmiInput, BmiUnitSystem } from "./schema";

type BmiFormProps = {
  value: BmiInput;
  onChange: (nextValue: BmiInput) => void;
};

function getFieldGridClassName(unitSystem: BmiUnitSystem) {
  return unitSystem === "metric" ? "grid gap-4 sm:grid-cols-2" : "grid gap-4 sm:grid-cols-3";
}

export function BmiForm({ value, onChange }: BmiFormProps) {
  const { locale } = useLanguage();

  const setUnitSystem = (unitSystem: BmiUnitSystem) => {
    if (unitSystem === value.unitSystem) {
      return;
    }

    onChange(unitSystem === "imperial" ? convertMetricToImperialInput(value) : convertImperialToMetricInput(value));
  };

  return (
    <form className="grid gap-5" onSubmit={(event) => event.preventDefault()}>
      <div className="space-y-2">
        <p className="text-sm font-medium leading-6 text-[color:var(--muted-strong)] text-balance">{translateText(locale, "Unit system")}</p>
        <div className="grid grid-cols-2 gap-2 rounded-[1rem] border border-[color:var(--border)] bg-[color:var(--surface-soft)] p-1">
          {(["metric", "imperial"] as const).map((unitSystem) => (
            <button
              key={unitSystem}
              type="button"
              onClick={() => setUnitSystem(unitSystem)}
              className={`inline-flex items-center justify-center rounded-[0.8rem] px-3 py-2 text-sm font-semibold transition-all duration-150 ease-out active:translate-y-[1px] active:scale-[0.99] ${
                value.unitSystem === unitSystem
                  ? "bg-[color:var(--surface)] text-[color:var(--foreground)] shadow-[0_8px_16px_rgba(34,24,12,0.08)]"
                  : "text-[color:var(--muted-strong)] hover:text-[color:var(--foreground)]"
              }`}
            >
              {translateText(locale, unitSystem === "metric" ? "Metric" : "Imperial")}
            </button>
          ))}
        </div>
      </div>

      <div className={getFieldGridClassName(value.unitSystem)}>
        <NumberField
          label={value.unitSystem === "metric" ? "Weight (kg)" : "Weight (lb)"}
          value={value.weight}
          onChange={(weight) => onChange({ ...value, weight })}
          placeholder={value.unitSystem === "metric" ? "70" : "154"}
          min={0}
          step={0.1}
          helpText={value.unitSystem === "metric" ? "Enter your weight in kilograms." : "Enter your weight in pounds."}
        />

        {value.unitSystem === "metric" ? (
          <NumberField
            label="Height (cm)"
            value={value.height}
            onChange={(height) => onChange({ ...value, height })}
            placeholder="175"
            min={0}
            step={0.1}
            helpText="Enter your height in centimeters."
          />
        ) : (
          <>
            <NumberField
              label="Height (ft)"
              value={value.height}
              onChange={(height) => onChange({ ...value, height })}
              placeholder="5"
              min={0}
              step={1}
              helpText="Enter the feet part of your height."
            />
            <NumberField
              label="Height (in)"
              value={value.heightInches}
              onChange={(heightInches) => onChange({ ...value, heightInches })}
              placeholder="9"
              min={0}
              max={11}
              step={1}
              helpText="Enter the remaining inches."
            />
          </>
        )}
      </div>
    </form>
  );
}