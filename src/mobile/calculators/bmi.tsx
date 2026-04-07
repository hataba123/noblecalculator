"use client";

import { useState } from "react";

import { calculateBmi, convertImperialToMetricInput, convertMetricToImperialInput, bmiConfig, bmiSeoContent, type BmiInput, type BmiUnitSystem } from "@noblecalculator/calculators-core/bmi";

import { Pressable, Text, TextInput, View, type KeyboardType, type ViewProps } from "../primitives";

type BmiFormState = {
    unitSystem: BmiUnitSystem;
    weight: string;
    height: string;
    heightInches: string;
};

export type BmiCalculatorProps = {
    initialValue?: BmiInput;
};

const numericKeyboardType: KeyboardType = "numeric";

function formatInputValue(value: number) {
    return Number.isInteger(value) ? String(value) : value.toFixed(1).replace(/\.0$/, "");
}

function parseInputValue(value: string) {
    const parsedValue = Number.parseFloat(value.replace(",", "."));
    return Number.isFinite(parsedValue) ? parsedValue : 0;
}

function toFormState(input: BmiInput): BmiFormState {
    return {
        unitSystem: input.unitSystem,
        weight: formatInputValue(input.weight),
        height: formatInputValue(input.height),
        heightInches: formatInputValue(input.heightInches),
    };
}

function toBmiInput(state: BmiFormState): BmiInput {
    return {
        unitSystem: state.unitSystem,
        weight: parseInputValue(state.weight),
        height: parseInputValue(state.height),
        heightInches: parseInputValue(state.heightInches),
    };
}

function unitButtonStyle(selected: boolean) {
    return {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: selected ? "#1b1a17" : "rgba(27,26,23,0.08)",
        backgroundColor: selected ? "#1b1a17" : "#f6ede0",
    };
}

function unitButtonTextStyle(selected: boolean) {
    return {
        color: selected ? "#ffffff" : "#1b1a17",
        fontSize: 14,
        fontWeight: "700" as const,
    };
}

function Field({
    label,
    helperText,
    suffix,
    value,
    onChangeText,
    placeholder,
    keyboardType = numericKeyboardType,
    wrapperStyle,
}: {
    label: string;
    helperText: string;
    suffix: string;
    value: string;
    onChangeText: (nextValue: string) => void;
    placeholder: string;
    keyboardType?: KeyboardType;
    wrapperStyle?: ViewProps["style"];
}) {
    return (
        <View style={{ ...styles.field, ...(wrapperStyle ?? {}) }}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputRow}>
                <TextInput
                    accessibilityLabel={label}
                    keyboardType={keyboardType}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
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

function ResultStat({ label, value }: { label: string; value: string }) {
    return (
        <View style={styles.resultStat}>
            <Text style={styles.resultLabel}>{label}</Text>
            <Text style={styles.resultValue}>{value}</Text>
        </View>
    );
}

function bmiDisplayValue(value: number) {
    return value.toFixed(1);
}

export function BmiCalculator({ initialValue = bmiConfig.defaultValue }: BmiCalculatorProps = {}) {
    const [formState, setFormState] = useState<BmiFormState>(() => toFormState(initialValue));

    const bmiInput = toBmiInput(formState);
    const result = calculateBmi(bmiInput);

    const setUnitSystem = (nextUnitSystem: BmiUnitSystem) => {
        setFormState((currentState) => {
            if (currentState.unitSystem === nextUnitSystem) {
                return currentState;
            }

            const convertedInput = nextUnitSystem === "imperial"
                ? convertMetricToImperialInput(toBmiInput(currentState))
                : convertImperialToMetricInput(toBmiInput(currentState));

            return toFormState(convertedInput);
        });
    };

    const reset = () => {
        setFormState(toFormState(initialValue));
    };

    return (
        <View style={styles.screen}>
            <View style={styles.heroCard}>
                <Text style={styles.eyebrow}>Mobile port</Text>
                <Text style={styles.title}>{bmiConfig.title}</Text>
                <Text style={styles.description}>{bmiSeoContent.intro}</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.sectionLabel}>Unit system</Text>
                <View style={styles.toggleRow}>
                    <Pressable accessibilityLabel="Use metric units" onPress={() => setUnitSystem("metric")} style={unitButtonStyle(formState.unitSystem === "metric")}>
                        <Text style={unitButtonTextStyle(formState.unitSystem === "metric")}>Metric</Text>
                    </Pressable>
                    <Pressable accessibilityLabel="Use imperial units" onPress={() => setUnitSystem("imperial")} style={unitButtonStyle(formState.unitSystem === "imperial")}>
                        <Text style={unitButtonTextStyle(formState.unitSystem === "imperial")}>Imperial</Text>
                    </Pressable>
                </View>

                <View style={styles.fieldsStack}>
                    <Field
                        label="Weight"
                        suffix={formState.unitSystem === "metric" ? "kg" : "lb"}
                        value={formState.weight}
                        onChangeText={(nextWeight) => setFormState((currentState) => ({ ...currentState, weight: nextWeight }))}
                        placeholder={formState.unitSystem === "metric" ? "70" : "154"}
                        helperText={formState.unitSystem === "metric" ? "Enter your weight in kilograms." : "Enter your weight in pounds."}
                    />

                    {formState.unitSystem === "metric" ? (
                        <Field
                            label="Height"
                            suffix="cm"
                            value={formState.height}
                            onChangeText={(nextHeight) => setFormState((currentState) => ({ ...currentState, height: nextHeight }))}
                            placeholder="175"
                            helperText="Enter your height in centimeters."
                        />
                    ) : (
                        <View style={styles.inlineFields}>
                            <Field
                                label="Height"
                                suffix="ft"
                                value={formState.height}
                                onChangeText={(nextHeight) => setFormState((currentState) => ({ ...currentState, height: nextHeight }))}
                                placeholder="5"
                                helperText="Feet part of your height."
                                wrapperStyle={styles.inlineField}
                            />
                            <Field
                                label="Inches"
                                suffix="in"
                                value={formState.heightInches}
                                onChangeText={(nextHeightInches) => setFormState((currentState) => ({ ...currentState, heightInches: nextHeightInches }))}
                                placeholder="9"
                                helperText="Remaining inches."
                                wrapperStyle={styles.inlineField}
                            />
                        </View>
                    )}
                </View>

                <Pressable accessibilityLabel="Reset BMI inputs" onPress={reset} style={styles.resetButton}>
                    <Text style={styles.resetButtonText}>Reset</Text>
                </Pressable>
            </View>

            <View style={styles.card}>
                <Text style={styles.sectionLabel}>Result</Text>
                <View style={styles.resultGrid}>
                    <ResultStat label="BMI" value={bmiDisplayValue(result.bmi)} />
                    <ResultStat label="Category" value={result.category} />
                    <ResultStat
                        label="Healthy range"
                        value={`${bmiDisplayValue(result.healthyWeightMin)} - ${bmiDisplayValue(result.healthyWeightMax)} ${result.weightUnit}`}
                    />
                </View>

                <Text style={styles.note}>{bmiSeoContent.formulaNote}</Text>
                <Text style={styles.note}>{bmiSeoContent.whenToUse}</Text>
            </View>
        </View>
    );
}

const styles = {
    screen: {
        gap: 16,
        padding: 16,
        backgroundColor: "#f8f3ea",
        minHeight: "100%",
    },
    heroCard: {
        gap: 10,
        borderRadius: 24,
        padding: 18,
        borderWidth: 1,
        borderColor: "rgba(27,26,23,0.08)",
        backgroundColor: "#ffffff",
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
        borderRadius: 24,
        padding: 18,
        borderWidth: 1,
        borderColor: "rgba(27,26,23,0.08)",
        backgroundColor: "#ffffff",
    },
    sectionLabel: {
        fontSize: 12,
        fontWeight: "700" as const,
        letterSpacing: 1.4,
        textTransform: "uppercase" as const,
        color: "#8a6b45",
    },
    toggleRow: {
        flexDirection: "row" as const,
        gap: 12,
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
        backgroundColor: "#fff",
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
        fontSize: 13,
        fontWeight: "700" as const,
        color: "#8a6b45",
    },
    helperText: {
        fontSize: 13,
        lineHeight: 18,
        color: "#6c655b",
    },
    inlineFields: {
        flexDirection: "row" as const,
        gap: 12,
    },
    inlineField: {
        flex: 1,
        minWidth: 0,
    },
    resetButton: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        borderRadius: 16,
        backgroundColor: "#8a6b45",
    },
    resetButtonText: {
        color: "#ffffff",
        fontSize: 15,
        fontWeight: "700" as const,
    },
    resultGrid: {
        gap: 12,
    },
    resultStat: {
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
    note: {
        fontSize: 13,
        lineHeight: 20,
        color: "#5c554b",
    },
} as const;