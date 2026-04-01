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
      equationUsed: "mifflin-st-jeor",
      sex: "male",
      ageYears: 30,
      weightValue: 70,
      heightValue: 175,
      heightInches: 0,
      bodyFatPercent: 20,
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

  it("switches to revised harris-benedict", () => {
    const result = calculateTdee({
      unitSystem: "metric",
      equationUsed: "revised-harris-benedict",
      sex: "male",
      ageYears: 30,
      weightValue: 70,
      heightValue: 175,
      heightInches: 0,
      bodyFatPercent: 20,
      activityLevel: "moderately-active",
      goalMode: "maintain",
    });

    expect(result.equationUsed).toBe("Revised Harris-Benedict");
    expect(result.bmrOrReeKcal).toBeCloseTo(1695.667, 3);
    expect(result.tdeeKcal).toBeCloseTo(2628.2839, 4);
    expect(result.targetKcal).toBeCloseTo(2628.2839, 4);
  });

  it("calculates cunningham and katch mcardle", () => {
    const baseInput = {
      unitSystem: "metric" as const,
      sex: "male" as const,
      ageYears: 30,
      weightValue: 70,
      heightValue: 175,
      heightInches: 0,
      bodyFatPercent: 20,
      activityLevel: "moderately-active" as const,
      goalMode: "maintain" as const,
    };

    const cunningham = calculateTdee({ ...baseInput, equationUsed: "cunningham" });
    const katchMcardle = calculateTdee({ ...baseInput, equationUsed: "katch-mcardle" });

    expect(cunningham.equationUsed).toBe("Cunningham");
    expect(cunningham.bmrOrReeKcal).toBeCloseTo(1732, 0);
    expect(cunningham.tdeeKcal).toBeCloseTo(2684.6, 1);

    expect(katchMcardle.equationUsed).toBe("Katch-McArdle");
    expect(katchMcardle.bmrOrReeKcal).toBeCloseTo(1570.6, 1);
    expect(katchMcardle.tdeeKcal).toBeCloseTo(2434.4, 1);
  });

  it("calculates schofield who", () => {
    const result = calculateTdee({
      unitSystem: "metric",
      equationUsed: "schofield-who",
      sex: "male",
      ageYears: 30,
      weightValue: 70,
      heightValue: 175,
      heightInches: 0,
      bodyFatPercent: 20,
      activityLevel: "moderately-active",
      goalMode: "maintain",
    });

    expect(result.equationUsed).toBe("Schofield / WHO");
    expect(result.bmrOrReeKcal).toBeCloseTo(1746.19, 2);
    expect(result.tdeeKcal).toBeCloseTo(2706.5945, 4);
  });
});