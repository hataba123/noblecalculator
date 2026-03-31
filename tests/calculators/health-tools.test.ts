import { describe, expect, it } from "vitest";

import { calculateBmi } from "@/src/features/calculators/bmi";
import { calculateTdee } from "@/src/features/calculators/tdee-calculator";

describe("health calculators", () => {
  it("calculates bmi and healthy weight range", () => {
    const result = calculateBmi({ unitSystem: "metric", weight: 70, height: 175, heightInches: 0 });

    expect(result.bmi).toBeCloseTo(22.8571, 4);
    expect(result.category).toBe("Normal weight");
    expect(result.healthyWeightMin).toBeCloseTo(56.6562, 4);
    expect(result.healthyWeightMax).toBeCloseTo(76.2312, 4);
    expect(result.weightUnit).toBe("kg");
  });

  it("calculates tdee and calorie targets", () => {
    const result = calculateTdee({
      unitSystem: "metric",
      sex: "male",
      ageYears: 30,
      weightValue: 70,
      heightValue: 175,
      heightInches: 0,
      activityLevel: "moderately-active",
      goalMode: "lose",
    });

    expect(result.equationUsed).toBe("Mifflin–St. Jeor");
    expect(result.bmrOrReeKcal).toBeCloseTo(1648.75, 4);
    expect(result.tdeeKcal).toBeCloseTo(2555.5625, 4);
    expect(result.targetKcal).toBeCloseTo(2255.5625, 4);
    expect(result.maintenanceKcal).toBeCloseTo(2555.5625, 4);
    expect(result.mildCutKcal).toBeCloseTo(2255.5625, 4);
    expect(result.standardCutKcal).toBeCloseTo(2055.5625, 4);
    expect(result.gainKcal).toBeCloseTo(2805.5625, 4);
  });
});