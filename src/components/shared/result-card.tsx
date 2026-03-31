type ResultCardProps = {
  label: string;
  value: string;
  hint?: string;
  className?: string;
};

export function ResultCard({ label, value, hint, className }: ResultCardProps) {
  return (
    <div className={`min-w-0 rounded-[1.35rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-3.5 shadow-[0_10px_26px_rgba(34,24,12,0.06)] sm:p-4 ${className ?? ""}`.trim()}>
      <div className="inline-flex max-w-full rounded-full bg-[color:var(--accent-soft)] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--accent-strong)] sm:text-xs">
        <span className="break-words text-balance">{label}</span>
      </div>
      <div className="mt-2 break-words text-2xl font-semibold leading-tight text-[color:var(--foreground)] sm:text-3xl lg:text-3xl">
        {value}
      </div>
      {hint ? <p className="mt-2 break-words text-sm leading-6 text-[color:var(--muted)]">{hint}</p> : null}
    </div>
  );
}
