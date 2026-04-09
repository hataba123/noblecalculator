"use client";

import { useState } from "react";

import {
  calculateTdee,
  convertImperialToMetricInput,
  convertMetricToImperialInput,
  equationNeedsBodyFatPercent,
  tdeeActivityOptions,
  tdeeConfig,
  tdeeEquationOptions,
  tdeeGoalOptions,
  tdeeSeoContent,
  tdeeSexOptions,
  type TdeeActivityLevel,
  type TdeeEquation,
  type TdeeGoalMode,
  type TdeeInput,
  type TdeeSex,
  type TdeeUnitSystem,
} from "@noblecalculator/calculators-core/tdee-calculator";

import { Pressable, Text, TextInput, View, type KeyboardType } from "../primitives";

type TdeeFormState = {
  unitSystem: TdeeUnitSystem;
  equationUsed: TdeeEquation;
  sex: TdeeSex;
  ageYears: string;
  weightValue: string;
  heightValue: string;
  heightInches: string;
  bodyFatPercent: string;
  activityLevel: TdeeActivityLevel;
  goalMode: TdeeGoalMode;
};

type ChoiceButtonProps = {
  selected: boolean;
  title: string;
  description: string;
  onPress: () => void;
};

type TdeeEquationOption = (typeof tdeeEquationOptions)[number];
type TdeeSexOption = (typeof tdeeSexOptions)[number];
type TdeeActivityOption = (typeof tdeeActivityOptions)[number];
type TdeeGoalOption = (typeof tdeeGoalOptions)[number];

const numericKeyboardType: KeyboardType = "numeric";

function formatInputValue(value: number) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1).replace(/\.0$/, "");
}

function parseInputValue(value: string) {
  const parsedValue = Number.parseFloat(value.replace(",", "."));
  return Number.isFinite(parsedValue) ? parsedValue : 0;
}

function toFormState(input: TdeeInput): TdeeFormState {
  return {
    unitSystem: input.unitSystem,
    equationUsed: input.equationUsed,
    sex: input.sex,
    ageYears: formatInputValue(input.ageYears),
    weightValue: formatInputValue(input.weightValue),
    heightValue: formatInputValue(input.heightValue),
    heightInches: formatInputValue(input.heightInches),
    bodyFatPercent: formatInputValue(input.bodyFatPercent),
    activityLevel: input.activityLevel,
    goalMode: input.goalMode,
  };
}

function toTdeeInput(state: TdeeFormState): TdeeInput {
  return {
    unitSystem: state.unitSystem,
    equationUsed: state.equationUsed,
    sex: state.sex,
    ageYears: parseInputValue(state.ageYears),
    weightValue: parseInputValue(state.weightValue),
    heightValue: parseInputValue(state.heightValue),
    heightInches: parseInputValue(state.heightInches),
    bodyFatPercent: parseInputValue(state.bodyFatPercent),
    activityLevel: state.activityLevel,
    goalMode: state.goalMode,
  };
}

function formatCalories(value: number) {
  return `${new Intl.NumberFormat("en-US").format(Math.round(value))} kcal/day`;
}

function formatMultiplier(value: number) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 3 }).format(value);
}

function ChoiceButton({ selected, title, description, onPress }: ChoiceButtonProps) {
  return (
    <Pressable accessibilityRole="button" accessibilityState={{ selected }} onPress={onPress} style={[styles.choiceButton, selected ? styles.choiceButtonSelected : styles.choiceButtonIdle]}>
      <Text style={[styles.choiceTitle, selected ? styles.choiceTitleSelected : styles.choiceTitleIdle]}>{title}</Text>
      <Text style={[styles.choiceDescription, selected ? styles.choiceDescriptionSelected : styles.choiceDescriptionIdle]}>{description}</Text>
    </Pressable>
  );
}

function NumericField({
  label,
  value,
  onChangeText,
  placeholder,
  helperText,
  suffix,
}: {
  label: string;
  value: string;
  onChangeText: (nextValue: string) => void;
  placeholder: string;
  helperText: string;
  suffix: string;
}) {
  return (
    <View style={styles.field}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <View style={styles.inputRow}>
        <TextInput
          accessibilityLabel={label}
          keyboardType={numericKeyboardType}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#9c8f7f"
          selectionColor="#8a6b45"
          style={styles.input}
          value={value}
        />
        <View style={styles.suffixPill}>
          <Text style={styles.suffixText}>{suffix}</Text>
        </View>
      </View>
      <Text style={styles.helperText}>{helperText}</Text>
    </View>
  );
}

function ResultStat({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <View style={styles.resultStat}>
      <Text style={styles.resultLabel}>{label}</Text>
      <Text style={styles.resultValue}>{value}</Text>
      <Text style={styles.resultHint}>{hint}</Text>
    </View>
  );
}

function SectionTitle({ title, meta }: { title: string; meta?: string }) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionLabel}>{title}</Text>
      {meta ? <Text style={styles.sectionMeta}>{meta}</Text> : null}
    </View>
  );
}

export function TdeeCalculator({ initialValue = tdeeConfig.defaultValue }: { initialValue?: TdeeInput } = {}) {
  const [formState, setFormState] = useState<TdeeFormState>(() => toFormState(initialValue));

  const inputValue = toTdeeInput(formState);
  const result = calculateTdee(inputValue);
  const showBodyFatField = equationNeedsBodyFatPercent(formState.equationUsed);

  const setUnitSystem = (nextUnitSystem: TdeeUnitSystem) => {
    setFormState((currentState) => {
      if (currentState.unitSystem === nextUnitSystem) {
        return currentState;
      }

      const convertedInput = nextUnitSystem === "imperial"
        ? convertMetricToImperialInput(toTdeeInput(currentState))
        : convertImperialToMetricInput(toTdeeInput(currentState));

      return toFormState(convertedInput);
    });
  };

  const setEquationUsed = (equationUsed: TdeeEquation) => {
    setFormState((currentState) => ({ ...currentState, equationUsed }));
  };

  const setSex = (sex: TdeeSex) => {
    setFormState((currentState) => ({ ...currentState, sex }));
  };

  const setActivityLevel = (activityLevel: TdeeActivityLevel) => {
    setFormState((currentState) => ({ ...currentState, activityLevel }));
  };

  const setGoalMode = (goalMode: TdeeGoalMode) => {
    setFormState((currentState) => ({ ...currentState, goalMode }));
  };

  const reset = () => {
    setFormState(toFormState(initialValue));
  };

  return (
    <View style={styles.screen}>
      <View style={styles.heroCard}>
        <Text style={styles.eyebrow}>Mobile port</Text>
        <Text style={styles.title}>{tdeeConfig.title}</Text>
        <Text style={styles.description}>{tdeeSeoContent.intro}</Text>
      </View>

      <View style={styles.card}>
        <SectionTitle title="Equation" />
        <View style={styles.choiceStack}>
          {tdeeEquationOptions.map((option: TdeeEquationOption) => (
            <ChoiceButton
              key={option.value}
              selected={formState.equationUsed === option.value}
              title={option.label}
              description={option.description}
              onPress={() => setEquationUsed(option.value)}
            />
          ))}
        </View>
        {showBodyFatField ? <Text style={styles.inlineNote}>This equation uses body fat percentage to estimate lean body mass.</Text> : null}
      </View>

      <View style={styles.card}>
        <SectionTitle title="Unit system" />
        <View style={styles.toggleRow}>
          <Pressable accessibilityRole="button" accessibilityState={{ selected: formState.unitSystem === "metric" }} onPress={() => setUnitSystem("metric")} style={[styles.toggleButton, formState.unitSystem === "metric" ? styles.toggleButtonSelected : styles.toggleButtonIdle]}>
            <Text style={[styles.toggleText, formState.unitSystem === "metric" ? styles.toggleTextSelected : styles.toggleTextIdle]}>Metric</Text>
          </Pressable>
          <Pressable accessibilityRole="button" accessibilityState={{ selected: formState.unitSystem === "imperial" }} onPress={() => setUnitSystem("imperial")} style={[styles.toggleButton, formState.unitSystem === "imperial" ? styles.toggleButtonSelected : styles.toggleButtonIdle]}>
            <Text style={[styles.toggleText, formState.unitSystem === "imperial" ? styles.toggleTextSelected : styles.toggleTextIdle]}>Imperial</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.card}>
        <SectionTitle title="Sex & age" />
        <View style={styles.choiceRow}>
          {tdeeSexOptions.map((option: TdeeSexOption) => (
            <View key={option.value} style={styles.choiceRowItem}>
              <ChoiceButton
                selected={formState.sex === option.value}
                title={option.label}
                description={option.description}
                onPress={() => setSex(option.value)}
              />
            </View>
          ))}
        </View>

        <NumericField
          label="Age"
          value={formState.ageYears}
          onChangeText={(ageYears) => setFormState((currentState) => ({ ...currentState, ageYears }))}
          placeholder="30"
          helperText="Enter an adult age in years."
          suffix="yrs"
        />
      </View>

      {showBodyFatField ? (
        <View style={styles.card}>
          <SectionTitle title="Body fat" meta="Required for the selected equation" />
          <NumericField
            label="Body fat %"
            value={formState.bodyFatPercent}
            onChangeText={(bodyFatPercent) => setFormState((currentState) => ({ ...currentState, bodyFatPercent }))}
            placeholder="20"
            helperText="Used to estimate lean body mass for this equation."
            suffix="%"
          />
        </View>
      ) : null}

      <View style={styles.card}>
        <SectionTitle title="Weight & height" />
        <View style={styles.fieldStack}>
          <NumericField
            label="Weight"
            value={formState.weightValue}
            onChangeText={(weightValue) => setFormState((currentState) => ({ ...currentState, weightValue }))}
            placeholder={formState.unitSystem === "metric" ? "70" : "154"}
            helperText={formState.unitSystem === "metric" ? "Enter your weight in kilograms." : "Enter your weight in pounds."}
            suffix={formState.unitSystem === "metric" ? "kg" : "lb"}
          />

          {formState.unitSystem === "metric" ? (
            <NumericField
              label="Height"
              value={formState.heightValue}
              onChangeText={(heightValue) => setFormState((currentState) => ({ ...currentState, heightValue }))}
              placeholder="175"
              helperText="Enter your height in centimeters."
              suffix="cm"
            />
          ) : (
            <View style={styles.compactRow}>
              <View style={styles.compactField}>
                <NumericField
                  label="Height"
                  value={formState.heightValue}
                  onChangeText={(heightValue) => setFormState((currentState) => ({ ...currentState, heightValue }))}
                  placeholder="5"
                  helperText="Feet part of your height."
                  suffix="ft"
                />
              </View>
              <View style={styles.compactField}>
                <NumericField
                  label="Inches"
                  value={formState.heightInches}
                  onChangeText={(heightInches) => setFormState((currentState) => ({ ...currentState, heightInches }))}
                  placeholder="9"
                  helperText="Remaining inches."
                  suffix="in"
                />
              </View>
            </View>
          )}
        </View>
      </View>

      <View style={styles.card}>
        <SectionTitle title="Activity level" />
        <View style={styles.choiceStack}>
          {tdeeActivityOptions.map((option: TdeeActivityOption) => (
            <ChoiceButton
              key={option.value}
              selected={formState.activityLevel === option.value}
              title={option.label}
              description={option.description}
              onPress={() => setActivityLevel(option.value)}
            />
          ))}
        </View>
      </View>

      <View style={styles.card}>
        <SectionTitle title="Goal mode" />
        <View style={styles.choiceRow}>
          {tdeeGoalOptions.map((option: TdeeGoalOption) => (
            <View key={option.value} style={styles.choiceRowItem}>
              <ChoiceButton
                selected={formState.goalMode === option.value}
                title={option.label}
                description={option.description}
                onPress={() => setGoalMode(option.value)}
              />
            </View>
          ))}
        </View>
      </View>

      <Pressable accessibilityLabel="Reset TDEE inputs" onPress={reset} style={styles.resetButton}>
        <Text style={styles.resetButtonText}>Reset</Text>
      </Pressable>

      <View style={styles.resultHero}>
        <View style={styles.resultHeroTop}>
          <View style={styles.resultHeroCopy}>
            <Text style={styles.eyebrow}>Equation used</Text>
            <Text style={styles.resultHeroTitle}>{result.equationUsed}</Text>
          </View>

          <View style={styles.resultBadge}>
            <Text style={styles.resultBadgeLabel}>Selected target</Text>
            <Text style={styles.resultBadgeTitle}>{result.selectedGoalLabel}</Text>
            <Text style={styles.resultBadgeValue}>{formatCalories(result.targetKcal)}</Text>
          </View>
        </View>

        <Text style={styles.resultHeroNote}>{tdeeSeoContent.formulaNote}</Text>
      </View>

      <View style={styles.resultGrid}>
        <ResultStat label="Resting calories" value={formatCalories(result.bmrOrReeKcal)} hint="BMR / REE estimate before activity." />
        <ResultStat label="Maintenance calories" value={formatCalories(result.maintenanceKcal)} hint="TDEE after applying activity level." />
        <ResultStat label="Mild fat loss" value={formatCalories(result.mildCutKcal)} hint="TDEE minus 300 kcal/day." />
        <ResultStat label="Standard fat loss" value={formatCalories(result.standardCutKcal)} hint="TDEE minus 500 kcal/day." />
        <ResultStat label="Weight gain" value={formatCalories(result.gainKcal)} hint="TDEE plus 250 kcal/day." />
        <ResultStat label="Activity multiplier" value={formatMultiplier(result.activityMultiplier)} hint="Applied to your resting calorie estimate." />
      </View>

      <View style={styles.card}>
        <SectionTitle title={tdeeSeoContent.formulaTitle} meta="Mobile reference" />
        <Text style={styles.note}>{tdeeSeoContent.formula}</Text>
        <Text style={styles.note}>{tdeeSeoContent.whenToUse}</Text>
        <Text style={styles.note}>{tdeeSeoContent.ctaText}</Text>
        <Text style={styles.note}>{tdeeSeoContent.ctaNote}</Text>
      </View>
    </View>
  );
}

const styles = {
  screen: {
    gap: 16,
    padding: 16,
    backgroundColor: "#f5efe6",
    minHeight: "100%",
  },
  heroCard: {
    gap: 10,
    borderRadius: 28,
    padding: 20,
    borderWidth: 1,
    borderColor: "rgba(27,26,23,0.08)",
    backgroundColor: "#fffdf9",
    shadowColor: "#1b1a17",
    shadowOpacity: 0.06,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 2,
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: "700" as const,
    letterSpacing: 1.8,
    textTransform: "uppercase" as const,
    color: "#8a6b45",
  },
  title: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: "700" as const,
    color: "#1b1a17",
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: "#5c554b",
  },
  card: {
    gap: 14,
    borderRadius: 28,
    padding: 18,
    borderWidth: 1,
    borderColor: "rgba(27,26,23,0.08)",
    backgroundColor: "#fffdf9",
    shadowColor: "#1b1a17",
    shadowOpacity: 0.05,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 1,
  },
  sectionHeader: {
    flexDirection: "row" as const,
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: "700" as const,
    letterSpacing: 1.4,
    textTransform: "uppercase" as const,
    color: "#8a6b45",
  },
  sectionMeta: {
    fontSize: 12,
    fontWeight: "600" as const,
    color: "#6c655b",
  },
  choiceStack: {
    gap: 10,
  },
  choiceRow: {
    flexDirection: "row" as const,
    flexWrap: "wrap" as const,
    gap: 10,
  },
  choiceRowItem: {
    flexGrow: 1,
    flexBasis: 0,
    minWidth: 110,
  },
  choiceButton: {
    gap: 6,
    borderRadius: 20,
    padding: 14,
    borderWidth: 1,
  },
  choiceButtonIdle: {
    borderColor: "rgba(27,26,23,0.08)",
    backgroundColor: "#fffdf9",
  },
  choiceButtonSelected: {
    borderColor: "#1b1a17",
    backgroundColor: "#1b1a17",
  },
  choiceTitle: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: "700" as const,
  },
  choiceTitleIdle: {
    color: "#1b1a17",
  },
  choiceTitleSelected: {
    color: "#f8f3ea",
  },
  choiceDescription: {
    fontSize: 13,
    lineHeight: 18,
  },
  choiceDescriptionIdle: {
    color: "#5c554b",
  },
  choiceDescriptionSelected: {
    color: "rgba(248,243,234,0.86)",
  },
  inlineNote: {
    fontSize: 13,
    lineHeight: 20,
    color: "#6c655b",
  },
  toggleRow: {
    flexDirection: "row" as const,
    gap: 10,
  },
  toggleButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 16,
    borderWidth: 1,
  },
  toggleButtonIdle: {
    borderColor: "rgba(27,26,23,0.08)",
    backgroundColor: "#f6ede0",
  },
  toggleButtonSelected: {
    borderColor: "#1b1a17",
    backgroundColor: "#1b1a17",
  },
  toggleText: {
    fontSize: 14,
    fontWeight: "700" as const,
  },
  toggleTextIdle: {
    color: "#1b1a17",
  },
  toggleTextSelected: {
    color: "#ffffff",
  },
  fieldStack: {
    gap: 14,
  },
  field: {
    gap: 8,
  },
  fieldLabel: {
    fontSize: 14,
    fontWeight: "700" as const,
    color: "#1b1a17",
  },
  inputRow: {
    flexDirection: "row" as const,
    alignItems: "center",
    gap: 10,
  },
  input: {
    flex: 1,
    minWidth: 0,
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderColor: "rgba(27,26,23,0.12)",
    backgroundColor: "#ffffff",
    color: "#1b1a17",
    fontSize: 16,
  },
  suffixPill: {
    minWidth: 48,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 999,
    backgroundColor: "#f4eadf",
  },
  suffixText: {
    fontSize: 12,
    fontWeight: "700" as const,
    color: "#8a6b45",
  },
  helperText: {
    fontSize: 12,
    lineHeight: 18,
    color: "#6c655b",
  },
  compactRow: {
    flexDirection: "row" as const,
    gap: 10,
  },
  compactField: {
    flex: 1,
    minWidth: 0,
  },
  resetButton: {
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 999,
    backgroundColor: "rgba(138,107,69,0.12)",
  },
  resetButtonText: {
    color: "#8a6b45",
    fontSize: 13,
    fontWeight: "700" as const,
  },
  resultHero: {
    gap: 12,
    borderRadius: 28,
    padding: 20,
    borderWidth: 1,
    borderColor: "rgba(27,26,23,0.08)",
    backgroundColor: "#fffdf9",
    shadowColor: "#1b1a17",
    shadowOpacity: 0.06,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 2,
  },
  resultHeroTop: {
    flexDirection: "row" as const,
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 12,
  },
  resultHeroCopy: {
    flex: 1,
    minWidth: 0,
    gap: 4,
  },
  resultHeroTitle: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: "700" as const,
    color: "#1b1a17",
  },
  resultBadge: {
    gap: 2,
    maxWidth: 160,
    alignItems: "flex-end",
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "rgba(27,26,23,0.08)",
    backgroundColor: "#f8f3ea",
  },
  resultBadgeLabel: {
    fontSize: 11,
    fontWeight: "700" as const,
    letterSpacing: 1.2,
    textTransform: "uppercase" as const,
    color: "#8a6b45",
  },
  resultBadgeTitle: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "700" as const,
    color: "#1b1a17",
    textAlign: "right" as const,
  },
  resultBadgeValue: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "700" as const,
    color: "#1b1a17",
    textAlign: "right" as const,
  },
  resultHeroNote: {
    fontSize: 13,
    lineHeight: 20,
    color: "#5c554b",
  },
  resultGrid: {
    flexDirection: "row" as const,
    flexWrap: "wrap" as const,
    gap: 10,
  },
  resultStat: {
    flexGrow: 1,
    flexBasis: "48%",
    gap: 4,
    borderRadius: 20,
    padding: 14,
    borderWidth: 1,
    borderColor: "rgba(27,26,23,0.08)",
    backgroundColor: "#fffdf9",
  },
  resultLabel: {
    fontSize: 12,
    fontWeight: "700" as const,
    letterSpacing: 1.1,
    textTransform: "uppercase" as const,
    color: "#8a6b45",
  },
  resultValue: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "700" as const,
    color: "#1b1a17",
  },
  resultHint: {
    fontSize: 12,
    lineHeight: 18,
    color: "#5c554b",
  },
  note: {
    fontSize: 13,
    lineHeight: 20,
    color: "#5c554b",
  },
} as const;
