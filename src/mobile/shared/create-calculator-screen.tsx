"use client";

import { useState } from "react";

import { Pressable, Text, TextInput, View, type KeyboardType } from "../primitives";

type PrimitiveValue = number | string | boolean;

type CalculatorInput = Record<string, PrimitiveValue>;
type CalculatorResult = Record<string, unknown>;

export type MobileCalculatorScreenConfig<TInput extends CalculatorInput, TResult extends CalculatorResult> = {
  title: string;
  intro?: string;
  notes?: string[];
  defaultValue: TInput;
  calculate: (input: TInput) => TResult;
  fieldLabels?: Partial<Record<keyof TInput, string>>;
  resultLabels?: Partial<Record<keyof TResult, string>>;
};

function formatLabel(key: string) {
  return key
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[-_]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^./, (character) => character.toUpperCase());
}

function formatDisplayValue(value: unknown): string {
  if (typeof value === "number") {
    return Number.isInteger(value)
      ? value.toLocaleString("en-US")
      : new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(value);
  }

  if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  }

  if (value === null || value === undefined) {
    return "-";
  }

  if (Array.isArray(value)) {
    return value.map(formatDisplayValue).join(", ");
  }

  if (typeof value === "object") {
    return JSON.stringify(value);
  }

  return String(value);
}

function createFormState<TInput extends CalculatorInput>(value: TInput) {
  return Object.fromEntries(
    Object.entries(value).map(([key, currentValue]) => [key, String(currentValue)]),
  ) as Record<keyof TInput, string>;
}

function parseFormState<TInput extends CalculatorInput>(
  state: Record<keyof TInput, string>,
  template: TInput,
) {
  const nextValue = {} as TInput;

  for (const [key, templateValue] of Object.entries(template) as Array<[keyof TInput, TInput[keyof TInput]]>) {
    const rawValue = state[key];

    if (typeof templateValue === "number") {
      const parsedValue = Number.parseFloat(rawValue.replace(",", "."));
      nextValue[key] = (Number.isFinite(parsedValue) ? parsedValue : 0) as TInput[keyof TInput];
      continue;
    }

    if (typeof templateValue === "boolean") {
      nextValue[key] = (rawValue === "true") as TInput[keyof TInput];
      continue;
    }

    nextValue[key] = rawValue as TInput[keyof TInput];
  }

  return nextValue;
}

function inputKeyboardType(value: PrimitiveValue): KeyboardType {
  return typeof value === "number" ? "numeric" : "default";
}

function Field({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType,
}: {
  label: string;
  value: string;
  onChangeText: (nextValue: string) => void;
  placeholder: string;
  keyboardType: KeyboardType;
}) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        accessibilityLabel={label}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9c8f7f"
        selectionColor="#8a6b45"
        style={styles.input}
        value={value}
      />
    </View>
  );
}

function ResultItem({ label, value }: { label: string; value: unknown }) {
  return (
    <View style={styles.resultItem}>
      <Text style={styles.resultLabel}>{label}</Text>
      <Text style={styles.resultValue}>{formatDisplayValue(value)}</Text>
    </View>
  );
}

export function createMobileCalculatorScreen<TInput extends CalculatorInput, TResult extends CalculatorResult>(
  config: MobileCalculatorScreenConfig<TInput, TResult>,
) {
  const fieldKeys = Object.keys(config.defaultValue) as Array<keyof TInput>;

  return function MobileCalculatorScreen({ initialValue }: { initialValue?: TInput } = {}) {
    const baseValue = initialValue ?? config.defaultValue;
    const [formState, setFormState] = useState<Record<keyof TInput, string>>(() => createFormState(baseValue));
    const inputValue = parseFormState(formState, baseValue);
    const resultValue = config.calculate(inputValue);

    const reset = () => {
      setFormState(createFormState(baseValue));
    };

    return (
      <View style={styles.screen}>
        <View style={styles.heroCard}>
          <Text style={styles.eyebrow}>Mobile port</Text>
          <Text style={styles.title}>{config.title}</Text>
          {config.intro ? <Text style={styles.description}>{config.intro}</Text> : null}
        </View>

        <View style={styles.card}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionLabel}>Inputs</Text>
            <Pressable accessibilityLabel={`Reset ${config.title}`} onPress={reset} style={styles.resetButton}>
              <Text style={styles.resetButtonText}>Reset</Text>
            </Pressable>
          </View>

          <View style={styles.fieldsStack}>
            {fieldKeys.map((key) => {
              const templateValue = baseValue[key];
              const label = formatLabel(config.fieldLabels?.[key] ?? String(key));
              const placeholder = String(templateValue);

              return (
                <Field
                  key={String(key)}
                  label={label}
                  value={formState[key]}
                  onChangeText={(nextValue) => {
                    setFormState((currentState) => ({
                      ...currentState,
                      [key]: nextValue,
                    }));
                  }}
                  placeholder={placeholder}
                  keyboardType={inputKeyboardType(templateValue)}
                />
              );
            })}
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionLabel}>Result</Text>
            <Text style={styles.sectionMeta}>
              {Object.keys(resultValue).length} output{Object.keys(resultValue).length === 1 ? "" : "s"}
            </Text>
          </View>

          <View style={styles.resultsStack}>
            {Object.entries(resultValue).map(([key, value]) => (
              <ResultItem key={key} label={formatLabel(config.resultLabels?.[key as keyof TResult] ?? key)} value={value} />
            ))}
          </View>
        </View>

        {config.notes && config.notes.length > 0 ? (
          <View style={styles.card}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionLabel}>Notes</Text>
              <Text style={styles.sectionMeta}>Helpful context</Text>
            </View>

            <View style={styles.notesStack}>
              {config.notes.map((note) => (
                <Text key={note} style={styles.note}>
                  {note}
                </Text>
              ))}
            </View>
          </View>
        ) : null}
      </View>
    );
  };
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
  fieldsStack: {
    gap: 14,
  },
  field: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: "700" as const,
    color: "#1b1a17",
  },
  input: {
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
  resultsStack: {
    gap: 12,
  },
  resultItem: {
    gap: 4,
    borderRadius: 18,
    padding: 14,
    backgroundColor: "#f8f3ea",
    borderWidth: 1,
    borderColor: "rgba(27,26,23,0.08)",
  },
  resultLabel: {
    fontSize: 12,
    fontWeight: "700" as const,
    letterSpacing: 1.2,
    textTransform: "uppercase" as const,
    color: "#8a6b45",
  },
  resultValue: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "700" as const,
    color: "#1b1a17",
  },
  notesStack: {
    gap: 10,
  },
  note: {
    fontSize: 13,
    lineHeight: 20,
    color: "#5c554b",
  },
} as const;
