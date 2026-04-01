import type { TdeeActivityLevel, TdeeEquation, TdeeGoalMode, TdeeInput, TdeeResult } from "./schema";

export const tdeeEquationOptions: Array<{
  value: TdeeEquation;
  label: string;
  description: string;
}> = [
  {
    value: "mifflin-st-jeor",
    label: "Mifflin–St. Jeor",
    description: "A modern, practical default for most adults.",
  },
  {
    value: "revised-harris-benedict",
    label: "Revised Harris-Benedict",
    description: "A classic reference formula used by many calculators.",
  },
  {
    value: "cunningham",
    label: "Cunningham",
    description: "Uses lean body mass for a body-composition-based estimate.",
  },
  {
    value: "katch-mcardle",
    label: "Katch-McArdle",
    description: "Uses lean body mass and body fat percentage.",
  },
  {
    value: "schofield-who",
    label: "Schofield / WHO",
    description: "Uses age bands and body weight for a reference estimate.",
  },
];

export const tdeeSexOptions = [
  { value: "male" as const, label: "Male", description: "Add 5 to the resting calorie formula." },
  { value: "female" as const, label: "Female", description: "Subtract 161 from the resting calorie formula." },
];

export const tdeeActivityOptions: Array<{
  value: TdeeActivityLevel;
  label: string;
  description: string;
  multiplier: number;
}> = [
  { value: "sedentary", label: "Sedentary", description: "Desk work, little or no exercise.", multiplier: 1.2 },
  { value: "lightly-active", label: "Lightly active", description: "Walking, gardening, and light movement.", multiplier: 1.375 },
  { value: "moderately-active", label: "Moderately active", description: "Fast walking, water aerobics, and regular workouts.", multiplier: 1.55 },
  { value: "very-active", label: "Very active", description: "Jogging, bicycling, lap swimming, or hard training.", multiplier: 1.725 },
  { value: "extra-active", label: "Extra active", description: "Physical job, two-a-day training, or very demanding activity.", multiplier: 1.9 },
];

export const tdeeGoalOptions: Array<{
  value: TdeeGoalMode;
  label: string;
  description: string;
}> = [
  { value: "maintain", label: "Maintain", description: "Keep weight steady." },
  { value: "lose", label: "Lose", description: "Create a calorie deficit." },
  { value: "gain", label: "Gain", description: "Create a calorie surplus." },
];

const poundsPerKilogram = 2.2046226218;
const centimetersPerInch = 2.54;

function getActivityMultiplier(activityLevel: TdeeActivityLevel) {
  return tdeeActivityOptions.find((option) => option.value === activityLevel)?.multiplier ?? 1.2;
}

function getEquationLabel(equationUsed: TdeeEquation) {
  return tdeeEquationOptions.find((option) => option.value === equationUsed)?.label ?? tdeeEquationOptions[0].label;
}

export function equationNeedsBodyFatPercent(equationUsed: TdeeEquation) {
  return equationUsed === "cunningham" || equationUsed === "katch-mcardle";
}

function getLeanBodyMassKg(weightKg: number, bodyFatPercent: number) {
  const clampedBodyFatPercent = Math.min(Math.max(bodyFatPercent, 0), 70);
  return weightKg * (1 - clampedBodyFatPercent / 100);
}

function getGoalTargetLabel(goalMode: TdeeGoalMode) {
  switch (goalMode) {
    case "lose":
      return "Mild fat loss target";
    case "gain":
      return "Weight gain target";
    case "maintain":
    default:
      return "Maintenance calories";
  }
}

function calculateRestingCalories({ equationUsed, sex, ageYears, weightValue, heightValue, heightInches, bodyFatPercent, unitSystem }: TdeeInput) {
  const weightKg = unitSystem === "imperial" ? weightValue / poundsPerKilogram : weightValue;
  const heightCm = unitSystem === "imperial" ? (heightValue * 12 + heightInches) * centimetersPerInch : heightValue;
  const normalizedBodyFatPercent = Number.isFinite(bodyFatPercent) ? bodyFatPercent : 20;

  if (ageYears <= 0 || weightKg <= 0 || heightCm <= 0) {
    return 0;
  }

  if (equationUsed === "cunningham") {
    const leanBodyMassKg = getLeanBodyMassKg(weightKg, normalizedBodyFatPercent);
    return 500 + 22 * leanBodyMassKg;
  }

  if (equationUsed === "katch-mcardle") {
    const leanBodyMassKg = getLeanBodyMassKg(weightKg, normalizedBodyFatPercent);
    return 370 + 21.6 * leanBodyMassKg;
  }

  if (equationUsed === "schofield-who") {
    if (sex === "male") {
      if (ageYears <= 30) {
        return 15.057 * weightKg + 692.2;
      }

      if (ageYears <= 60) {
        return 11.472 * weightKg + 873.1;
      }

      return 11.711 * weightKg + 587.7;
    }

    if (ageYears <= 30) {
      return 14.818 * weightKg + 486.6;
    }

    if (ageYears <= 60) {
      return 8.126 * weightKg + 845.6;
    }

    return 9.082 * weightKg + 658.5;
  }

  if (equationUsed === "revised-harris-benedict") {
    if (sex === "male") {
      return 88.362 + 13.397 * weightKg + 4.799 * heightCm - 5.677 * ageYears;
    }

    return 447.593 + 9.247 * weightKg + 3.098 * heightCm - 4.33 * ageYears;
  }

  const sexAdjustment = sex === "male" ? 5 : -161;

  return 10 * weightKg + 6.25 * heightCm - 5 * ageYears + sexAdjustment;
}

export function calculateTdee(input: TdeeInput): TdeeResult {
  const bmrOrReeKcal = calculateRestingCalories(input);
  const activityMultiplier = getActivityMultiplier(input.activityLevel);
  const tdeeKcal = bmrOrReeKcal * activityMultiplier;
  const maintenanceKcal = tdeeKcal;
  const mildCutKcal = Math.max(0, tdeeKcal - 300);
  const standardCutKcal = Math.max(0, tdeeKcal - 500);
  const gainKcal = tdeeKcal + 250;

  let targetKcal = maintenanceKcal;

  if (input.goalMode === "lose") {
    targetKcal = mildCutKcal;
  }

  if (input.goalMode === "gain") {
    targetKcal = gainKcal;
  }

  return {
    equationUsed: getEquationLabel(input.equationUsed),
    bmrOrReeKcal,
    tdeeKcal,
    targetKcal,
    maintenanceKcal,
    mildCutKcal,
    standardCutKcal,
    gainKcal,
    activityMultiplier,
    selectedGoalLabel: getGoalTargetLabel(input.goalMode),
  };
}

export function convertMetricToImperialInput(input: TdeeInput): TdeeInput {
  const totalInches = input.heightValue / centimetersPerInch;
  const heightValue = Math.floor(totalInches / 12);
  const heightInches = Math.round(totalInches - heightValue * 12);
  const normalizedHeightValue = heightInches === 12 ? heightValue + 1 : heightValue;
  const normalizedHeightInches = heightInches === 12 ? 0 : heightInches;

  return {
    ...input,
    unitSystem: "imperial",
    weightValue: input.weightValue * poundsPerKilogram,
    heightValue: normalizedHeightValue,
    heightInches: normalizedHeightInches,
  };
}

export function convertImperialToMetricInput(input: TdeeInput): TdeeInput {
  const totalInches = input.heightValue * 12 + input.heightInches;

  return {
    ...input,
    unitSystem: "metric",
    weightValue: input.weightValue / poundsPerKilogram,
    heightValue: totalInches * centimetersPerInch,
    heightInches: 0,
  };
}