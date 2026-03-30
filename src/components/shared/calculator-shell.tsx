import type { ReactNode } from "react";

type CalculatorShellProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function CalculatorShell({ title, description, children }: CalculatorShellProps) {
  return (
    <section className="rounded-[2rem] border border-black/10 bg-white/80 p-6 shadow-[0_20px_60px_rgba(34,24,12,0.08)] backdrop-blur sm:p-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm uppercase tracking-[0.24em] text-[#8a6b45]">Calculator</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
          <p className="max-w-2xl text-base leading-7 text-[#5c554b] sm:text-lg">{description}</p>
        </div>

        <div className="grid gap-3 text-sm text-[#5c554b] sm:grid-cols-3 lg:w-[30rem]">
          {[
            { label: "Interactive", value: "Live calculations" },
            { label: "Data", value: "Shared registry" },
            { label: "SEO", value: "Dedicated route" },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-black/10 bg-[#fbf8f3] p-4">
              <div className="text-xs uppercase tracking-[0.24em] text-[#8a6b45]">{item.label}</div>
              <div className="mt-1 font-semibold text-[#1b1a17]">{item.value}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">{children}</div>
    </section>
  );
}
