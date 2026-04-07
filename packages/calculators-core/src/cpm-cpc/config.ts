import type { CpmCpcInput } from "./schema";

export const cpmCpcConfig = {
  title: "CPM / CPC Calculator",
  defaultValue: {
    adSpend: 2500,
    impressions: 120000,
    clicks: 1600,
  } satisfies CpmCpcInput,
};
