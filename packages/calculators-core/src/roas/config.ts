import type { RoasInput } from "./schema";

export const roasConfig = {
  title: "ROAS Calculator",
  defaultValue: {
    adSpend: 1200,
    revenue: 5400,
  } satisfies RoasInput,
};
