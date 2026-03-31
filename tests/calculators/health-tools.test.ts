import { describe, expect, it } from "vitest";

import { calculateBmi } from "@/src/features/calculators/bmi";

describe("health calculators", () => {
  it("calculates bmi and healthy weight range", () => {
    const result = calculateBmi({ unitSystem: "metric", weight: 70, height: 175, heightInches: 0 });

    expect(result.bmi).toBeCloseTo(22.8571, 4);
    expect(result.category).toBe("Normal weight");
    expect(result.healthyWeightMin).toBeCloseTo(56.6562, 4);
    expect(result.healthyWeightMax).toBeCloseTo(76.2312, 4);
    expect(result.weightUnit).toBe("kg");
  });
});