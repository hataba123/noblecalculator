import type { TdeeInput } from "./schema";

export const tdeeConfig = {
  title: "TDEE Calculator",
  defaultValue: {
    unitSystem: "metric",
    sex: "male",
    ageYears: 30,
    weightValue: 70,
    heightValue: 175,
    heightInches: 0,
    activityLevel: "sedentary",
    goalMode: "maintain",
  } satisfies TdeeInput,
};