type ResultCardProps = {
  label: string;
  value: string;
  hint?: string;
};

export function ResultCard({ label, value, hint }: ResultCardProps) {
  return (
    <div className="rounded-[1.35rem] border border-black/10 bg-white/80 p-3.5 shadow-[0_10px_26px_rgba(34,24,12,0.06)] sm:p-4">
      <div className="text-[0.7rem] uppercase tracking-[0.24em] text-[#8a6b45] sm:text-xs">{label}</div>
      <div className="mt-2 text-xl font-semibold text-[#1b1a17] sm:text-2xl lg:text-3xl">{value}</div>
      {hint ? <p className="mt-2 text-sm leading-6 text-[#5c554b]">{hint}</p> : null}
    </div>
  );
}
