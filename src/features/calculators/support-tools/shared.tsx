import type { ReactNode } from "react";

type SupportToolShellProps = {
  title: string;
  description: string;
  resultTitle: string;
  resultDescription: string;
  inputs: ReactNode;
  results: ReactNode;
};

export function formatDecimal(value: number) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(value);
}

export function SupportToolShell({
  title,
  description,
  resultTitle,
  resultDescription,
  inputs,
  results,
}: SupportToolShellProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <section className="rounded-[2rem] border border-black/10 bg-white/80 p-6 shadow-[0_20px_60px_rgba(34,24,12,0.08)] backdrop-blur sm:p-8">
        <p className="text-sm uppercase tracking-[0.24em] text-[#8a6b45]">Inputs</p>
        <h2 className="mt-2 text-2xl font-semibold text-[#1b1a17]">{title}</h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-[#5c554b]">{description}</p>

        <div className="mt-6">{inputs}</div>
      </section>

      <section className="space-y-6">
        <div className="rounded-[2rem] border border-black/10 bg-[#201c17] p-6 text-white shadow-[0_20px_60px_rgba(34,24,12,0.12)] sm:p-8">
          <p className="text-sm uppercase tracking-[0.24em] text-[#c9b79d]">Results</p>
          <h3 className="mt-2 text-2xl font-semibold">{resultTitle}</h3>
          <p className="mt-3 text-sm leading-6 text-white/72">{resultDescription}</p>
        </div>

        {results}
      </section>
    </div>
  );
}