export type TdeeUnitSystem = "metric" | "imperial";

export type TdeeSex = "male" | "female";

export type TdeeActivityLevel = "sedentary" | "lightly-active" | "moderately-active" | "very-active" | "extra-active";

export type TdeeGoalMode = "maintain" | "lose" | "gain";

export type TdeeEquation =
  | "mifflin-st-jeor"
  | "revised-harris-benedict"
  | "cunningham"
  | "katch-mcardle"
  | "schofield-who";

export type TdeeInput = {
  unitSystem: TdeeUnitSystem;
  equationUsed: TdeeEquation;
  sex: TdeeSex;
  ageYears: number;
  weightValue: number;
  heightValue: number;
  heightInches: number;
  bodyFatPercent: number;
  activityLevel: TdeeActivityLevel;
  goalMode: TdeeGoalMode;
};

export type TdeeResult = {
  equationUsed: string;
  bmrOrReeKcal: number;
  tdeeKcal: number;
  targetKcal: number;
  maintenanceKcal: number;
  mildCutKcal: number;
  standardCutKcal: number;
  gainKcal: number;
  activityMultiplier: number;
  selectedGoalLabel: string;
};