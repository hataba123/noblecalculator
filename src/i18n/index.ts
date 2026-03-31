export const supportedLocales = ["en", "es"] as const;

export type Locale = (typeof supportedLocales)[number];

export const defaultLocale: Locale = "en";
export const localeCookieName = "noblecalculator-locale";
export const localeRequestHeader = "x-noble-locale";

const uiMessages = {
  en: {
    brand: "Noble Calculator",
    site: {
      description: "Explore simple, easy-to-use calculators for finance, business, and everyday needs.",
    },
    navigation: {
      home: "Home",
      calculators: "Calculators",
      language: "Language",
      english: "English",
      spanish: "Spanish",
    },
    footer: {
      tagline: "This website is built for fast, everyday calculations.",
      copyright: "All rights reserved.",
    },
    home: {
      heroKicker: "Practical calculators for everyday tasks.",
      heroDescription: "Pick a calculator, enter a few numbers, and get a clear result right away.",
      browseCalculators: "Browse calculators",
      openProfitMargin: "Open Profit Margin",
      whyPeopleUseThis: "Why people use this",
      whyTitle: "Fast answers for pricing, tax, and cash flow.",
      whyDescription:
        "Each calculator is built to get you from question to answer quickly, with clear breakdowns and plain-English explanations.",
      whyCardOne: "Use them when you need a quote, a tax estimate, or a quick pricing check.",
      whyCardTwo: "Switch between tools without losing the context of your calculation.",
      goodFor: "Good for",
      goodForItems: [
        "Freelance pricing",
        "Invoice and tax planning",
        "Ad spend and ROI checks",
        "Website budget estimates",
      ],
      featuredTools: [
        { title: "Profit Margin", description: "See how much profit you keep after costs." },
        { title: "Markup", description: "Find a selling price from your cost and markup." },
        { title: "Freelance Hourly Rate", description: "Set an hourly rate that matches your income goal." },
        { title: "VAT Calculator", description: "Add VAT to a price or split it back out." },
      ],
      whatToExpect: "What to expect",
      whatToExpectTitle: "Clear breakdowns, not just one number.",
      whatToExpectDescription:
        "Every calculator shows the final answer and the values behind it, so you can understand the result instead of just copying it.",
      whatToExpectCards: [
        "See answers update instantly while you type",
        "Easy words for everyone, not only number people",
        "Looks great on phones, tablets, and desktop screens",
        "Same clean style across every calculator page",
      ],
    },
    tools: {
      badge: "Calculator Hub",
      title: "All calculators in one place.",
      description: "Choose a calculator and start from a prefilled example.",
      supportingDescription:
        "Use the hub when you want a fast path to pricing, tax, profit, and marketing decisions without digging through menus.",
      open: "Open",
      cards: [
        "Pricing and margin checks",
        "Tax and invoice estimates",
        "Marketing performance metrics",
        "Freelance and project planning",
      ],
    },
    calculator: {
      inputs: "Inputs",
      results: "Results",
      badge: "Calculator",
      quickTake: "Quick take",
      quickRead: "A quick read before you calculate",
      exampleSnapshot: "Example snapshot",
      formula: "Formula",
      examples: "Examples",
      whenToUse: "When to use",
      commonMistakes: "Common mistakes",
      faq: "FAQ",
      nextStep: "Next step",
      onThisPage: "On this page",
      formulaSummary: "2-3 real scenarios to make the result easier to trust.",
      faqSummary: "Clear answers to the questions people usually ask first.",
    },
    calculatorShell: {
      quickCalculatorTitle: "Quick Calculator",
      quickCalculatorDescription:
        "A full-size calculator with memory, live preview, and a keypad that feels like a desk calculator.",
      deskCalculator: "Desk calculator",
      mode: "Mode",
      basic: "Basic",
      scientific: "Scientific",
      angle: "Angle",
      deg: "Deg",
      rad: "Rad",
      expression: "Expression",
      editableExpression: "Editable calculator expression",
      typeExpression: "Type an expression or use the keypad",
      result: "Result",
      useCurrentAnswer: "Use current answer in expression",
      memory: "Memory",
      memoryHint: "Stored by M+, M-, MC, and MR.",
      currentAnswer: "Current answer",
      currentAnswerHint: "Changes as you build the expression.",
      recentCalculations: "Recent calculations",
      recentHint: "Try 12 × 8 + 6 to see the history stack fill up.",
      invalidExpression: "Invalid expression",
    },
    supportTools: {
      inputs: "Inputs",
      results: "Results",
    },
    theme: {
      light: "Light mode",
      dark: "Dark mode",
      switchToLight: "Switch to light mode",
      switchToDark: "Switch to dark mode",
    },
    seoSections: {
      quickTake: "Quick take",
      quickReadBefore: "A quick read before you calculate",
      exampleSnapshot: "Example snapshot",
      formula: "Formula",
      examples: "Examples",
      whenToUse: "When to use",
      commonMistakes: "Common mistakes",
      faq: "FAQ",
      nextStep: "Next step",
      formulaSummary: "2-3 real scenarios to make the result easier to trust.",
      faqSummary: "Clear answers to the questions people usually ask first.",
      onThisPage: "On this page",
      moneyStays: "Money stays",
      target: "Target",
      billable: "Billable",
      takeHome: "Take-home",
      expensesPlusTax: "Expenses + tax",
      grossTarget: "Gross target",
      spend: "Spend",
      revenue: "Revenue",
      design: "Design",
      development: "Development",
      content: "Content",
      lowerCost: "Lower cost",
      higherReturn: "Higher return",
      returnLabel: "Return",
      metricA: "Metric A",
      metricB: "Metric B",
      metricC: "Metric C",
      revenueStays: "Revenue",
      cost: "Cost",
      profit: "Profit",
      exampleSnapshotBadge: "Example snapshot",
    },
  },
  es: {
    brand: "Noble Calculator",
    site: {
      description: "Explora calculadoras simples y fáciles de usar para finanzas, negocios y tareas cotidianas.",
    },
    navigation: {
      home: "Inicio",
      calculators: "Calculadoras",
      language: "Idioma",
      english: "Inglés",
      spanish: "Español",
    },
    footer: {
      tagline: "Este sitio está pensado para cálculos rápidos del día a día.",
      copyright: "Todos los derechos reservados.",
    },
    home: {
      heroKicker: "Calculadoras prácticas para tareas cotidianas.",
      heroDescription: "Elige una calculadora, escribe unos pocos números y obtén un resultado claro al instante.",
      browseCalculators: "Ver calculadoras",
      openProfitMargin: "Abrir margen de beneficio",
      whyPeopleUseThis: "Por qué la gente usa esto",
      whyTitle: "Respuestas rápidas para precios, impuestos y flujo de caja.",
      whyDescription:
        "Cada calculadora está hecha para llevarte de la pregunta a la respuesta rápido, con desgloses claros y explicaciones sencillas.",
      whyCardOne: "Úsalas cuando necesites un presupuesto, una estimación de impuestos o una revisión rápida de precios.",
      whyCardTwo: "Cambia entre herramientas sin perder el contexto de tu cálculo.",
      goodFor: "Ideal para",
      goodForItems: [
        "Precios freelance",
        "Planeación de facturas e impuestos",
        "Revisión de gasto publicitario y ROI",
        "Estimaciones de presupuesto web",
      ],
      featuredTools: [
        { title: "Margen de beneficio", description: "Ve cuánto beneficio conservas después de los costos." },
        { title: "Markup", description: "Encuentra un precio de venta a partir de tu costo y markup." },
        { title: "Tarifa freelance por hora", description: "Define una tarifa por hora que coincida con tu meta de ingresos." },
        { title: "Calculadora de IVA", description: "Añade IVA a un precio o sepáralo nuevamente." },
      ],
      whatToExpect: "Qué esperar",
      whatToExpectTitle: "Desgloses claros, no solo un número.",
      whatToExpectDescription:
        "Cada calculadora muestra el resultado final y los valores detrás de él, para que entiendas el resultado en lugar de solo copiarlo.",
      whatToExpectCards: [
        "Mira cómo los resultados se actualizan al instante mientras escribes",
        "Palabras simples para todos, no solo para gente de números",
        "Se ve bien en móviles, tablets y escritorio",
        "El mismo estilo limpio en cada página de calculadora",
      ],
    },
    tools: {
      badge: "Centro de calculadoras",
      title: "Todas las calculadoras en un solo lugar.",
      description: "Elige una calculadora y empieza desde un ejemplo precargado.",
      supportingDescription:
        "Usa el centro cuando quieras una ruta rápida para decisiones de precios, impuestos, beneficios y marketing sin navegar por menús.",
      open: "Abrir",
      cards: [
        "Revisión de precios y márgenes",
        "Estimaciones de impuestos y facturas",
        "Métricas de rendimiento de marketing",
        "Planificación freelance y de proyectos",
      ],
    },
    calculator: {
      inputs: "Entradas",
      results: "Resultados",
      badge: "Calculadora",
      quickTake: "Resumen rápido",
      quickRead: "Una lectura rápida antes de calcular",
      exampleSnapshot: "Vista previa del ejemplo",
      formula: "Fórmula",
      examples: "Ejemplos",
      whenToUse: "Cuándo usarla",
      commonMistakes: "Errores comunes",
      faq: "Preguntas frecuentes",
      nextStep: "Siguiente paso",
      onThisPage: "En esta página",
      formulaSummary: "2-3 escenarios reales para que el resultado sea más fácil de confiar.",
      faqSummary: "Respuestas claras a las preguntas que la gente suele hacer primero.",
    },
    calculatorShell: {
      quickCalculatorTitle: "Calculadora rápida",
      quickCalculatorDescription:
        "Una calculadora de tamaño completo con memoria, vista previa en vivo y un teclado que se siente como una calculadora de escritorio.",
      deskCalculator: "Calculadora de escritorio",
      mode: "Modo",
      basic: "Básico",
      scientific: "Científico",
      angle: "Ángulo",
      deg: "Deg",
      rad: "Rad",
      expression: "Expresión",
      editableExpression: "Expresión editable de la calculadora",
      typeExpression: "Escribe una expresión o usa el teclado",
      result: "Resultado",
      useCurrentAnswer: "Usar la respuesta actual en la expresión",
      memory: "Memoria",
      memoryHint: "Guardado por M+, M-, MC y MR.",
      currentAnswer: "Respuesta actual",
      currentAnswerHint: "Cambia mientras construyes la expresión.",
      recentCalculations: "Cálculos recientes",
      recentHint: "Prueba 12 × 8 + 6 para ver cómo se llena el historial.",
      invalidExpression: "Expresión no válida",
    },
    supportTools: {
      inputs: "Entradas",
      results: "Resultados",
    },
    theme: {
      light: "Modo claro",
      dark: "Modo oscuro",
      switchToLight: "Cambiar a modo claro",
      switchToDark: "Cambiar a modo oscuro",
    },
    seoSections: {
      quickTake: "Resumen rápido",
      quickReadBefore: "Una lectura rápida antes de calcular",
      exampleSnapshot: "Vista previa del ejemplo",
      formula: "Fórmula",
      examples: "Ejemplos",
      whenToUse: "Cuándo usarla",
      commonMistakes: "Errores comunes",
      faq: "Preguntas frecuentes",
      nextStep: "Siguiente paso",
      formulaSummary: "2-3 escenarios reales para que el resultado sea más fácil de confiar.",
      faqSummary: "Respuestas claras a las preguntas que la gente suele hacer primero.",
      onThisPage: "En esta página",
      moneyStays: "Lo que se queda",
      target: "Meta",
      billable: "Facturable",
      takeHome: "Ingreso neto",
      expensesPlusTax: "Gastos + impuestos",
      grossTarget: "Objetivo bruto",
      spend: "Gasto",
      revenue: "Ingresos",
      design: "Diseño",
      development: "Desarrollo",
      content: "Contenido",
      lowerCost: "Menor costo",
      higherReturn: "Mayor retorno",
      returnLabel: "Retorno",
      metricA: "Métrica A",
      metricB: "Métrica B",
      metricC: "Métrica C",
      revenueStays: "Ingresos",
      cost: "Costo",
      profit: "Beneficio",
      exampleSnapshotBadge: "Vista previa del ejemplo",
    },
  },
} as const;

const stringTranslations: Record<string, string> = {
  "Profit Margin Calculator": "Calculadora de margen de beneficio",
  "Markup Calculator": "Calculadora de markup",
  "Freelance Hourly Rate Calculator": "Calculadora de tarifa por hora freelance",
  "VAT Calculator": "Calculadora de IVA",
  "Invoice Calculator": "Calculadora de facturas",
  "International Transfer Fee Calculator": "Calculadora de comisión por transferencia internacional",
  "Break-even Calculator": "Calculadora de punto de equilibrio",
  "Gross to Net Calculator": "Calculadora de bruto a neto",
  "Net to Gross Calculator": "Calculadora de neto a bruto",
  "Late Payment Fee Calculator": "Calculadora de recargo por pago tardío",
  "Payment Processing Fee Calculator": "Calculadora de comisión de procesamiento",
  "ROI Calculator": "Calculadora de ROI",
  "ROAS Calculator": "Calculadora de ROAS",
  "Website Cost Calculator": "Calculadora de costo de sitio web",
  "Self-employed Tax Estimator": "Estimador de impuestos para autónomos",
  "Utilization Rate Calculator": "Calculadora de tasa de utilización",
  "Monthly Income Target Calculator": "Calculadora de objetivo de ingreso mensual",
  "CAC Calculator": "Calculadora de CAC",
  "CPM / CPC Calculator": "Calculadora de CPM / CPC",
  "Day Rate to Hourly Rate Calculator": "Calculadora de tarifa diaria a tarifa por hora",
  "See how much profit you keep after costs.": "Ve cuánto beneficio conservas después de los costos.",
  "Find the right selling price from your cost and target markup.": "Encuentra el precio de venta correcto a partir de tu costo y markup objetivo.",
  "Set an hourly rate that fits your income goal.": "Define una tarifa por hora que encaje con tu meta de ingresos.",
  "Add VAT to a price or split it back out.": "Añade IVA a un precio o sepáralo nuevamente.",
  "Estimate the final invoice amount before you send it.": "Estima el total final de la factura antes de enviarla.",
  "Check the real cost of sending money abroad.": "Comprueba el costo real de enviar dinero al extranjero.",
  "See how many sales you need before you cover your fixed costs.": "Ve cuántas ventas necesitas antes de cubrir tus costos fijos.",
  "See how much of a gross amount remains after tax.": "Ve cuánto de un monto bruto queda después de impuestos.",
  "Work backward from take-home pay to the gross amount.": "Trabaja hacia atrás desde tu ingreso neto hasta el monto bruto.",
  "Estimate the fee added when an invoice is paid late.": "Estima el recargo que se añade cuando una factura se paga tarde.",
  "See what payment processors keep from each payment.": "Ve cuánto retienen los procesadores de pago de cada transacción.",
  "Measure the return earned from an investment.": "Mide el retorno generado por una inversión.",
  "Check how much revenue your ad spend brings back.": "Comprueba cuántos ingresos genera tu gasto publicitario.",
  "Estimate the cost of designing and building a website.": "Estima el costo de diseñar y construir un sitio web.",
  "Estimate how much tax to set aside from self-employed income.": "Estima cuánto impuesto reservar a partir de ingresos como autónomo.",
  "Measure how much of your available time is billable.": "Mide cuánto de tu tiempo disponible es facturable.",
  "Find the monthly revenue you need to cover income, taxes, and expenses.": "Encuentra los ingresos mensuales que necesitas para cubrir ingresos, impuestos y gastos.",
  "See how much it costs to acquire one customer.": "Ve cuánto cuesta adquirir un cliente.",
  "Compare cost per thousand impressions and cost per click.": "Compara el costo por mil impresiones y el costo por clic.",
  "Convert a day rate into an hourly rate and weekly equivalent.": "Convierte una tarifa diaria en tarifa por hora y equivalente semanal.",
  "Open Profit Margin": "Abrir margen de beneficio",
  "Browse calculators": "Ver calculadoras",
  "Back to tools": "Volver a calculadoras",
  "Profit Margin": "Margen de beneficio",
  "Markup": "Recargo",
  "Freelance Hourly Rate": "Tarifa freelance por hora",
  "Freelance pricing": "Precios freelance",
  "Invoice and tax planning": "Planeación de facturas e impuestos",
  "Ad spend and ROI checks": "Revisión de gasto publicitario y ROI",
  "Website budget estimates": "Estimaciones de presupuesto web",
  "See answers update instantly while you type": "Mira cómo los resultados se actualizan al instante mientras escribes",
  "Easy words for everyone, not only number people": "Palabras simples para todos, no solo para gente de números",
  "Looks great on phones, tablets, and desktop screens": "Se ve bien en móviles, tablets y escritorio",
  "Same clean style across every calculator page": "El mismo estilo limpio en cada página de calculadora",
  "Calculator Hub": "Centro de calculadoras",
  "All calculators in one place.": "Todas las calculadoras en un solo lugar.",
  "Choose a calculator and start from a prefilled example.": "Elige una calculadora y empieza desde un ejemplo precargado.",
  "Use the hub when you want a fast path to pricing, tax, profit, and marketing decisions without digging through menus.": "Usa el centro cuando quieras una ruta rápida para decisiones de precios, impuestos, beneficios y marketing sin navegar por menús.",
  "Pricing and margin checks": "Revisión de precios y márgenes",
  "Tax and invoice estimates": "Estimaciones de impuestos y facturas",
  "Marketing performance metrics": "Métricas de rendimiento de marketing",
  "Freelance and project planning": "Planificación freelance y de proyectos",
  "Home": "Inicio",
  "Calculators": "Calculadoras",
  "All rights reserved.": "Todos los derechos reservados.",
  "This website is built for fast, everyday calculations.": "Este sitio está pensado para cálculos rápidos del día a día.",
  "Quick Calculator": "Calculadora rápida",
  "A full-size calculator with memory, live preview, and a keypad that feels like a desk calculator.":
    "Una calculadora de tamaño completo con memoria, vista previa en vivo y un teclado que se siente como una calculadora de escritorio.",
  "Desk calculator": "Calculadora de escritorio",
  Mode: "Modo",
  Basic: "Básico",
  Scientific: "Científico",
  Angle: "Ángulo",
  Deg: "Deg",
  Rad: "Rad",
  Expression: "Expresión",
  "Editable calculator expression": "Expresión editable de la calculadora",
  "Type an expression or use the keypad": "Escribe una expresión o usa el teclado",
  Result: "Resultado",
  "Use current answer in expression": "Usar la respuesta actual en la expresión",
  Memory: "Memoria",
  "Stored by M+, M-, MC, and MR.": "Guardado por M+, M-, MC y MR.",
  "Current answer": "Respuesta actual",
  "Changes as you build the expression.": "Cambia mientras construyes la expresión.",
  "Recent calculations": "Cálculos recientes",
  "Try 12 × 8 + 6 to see the history stack fill up.": "Prueba 12 × 8 + 6 para ver cómo se llena el historial.",
  "Invalid expression": "Expresión no válida",
  Inputs: "Entradas",
  Results: "Resultados",
  "Your price breakdown": "Desglose de tu precio",
  "Change the markup rate and the results update instantly.": "Cambia la tasa de markup y los resultados se actualizan al instante.",
  "Suggested hourly rate": "Tarifa por hora sugerida",
  "If billable hours is 0, we return 0.": "Si las horas facturables son 0, devolvemos 0.",
  "Invoice total": "Total de la factura",
  "See the base amount, tax, and final total together.": "Ve el monto base, el impuesto y el total final juntos.",
  "VAT breakdown": "Desglose del IVA",
  "See the tax amount and the final price side by side.": "Ve el monto del impuesto y el precio final uno al lado del otro.",
  "Transfer cost snapshot": "Vista rápida del costo de la transferencia",
  "The result shows the fee and total debit in one step.": "El resultado muestra la comisión y el débito total en un solo paso.",
  "Customer acquisition cost": "Costo de adquisición de cliente",
  "Use CAC to judge whether your marketing spend is efficient.": "Usa CAC para juzgar si tu gasto de marketing es eficiente.",
  "Live result": "Resultado en vivo",
  "Revenue": "Ingresos",
  "Cost": "Costo",
  "Profit": "Beneficio",
  "Margin": "Margen",
  "Gross amount": "Monto bruto",
  "Net amount": "Monto neto",
  "Amount": "Cantidad",
  "Tax rate (%)": "Tasa impositiva (%)",
  "VAT rate (%)": "Tasa de IVA (%)",
  "VAT amount": "Monto de IVA",
  "Fixed costs": "Costos fijos",
  "Variable cost per unit": "Costo variable por unidad",
  "Selling price": "Precio de venta",
  "Contribution margin": "Margen de contribución",
  "Break-even units": "Unidades de equilibrio",
  "Break-even revenue": "Ingresos de equilibrio",
  "Markup amount": "Monto de markup",
  "Total hours": "Horas totales",
  "Labor cost": "Costo laboral",
  "Fixed expenses": "Gastos fijos",
  "Estimated total": "Total estimado",
  "Income goal": "Meta de ingresos",
  "Billable hours": "Horas facturables",
  "Starting amount before tax.": "Monto inicial antes de impuestos.",
  "Tax withheld from the gross amount.": "Impuesto retenido del monto bruto.",
  "Tax rate used to gross up the amount.": "Tasa de impuesto usada para llevar la cantidad a bruto.",
  "Take-home amount after tax.": "Monto neto después de impuestos.",
  "How much you want to earn in the selected period.": "Cuánto quieres ganar en el período seleccionado.",
  "Hours you expect to bill a client.": "Horas que esperas facturar a un cliente.",
  "Rent, salaries, and other costs you pay even before selling.": "Renta, salarios y otros costos que pagas incluso antes de vender.",
  "Cost to produce or deliver one unit.": "Costo de producir o entregar una unidad.",
  "Price you charge for one unit.": "Precio que cobras por una unidad.",
  "Selling price minus variable cost.": "Precio de venta menos costo variable.",
  "Units required to cover fixed costs.": "Unidades necesarias para cubrir costos fijos.",
  "Revenue needed at break-even.": "Ingresos necesarios en el punto de equilibrio.",
  "Extra amount added to cost.": "Monto extra agregado al costo.",
  "What you can charge before tax.": "Lo que puedes cobrar antes de impuestos.",
  "Profit share of the final price.": "Parte del beneficio sobre el precio final.",
  "Design, development, and content combined.": "Diseño, desarrollo y contenido juntos.",
  "Hours multiplied by the hourly rate.": "Horas multiplicadas por la tarifa por hora.",
  "Recurring and one-time project costs.": "Costos recurrentes y únicos del proyecto.",
  "What the website is likely to cost overall.": "Lo que probablemente costará el sitio web en total.",
  "Amount before VAT.": "Monto antes de IVA.",
  "VAT rate applied to the amount.": "Tasa de IVA aplicada al monto.",
  "Tax added on top.": "Impuesto agregado encima.",
  "Total including VAT.": "Total con IVA incluido.",
  "What you keep after costs.": "Lo que te queda después de los costos.",
  "Profit as a share of revenue.": "El beneficio como proporción de los ingresos.",
  "How much you add on top of cost.": "Cuánto añades por encima del costo.",
  "Total revenue before expenses.": "Ingresos totales antes de gastos.",
  "Total cost required to generate that revenue.": "Costo total necesario para generar esos ingresos.",
};

export function createTranslator(locale: Locale) {
  return (key: string) => getMessage(locale, key);
}

export function getMessage(locale: Locale, key: string) {
  const parts = key.split(".");
  let current: unknown = uiMessages[locale];

  for (const part of parts) {
    if (!current || typeof current !== "object" || !(part in current)) {
      return key;
    }

    current = (current as Record<string, unknown>)[part];
  }

  return typeof current === "string" ? current : key;
}

export function translateText(locale: Locale, text: string) {
  if (locale === "en") {
    return text;
  }

  return stringTranslations[text] ?? text;
}

export function translateValue<T>(locale: Locale, value: T): T {
  if (typeof value === "string") {
    return translateText(locale, value) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => translateValue(locale, item)) as T;
  }

  if (value && typeof value === "object") {
    const translatedEntries = Object.entries(value as Record<string, unknown>).map(([key, nextValue]) => [key, translateValue(locale, nextValue)]);
    return Object.fromEntries(translatedEntries) as T;
  }

  return value;
}

export function normalizeLocale(locale: string | null | undefined): Locale {
  return locale === "es" ? "es" : "en";
}

export function getLocaleFromPathname(pathname: string) {
  const match = pathname.match(/^\/(en|es)(?:\/|$)/);
  return normalizeLocale(match?.[1]);
}

export function stripLocaleFromPathname(pathname: string) {
  const strippedPathname = pathname.replace(/^\/(en|es)(?=\/|$)/, "");
  return strippedPathname === "" ? "/" : strippedPathname;
}

export function getLocalizedPathname(pathname: string, locale: Locale) {
  const normalizedPathname = stripLocaleFromPathname(pathname);
  const cleanPathname = normalizedPathname === "/" ? "" : normalizedPathname;
  return `/${locale}${cleanPathname}`;
}

export function getLanguageAlternates(pathname: string) {
  return {
    en: getLocalizedPathname(pathname, "en"),
    es: getLocalizedPathname(pathname, "es"),
  };
}

export function getOpenGraphLocale(locale: Locale) {
  return locale === "es" ? "es_ES" : "en_US";
}