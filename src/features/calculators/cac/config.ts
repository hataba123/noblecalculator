import type { CacInput } from "./schema";

export const cacConfig = {
  title: "CAC Calculator",
  defaultValue: {
    marketingSpend: 12000,
    newCustomers: 150,
  } satisfies CacInput,
};