import { describe, expect, it } from "vitest";

import { calculateBmi, convertImperialToMetricInput, convertMetricToImperialInput } from "../../packages/calculators-core/src/bmi";
import { calculateTdee } from "../../packages/calculators-core/src/tdee-calculator";

describe("health calculators", () => {
  it("converts bmi inputs from metric to imperial", () => {
    const metricInput = { unitSystem: "metric" as const, weight: 70, height: 175, heightInches: 0 };
    const imperialInput = convertMetricToImperialInput(metricInput);

    expect(imperialInput.unitSystem).toBe("imperial");
    expect(imperialInput.weight).toBeCloseTo(154.3236, 4);
    expect(imperialInput.height).toBe(5);
    expect(imperialInput.heightInches).toBe(9);
  });

  it("converts bmi inputs from imperial to metric", () => {
    const imperialInput = { unitSystem: "imperial" as const, weight: 154, height: 5, heightInches: 9 };
    const metricInput = convertImperialToMetricInput(imperialInput);

    expect(metricInput.unitSystem).toBe("metric");
    expect(metricInput.weight).toBeCloseTo(69.8532, 4);
    expect(metricInput.height).toBeCloseTo(175.26, 2);
    expect(metricInput.heightInches).toBe(0);
  });

  it("calculates bmi and healthy weight range", () => {
    const result = calculateBmi({ unitSystem: "metric", weight: 70, height: 175, heightInches: 0 });

    expect(result.bmi).toBeCloseTo(22.857142857142858, 6);
    expect(result.category).toBe("Normal weight");
    expect(result.healthyWeightMin).toBeCloseTo(56.65625, 5);
    expect(result.healthyWeightMax).toBeCloseTo(76.25625, 5);
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
    expect(katchMcardle.bmrOrReeKcal).toBeCloseTo(1579.6, 1);
    expect(katchMcardle.tdeeKcal).toBeCloseTo(2448.38, 2);
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