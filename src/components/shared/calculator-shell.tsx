import type { ReactNode } from "react";

type CalculatorShellProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function CalculatorShell({ title, description, children }: CalculatorShellProps) {
  return (
    <section className="rounded-[2rem] border border-black/10 bg-white/80 p-6 shadow-[0_20px_60px_rgba(34,24,12,0.08)] backdrop-blur sm:p-8">
      {/* Shared shell keeps every calculator page visually consistent without coupling the tool logic. */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm uppercase tracking-[0.24em] text-[#8a6b45]">Calculator</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
          {description ? <p className="max-w-2xl text-base leading-7 text-[#5c554b] sm:text-lg">{description}</p> : null}
        </div>
      </div>

      <div className="mt-6">{children}</div>
    </section>
  );
}
