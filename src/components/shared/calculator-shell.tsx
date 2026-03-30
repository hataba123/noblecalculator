import type { ReactNode } from "react";

type CalculatorShellProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function CalculatorShell({ title, description, children }: CalculatorShellProps) {
  return (
    <section className="rounded-[1.75rem] border border-black/10 bg-white/80 p-4 shadow-[0_16px_40px_rgba(34,24,12,0.08)] backdrop-blur sm:p-6 lg:rounded-[2rem] lg:p-8">
      {/* Shared shell keeps every calculator page visually consistent without coupling the tool logic. */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs uppercase tracking-[0.24em] text-[#8a6b45] sm:text-sm">Calculator</p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">{title}</h1>
          {description ? <p className="max-w-2xl text-sm leading-7 text-[#5c554b] sm:text-base lg:text-lg">{description}</p> : null}
        </div>
      </div>

      <div className="mt-5 sm:mt-6">{children}</div>
    </section>
  );
}
