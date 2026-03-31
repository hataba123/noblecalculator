"use client";

import { useEffect, useRef, useState } from "react";

import { CalculatorShell } from "./calculator-shell";
import { ResultCard } from "./result-card";

type HistoryEntry = {
  expression: string;
  value: number;
};

type CalculatorMode = "basic" | "scientific";

type AngleMode = "deg" | "rad";

type Operator = "+" | "-" | "*" | "/" | "^";

type ScientificFunction =
  | "sin"
  | "cos"
  | "tan"
  | "asin"
  | "acos"
  | "atan"
  | "sqrt"
  | "cbrt"
  | "ln"
  | "log"
  | "neg"
  | "root"
  | "inv";

type Token =
  | { type: "number"; value: number }
  | { type: "operator"; value: Operator }
  | { type: "paren"; value: "(" | ")" }
  | { type: "comma" }
  | { type: "function"; value: ScientificFunction }
  | { type: "postfix"; value: "!" };

type KeypadButton = {
  label: string;
  kind: "digit" | "operator" | "action" | "equals" | "paren";
  value?: string;
  tone?: "soft" | "ghost" | "accent";
  wide?: boolean;
};

type ScientificButton = {
  label: string;
  kind: "digit" | "operator" | "action" | "equals" | "paren" | "function" | "constant" | "transform" | "comma";
  value: string;
  tone?: "soft" | "ghost" | "accent";
  wide?: boolean;
};

const functionButtons = [
  { label: "MC", kind: "action", value: "memory-clear", tone: "ghost" },
  { label: "MR", kind: "action", value: "memory-recall", tone: "ghost" },
  { label: "M+", kind: "action", value: "memory-add", tone: "ghost" },
  { label: "M-", kind: "action", value: "memory-subtract", tone: "ghost" },
  { label: "%", kind: "action", value: "percent", tone: "ghost" },
] as const;

const keypadButtons: KeypadButton[] = [
  { label: "AC", kind: "action", value: "clear", tone: "soft" },
  { label: "DEL", kind: "action", value: "delete", tone: "soft" },
  { label: "(", kind: "paren", value: "(", tone: "soft" },
  { label: ")", kind: "paren", value: ")", tone: "soft" },
  { label: "7", kind: "digit", value: "7" },
  { label: "8", kind: "digit", value: "8" },
  { label: "9", kind: "digit", value: "9" },
  { label: "÷", kind: "operator", value: "/", tone: "ghost" },
  { label: "4", kind: "digit", value: "4" },
  { label: "5", kind: "digit", value: "5" },
  { label: "6", kind: "digit", value: "6" },
  { label: "×", kind: "operator", value: "*", tone: "ghost" },
  { label: "1", kind: "digit", value: "1" },
  { label: "2", kind: "digit", value: "2" },
  { label: "3", kind: "digit", value: "3" },
  { label: "-", kind: "operator", value: "-", tone: "ghost" },
  { label: "±", kind: "action", value: "toggle-sign", tone: "soft" },
  { label: "0", kind: "digit", value: "0" },
  { label: ".", kind: "action", value: "decimal", tone: "soft" },
  { label: "+", kind: "operator", value: "+", tone: "ghost" },
  { label: "=", kind: "equals", tone: "accent", wide: true },
];

const scientificButtons: ScientificButton[] = [
  { label: "sin", kind: "function", value: "sin", tone: "soft" },
  { label: "cos", kind: "function", value: "cos", tone: "soft" },
  { label: "tan", kind: "function", value: "tan", tone: "soft" },
  { label: "sin⁻¹", kind: "function", value: "asin", tone: "soft" },
  { label: "cos⁻¹", kind: "function", value: "acos", tone: "soft" },
  { label: "tan⁻¹", kind: "function", value: "atan", tone: "soft" },
  { label: "π", kind: "constant", value: "pi", tone: "ghost" },
  { label: "e", kind: "constant", value: "e", tone: "ghost" },
  { label: "xʸ", kind: "operator", value: "^", tone: "ghost" },
  { label: "x³", kind: "transform", value: "cube", tone: "soft" },
  { label: "x²", kind: "transform", value: "square", tone: "soft" },
  { label: "eˣ", kind: "transform", value: "exp", tone: "soft" },
  { label: "10ˣ", kind: "transform", value: "pow10", tone: "soft" },
  { label: "y√x", kind: "function", value: "root", tone: "soft" },
  { label: "³√x", kind: "transform", value: "cbrt", tone: "soft" },
  { label: "√x", kind: "transform", value: "sqrt", tone: "soft" },
  { label: "ln", kind: "function", value: "ln", tone: "ghost" },
  { label: "log", kind: "function", value: "log", tone: "ghost" },
  { label: "(", kind: "paren", value: "(", tone: "soft" },
  { label: ")", kind: "paren", value: ")", tone: "soft" },
  { label: ",", kind: "comma", value: ",", tone: "ghost" },
  { label: "1/x", kind: "transform", value: "inv", tone: "soft" },
  { label: "%", kind: "action", value: "percent", tone: "ghost" },
  { label: "n!", kind: "transform", value: "factorial", tone: "soft" },
] as const;

const operatorPrecedence: Record<Operator, number> = {
  "+": 1,
  "-": 1,
  "*": 2,
  "/": 2,
  "^": 3,
};

const initialExpression = "1280/4+75";

function isOperator(value: string): value is Operator {
  return value === "+" || value === "-" || value === "*" || value === "/" || value === "^";
}

function formatDisplayNumber(value: number) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 8 }).format(Number(value.toFixed(8)));
}

function formatRawNumber(value: number) {
  return Number(value.toFixed(8)).toString();
}

function prettyExpression(expression: string) {
  return expression
    .replaceAll("pi", "π")
    .replaceAll("*", "×")
    .replaceAll("/", "÷");
}

function isIncompleteExpression(expression: string) {
  const normalizedExpression = expression === "0" ? "" : expression;

  if (!normalizedExpression) {
    return true;
  }

  if (normalizedExpression === "-" || normalizedExpression === "(") {
    return true;
  }

  return /[+\-*/^(,]$/.test(normalizedExpression);
}

function normalizeScientificText(expression: string) {
  return expression.replaceAll("×", "*").replaceAll("÷", "/").replaceAll("π", "pi").replace(/\s+/g, "");
}

function toRadians(value: number, angleMode: AngleMode) {
  return angleMode === "deg" ? (value * Math.PI) / 180 : value;
}

function fromRadians(value: number, angleMode: AngleMode) {
  return angleMode === "deg" ? (value * 180) / Math.PI : value;
}

function factorial(value: number) {
  if (!Number.isInteger(value) || value < 0) {
    return null;
  }

  let result = 1;

  for (let index = 2; index <= value; index += 1) {
    result *= index;
  }

  return result;
}

function readNumber(expression: string, startIndex: number, allowSign = false) {
  let index = startIndex;
  let numberText = "";
  let hasDecimal = false;

  if (allowSign && expression[index] === "-") {
    numberText += "-";
    index += 1;
  }

  while (index < expression.length) {
    const character = expression[index];

    if (character === ".") {
      if (hasDecimal) {
        throw new Error("Invalid number");
      }

      hasDecimal = true;
      numberText += character;
      index += 1;
      continue;
    }

    if (!/[0-9]/.test(character)) {
      break;
    }

    numberText += character;
    index += 1;
  }

  if (numberText === "" || numberText === "-" || numberText === "." || numberText === "-.") {
    throw new Error("Invalid number");
  }

  return { value: Number(numberText), nextIndex: index };
}

function tokenize(expression: string): Token[] {
  const normalized = normalizeScientificText(expression);
  const tokens: Token[] = [];
  let index = 0;
  let expectValue = true;

  const isIdentifierCharacter = (character: string) => /[a-z]/i.test(character);

  while (index < normalized.length) {
    const character = normalized[index];

    if (character === "(") {
      tokens.push({ type: "paren", value: "(" });
      expectValue = true;
      index += 1;
      continue;
    }

    if (character === ")") {
      tokens.push({ type: "paren", value: ")" });
      expectValue = false;
      index += 1;
      continue;
    }

    if (character === ",") {
      tokens.push({ type: "comma" });
      expectValue = true;
      index += 1;
      continue;
    }

    if (character === "!") {
      tokens.push({ type: "postfix", value: "!" });
      expectValue = false;
      index += 1;
      continue;
    }

    if (isOperator(character)) {
      if (expectValue) {
        if (character === "-") {
          const nextCharacter = normalized[index + 1];

          if (nextCharacter === "(") {
            tokens.push({ type: "number", value: 0 });
            tokens.push({ type: "operator", value: "-" });
            index += 1;
            expectValue = true;
            continue;
          }

          if (nextCharacter && /[0-9.]/.test(nextCharacter)) {
            const { value, nextIndex } = readNumber(normalized, index, true);
            tokens.push({ type: "number", value });
            index = nextIndex;
            expectValue = false;
            continue;
          }

          tokens.push({ type: "function", value: "neg" });
          index += 1;
          expectValue = true;
          continue;
        }

        if (character === "+") {
          index += 1;
          continue;
        }

        throw new Error("Unexpected operator");
      }

      tokens.push({ type: "operator", value: character });
      expectValue = true;
      index += 1;
      continue;
    }

    if (/[0-9.]/.test(character)) {
      const { value, nextIndex } = readNumber(normalized, index);
      tokens.push({ type: "number", value });
      expectValue = false;
      index = nextIndex;
      continue;
    }

    if (isIdentifierCharacter(character)) {
      let endIndex = index + 1;

      while (endIndex < normalized.length && isIdentifierCharacter(normalized[endIndex])) {
        endIndex += 1;
      }

      const identifier = normalized.slice(index, endIndex).toLowerCase();

      if (identifier === "pi") {
        tokens.push({ type: "number", value: Math.PI });
        expectValue = false;
        index = endIndex;
        continue;
      }

      if (identifier === "e") {
        tokens.push({ type: "number", value: Math.E });
        expectValue = false;
        index = endIndex;
        continue;
      }

      if (
        identifier === "sin" ||
        identifier === "cos" ||
        identifier === "tan" ||
        identifier === "asin" ||
        identifier === "acos" ||
        identifier === "atan" ||
        identifier === "sqrt" ||
        identifier === "cbrt" ||
        identifier === "ln" ||
        identifier === "log" ||
        identifier === "root"
      ) {
        if (normalized[endIndex] !== "(") {
          throw new Error("Function must use parentheses");
        }

        tokens.push({ type: "function", value: identifier as ScientificFunction });
        expectValue = true;
        index = endIndex;
        continue;
      }

      throw new Error("Invalid character");
    }

    throw new Error("Invalid character");
  }

  if (expectValue && tokens.length > 0) {
    throw new Error("Incomplete expression");
  }

  return tokens;
}

function toRpn(tokens: Token[]) {
  const output: Token[] = [];
  const operators: Token[] = [];

  for (const token of tokens) {
    if (token.type === "number") {
      output.push(token);
      continue;
    }

    if (token.type === "postfix") {
      output.push(token);
      continue;
    }

    if (token.type === "function") {
      operators.push(token);
      continue;
    }

    if (token.type === "comma") {
      while (operators.length > 0 && operators[operators.length - 1]?.type !== "paren") {
        const nextOperator = operators.pop();

        if (nextOperator) {
          output.push(nextOperator);
        }
      }

      if (operators.length === 0) {
        throw new Error("Misplaced comma");
      }

      continue;
    }

    if (token.type === "paren") {
      if (token.value === "(") {
        operators.push(token);
        continue;
      }

      while (operators.length > 0 && operators[operators.length - 1]?.type !== "paren") {
        const nextOperator = operators.pop();

        if (nextOperator) {
          output.push(nextOperator);
        }
      }

      if (operators.length === 0) {
        throw new Error("Mismatched parentheses");
      }

      operators.pop();

      if (operators.length > 0 && operators[operators.length - 1]?.type === "function") {
        const nextFunction = operators.pop();

        if (nextFunction) {
          output.push(nextFunction);
        }
      }

      continue;
    }

    while (operators.length > 0) {
      const topOperator = operators[operators.length - 1];

      if (topOperator.type === "function") {
        const nextFunction = operators.pop();

        if (nextFunction) {
          output.push(nextFunction);
        }

        continue;
      }

      if (topOperator.type !== "operator") {
        break;
      }

      const topPrecedence = operatorPrecedence[topOperator.value];
      const currentPrecedence = operatorPrecedence[token.value];
      const isRightAssociative = token.value === "^";

      if (topPrecedence > currentPrecedence || (topPrecedence === currentPrecedence && !isRightAssociative)) {
        const poppedOperator = operators.pop();

        if (poppedOperator) {
          output.push(poppedOperator);
        }

        continue;
      }

      break;
    }

    operators.push(token);
  }

  while (operators.length > 0) {
    const nextOperator = operators.pop();

    if (!nextOperator || nextOperator.type === "paren") {
      throw new Error("Mismatched parentheses");
    }

    output.push(nextOperator);
  }

  return output;
}

function evaluateRpn(tokens: Token[], angleMode: AngleMode) {
  const values: number[] = [];

  for (const token of tokens) {
    if (token.type === "number") {
      values.push(token.value);
      continue;
    }

    if (token.type === "postfix") {
      const value = values.pop();

      if (typeof value !== "number") {
        throw new Error("Invalid expression");
      }

      const result = factorial(value);

      if (result === null) {
        throw new Error("Invalid factorial");
      }

      values.push(result);
      continue;
    }

    if (token.type === "function") {
      if (token.value === "root") {
        const radicand = values.pop();
        const degree = values.pop();

        if (typeof degree !== "number" || typeof radicand !== "number" || degree === 0) {
          throw new Error("Invalid expression");
        }

        values.push(Math.pow(radicand, 1 / degree));
        continue;
      }

      const value = values.pop();

      if (typeof value !== "number") {
        throw new Error("Invalid expression");
      }

      switch (token.value) {
        case "neg":
          values.push(-value);
          break;
        case "sin":
          values.push(Math.sin(toRadians(value, angleMode)));
          break;
        case "cos":
          values.push(Math.cos(toRadians(value, angleMode)));
          break;
        case "tan":
          values.push(Math.tan(toRadians(value, angleMode)));
          break;
        case "asin":
          values.push(fromRadians(Math.asin(value), angleMode));
          break;
        case "acos":
          values.push(fromRadians(Math.acos(value), angleMode));
          break;
        case "atan":
          values.push(fromRadians(Math.atan(value), angleMode));
          break;
        case "sqrt":
          values.push(Math.sqrt(value));
          break;
        case "cbrt":
          values.push(Math.cbrt(value));
          break;
        case "ln":
          values.push(Math.log(value));
          break;
        case "log":
          values.push(Math.log10(value));
          break;
      }

      continue;
    }

    if (token.type !== "operator") {
      throw new Error("Invalid expression");
    }

    const rightValue = values.pop();
    const leftValue = values.pop();

    if (typeof leftValue !== "number" || typeof rightValue !== "number") {
      throw new Error("Invalid expression");
    }

    switch (token.value) {
      case "+":
        values.push(leftValue + rightValue);
        break;
      case "-":
        values.push(leftValue - rightValue);
        break;
      case "*":
        values.push(leftValue * rightValue);
        break;
      case "/":
        if (rightValue === 0) {
          throw new Error("Division by zero");
        }

        values.push(leftValue / rightValue);
        break;
      case "^":
        values.push(Math.pow(leftValue, rightValue));
        break;
    }
  }

  if (values.length !== 1) {
    throw new Error("Invalid expression");
  }

  return values[0];
}

function evaluateExpression(expression: string, angleMode: AngleMode = "rad") {
  const trimmedExpression = expression.trim();

  if (!trimmedExpression || trimmedExpression === "0") {
    return null;
  }

  try {
    const tokens = tokenize(trimmedExpression);

    if (tokens.length === 0) {
      return null;
    }

    const rpn = toRpn(tokens);
    const result = evaluateRpn(rpn, angleMode);

    return Number.isFinite(result) ? result : null;
  } catch {
    return null;
  }
}

function getButtonClass(tone: KeypadButton["tone"], wide = false) {
  const baseClass =
    "rounded-xl border px-2.5 py-2.5 text-[0.8rem] font-semibold shadow-[0_6px_0_var(--key-shadow)] transition-all duration-150 ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_0_var(--key-shadow-hover)] active:translate-y-[2px] active:scale-[0.99] active:shadow-[0_2px_0_var(--key-shadow-active)] sm:px-3 sm:py-3 sm:text-sm";

  if (wide) {
    return `${baseClass} col-span-4`;
  }

  switch (tone) {
    case "accent":
      return `${baseClass} border-[color:var(--accent)]/40 bg-[color:var(--accent)] text-[color:var(--surface-strong)] hover:bg-[color:var(--accent-strong)] active:bg-[linear-gradient(180deg,#c89c67_0%,#8a6b45_100%)]`;
    case "ghost":
      return `${baseClass} border-[color:var(--border)] bg-[color:var(--surface-soft)] text-[color:var(--foreground)] hover:bg-[color:var(--surface)] hover:text-[color:var(--foreground)] active:bg-[linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.06)_100%)]`;
    case "soft":
    default:
      return `${baseClass} border-[color:var(--border)] bg-[color:var(--surface-soft)] text-[color:var(--foreground)] hover:bg-[color:var(--accent-soft)] active:bg-[linear-gradient(180deg,#fff8ef_0%,#eadcc9_100%)]`;
  }
}

function normalizeExpressionValue(expression: string) {
  return expression === "0" ? "" : expression;
}

function appendTextToExpression(expression: string, text: string) {
  if (!expression) {
    return text;
  }

  if (/[0-9)!a-z]$/i.test(expression)) {
    return `${expression}*${text}`;
  }

  return `${expression}${text}`;
}

export function HomeCalculator() {
  const [expression, setExpression] = useState(initialExpression);
  const [memory, setMemory] = useState(0);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [calculatorMode, setCalculatorMode] = useState<CalculatorMode>("basic");
  const [angleMode, setAngleMode] = useState<AngleMode>("rad");
  const [lastValidValue, setLastValidValue] = useState(() => evaluateExpression(initialExpression) ?? 0);
  const [isModeMenuOpen, setIsModeMenuOpen] = useState(false);
  const expressionInputRef = useRef<HTMLTextAreaElement | null>(null);
  const modeMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isModeMenuOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node | null;

      if (target && modeMenuRef.current && !modeMenuRef.current.contains(target)) {
        setIsModeMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModeMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModeMenuOpen]);

  const previewValue = evaluateExpression(expression, angleMode);
  const currentAnswer = previewValue ?? lastValidValue;
  const displayValue = formatDisplayNumber(currentAnswer);
  const invalidExpressionMessage = previewValue === null && !isIncompleteExpression(expression) ? "Biểu thức chưa hợp lệ" : null;
  const expressionDisplayValue = expression === "0" ? "" : expression;

  const commitExpression = (updater: (currentExpression: string) => string) => {
    setExpression((currentExpression) => {
      const nextExpression = updater(currentExpression);
      const nextPreview = evaluateExpression(nextExpression, angleMode);

      if (nextPreview !== null) {
        setLastValidValue(nextPreview);
      }

      return nextExpression;
    });
  };

  const handleExpressionChange = (nextExpression: string) => {
    const normalizedExpression = nextExpression.trim() === "" ? "0" : nextExpression;

    setExpression(normalizedExpression);

    const nextPreview = evaluateExpression(normalizedExpression, angleMode);

    if (nextPreview !== null) {
      setLastValidValue(nextPreview);
    }
  };

  const reuseCurrentAnswer = () => {
    const normalizedAnswer = formatRawNumber(currentAnswer);

    setExpression(normalizedAnswer);
    setLastValidValue(currentAnswer);
    expressionInputRef.current?.focus();
  };

  const clearExpression = () => commitExpression(() => "0");

  const appendDigit = (digit: string) => {
    commitExpression((currentExpression) => {
      const normalizedExpression = currentExpression === "0" ? "" : currentExpression;
      return appendTextToExpression(normalizedExpression, digit);
    });
  };

  const appendDecimal = () => {
    commitExpression((currentExpression) => {
      const normalizedExpression = currentExpression === "0" ? "" : currentExpression;
      const lastNumber = normalizedExpression.split(/[^0-9.]/).at(-1) ?? "";

      if (lastNumber.includes(".")) {
        return normalizedExpression || "0";
      }

      if (!normalizedExpression || /[+\-*/^(]$/.test(normalizedExpression)) {
        return `${normalizedExpression}0.`;
      }

      return `${normalizedExpression}.`;
    });
  };

  const appendOperator = (operator: Operator) => {
    commitExpression((currentExpression) => {
      const normalizedExpression = currentExpression === "0" ? "" : currentExpression;

      if (!normalizedExpression) {
        return operator === "-" ? "-" : "0";
      }

      if (/[+\-*/^]$/.test(normalizedExpression)) {
        if (operator === "-") {
          return `${normalizedExpression}-`;
        }

        return `${normalizedExpression.slice(0, -1)}${operator}`;
      }

      if (normalizedExpression.endsWith("(")) {
        return `${normalizedExpression}${operator === "-" ? "-" : ""}`;
      }

      return `${normalizedExpression}${operator}`;
    });
  };

  const appendParen = (paren: "(" | ")") => {
    commitExpression((currentExpression) => {
      const normalizedExpression = currentExpression === "0" ? "" : currentExpression;

      if (paren === "(") {
        if (!normalizedExpression) {
          return "(";
        }

        if (/[0-9)]$/.test(normalizedExpression)) {
          return `${normalizedExpression}*(`;
        }

        return `${normalizedExpression}(`;
      }

      const openCount = (normalizedExpression.match(/\(/g) ?? []).length;
      const closeCount = (normalizedExpression.match(/\)/g) ?? []).length;

      if (openCount <= closeCount) {
        return normalizedExpression || "0";
      }

      if (/[+\-*/^(]$/.test(normalizedExpression)) {
        return normalizedExpression;
      }

      return `${normalizedExpression})`;
    });
  };

  const deleteLastCharacter = () => {
    commitExpression((currentExpression) => {
      const normalizedExpression = currentExpression === "0" ? "" : currentExpression;

      if (!normalizedExpression) {
        return "0";
      }

      const nextExpression = normalizedExpression.slice(0, -1);
      return nextExpression || "0";
    });
  };

  const toggleSign = () => {
    commitExpression((currentExpression) => {
      const normalizedExpression = currentExpression === "0" ? "" : currentExpression;

      if (!normalizedExpression) {
        return "-";
      }

      if (normalizedExpression.startsWith("-(") && normalizedExpression.endsWith(")")) {
        return normalizedExpression.slice(2, -1) || "0";
      }

      return `-(${normalizedExpression})`;
    });
  };

  const applyPercent = () => {
    commitExpression((currentExpression) => {
      const normalizedExpression = currentExpression === "0" ? "" : currentExpression;

      if (!normalizedExpression || /[+\-*/^(]$/.test(normalizedExpression)) {
        return normalizedExpression || "0";
      }

      return `${normalizedExpression}/100`;
    });
  };

  const storeResult = () => {
    const result = evaluateExpression(expression, angleMode);

    if (result === null) {
      return;
    }

    const normalizedResult = formatRawNumber(result);

    setHistory((currentHistory) => [
      { expression, value: result },
      ...currentHistory,
    ].slice(0, 5));

    setExpression(normalizedResult);
    setLastValidValue(result);
  };

  const recallMemory = () => {
    setExpression(formatRawNumber(memory));
    setLastValidValue(memory);
  };

  const addToMemory = () => {
    const result = evaluateExpression(expression, angleMode);

    if (result === null) {
      return;
    }

    setMemory((currentMemory) => currentMemory + result);
  };

  const subtractFromMemory = () => {
    const result = evaluateExpression(expression, angleMode);

    if (result === null) {
      return;
    }

    setMemory((currentMemory) => currentMemory - result);
  };

  const clearMemory = () => {
    setMemory(0);
  };

  const appendScientificText = (text: string) => {
    commitExpression((currentExpression) => {
      const normalizedExpression = normalizeExpressionValue(currentExpression);
      return appendTextToExpression(normalizedExpression, text);
    });
  };

  const applyPrefixScientificFunction = (functionName: ScientificFunction) => {
    commitExpression((currentExpression) => {
      const normalizedExpression = normalizeExpressionValue(currentExpression);

      if (functionName === "root") {
        if (!normalizedExpression || isIncompleteExpression(normalizedExpression)) {
          return appendTextToExpression(normalizedExpression, "root(");
        }

        return `root(${normalizedExpression},`;
      }

      if (!normalizedExpression || isIncompleteExpression(normalizedExpression)) {
        return appendTextToExpression(normalizedExpression, `${functionName}(`);
      }

      return `${functionName}(${normalizedExpression})`;
    });
  };

  const applyScientificTransform = (transform: "square" | "cube" | "sqrt" | "cbrt" | "exp" | "pow10" | "inv" | "factorial") => {
    commitExpression((currentExpression) => {
      const normalizedExpression = normalizeExpressionValue(currentExpression);

      if (!normalizedExpression || isIncompleteExpression(normalizedExpression)) {
        return normalizedExpression || "0";
      }

      switch (transform) {
        case "square":
          return `(${normalizedExpression})^2`;
        case "cube":
          return `(${normalizedExpression})^3`;
        case "sqrt":
          return `sqrt(${normalizedExpression})`;
        case "cbrt":
          return `cbrt(${normalizedExpression})`;
        case "exp":
          return `e^(${normalizedExpression})`;
        case "pow10":
          return `10^(${normalizedExpression})`;
        case "inv":
          return `1/(${normalizedExpression})`;
        case "factorial":
          return `(${normalizedExpression})!`;
      }

      return normalizedExpression;
    });
  };

  const handleScientificButtonPress = (button: (typeof scientificButtons)[number]) => {
    switch (button.kind) {
      case "function":
        if (button.value === "sin" || button.value === "cos" || button.value === "tan" || button.value === "asin" || button.value === "acos" || button.value === "atan" || button.value === "ln" || button.value === "log" || button.value === "root") {
          applyPrefixScientificFunction(button.value);
        }
        break;
      case "action":
        if (button.value === "percent") {
          applyPercent();
        }
        break;
      case "comma":
        appendScientificText(",");
        break;
      case "constant":
        appendScientificText(button.value);
        break;
      case "operator":
        if (button.value && isOperator(button.value)) {
          appendOperator(button.value);
        }
        break;
      case "transform":
        switch (button.value) {
          case "square":
          case "cube":
          case "sqrt":
          case "cbrt":
          case "exp":
          case "pow10":
          case "inv":
          case "factorial":
            applyScientificTransform(button.value);
            break;
        }
        break;
    }
  };

  const handleButtonPress = (button: KeypadButton) => {
    if (button.kind === "digit" && button.value) {
      appendDigit(button.value);
      return;
    }

    if (button.kind === "operator" && button.value && isOperator(button.value)) {
      appendOperator(button.value);
      return;
    }

    if (button.kind === "paren" && button.value) {
      appendParen(button.value as "(" | ")");
      return;
    }

    switch (button.value) {
      case "clear":
        clearExpression();
        break;
      case "delete":
        deleteLastCharacter();
        break;
      case "toggle-sign":
        toggleSign();
        break;
      case "decimal":
        appendDecimal();
        break;
      case "percent":
        applyPercent();
        break;
      case "memory-clear":
        clearMemory();
        break;
      case "memory-recall":
        recallMemory();
        break;
      case "memory-add":
        addToMemory();
        break;
      case "memory-subtract":
        subtractFromMemory();
        break;
      case undefined:
        storeResult();
        break;
    }
  };

  return (
    <CalculatorShell description="A full-size calculator with memory, live preview, and a keypad that feels like a desk calculator.">
      <div className="grid gap-5 xl:grid-cols-[0.94fr_1.06fr] xl:items-start xl:gap-6">
        <div className="rounded-[1.85rem] border border-[color:var(--border)] bg-[color:var(--surface-strong)] p-4 text-white shadow-[0_18px_48px_rgba(34,24,12,0.16)] sm:p-5 xl:max-w-[42rem]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[color:#c9b79d]">Quick calculator</p>
              <h2 className="mt-2 text-2xl font-semibold">Desk calculator</h2>
              <p className="mt-2 text-sm leading-6 text-white/72">
                Tap the keypad or type an expression. Parentheses and memory keys are built in.
              </p>
            </div>

            <div ref={modeMenuRef} className="relative flex flex-col items-end gap-2">
              <span className="text-xs uppercase tracking-[0.22em] text-white/45">Mode</span>
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={isModeMenuOpen}
                onClick={() => setIsModeMenuOpen((current) => !current)}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white outline-none shadow-[0_6px_0_rgba(0,0,0,0.14)] transition-all duration-150 ease-out hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-[0_8px_0_rgba(0,0,0,0.14)] active:translate-y-[2px] active:scale-[0.99] active:bg-[linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.06)_100%)] active:shadow-[0_2px_0_rgba(0,0,0,0.14)]"
              >
                <span>{calculatorMode === "basic" ? "Basic" : "Scientific"}</span>
                <span aria-hidden="true" className="text-[0.65rem] text-white/55">
                  ▾
                </span>
              </button>

              {isModeMenuOpen ? (
                <div
                  role="menu"
                  aria-label="Calculator mode"
                  className="absolute right-0 top-[calc(100%+0.5rem)] z-30 w-48 overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-strong)] p-1 shadow-[0_20px_48px_rgba(0,0,0,0.32)]"
                >
                  {(["basic", "scientific"] as const).map((mode) => {
                    const isActive = calculatorMode === mode;

                    return (
                      <button
                        key={mode}
                        type="button"
                        role="menuitemradio"
                        aria-checked={isActive}
                        onClick={() => {
                          setCalculatorMode(mode);
                          setIsModeMenuOpen(false);
                        }}
                        className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-semibold transition-colors ${
                          isActive
                            ? "bg-[color:var(--accent)] text-[color:var(--surface-strong)]"
                            : "text-white/80 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        <span>{mode === "basic" ? "Basic" : "Scientific"}</span>
                        {isActive ? <span aria-hidden="true">✓</span> : null}
                      </button>
                    );
                  })}
                </div>
              ) : null}
            </div>
          </div>

          {calculatorMode === "scientific" ? (
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-[1.1rem] border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-4 py-3">
              <span className="text-xs uppercase tracking-[0.22em] text-[color:var(--muted)]">Angle</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setAngleMode("deg")}
                  className={`rounded-xl px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] shadow-[0_5px_0_rgba(0,0,0,0.12)] transition-all duration-150 ease-out hover:-translate-y-0.5 hover:shadow-[0_7px_0_rgba(0,0,0,0.12)] active:translate-y-[2px] active:scale-[0.99] active:shadow-[0_2px_0_rgba(0,0,0,0.12)] ${
                      angleMode === "deg" ? "bg-[color:var(--accent)] text-[color:var(--surface-strong)]" : "bg-[color:var(--surface)] text-[color:var(--foreground)] hover:bg-[color:var(--surface-soft)]"
                    }`}
                >
                  Deg
                </button>
                <button
                  type="button"
                  onClick={() => setAngleMode("rad")}
                  className={`rounded-xl px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] shadow-[0_5px_0_rgba(0,0,0,0.12)] transition-all duration-150 ease-out hover:-translate-y-0.5 hover:shadow-[0_7px_0_rgba(0,0,0,0.12)] active:translate-y-[2px] active:scale-[0.99] active:shadow-[0_2px_0_rgba(0,0,0,0.12)] ${
                      angleMode === "rad" ? "bg-[color:var(--accent)] text-[color:var(--surface-strong)]" : "bg-[color:var(--surface)] text-[color:var(--foreground)] hover:bg-[color:var(--surface-soft)]"
                    }`}
                >
                  Rad
                </button>
              </div>
            </div>
          ) : null}

          <div className="mt-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <label className="block text-xs uppercase tracking-[0.22em] text-white/45" htmlFor="calculator-expression">
                  Expression
                </label>
                <textarea
                  id="calculator-expression"
                  ref={expressionInputRef}
                  value={expressionDisplayValue}
                  onChange={(event) => handleExpressionChange(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      storeResult();
                    }
                  }}
                  spellCheck={false}
                  aria-label="Editable calculator expression"
                  className="mt-2.5 min-h-10 w-full resize-none border-0 bg-transparent text-left text-[0.98rem] leading-7 text-white/72 outline-none placeholder:text-white/35 sm:text-[1.05rem]"
                  placeholder="Type an expression or use the keypad"
                />
              </div>

              <div className="shrink-0 text-right">
                <div className="text-xs uppercase tracking-[0.22em] text-white/45">Result</div>
                <button
                  type="button"
                  onClick={reuseCurrentAnswer}
                  className="mt-2.5 rounded-2xl px-2 py-1 text-3xl font-semibold tracking-tight text-white transition-all duration-150 ease-out hover:-translate-y-0.5 hover:bg-white/5 active:translate-y-[2px] active:scale-[0.99] sm:text-[2.45rem]"
                  aria-label="Use current answer in expression"
                >
                  {displayValue}
                </button>
              </div>
            </div>
            {invalidExpressionMessage ? (
              <p className="mt-2 text-left text-sm leading-6 text-white/45">{invalidExpressionMessage}</p>
            ) : null}
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
            {functionButtons.map((button) => (
              <button
                key={button.label}
                type="button"
                onClick={() => handleButtonPress(button)}
                className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-2.5 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--foreground)] shadow-[0_5px_0_var(--key-shadow)] transition-all duration-150 ease-out hover:-translate-y-0.5 hover:bg-[color:var(--surface)] hover:text-[color:var(--foreground)] hover:shadow-[0_7px_0_var(--key-shadow-hover)] active:translate-y-[2px] active:scale-[0.99] active:bg-[linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.06)_100%)] active:shadow-[0_2px_0_var(--key-shadow-active)] sm:px-3 sm:py-2 sm:text-xs"
              >
                {button.label}
              </button>
            ))}
          </div>

          {calculatorMode === "scientific" ? (
            <div className="mt-4 grid grid-cols-4 gap-1.5 sm:grid-cols-6 sm:gap-2 lg:grid-cols-8">
              {scientificButtons.map((button) => {
                const wide = "wide" in button ? ((button as { wide?: boolean }).wide ?? false) : false;

                return (
                  <button
                    key={button.label}
                    type="button"
                    onClick={() => handleScientificButtonPress(button)}
                    className={getButtonClass(button.tone, wide)}
                  >
                    {button.label}
                  </button>
                );
              })}
            </div>
          ) : null}

          <div className="mt-4 grid grid-cols-4 gap-1.5 sm:gap-2">
            {keypadButtons.map((button) => (
              <button
                key={button.label}
                type="button"
                onClick={() => handleButtonPress(button)}
                className={getButtonClass(button.tone, button.wide)}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 content-start xl:gap-6">
          <ResultCard
            label="Memory"
            value={formatDisplayNumber(memory)}
            hint="Stored by M+, M-, MC, and MR."
            className="min-h-[9.25rem] p-4 sm:p-5"
          />
          <ResultCard
            label="Current answer"
            value={displayValue}
            hint={invalidExpressionMessage ?? "Changes as you build the expression."}
            className="min-h-[9.25rem] p-4 sm:p-5"
          />

          <div className="min-h-[18rem] rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--surface-soft)] p-5 shadow-[0_12px_32px_rgba(34,24,12,0.06)] sm:p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-[color:var(--muted-strong)]">Recent calculations</p>
            <div className="mt-4 space-y-3">
              {history.length > 0 ? (
                history.map((entry) => (
                  <div key={`${entry.expression}-${entry.value}`} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-4">
                    <div className="break-words whitespace-normal text-sm leading-6 text-[color:var(--muted)]">{prettyExpression(entry.expression)}</div>
                    <div className="mt-1 break-words whitespace-normal text-xl font-semibold text-[color:var(--foreground)] sm:text-[1.35rem]">{formatDisplayNumber(entry.value)}</div>
                  </div>
                ))
              ) : (
                <p className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-4 text-sm leading-6 text-[color:var(--muted)]">
                  Try <span className="font-semibold text-[color:var(--foreground)]">12 × 8 + 6</span> to see the history stack fill up.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </CalculatorShell>
  );
}