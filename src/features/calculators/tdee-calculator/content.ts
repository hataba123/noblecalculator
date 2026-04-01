import type { CalculatorSeoContent } from "../shared/types";

export const tdeeSeoContent: CalculatorSeoContent = {
  metaDescription: "Estimate adult calorie needs with a simple TDEE calculator and switch between common resting-calorie equations.",
  keywords: ["TDEE calculator", "adult calorie calculator", "BMR calculator", "calorie target calculator"],
  intro: "Use this when you want a practical estimate of resting calories, maintenance calories, and a starting point for cutting or gaining.",
  formulaTitle: "TDEE formula",
  formula: "Choose a resting-calorie equation, then TDEE = BMR x activity multiplier.",
  formulaNote: "This is an estimate for adults, not a medical prescription. Real energy needs can vary with age, body composition, and health status.",
  whenToUse: "Use it when planning a calorie target for maintenance, gradual fat loss, or moderate weight gain.",
  examples: [
    {
      title: "Desk worker",
      scenario: "A 30-year-old man weighs 70 kg, is 175 cm tall, and is sedentary.",
      result: "Resting calories are about 1,649 kcal/day and maintenance is about 1,979 kcal/day.",
      explanation: "A sedentary activity level keeps the total close to the resting estimate.",
    },
    {
      title: "Active routine",
      scenario: "A 28-year-old woman weighs 60 kg, is 165 cm tall, and is moderately active.",
      result: "Resting calories are about 1,330 kcal/day and maintenance is about 2,062 kcal/day.",
      explanation: "The activity multiplier increases daily needs after the resting estimate.",
    },
    {
      title: "Gaining phase",
      scenario: "A 35-year-old man weighs 82 kg, is 180 cm tall, and is very active.",
      result: "Resting calories are about 1,775 kcal/day and the gain target is about 3,312 kcal/day.",
      explanation: "This gives a simple calorie surplus starting point for a higher-energy phase.",
    },
  ],
  commonMistakes: [
    "Using the wrong height or weight unit.",
    "Treating maintenance calories as a fixed promise.",
    "Expecting the same target to work forever without rechecking.",
  ],
  faq: [
    {
      question: "Why is this only an estimate?",
      answer: "Activity, body composition, and health status all affect calorie needs, so the result is a practical starting point rather than a guarantee.",
    },
    {
      question: "Can I use this for children or pregnancy?",
      answer: "No. This calculator is for adults only and may not be appropriate for pregnancy, breastfeeding, athletes, or people with metabolic conditions.",
    },
  ],
  ctaTitle: "Want to turn this estimate into a plan?",
  ctaText: "A registered dietitian or clinician can help turn calorie targets into a nutrition plan that fits your goals and health needs.",
  ctaNote: "Recheck calories if your age, weight, activity, or goal changes.",
};