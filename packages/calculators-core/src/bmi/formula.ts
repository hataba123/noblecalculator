import type { BmiInput, BmiResult } from "./schema";

const bmiUnderweightUpperBound = 18.5;
const bmiNormalUpperBound = 25;
const bmiOverweightUpperBound = 30;
const poundsPerKilogram = 2.2046226218;
const inchesPerMeter = 39.3700787402;

function getBmiCategory(bmi: number) {
  if (bmi < bmiUnderweightUpperBound) {
    return "Underweight";
  }

  if (bmi < bmiNormalUpperBound) {
    return "Normal weight";
  }

  if (bmi < bmiOverweightUpperBound) {
    return "Overweight";
  }

  return "Obesity";
}

function calculateMetricBmi(weightKg: number, heightCm: number) {
  const heightMeters = heightCm / 100;

  if (heightMeters <= 0 || weightKg <= 0) {
    return {
      bmi: 0,
      healthyWeightMin: 0,
      healthyWeightMax: 0,
    };
  }

  const heightSquared = heightMeters * heightMeters;

  return {
    bmi: weightKg / heightSquared,
    healthyWeightMin: bmiUnderweightUpperBound * heightSquared,
    healthyWeightMax: 24.9 * heightSquared,
  };
}

function calculateImperialBmi(weightLb: number, heightFeet: number, heightInches: number) {
  const totalInches = heightFeet * 12 + heightInches;

  if (totalInches <= 0 || weightLb <= 0) {
    return {
      bmi: 0,
      healthyWeightMin: 0,
      healthyWeightMax: 0,
    };
  }

  const heightSquared = totalInches * totalInches;

  return {
    bmi: (weightLb / heightSquared) * 703,
    healthyWeightMin: (bmiUnderweightUpperBound * heightSquared) / 703,
    healthyWeightMax: (24.9 * heightSquared) / 703,
  };
}

export function calculateBmi(input: BmiInput): BmiResult {
  const { bmi, healthyWeightMin, healthyWeightMax } =
    input.unitSystem === "imperial"
      ? calculateImperialBmi(input.weight, input.height, input.heightInches)
      : calculateMetricBmi(input.weight, input.height);

  return {
    bmi,
    category: getBmiCategory(bmi),
    healthyWeightMin,
    healthyWeightMax,
    weightUnit: input.unitSystem === "imperial" ? "lb" : "kg",
  };
}

export function convertMetricToImperialInput(input: BmiInput): BmiInput {
  const totalInches = input.height / 2.54;
  const height = Math.floor(totalInches / 12);
  const heightInches = Math.round(totalInches - height * 12);
  const normalizedHeight = heightInches === 12 ? height + 1 : height;
  const normalizedInches = heightInches === 12 ? 0 : heightInches;

  return {
    unitSystem: "imperial",
    weight: input.weight * poundsPerKilogram,
    height: normalizedHeight,
    heightInches: normalizedInches,
  };
}

export function convertImperialToMetricInput(input: BmiInput): BmiInput {
  const totalInches = input.height * 12 + input.heightInches;

  return {
    unitSystem: "metric",
    weight: input.weight / poundsPerKilogram,
    height: totalInches / inchesPerMeter,
    heightInches: 0,
  };
}
