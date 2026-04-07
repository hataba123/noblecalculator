import type { TdeeInput } from "./schema";

export const tdeeConfig = {
  title: "TDEE Calculator",
  defaultValue: {
    unitSystem: "metric",
    equationUsed: "mifflin-st-jeor",
    sex: "male",
    ageYears: 30,
    weightValue: 70,
    heightValue: 175,
    heightInches: 0,
    bodyFatPercent: 20,
    activityLevel: "sedentary",
    goalMode: "maintain",
  } satisfies TdeeInput,
};
