import Link from "next/link";

type ToolCardProps = {
  title: string;
  description?: string;
  href: string;
  slug: string;
  variant?: "light" | "dark";
};

export function ToolCard({ title, description, href, slug, variant = "light" }: ToolCardProps) {
  const isDark = variant === "dark";

  return (
    <article
      className={[
        "group flex h-full flex-col rounded-[1.55rem] border p-4 shadow-[0_16px_36px_rgba(34,24,12,0.08)] transition-transform duration-200 hover:-translate-y-1 sm:p-5",
        isDark ? "border-black/10 bg-[#201c17] text-white shadow-[0_18px_48px_rgba(34,24,12,0.12)]" : "border-black/10 bg-white/80 text-[#1b1a17] backdrop-blur",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="mt-1 text-lg font-semibold sm:text-xl">{title}</h2>
        </div>
        <span className={isDark ? "rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/55" : "rounded-full border border-black/10 bg-[#f7f1e8] px-3 py-1 text-xs uppercase tracking-[0.22em] text-[#6b5a43]"}>
          Calculator
        </span>
      </div>

      {description ? (
        <p className={isDark ? "mt-3 text-sm leading-6 text-white/72 sm:mt-4" : "mt-3 text-sm leading-6 text-[#5c554b] sm:mt-4"}>
          {description}
        </p>
      ) : null}

      <div className="mt-5 flex flex-1 items-end justify-end gap-3 sm:mt-6">
        <Link
          href={href}
          className={
            isDark
              ? "rounded-full border border-white/10 bg-[#201c17] px-4 py-2 text-sm font-semibold !text-white transition-colors hover:bg-black hover:!text-white"
              : "rounded-full border border-black/10 bg-[#201c17] px-4 py-2 text-sm font-semibold !text-white transition-colors hover:bg-black hover:!text-white"
          }
        >
          Open
        </Link>
      </div>
    </article>
  );
}
