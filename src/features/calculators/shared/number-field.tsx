import { useId } from "react";

type NumberFieldProps = {
  label: string;
  value: number;
  onChange: (value: number) => void;
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
  helpText?: string;
};

export function NumberField({
  label,
  value,
  onChange,
  placeholder,
  min,
  max,
  step,
  helpText,
}: NumberFieldProps) {
  const helpTextId = useId();

  return (
    <label className="min-w-0 space-y-2 text-left">
      <span className="block text-sm font-medium leading-6 text-[color:var(--muted-strong)] text-balance">
        {label}
      </span>
      <input
        type="number"
        inputMode="decimal"
        value={value}
        min={min}
        max={max}
        step={step}
        aria-describedby={helpText ? helpTextId : undefined}
        onChange={(event) => onChange(Number(event.target.value) || 0)}
        placeholder={placeholder}
        className="min-w-0 w-full rounded-[1.1rem] border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-base text-[color:var(--foreground)] outline-none transition placeholder:text-[color:var(--muted)] focus:border-[color:var(--accent)] focus:ring-2 focus:ring-[color:var(--accent)]/20"
      />
      {helpText ? (
        <p id={helpTextId} className="break-words text-sm leading-6 text-[color:var(--muted)]">
          {helpText}
        </p>
      ) : null}
    </label>
  );
}