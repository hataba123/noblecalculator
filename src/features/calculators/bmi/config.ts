import type { BmiInput } from "./schema";

export const bmiConfig = {
  title: "BMI Calculator",
  defaultValue: {
    unitSystem: "metric",
    weight: 70,
    height: 175,
    heightInches: 0,
  } satisfies BmiInput,
};