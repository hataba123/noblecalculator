type ResultCardProps = {
  label: string;
  value: string;
  hint?: string;
};

export function ResultCard({ label, value, hint }: ResultCardProps) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/80 p-4 shadow-[0_12px_32px_rgba(34,24,12,0.06)]">
      <div className="text-xs uppercase tracking-[0.24em] text-[#8a6b45]">{label}</div>
      <div className="mt-2 text-2xl font-semibold text-[#1b1a17]">{value}</div>
      {hint ? <p className="mt-2 text-sm leading-6 text-[#5c554b]">{hint}</p> : null}
    </div>
  );
}
