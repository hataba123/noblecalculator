export type CalculatorDefinition = {
  slug: string;
  title: string;
  description: string;
};

export type CalculatorSeoExample = {
  title: string;
  scenario: string;
  result: string;
  explanation: string;
};

export type CalculatorSeoFaqItem = {
  question: string;
  answer: string;
};

export type CalculatorSeoContent = {
  metaDescription: string;
  keywords: string[];
  intro: string;
  visual?: {
    variant: "margin" | "rate" | "income" | "roi" | "roas" | "build";
    title: string;
    summary: string;
    stats: Array<{
      label: string;
      value: string;
    }>;
  };
  formulaTitle: string;
  formula: string;
  formulaNote: string;
  whenToUse: string;
  examples: CalculatorSeoExample[];
  commonMistakes: string[];
  faq: CalculatorSeoFaqItem[];
  ctaTitle: string;
  ctaText: string;
  ctaNote: string;
};
