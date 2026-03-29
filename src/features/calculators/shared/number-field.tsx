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
  return (
    <label className="space-y-2">
      <span className="text-sm font-medium text-[#1b1a17]">{label}</span>
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(event) => onChange(Number(event.target.value) || 0)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-base text-[#1b1a17] outline-none transition placeholder:text-[#9b8f80] focus:border-[#d0b08a] focus:ring-2 focus:ring-[#d0b08a]/30"
      />
      {helpText ? <p className="text-sm leading-6 text-[#5c554b]">{helpText}</p> : null}
    </label>
  );
}