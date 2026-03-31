import type { ReactNode } from "react";

type CalculatorShellProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function CalculatorShell({ title, description, children }: CalculatorShellProps) {
  return (
    <section className="min-w-0 rounded-[1.1rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-4 shadow-[0_16px_40px_rgba(34,24,12,0.08)] backdrop-blur sm:p-6 lg:rounded-[1.25rem] lg:p-8">
      {/* Shared shell keeps every calculator page visually consistent without coupling the tool logic. */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="w-full min-w-0 space-y-3 lg:flex-1">
          <h1 className="w-full max-w-none break-words text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">{title}</h1>
          {description ? <p className="break-words text-sm leading-7 text-[color:var(--muted)] sm:text-base lg:text-lg">{description}</p> : null}
        </div>
      </div>

      <div className="mt-5 sm:mt-6">{children}</div>
    </section>
  );
}
