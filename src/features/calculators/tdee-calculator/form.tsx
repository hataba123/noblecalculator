"use client";

import { useLanguage } from "@/src/components/shared/language-provider";
import { translateText } from "@/src/i18n";

import { NumberField } from "../shared/number-field";
import { convertImperialToMetricInput, convertMetricToImperialInput, tdeeActivityOptions, tdeeEquationOptions, tdeeGoalOptions, tdeeSexOptions } from "./formula";
import type { TdeeActivityLevel, TdeeEquation, TdeeGoalMode, TdeeInput, TdeeSex, TdeeUnitSystem } from "./schema";

type TdeeFormProps = {
  value: TdeeInput;
  onChange: (nextValue: TdeeInput) => void;
};

type ChoiceButtonProps = {
  selected: boolean;
  title: string;
  description: string;
  onClick: () => void;
};

function ChoiceButton({ selected, title, description, onClick }: ChoiceButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`flex min-w-0 flex-col gap-1 rounded-[1rem] border px-4 py-3 text-left transition-all duration-150 ease-out active:translate-y-[1px] active:scale-[0.99] ${
        selected
          ? "border-[color:var(--accent)] bg-[color:var(--accent-soft)] text-[color:var(--foreground)] shadow-[0_8px_20px_rgba(34,24,12,0.08)]"
          : "border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--muted-strong)] hover:bg-[color:var(--surface-soft)] hover:text-[color:var(--foreground)]"
      }`}
    >
      <span className="text-sm font-semibold leading-6">{title}</span>
      <span className="text-xs leading-5 text-[color:var(--muted)]">{description}</span>
    </button>
  );
}

function SectionTitle({ children }: { children: string }) {
  return <p className="text-sm font-medium leading-6 text-[color:var(--muted-strong)] text-balance">{children}</p>;
}

function getUnitGridClassName(unitSystem: TdeeUnitSystem) {
  return unitSystem === "metric" ? "grid gap-4 sm:grid-cols-2" : "grid gap-4 sm:grid-cols-3";
}

export function TdeeForm({ value, onChange }: TdeeFormProps) {
  const { locale } = useLanguage();

  const setUnitSystem = (unitSystem: TdeeUnitSystem) => {
    if (unitSystem === value.unitSystem) {
      return;
    }

    onChange(unitSystem === "imperial" ? convertMetricToImperialInput(value) : convertImperialToMetricInput(value));
  };

  const setEquationUsed = (equationUsed: TdeeEquation) => {
    onChange({ ...value, equationUsed });
  };

  const setSex = (sex: TdeeSex) => {
    onChange({ ...value, sex });
  };

  const setActivityLevel = (activityLevel: TdeeActivityLevel) => {
    onChange({ ...value, activityLevel });
  };

  const setGoalMode = (goalMode: TdeeGoalMode) => {
    onChange({ ...value, goalMode });
  };

  return (
    <form className="grid gap-5" onSubmit={(event) => event.preventDefault()}>
      <div className="space-y-2">
        <SectionTitle>{translateText(locale, "Equation")}</SectionTitle>
        <div className="grid gap-2 sm:grid-cols-2">
          {tdeeEquationOptions.map((option) => (
            <ChoiceButton
              key={option.value}
              selected={value.equationUsed === option.value}
              title={translateText(locale, option.label)}
              description={translateText(locale, option.description)}
              onClick={() => setEquationUsed(option.value)}
            />
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <SectionTitle>{translateText(locale, "Unit system")}</SectionTitle>
        <div className="grid grid-cols-2 gap-2 rounded-[1rem] border border-[color:var(--border)] bg-[color:var(--surface-soft)] p-1">
          {(["metric", "imperial"] as const).map((unitSystem) => (
            <button
              key={unitSystem}
              type="button"
              onClick={() => setUnitSystem(unitSystem)}
              className={`rounded-[0.8rem] px-3 py-2 text-sm font-semibold transition-all duration-150 ease-out active:translate-y-[1px] active:scale-[0.99] ${
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

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <SectionTitle>{translateText(locale, "Sex")}</SectionTitle>
          <div className="grid grid-cols-2 gap-2">
            {tdeeSexOptions.map((option) => (
              <ChoiceButton
                key={option.value}
                selected={value.sex === option.value}
                title={translateText(locale, option.label)}
                description={translateText(locale, option.description)}
                onClick={() => setSex(option.value)}
              />
            ))}
          </div>
        </div>

        <NumberField
          label="Age (years)"
          value={value.ageYears}
          onChange={(ageYears) => onChange({ ...value, ageYears })}
          placeholder="30"
          min={18}
          step={1}
          helpText="Enter an adult age in years."
        />
      </div>

      <div className={getUnitGridClassName(value.unitSystem)}>
        <NumberField
          label={value.unitSystem === "metric" ? "Weight (kg)" : "Weight (lb)"}
          value={value.weightValue}
          onChange={(weightValue) => onChange({ ...value, weightValue })}
          placeholder={value.unitSystem === "metric" ? "70" : "154"}
          min={0}
          step={0.1}
          helpText={value.unitSystem === "metric" ? "Enter your weight in kilograms." : "Enter your weight in pounds."}
        />

        {value.unitSystem === "metric" ? (
          <NumberField
            label="Height (cm)"
            value={value.heightValue}
            onChange={(heightValue) => onChange({ ...value, heightValue })}
            placeholder="175"
            min={0}
            step={0.1}
            helpText="Enter your height in centimeters."
          />
        ) : (
          <>
            <NumberField
              label="Height (ft)"
              value={value.heightValue}
              onChange={(heightValue) => onChange({ ...value, heightValue })}
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

      <div className="space-y-2">
        <SectionTitle>{translateText(locale, "Activity level")}</SectionTitle>
        <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
          {tdeeActivityOptions.map((option) => (
            <ChoiceButton
              key={option.value}
              selected={value.activityLevel === option.value}
              title={translateText(locale, option.label)}
              description={translateText(locale, option.description)}
              onClick={() => setActivityLevel(option.value)}
            />
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <SectionTitle>{translateText(locale, "Goal mode")}</SectionTitle>
        <div className="grid gap-2 sm:grid-cols-3">
          {tdeeGoalOptions.map((option) => (
            <ChoiceButton
              key={option.value}
              selected={value.goalMode === option.value}
              title={translateText(locale, option.label)}
              description={translateText(locale, option.description)}
              onClick={() => setGoalMode(option.value)}
            />
          ))}
        </div>
      </div>

      <div className="rounded-[1rem] border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-4 py-3 text-sm leading-6 text-[color:var(--muted)]">
        {translateText(
          locale,
          "This calculator is an estimate for adults. It may not be appropriate for pregnancy, breastfeeding, competitive athletes, or people with metabolic conditions."
        )}
      </div>
    </form>
  );
}