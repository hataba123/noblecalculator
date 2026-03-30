import type { MarkupInput } from "./schema";

export const markupConfig = {
  title: "Markup Calculator",
  defaultValue: {
    cost: 100,
    markupRate: 30,
  } satisfies MarkupInput,
};
