export type BmiUnitSystem = "metric" | "imperial";

export type BmiInput = {
  unitSystem: BmiUnitSystem;
  weight: number;
  height: number;
  heightInches: number;
};

export type BmiResult = {
  bmi: number;
  category: string;
  healthyWeightMin: number;
  healthyWeightMax: number;
  weightUnit: "kg" | "lb";
};
