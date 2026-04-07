import type { RoiInput } from "./schema";

export const roiConfig = {
  title: "ROI Calculator",
  defaultValue: {
    investment: 12000,
    returnAmount: 16200,
  } satisfies RoiInput,
};
