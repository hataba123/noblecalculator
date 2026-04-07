import type { ProfitMarginInput } from "./schema";

export const profitMarginConfig = {
    title: "Profit Margin Calculator",
    defaultValue: {
        revenue: 12000,
        cost: 7500,
    } satisfies ProfitMarginInput,
};