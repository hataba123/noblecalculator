import Link from "next/link";

type ToolCardProps = {
  title: string;
  description: string;
  href: string;
  slug: string;
  variant?: "light" | "dark";
};

export function ToolCard({ title, description, href, slug, variant = "light" }: ToolCardProps) {
  const isDark = variant === "dark";

  return (
    <article
      className={[
        "group rounded-[1.75rem] border p-5 shadow-[0_18px_48px_rgba(34,24,12,0.08)] transition-transform duration-200 hover:-translate-y-1",
        isDark ? "border-black/10 bg-[#201c17] text-white shadow-[0_18px_48px_rgba(34,24,12,0.12)]" : "border-black/10 bg-white/80 text-[#1b1a17] backdrop-blur",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className={isDark ? "text-xs uppercase tracking-[0.24em] text-[#c9b79d]" : "text-xs uppercase tracking-[0.24em] text-[#8a6b45]"}>
            /{slug}
          </p>
          <h2 className="mt-2 text-xl font-semibold">{title}</h2>
        </div>
        <span className={isDark ? "rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/55" : "rounded-full border border-black/10 bg-[#f7f1e8] px-3 py-1 text-xs uppercase tracking-[0.22em] text-[#6b5a43]"}>
          Route
        </span>
      </div>

      <p className={isDark ? "mt-4 text-sm leading-6 text-white/72" : "mt-4 text-sm leading-6 text-[#5c554b]"}>{description}</p>

      <div className="mt-6 flex items-center justify-between gap-3">
        <span className={isDark ? "text-xs uppercase tracking-[0.22em] text-white/45" : "text-xs uppercase tracking-[0.22em] text-[#8a6b45]"}>
          Shared data connected
        </span>
        <Link
          href={href}
          className={
            isDark
              ? "rounded-full border border-[#d0b08a]/30 bg-[#d0b08a] px-4 py-2 text-sm font-semibold text-[#201c17] transition-colors hover:bg-[#e0c19a]"
              : "rounded-full border border-black/10 bg-[#201c17] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-black"
          }
        >
          Open tool
        </Link>
      </div>
    </article>
  );
}
