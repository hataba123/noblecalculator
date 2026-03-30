"use client";

import { useState } from "react";

import { CalculatorShell } from "./calculator-shell";
import { ResultCard } from "./result-card";

type HistoryEntry = {
  expression: string;
  value: number;
};

type Operator = "+" | "-" | "*" | "/";

type Token =
  | { type: "number"; value: number }
  | { type: "operator"; value: Operator }
  | { type: "paren"; value: "(" | ")" };

type KeypadButton = {
  label: string;
  kind: "digit" | "operator" | "action" | "equals" | "paren";
  value?: string;
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

const operatorPrecedence: Record<Operator, number> = {
  "+": 1,
  "-": 1,
  "*": 2,
  "/": 2,
};

const initialExpression = "1280/4+75";

function isOperator(value: string): value is Operator {
  return value === "+" || value === "-" || value === "*" || value === "/";
}

function formatDisplayNumber(value: number) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 8 }).format(Number(value.toFixed(8)));
}

function formatRawNumber(value: number) {
  return Number(value.toFixed(8)).toString();
}

function prettyExpression(expression: string) {
  return expression.replaceAll("*", "×").replaceAll("/", "÷");
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
  const normalized = expression.replaceAll("×", "*").replaceAll("÷", "/").replace(/\s+/g, "");
  const tokens: Token[] = [];
  let index = 0;
  let expectValue = true;

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
      continue;
    }

    while (operators.length > 0) {
      const topOperator = operators[operators.length - 1];

      if (topOperator.type !== "operator") {
        break;
      }

      if (operatorPrecedence[topOperator.value] < operatorPrecedence[token.value]) {
        break;
      }

      const poppedOperator = operators.pop();

      if (poppedOperator) {
        output.push(poppedOperator);
      }
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

function evaluateRpn(tokens: Token[]) {
  const values: number[] = [];

  for (const token of tokens) {
    if (token.type === "number") {
      values.push(token.value);
      continue;
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
    }
  }

  if (values.length !== 1) {
    throw new Error("Invalid expression");
  }

  return values[0];
}

function evaluateExpression(expression: string) {
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
    const result = evaluateRpn(rpn);

    return Number.isFinite(result) ? result : null;
  } catch {
    return null;
  }
}

function getButtonClass(tone: KeypadButton["tone"], wide = false) {
  const baseClass = "rounded-2xl border px-4 py-3 text-sm font-semibold transition-transform duration-150 active:scale-[0.98]";

  if (wide) {
    return `${baseClass} col-span-4`;
  }

  switch (tone) {
    case "accent":
      return `${baseClass} border-[#d0b08a]/40 bg-[#d0b08a] text-[#201c17] hover:bg-[#ddb98f]`;
    case "ghost":
      return `${baseClass} border-white/10 bg-white/5 text-white/75 hover:bg-white/10 hover:text-white`;
    case "soft":
    default:
      return `${baseClass} border-black/10 bg-[#f7f1e8] text-[#1b1a17] hover:bg-[#efe4d3]`;
  }
}

export function HomeCalculator() {
  const [expression, setExpression] = useState(initialExpression);
  const [memory, setMemory] = useState(0);
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  const previewValue = evaluateExpression(expression);
  const displayValue = previewValue === null ? "Check the expression" : formatDisplayNumber(previewValue);

  const clearExpression = () => setExpression("0");

  const appendDigit = (digit: string) => {
    setExpression((currentExpression) => {
      const normalizedExpression = currentExpression === "0" ? "" : currentExpression;
      const lastCharacter = normalizedExpression.at(-1);

      if (lastCharacter === ")") {
        return `${normalizedExpression}*${digit}`;
      }

      return `${normalizedExpression}${digit}`;
    });
  };

  const appendDecimal = () => {
    setExpression((currentExpression) => {
      const normalizedExpression = currentExpression === "0" ? "" : currentExpression;
      const lastNumber = normalizedExpression.split(/[^0-9.]/).at(-1) ?? "";

      if (lastNumber.includes(".")) {
        return normalizedExpression || "0";
      }

      if (!normalizedExpression || /[+\-*/(]$/.test(normalizedExpression)) {
        return `${normalizedExpression}0.`;
      }

      return `${normalizedExpression}.`;
    });
  };

  const appendOperator = (operator: Operator) => {
    setExpression((currentExpression) => {
      const normalizedExpression = currentExpression === "0" ? "" : currentExpression;

      if (!normalizedExpression) {
        return operator === "-" ? "-" : "0";
      }

      if (/[+\-*/]$/.test(normalizedExpression)) {
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
    setExpression((currentExpression) => {
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

      if (/[+\-*/(]$/.test(normalizedExpression)) {
        return normalizedExpression;
      }

      return `${normalizedExpression})`;
    });
  };

  const deleteLastCharacter = () => {
    setExpression((currentExpression) => {
      const normalizedExpression = currentExpression === "0" ? "" : currentExpression;

      if (!normalizedExpression) {
        return "0";
      }

      const nextExpression = normalizedExpression.slice(0, -1);
      return nextExpression || "0";
    });
  };

  const toggleSign = () => {
    setExpression((currentExpression) => {
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
    setExpression((currentExpression) => {
      const normalizedExpression = currentExpression === "0" ? "" : currentExpression;

      if (!normalizedExpression || /[+\-*/(]$/.test(normalizedExpression)) {
        return normalizedExpression || "0";
      }

      return `${normalizedExpression}/100`;
    });
  };

  const storeResult = () => {
    const result = evaluateExpression(expression);

    if (result === null) {
      return;
    }

    const normalizedResult = formatRawNumber(result);

    setHistory((currentHistory) => [
      { expression, value: result },
      ...currentHistory,
    ].slice(0, 5));

    setExpression(normalizedResult);
  };

  const recallMemory = () => {
    setExpression(formatRawNumber(memory));
  };

  const addToMemory = () => {
    const result = evaluateExpression(expression);

    if (result === null) {
      return;
    }

    setMemory((currentMemory) => currentMemory + result);
  };

  const subtractFromMemory = () => {
    const result = evaluateExpression(expression);

    if (result === null) {
      return;
    }

    setMemory((currentMemory) => currentMemory - result);
  };

  const clearMemory = () => {
    setMemory(0);
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
    <CalculatorShell title="Homepage Calculator" description="A full-size calculator with memory, live preview, and a keypad that feels like a desk calculator.">
      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[2rem] border border-black/10 bg-[#201c17] p-5 text-white shadow-[0_20px_60px_rgba(34,24,12,0.18)] sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[#c9b79d]">Quick calculator</p>
              <h2 className="mt-2 text-2xl font-semibold">Desk calculator</h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-white/72">
                Tap the keypad or type an expression. Parentheses and memory keys are built in.
              </p>
            </div>

            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
              Live preview
            </div>
          </div>

          <div className="mt-5 rounded-[1.6rem] border border-white/10 bg-white/5 p-5">
            <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.22em] text-white/45">
              <span>Expression</span>
              <span>Result</span>
            </div>
            <div className="mt-3 min-h-10 text-right text-lg leading-7 text-white/72 sm:text-xl">
              {prettyExpression(expression) || "0"}
            </div>
            <div className="mt-2 text-right text-4xl font-semibold tracking-tight sm:text-5xl">
              {displayValue}
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {functionButtons.map((button) => (
              <button
                key={button.label}
                type="button"
                onClick={() => handleButtonPress(button)}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/75 transition-colors hover:bg-white/10 hover:text-white"
              >
                {button.label}
              </button>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-4 gap-3">
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

        <div className="grid gap-4 content-start">
          <ResultCard
            label="Memory"
            value={formatDisplayNumber(memory)}
            hint="Stored by M+, M-, MC, and MR."
          />
          <ResultCard
            label="Current answer"
            value={displayValue}
            hint="Changes as you build the expression."
          />

          <div className="rounded-[2rem] border border-black/10 bg-[#fbf8f3] p-5 shadow-[0_12px_32px_rgba(34,24,12,0.06)]">
            <p className="text-sm uppercase tracking-[0.24em] text-[#8a6b45]">Recent calculations</p>
            <div className="mt-4 space-y-3">
              {history.length > 0 ? (
                history.map((entry) => (
                  <div key={`${entry.expression}-${entry.value}`} className="rounded-2xl border border-black/10 bg-white px-4 py-3">
                    <div className="text-sm leading-6 text-[#5c554b]">{prettyExpression(entry.expression)}</div>
                    <div className="mt-1 text-lg font-semibold text-[#1b1a17]">{formatDisplayNumber(entry.value)}</div>
                  </div>
                ))
              ) : (
                <p className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm leading-6 text-[#5c554b]">
                  Try <span className="font-semibold text-[#1b1a17]">12 × 8 + 6</span> to see the history stack fill up.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </CalculatorShell>
  );
}