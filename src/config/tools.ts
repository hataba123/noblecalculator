import { calculatorRegistry, getCalculatorDefinition } from "@/src/features/calculators/shared/calculator-registry";

// Single registry keeps UI, API, sitemap, and page metadata in sync.
export const tools = calculatorRegistry;

export { getCalculatorDefinition };
