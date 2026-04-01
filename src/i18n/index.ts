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
      openTdee: "Open TDEE",
      whyPeopleUseThis: "Why people use these calculators",
      whyTitle: "Quick answers for finance, health, and everyday planning.",
      whyDescription:
        "Each calculator gives you a clear starting point with simple steps, plain-language explanations, and results you can use right away.",
      whyCardOne: "Use them when you want a fast check before making a decision.",
      whyCardTwo: "Move between tools without losing your place or re-entering your numbers.",
      goodFor: "Helpful for",
      goodForItems: [
        "Freelance and small business work",
        "Invoices, taxes, and budgeting",
        "Health and calorie planning",
        "Ad spend, ROI, and website estimates",
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
      searchLabel: "Search calculators",
      searchPlaceholder: "Search by calculator name or description",
      searchResults: "results found",
      noResultsTitle: "No calculators found",
      noResultsDescription: "Try a different word or clear the search to see all calculators again.",
      clearSearch: "Clear search",
      open: "Open",
      groupCount: "calculators",
      groups: {
        health: {
          title: "Health and Wellness",
          description: "Track body metrics, calorie needs, and healthy ranges before setting a fitness goal.",
        },
        pricing: {
          title: "Pricing and Planning",
          description: "Set rates, margins, and budgets before work starts.",
        },
        billing: {
          title: "Billing, Tax and Fees",
          description: "Handle invoices, tax, and payment costs in one place.",
        },
        marketing: {
          title: "Marketing and Growth",
          description: "Measure ad performance, return, and acquisition cost.",
        },
        payments: {
          title: "Payments and Transfers",
          description: "Check transfer and processing fees before money moves.",
        },
      },
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
      openTdee: "Abrir TDEE",
      whyPeopleUseThis: "Por qué usan estas calculadoras",
      whyTitle: "Respuestas rápidas para finanzas, salud y planificación diaria.",
      whyDescription:
        "Cada calculadora te da un punto de partida claro con pasos simples, explicaciones fáciles y resultados que puedes usar de inmediato.",
      whyCardOne: "Úsalas cuando quieras una comprobación rápida antes de tomar una decisión.",
      whyCardTwo: "Pasa de una herramienta a otra sin perder tu lugar ni volver a escribir tus números.",
      goodFor: "Útil para",
      goodForItems: [
        "Trabajo freelance y pequeños negocios",
        "Facturas, impuestos y presupuestos",
        "Salud y planeación de calorías",
        "Gasto publicitario, ROI y estimaciones web",
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
      searchLabel: "Buscar calculadoras",
      searchPlaceholder: "Busca por nombre o descripción",
      searchResults: "resultados encontrados",
      noResultsTitle: "No se encontraron calculadoras",
      noResultsDescription: "Prueba otra palabra o limpia la búsqueda para ver todas las calculadoras otra vez.",
      clearSearch: "Limpiar búsqueda",
      open: "Abrir",
      groupCount: "calculadoras",
      groups: {
        health: {
          title: "Salud y bienestar",
          description: "Haz seguimiento de métricas corporales, necesidades calóricas y rangos saludables antes de fijar una meta de fitness.",
        },
        pricing: {
          title: "Precios y planificación",
          description: "Define tarifas, márgenes y presupuestos antes de empezar.",
        },
        billing: {
          title: "Facturación, impuestos y comisiones",
          description: "Gestiona facturas, impuestos y costos de pago en un solo lugar.",
        },
        marketing: {
          title: "Marketing y crecimiento",
          description: "Mide el rendimiento de anuncios, retorno y costo de adquisición.",
        },
        payments: {
          title: "Pagos y transferencias",
          description: "Revisa comisiones de transferencia y de procesamiento antes de mover dinero.",
        },
      },
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
  "Fee rate (%)": "Tasa de comisión (%)",
  "Freelance Hourly Rate Calculator": "Calculadora de tarifa por hora freelance",
  "Ad spend": "Gasto publicitario",
  "VAT Calculator": "Calculadora de IVA",
  "Impressions": "Impresiones",
  "Invoice Calculator": "Calculadora de facturas",
  "Clicks": "Clics",
  "International Transfer Fee Calculator": "Calculadora de comisión por transferencia internacional",
  "Marketing spend": "Gasto de marketing",
  "New customers": "Clientes nuevos",
  "Break-even Calculator": "Calculadora de punto de equilibrio",
  "Gross to Net Calculator": "Calculadora de bruto a neto",
  "Net to Gross Calculator": "Calculadora de neto a bruto",
  "Invoice amount": "Monto de la factura",
  "Monthly fee rate (%)": "Tasa de comisión mensual (%)",
  "Days late": "Días de atraso",
  "Late Payment Fee Calculator": "Calculadora de recargo por pago tardío",
  "Payment Processing Fee Calculator": "Calculadora de comisión de procesamiento",
  "ROI Calculator": "Calculadora de ROI",
  "Day rate": "Tarifa diaria",
  "Billable hours per day": "Horas facturables por día",
  "ROAS Calculator": "Calculadora de ROAS",
  "Website Cost Calculator": "Calculadora de costo de sitio web",
  "Markup rate (%)": "Tasa de markup (%)",
  "Cost of the product or service.": "Costo del producto o servicio.",
  "Additional percentage added on top of cost.": "Porcentaje adicional agregado sobre el costo.",
  "Desired take-home per month": "Ingreso neto deseado al mes",
  "Monthly business expenses": "Gastos mensuales del negocio",
  "The net income you want to keep each month.": "El ingreso neto que quieres conservar cada mes.",
  "Fixed expenses that must be covered each month.": "Gastos fijos que deben cubrirse cada mes.",
  "Estimated tax rate to reserve.": "Tasa de impuesto estimada para reservar.",
  "Payment amount": "Monto del pago",
  "Percentage fee rate (%)": "Tasa de comisión porcentual (%)",
  "Fixed fee": "Comisión fija",
  "Total customer payment before fees.": "Pago total del cliente antes de comisiones.",
  "Investment": "Inversión",
  "Return amount": "Monto del retorno",
  "Money you put into the project or asset.": "Dinero que aportas al proyecto o activo.",
  "Money you get back from the investment.": "Dinero que recuperas de la inversión.",
  "Annual revenue": "Ingresos anuales",
  "Business expenses": "Gastos del negocio",
  "Income tax rate (%)": "Tasa de impuesto sobre la renta (%)",
  "Self-employment tax rate (%)": "Tasa de impuesto por trabajo autónomo (%)",
  "Total self-employed income before expenses.": "Ingresos totales por trabajo autónomo antes de gastos.",
  "Deductible business costs.": "Costos del negocio deducibles.",
  "Estimated income tax rate.": "Tasa estimada de impuesto sobre la renta.",
  "Estimated self-employment tax rate.": "Tasa estimada de impuesto por trabajo autónomo.",
  "Total available hours": "Horas disponibles totales",
  "Hours you can invoice or charge for.": "Horas que puedes facturar o cobrar.",
  "Design hours": "Horas de diseño",
  "Development hours": "Horas de desarrollo",
  "Content hours": "Horas de contenido",
  "Hourly rate": "Tarifa por hora",
  "Self-employed Tax Estimator": "Estimador de impuestos para autónomos",
  "Utilization Rate Calculator": "Calculadora de tasa de utilización",
  "Monthly Income Target Calculator": "Calculadora de objetivo de ingreso mensual",
  "CAC Calculator": "Calculadora de CAC",
  "CPM / CPC Calculator": "Calculadora de CPM / CPC",
  "Day Rate to Hourly Rate Calculator": "Calculadora de tarifa diaria a tarifa por hora",
  "BMI Calculator": "Calculadora de IMC",
  "Body mass index": "Índice de masa corporal",
  "BMI formula": "Fórmula del IMC",
  "Check your body mass index and healthy weight range.": "Comprueba tu índice de masa corporal y tu rango de peso saludable.",
  "See your BMI score, weight category, and healthy range side by side.": "Mira tu puntuación de IMC, la categoría de peso y el rango saludable uno al lado del otro.",
  "Use this when you want a fast read on how your weight compares with your height.": "Úsalo cuando quieras una lectura rápida de cómo tu peso se compara con tu altura.",
  "BMI = weight ÷ height², with height measured in meters or converted from inches.": "IMC = peso ÷ altura², con la altura medida en metros o convertida desde pulgadas.",
  "BMI is a screening tool, not a diagnosis. It gives a general range, not a full health picture.": "El IMC es una herramienta de evaluación, no un diagnóstico. Da un rango general, no una imagen completa de salud.",
  "Use it when setting a fitness goal, checking weight against height, or comparing a target range with your current measurements.": "Úsalo al fijar una meta de fitness, comprobar el peso frente a la altura o comparar un rango objetivo con tus medidas actuales.",
  "Metric example": "Ejemplo métrico",
  "Imperial example": "Ejemplo imperial",
  "Higher BMI example": "Ejemplo de IMC alto",
  "A person weighs 70 kg and is 175 cm tall.": "Una persona pesa 70 kg y mide 175 cm.",
  "A person weighs 154 lb and is 5 ft 9 in tall.": "Una persona pesa 154 lb y mide 5 pies 9 pulgadas.",
  "A person weighs 205 lb and is 5 ft 10 in tall.": "Una persona pesa 205 lb y mide 5 pies 10 pulgadas.",
  "BMI is 22.9, which is in the normal range.": "El IMC es 22.9, que está en el rango normal.",
  "BMI is 22.8, which is in the normal range.": "El IMC es 22.8, que está en el rango normal.",
  "BMI is 29.4, which is in the overweight range.": "El IMC es 29.4, que está en el rango de sobrepeso.",
  "This height and weight combination falls inside the standard healthy band.": "Esta combinación de altura y peso cae dentro del rango saludable estándar.",
  "The BMI result is similar after converting the units.": "El resultado del IMC es similar después de convertir las unidades.",
  "This is a quick signal that the current weight is above the healthy band for that height.": "Esta es una señal rápida de que el peso actual está por encima del rango saludable para esa altura.",
  "Metric": "Métrico",
  "Imperial": "Imperial",
  "Unit system": "Sistema de unidades",
  "Weight (kg)": "Peso (kg)",
  "Height (cm)": "Altura (cm)",
  "Weight (lb)": "Peso (lb)",
  "Height (ft)": "Altura (pies)",
  "Height (in)": "Altura (pulg)",
  "Category": "Categoría",
  "Healthy weight range": "Rango de peso saludable",
  "Body mass index score.": "Puntuación del índice de masa corporal.",
  "Standard BMI weight class.": "Clase estándar de peso según IMC.",
  "Based on a BMI between 18.5 and 24.9.": "Basado en un IMC entre 18.5 y 24.9.",
  "Underweight": "Bajo peso",
  "Normal weight": "Peso normal",
  "Overweight": "Sobrepeso",
  "Obesity": "Obesidad",
  "Using height in the wrong unit.": "Usar la altura en la unidad equivocada.",
  "Forgetting to square the height before dividing.": "Olvidar elevar la altura al cuadrado antes de dividir.",
  "Treating BMI as the only health indicator.": "Tratar el IMC como el único indicador de salud.",
  "What does BMI measure?": "¿Qué mide el IMC?",
  "BMI compares weight to height and places the result into a broad category.": "El IMC compara el peso con la altura y coloca el resultado en una categoría amplia.",
  "Is BMI a medical diagnosis?": "¿El IMC es un diagnóstico médico?",
  "No. BMI is only a screening number and does not replace professional advice.": "No. El IMC es solo un número de evaluación y no reemplaza el consejo profesional.",
  "Want a better health tracking habit?": "¿Quieres un hábito de seguimiento de salud mejor?",
  "A simple calculator can help you keep an eye on your starting point before you set a fitness target.": "Una calculadora simple puede ayudarte a vigilar tu punto de partida antes de fijar una meta de fitness.",
  "Recheck BMI when your weight or height inputs change.": "Vuelve a comprobar el IMC cuando cambien tus datos de peso o altura.",
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

const extraStringTranslations: Record<string, string> = {
  "Amount you want to send before fees.": "Monto que quieres enviar antes de las comisiones.",
  "International transfer fee rate.": "Tasa de comisión por transferencia internacional.",
  "Total campaign spend.": "Gasto total de la campaña.",
  "How many times the ad was shown.": "Cuántas veces se mostró el anuncio.",
  "How many clicks the campaign generated.": "Cuántos clics generó la campaña.",
  "Total cost spent on marketing and sales.": "Costo total gastado en marketing y ventas.",
  "Customers acquired from that spend.": "Clientes adquiridos a partir de ese gasto.",
  "Original invoice value.": "Valor original de la factura.",
  "Late fee rate per month.": "Tasa de comisión por atraso por mes.",
  "How many days the payment is overdue.": "Cuántos días tiene de atraso el pago.",
  "Invoice amount before tax.": "Monto de factura antes de impuestos.",
  "Tax applied to the invoice.": "Impuesto aplicado a la factura.",
  "Your daily charge or pay rate.": "Tu tarifa diaria o tasa de pago.",
  "How many hours the day rate covers.": "Cuántas horas cubre la tarifa diaria.",
  "Time spent on layout and visual design.": "Tiempo dedicado al diseño visual y de maquetación.",
  "Time spent building the site.": "Tiempo dedicado a construir el sitio.",
  "Copy, images, and content work.": "Redacción, imágenes y trabajo de contenido.",
  "Your blended hourly rate.": "Tu tarifa horaria combinada.",
  "Hosting, plugins, domains, and other fixed costs.": "Hosting, complementos, dominios y otros costos fijos.",
  "Variable percentage charged by the processor.": "Porcentaje variable cobrado por el procesador.",
  "Flat fee per transaction.": "Comisión fija por transacción.",
  "All working hours available in the period.": "Todas las horas de trabajo disponibles en el período.",
  "Break-even snapshot": "Resumen de punto de equilibrio",
  "Use the contribution margin to see how many sales you need to hit break-even.":
    "Usa el margen de contribución para ver cuántas ventas necesitas para llegar al punto de equilibrio.",
  "Net pay breakdown": "Desglose del pago neto",
  "Compare the gross amount, withheld tax, and the amount that remains.": "Compara el monto bruto, el impuesto retenido y el monto que queda.",
  "Gross-up breakdown": "Desglose de cálculo bruto",
  "Use this when you know the net amount and need the pre-tax figure.": "Úsalo cuando conozcas el monto neto y necesites la cifra antes de impuestos.",
  "Advertising return": "Retorno de publicidad",
  "Use ROAS to judge whether your ads are returning enough revenue.": "Usa ROAS para juzgar si tus anuncios están devolviendo suficientes ingresos.",
  "Tax estimate": "Estimación de impuestos",
  "Use this to plan for income tax and self-employment tax throughout the year.":
    "Úsalo para planificar el impuesto sobre la renta y el impuesto por trabajo autónomo durante todo el año.",
  "See how many sales you need to cover fixed and variable costs with this break-even calculator.":
    "Ve cuántas ventas necesitas para cubrir los costos fijos y variables con esta calculadora de punto de equilibrio.",
  "Use this calculator when you want a fast answer to a practical question: how many units, jobs, or orders do I need before the business starts paying for itself?":
    "Usa esta calculadora cuando quieras una respuesta rápida a una pregunta práctica: cuántas unidades, trabajos u órdenes necesito antes de que el negocio se pague a sí mismo.",
  "Break-even formula": "Fórmula de punto de equilibrio",
  "Break-even units = Fixed costs ÷ (Selling price - Variable cost per unit). Break-even revenue = Break-even units × Selling price.":
    "Unidades de equilibrio = Costos fijos ÷ (Precio de venta - Costo variable por unidad). Ingresos de equilibrio = Unidades de equilibrio × Precio de venta.",
  "If your selling price is too close to variable cost, the number of units you need rises quickly.":
    "Si tu precio de venta está muy cerca del costo variable, la cantidad de unidades que necesitas sube rápidamente.",
  "Use it when you are setting a price, testing a new offer, or checking whether a month of sales can cover rent, payroll, and tools.":
    "Úsalo cuando estés fijando un precio, probando una nueva oferta o verificando si un mes de ventas puede cubrir alquiler, nómina y herramientas.",
  "Need cleaner cash flow tracking?": "¿Necesitas un seguimiento más limpio del flujo de caja?",
  "If you want a fuller view of invoices, expenses, and profit, QuickBooks or Xero can keep the numbers in one place.":
    "Si quieres una vista más completa de facturas, gastos y ganancias, QuickBooks o Xero pueden mantener los números en un solo lugar.",
  "Revisit break-even anytime your price, supplier cost, or fixed overhead changes.":
    "Revisa el punto de equilibrio cada vez que cambien tu precio, costo del proveedor o gastos generales fijos.",
  "See how much it costs to acquire one customer.": "Ve cuánto cuesta adquirir un cliente.",
  "Use this calculator when you want a quick read on whether your marketing spend is efficient enough to keep growing.":
    "Usa esta calculadora cuando quieras una lectura rápida sobre si tu gasto de marketing es lo suficientemente eficiente como para seguir creciendo.",
  "CAC formula": "Fórmula de CAC",
  "CAC = Marketing spend ÷ New customers.": "CAC = Gasto de marketing ÷ Clientes nuevos.",
  "Lower CAC usually means you are acquiring customers more efficiently, but it still needs to be checked against revenue and lifetime value.":
    "Un CAC más bajo normalmente significa que estás adquiriendo clientes de forma más eficiente, pero aún debe compararse con ingresos y valor de vida útil.",
  "Use it when reviewing campaign performance, comparing channels, or checking whether growth is coming at a healthy cost.":
    "Úsalo al revisar el rendimiento de campañas, comparar canales o comprobar si el crecimiento está llegando a un costo saludable.",
  "Compare CPM and CPC to understand your ad campaign efficiency.": "Compara CPM y CPC para entender la eficiencia de tu campaña publicitaria.",
  "Use this calculator when you want a clear, quick way to compare how much your ads cost per impression and per click.":
    "Usa esta calculadora cuando quieras una forma clara y rápida de comparar cuánto cuestan tus anuncios por impresión y por clic.",
  "CPM / CPC formula": "Fórmula de CPM / CPC",
  "CPM = Ad spend ÷ Impressions × 1,000. CPC = Ad spend ÷ Clicks. CTR = Clicks ÷ Impressions × 100.":
    "CPM = Gasto publicitario ÷ Impresiones × 1,000. CPC = Gasto publicitario ÷ Clics. CTR = Clics ÷ Impresiones × 100.",
  "CPM tells you exposure cost. CPC tells you traffic cost. CTR shows how often people click.":
    "CPM te dice el costo de exposición. CPC te dice el costo del tráfico. CTR muestra con qué frecuencia la gente hace clic.",
  "Use it when comparing creatives, audiences, or channels and you want the basic media numbers in one place.":
    "Úsalo cuando compares creativos, audiencias o canales y quieras los números básicos de medios en un solo lugar.",
  "Convert a day rate into an hourly rate and weekly equivalent.": "Convierte una tarifa diaria en una tarifa por hora y equivalente semanal.",
  "Use this calculator when a client offers a day rate and you want to see what that looks like as an hourly number.":
    "Usa esta calculadora cuando un cliente ofrezca una tarifa diaria y quieras ver cómo se ve como un número por hora.",
  "Day rate to hourly rate formula": "Fórmula de tarifa diaria a tarifa por hora",
  "Hourly rate = Day rate ÷ Billable hours per day. Weekly equivalent = Day rate × 5. Monthly equivalent = Day rate × 20.":
    "Tarifa por hora = Tarifa diaria ÷ Horas facturables por día. Equivalente semanal = Tarifa diaria × 5. Equivalente mensual = Tarifa diaria × 20.",
  "This makes it easier to compare a day fee with hourly work, retained work, or full-time pay.":
    "Esto facilita comparar una tarifa diaria con trabajo por hora, trabajo retenido o pago de tiempo completo.",
  "Use it when comparing freelance offers, setting your own rate, or deciding whether a day rate is actually worth it.":
    "Úsalo cuando compares ofertas freelance, fijes tu propia tarifa o decidas si una tarifa diaria realmente vale la pena.",
  "Set an hourly rate that matches your income goal.": "Establece una tarifa por hora que coincida con tu meta de ingresos.",
  "Use this when you want a rate that can actually support your income goal instead of guessing a number that feels safe.":
    "Úsalo cuando quieras una tarifa que realmente pueda sostener tu meta de ingresos en lugar de adivinar un número que se sienta seguro.",
  "Freelance hourly rate formula": "Fórmula de tarifa por hora freelance",
  "Hourly rate = Target income ÷ Billable hours.": "Tarifa por hora = Ingreso objetivo ÷ Horas facturables.",
  "If your billable time is limited, your hourly rate has to carry the full income target.":
    "Si tu tiempo facturable es limitado, tu tarifa por hora tiene que sostener la meta de ingresos completa.",
  "Use it when quoting freelance work, planning a retainer, or checking whether a project will realistically pay the bills.":
    "Úsalo cuando presupuestes trabajo freelance, planifiques una retención o verifiques si un proyecto realmente pagará las cuentas.",
  "See how much of a gross amount remains after tax.": "Ve cuánto de un monto bruto queda después de impuestos.",
  "Use this when you already know the gross amount and want to see the amount that actually lands in your pocket after tax.":
    "Úsalo cuando ya conozcas el monto bruto y quieras ver el monto que realmente llega a tu bolsillo después de impuestos.",
  "Gross to net formula": "Fórmula de bruto a neto",
  "Tax amount = Gross amount × Tax rate. Net amount = Gross amount - Tax amount.":
    "Monto de impuesto = Monto bruto × Tasa de impuesto. Monto neto = Monto bruto - Monto de impuesto.",
  "It is a quick way to estimate take-home pay without opening a spreadsheet.":
    "Es una forma rápida de estimar el pago neto sin abrir una hoja de cálculo.",
  "Use it for salary planning, freelance quotes, or any situation where a tax rate reduces the final amount you keep.":
    "Úsalo para planeación salarial, presupuestos freelance o cualquier situación donde una tasa de impuesto reduzca el monto final que conservas.",
  "Check how much revenue your ad spend brings back.": "Comprueba cuánto ingreso genera tu gasto publicitario.",
  "Measure the return earned from an investment.": "Mide el retorno obtenido de una inversión.",
  "Use this when you need a fast read on whether an investment produced enough return to justify the money you put in.":
    "Úsalo cuando necesites una lectura rápida sobre si una inversión produjo suficiente retorno para justificar el dinero que pusiste.",
  "ROI formula": "Fórmula de ROI",
  "ROI = (Return amount - Investment) ÷ Investment × 100.": "ROI = (Monto de retorno - Inversión) ÷ Inversión × 100.",
  "A positive ROI means the return beat the original spend. A negative result means the investment lost value.":
    "Un ROI positivo significa que el retorno superó el gasto original. Un resultado negativo significa que la inversión perdió valor.",
  "Use it for campaigns, equipment purchases, projects, or any decision where you want to compare gain against the original cost.":
    "Úsalo para campañas, compras de equipo, proyectos o cualquier decisión donde quieras comparar la ganancia con el costo original.",
  "Estimate how much tax to set aside from self-employed income.": "Estima cuánto impuesto reservar de ingresos por trabajo autónomo.",
  "Measure how much of your available time is billable.": "Mide cuánto de tu tiempo disponible es facturable.",
  "Use this calculator when you want to know how much of your working time is actually earning money.":
    "Usa esta calculadora cuando quieras saber cuánto de tu tiempo de trabajo está realmente generando dinero.",
  "Utilization rate formula": "Fórmula de tasa de utilización",
  "Utilization rate = Billable hours ÷ Total available hours × 100.": "Tasa de utilización = Horas facturables ÷ Horas disponibles totales × 100.",
  "The higher the rate, the more of your time is being converted into revenue.":
    "Cuanto más alta sea la tasa, más de tu tiempo se está convirtiendo en ingresos.",
  "Use it when checking whether your work week has enough billable time to support your pricing and income goal.":
    "Úsalo cuando verifiques si tu semana de trabajo tiene suficiente tiempo facturable para apoyar tus precios y meta de ingresos.",
  "Estimate the cost of designing, building, and launching a website.": "Estima el costo de diseñar, construir y lanzar un sitio web.",
  "Use this when you need a quick website budget that feels realistic, not just a rough guess.":
    "Úsalo cuando necesites un presupuesto rápido de sitio web que se sienta realista, no solo una estimación vaga.",
  "Website cost formula": "Fórmula de costo de sitio web",
  "Total cost = (Design hours + Development hours + Content hours) × Hourly rate + Fixed expenses.":
    "Costo total = (Horas de diseño + Horas de desarrollo + Horas de contenido) × Tarifa por hora + Gastos fijos.",
  "This is handy when you want to quote a client or plan your own build budget before work starts.":
    "Esto es útil cuando quieres presupuestar a un cliente o planificar tu propio presupuesto de construcción antes de empezar el trabajo.",
  "Use it when you are pricing a new site, reviewing a proposal, or checking whether the project scope still fits the budget.":
    "Úsalo cuando pongas precio a un sitio nuevo, revises una propuesta o compruebes si el alcance del proyecto aún encaja con el presupuesto.",
  "Need cleaner collections?": "¿Necesitas cobros más ordenados?",
  "QuickBooks or Xero can help if you want overdue invoices, reminders, and payments in one place.":
    "QuickBooks o Xero pueden ayudar si quieres facturas vencidas, recordatorios y pagos en un solo lugar.",
  "Use the calculator again whenever the invoice amount or delay changes.":
    "Usa la calculadora nuevamente cada vez que cambie el monto de la factura o el retraso.",
  "Need the finance side too?": "¿Necesitas también la parte financiera?",
  "If you want campaign numbers alongside invoices and expenses, QuickBooks or Xero can make reporting much easier later on.":
    "Si quieres números de campaña junto con facturas y gastos, QuickBooks o Xero pueden hacer que los informes sean mucho más fáciles después.",
  "Use CPM, CPC, and ROAS together to get the full picture.": "Usa CPM, CPC y ROAS juntos para obtener la imagen completa.",
  "Want a cleaner view of costs and returns?": "¿Quieres una vista más limpia de costos y retornos?",
  "QuickBooks or Xero can help you keep project costs, invoices, and returns in one place so ROI is easier to track later.":
    "QuickBooks o Xero pueden ayudarte a mantener costos de proyecto, facturas y retornos en un solo lugar para que el ROI sea más fácil de seguir después.",
  "Check ROI again whenever the return amount or spend changes.": "Revisa el ROI nuevamente cada vez que cambie el monto de retorno o el gasto.",
  "Need the project finances to stay tidy?": "¿Necesitas que las finanzas del proyecto se mantengan ordenadas?",
  "QuickBooks or Xero can help you track deposits, project costs, and remaining balances after the site is delivered.":
    "QuickBooks o Xero pueden ayudarte a rastrear depósitos, costos del proyecto y saldos restantes después de entregar el sitio.",
  "Recalculate when the scope or hourly rate changes.": "Recalcula cuando cambie el alcance o la tarifa por hora.",
  "Keep the full revenue picture close": "Mantén cerca la imagen completa de ingresos",
  "If you want to line up marketing spend with revenue and invoices, QuickBooks or Xero can help you keep the back office tidy.":
    "Si quieres alinear el gasto de marketing con ingresos y facturas, QuickBooks o Xero pueden ayudarte a mantener la oficina interna ordenada.",
  "Use this together with ROAS and profit checks, not on its own.": "Úsalo junto con ROAS y revisiones de beneficio, no por sí solo.",
  "Keep payroll and invoices tidy": "Mantén la nómina y las facturas organizadas",
  "QuickBooks or Xero can help if you want salary, tax, and expense tracking in one workflow.":
    "QuickBooks o Xero pueden ayudar si quieres seguimiento de salario, impuestos y gastos en un solo flujo de trabajo.",
  "Use this calculator again whenever your tax rate or gross offer changes.":
    "Usa esta calculadora nuevamente cada vez que cambie tu tasa de impuesto o tu oferta bruta.",
  "Need cleaner invoice totals?": "¿Quieres totales de factura más limpios?",
  "If you invoice often, QuickBooks or Xero can help you track payment fees, revenue, and outstanding balances together.":
    "Si facturas con frecuencia, QuickBooks o Xero pueden ayudarte a rastrear comisiones de pago, ingresos y saldos pendientes juntos.",
  "Recalculate whenever the payment size or processor rate changes.": "Recalcula cada vez que cambie el tamaño del pago o la tasa del procesador.",
  "TDEE Calculator": "Calculadora de TDEE",
  "BMI": "IMC",
  "Equation": "Ecuación",
  "Mifflin–St. Jeor": "Mifflin–St. Jeor",
  "A modern, practical default for most adults.": "Una opción moderna y práctica para la mayoría de los adultos.",
  "Revised Harris-Benedict": "Harris-Benedict revisada",
  "A classic reference formula used by many calculators.": "Una fórmula de referencia clásica usada por muchas calculadoras.",
  "Estimate adult calorie needs with a simple TDEE calculator based on Mifflin–St. Jeor and activity multipliers.": "Estima las necesidades calóricas de adultos con una calculadora TDEE simple basada en Mifflin–St. Jeor y multiplicadores de actividad.",
  "Estimate adult calorie needs with a simple TDEE calculator and choose from more than one equation.": "Estima las necesidades calóricas de adultos con una calculadora TDEE simple y elige entre más de una ecuación.",
  "See your resting calories, TDEE, and calorie targets side by side.": "Mira tus calorías en reposo, TDEE y objetivos calóricos uno al lado del otro.",
  "Daily calorie targets": "Objetivos calóricos diarios",
  "Equation used": "Ecuación usada",
  "Selected target": "Objetivo seleccionado",
  "This calculator is an estimate for adults. It may not be appropriate for pregnancy, breastfeeding, competitive athletes, or people with metabolic conditions.": "Esta calculadora es una estimación para adultos. Puede no ser adecuada para embarazo, lactancia, atletas de competición o personas con afecciones metabólicas.",
  "Resting calories": "Calorías en reposo",
  "Maintenance calories": "Calorías de mantenimiento",
  "Mild fat loss target": "Objetivo de pérdida suave de grasa",
  "Standard fat loss target": "Objetivo de pérdida estándar de grasa",
  "Weight gain target": "Objetivo de aumento de peso",
  "BMR / REE estimate before activity.": "Estimación de BMR / REE antes de la actividad.",
  "TDEE after applying activity level.": "TDEE después de aplicar el nivel de actividad.",
  "TDEE minus 300 kcal/day.": "TDEE menos 300 kcal/día.",
  "TDEE minus 500 kcal/day.": "TDEE menos 500 kcal/día.",
  "TDEE plus 250 kcal/day.": "TDEE más 250 kcal/día.",
  "Sex": "Sexo",
  "Male": "Hombre",
  "Female": "Mujer",
  "Add 5 to the resting calorie formula.": "Añade 5 a la fórmula de calorías en reposo.",
  "Subtract 161 from the resting calorie formula.": "Resta 161 de la fórmula de calorías en reposo.",
  "Age (years)": "Edad (años)",
  "Enter an adult age in years.": "Ingresa una edad adulta en años.",
  "Activity level": "Nivel de actividad",
  "Goal mode": "Modo de objetivo",
  "Sedentary": "Sedentario",
  "Desk work, little or no exercise.": "Trabajo de escritorio, poco o nada de ejercicio.",
  "Lightly active": "Ligeramente activo",
  "Walking, gardening, and light movement.": "Caminar, jardinería y movimiento ligero.",
  "Moderately active": "Moderadamente activo",
  "Fast walking, water aerobics, and regular workouts.": "Caminata rápida, aeróbicos acuáticos y entrenamientos regulares.",
  "Very active": "Muy activo",
  "Jogging, bicycling, lap swimming, or hard training.": "Trote, ciclismo, natación en piscina o entrenamiento intenso.",
  "Extra active": "Extra activo",
  "Physical job, two-a-day training, or very demanding activity.": "Trabajo físico, entrenamiento dos veces al día o actividad muy exigente.",
  "Maintain": "Mantener",
  "Keep weight steady.": "Mantén el peso estable.",
  "Lose": "Perder",
  "Create a calorie deficit.": "Crea un déficit calórico.",
  "Gain": "Ganar",
  "Create a calorie surplus.": "Crea un superávit calórico.",
  "Use this when you want a practical estimate of resting calories, maintenance calories, and a starting point for cutting or gaining.": "Úsalo cuando quieras una estimación práctica de calorías en reposo, calorías de mantenimiento y un punto de partida para cortar o ganar.",
  "Choose a resting-calorie equation, then TDEE = BMR x activity multiplier.": "Elige una ecuación de calorías en reposo y luego TDEE = BMR x multiplicador de actividad.",
  "BMR = Mifflin-St. Jeor resting calories. TDEE = BMR x activity multiplier.": "BMR = calorías en reposo según Mifflin-St. Jeor. TDEE = BMR x multiplicador de actividad.",
  "This is an estimate for adults, not a medical prescription. Real energy needs can vary with age, body composition, and health status.": "Esta es una estimación para adultos, no una prescripción médica. Las necesidades reales de energía pueden variar con la edad, la composición corporal y el estado de salud.",
  "Use it when planning a calorie target for maintenance, gradual fat loss, or moderate weight gain.": "Úsalo al planificar un objetivo calórico para mantenimiento, pérdida gradual de grasa o aumento moderado de peso.",
  "Desk worker": "Trabajador de escritorio",
  "A 30-year-old man weighs 70 kg, is 175 cm tall, and is sedentary.": "Un hombre de 30 años pesa 70 kg, mide 175 cm y es sedentario.",
  "Resting calories are about 1,649 kcal/day and maintenance is about 1,979 kcal/day.": "Las calorías en reposo son aproximadamente 1,649 kcal/día y el mantenimiento es aproximadamente 1,979 kcal/día.",
  "A sedentary activity level keeps the total close to the resting estimate.": "Un nivel de actividad sedentario mantiene el total cerca de la estimación en reposo.",
  "Active routine": "Rutina activa",
  "A 28-year-old woman weighs 60 kg, is 165 cm tall, and is moderately active.": "Una mujer de 28 años pesa 60 kg, mide 165 cm y es moderadamente activa.",
  "Resting calories are about 1,330 kcal/day and maintenance is about 2,062 kcal/day.": "Las calorías en reposo son aproximadamente 1,330 kcal/día y el mantenimiento es aproximadamente 2,062 kcal/día.",
  "The activity multiplier increases daily needs after the resting estimate.": "El multiplicador de actividad aumenta las necesidades diarias después de la estimación en reposo.",
  "Gaining phase": "Fase de ganancia",
  "A 35-year-old man weighs 82 kg, is 180 cm tall, and is very active.": "Un hombre de 35 años pesa 82 kg, mide 180 cm y es muy activo.",
  "Resting calories are about 1,775 kcal/day and the gain target is about 3,312 kcal/day.": "Las calorías en reposo son aproximadamente 1,775 kcal/día y el objetivo de ganancia es aproximadamente 3,312 kcal/día.",
  "This gives a simple calorie surplus starting point for a higher-energy phase.": "Esto da un punto de partida simple de superávit calórico para una fase de mayor energía.",
  "Using the wrong height or weight unit.": "Usar la unidad equivocada de altura o peso.",
  "Treating maintenance calories as a fixed promise.": "Tratar las calorías de mantenimiento como una promesa fija.",
  "Expecting the same target to work forever without rechecking.": "Esperar que el mismo objetivo funcione siempre sin volver a comprobarlo.",
  "Why is this only an estimate?": "¿Por qué esto es solo una estimación?",
  "Activity, body composition, and health status all affect calorie needs, so the result is a practical starting point rather than a guarantee.": "La actividad, la composición corporal y el estado de salud afectan las necesidades calóricas, así que el resultado es un punto de partida práctico y no una garantía.",
  "Can I use this for children or pregnancy?": "¿Puedo usar esto para niños o embarazo?",
  "No. This calculator is for adults only and may not be appropriate for pregnancy, breastfeeding, athletes, or people with metabolic conditions.": "No. Esta calculadora es solo para adultos y puede no ser adecuada para embarazo, lactancia, atletas o personas con afecciones metabólicas.",
  "Want to turn this estimate into a plan?": "¿Quieres convertir esta estimación en un plan?",
  "A registered dietitian or clinician can help turn calorie targets into a nutrition plan that fits your goals and health needs.": "Un dietista registrado o un clínico puede ayudarte a convertir los objetivos calóricos en un plan de nutrición que encaje con tus metas y necesidades de salud.",
  "Recheck calories if your age, weight, activity, or goal changes.": "Vuelve a comprobar las calorías si cambian tu edad, peso, actividad u objetivo.",
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

  return stringTranslations[text] ?? extraStringTranslations[text] ?? text;
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