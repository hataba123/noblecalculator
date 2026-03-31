import type { CalculatorSeoContent } from "../shared/types";

export const bmiSeoContent: CalculatorSeoContent = {
  metaDescription: "Check your body mass index and healthy weight range with a simple BMI calculator.",
  keywords: ["BMI calculator", "body mass index", "healthy weight range", "weight check"],
  intro: "Use this when you want a fast read on how your weight compares with your height.",
  formulaTitle: "BMI formula",
  formula: "BMI = weight ÷ height², with height measured in meters or converted from inches.",
  formulaNote: "BMI is a screening tool, not a diagnosis. It gives a general range, not a full health picture.",
  whenToUse: "Use it when setting a fitness goal, checking weight against height, or comparing a target range with your current measurements.",
  examples: [
    {
      title: "Metric example",
      scenario: "A person weighs 70 kg and is 175 cm tall.",
      result: "BMI is 22.9, which is in the normal range.",
      explanation: "This height and weight combination falls inside the standard healthy band.",
    },
    {
      title: "Imperial example",
      scenario: "A person weighs 154 lb and is 5 ft 9 in tall.",
      result: "BMI is 22.8, which is in the normal range.",
      explanation: "The BMI result is similar after converting the units.",
    },
    {
      title: "Higher BMI example",
      scenario: "A person weighs 205 lb and is 5 ft 10 in tall.",
      result: "BMI is 29.4, which is in the overweight range.",
      explanation: "This is a quick signal that the current weight is above the healthy band for that height.",
    },
  ],
  commonMistakes: [
    "Using height in the wrong unit.",
    "Forgetting to square the height before dividing.",
    "Treating BMI as the only health indicator.",
  ],
  faq: [
    {
      question: "What does BMI measure?",
      answer: "BMI compares weight to height and places the result into a broad category.",
    },
    {
      question: "Is BMI a medical diagnosis?",
      answer: "No. BMI is only a screening number and does not replace professional advice.",
    },
  ],
  ctaTitle: "Want a better health tracking habit?",
  ctaText: "A simple calculator can help you keep an eye on your starting point before you set a fitness target.",
  ctaNote: "Recheck BMI when your weight or height inputs change.",
};