import Link from "next/link";

type Props = {
  href?: string;
  variant?: "dark" | "light";
  title?: string;
  description?: string;
};

export function ContactCTA({
  href = "/en#contact",
  variant = "dark",
  title = "Get in touch",
  description = "For inquiries about our solutions, partnerships, or anything else, please reach out via our contact form.",
}: Props) {
  const isDark = variant === "dark";
  return (
    <div
      className={`rounded-[60px] max-[991px]:rounded-[40px] px-6 lg:px-[76px] py-12 lg:py-20 flex flex-col items-center gap-6 text-center ${
        isDark ? "bg-at-primary text-white" : "bg-white border border-at-border text-at-primary"
      }`}
    >
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-lg bg-at-pink shrink-0" />
        <h2
          className={`text-[34px] font-bold tracking-[0.04em] font-[var(--font-noto-sans-jp)] ${
            isDark ? "text-white" : "text-at-primary"
          }`}
        >
          {title}
        </h2>
      </div>
      <p
        className={`text-base leading-[2] tracking-[0.04em] max-w-[640px] font-[var(--font-noto-sans-jp)] ${
          isDark ? "text-white/80" : "text-at-text-dark"
        }`}
      >
        {description}
      </p>
      <Link
        href={href}
        className={`inline-flex items-center justify-between gap-3 rounded-lg px-6 py-[17px] w-full lg:w-[280px] transition-colors ${
          isDark
            ? "bg-white text-at-primary hover:bg-at-accent hover:text-white group"
            : "bg-at-primary text-white hover:bg-at-accent"
        }`}
      >
        <span className="text-sm font-bold tracking-[0.04em]">Contact Us</span>
        <span aria-hidden>{isDark ? "→" : "→"}</span>
      </Link>
    </div>
  );
}
