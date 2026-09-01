import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/types";

type Props = { dict: Dictionary; locale: Locale };

const REPEATS = 4;

export function InfiniteMarquee({ dict }: Props) {
  const tagline = dict.marquee.text;

  const rowItems = Array.from({ length: REPEATS }).map((_, i) => (
    <span key={i} className="flex items-center shrink-0">
      <span className="font-[var(--font-montserrat)] font-extrabold tracking-[0.01em] text-3xl sm:text-4xl lg:text-6xl whitespace-nowrap bg-gradient-to-r from-at-accent via-at-primary to-at-accent bg-clip-text text-transparent px-5 lg:px-8">
        {tagline}
      </span>
      <span aria-hidden className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-at-primary/40 shrink-0" />
    </span>
  ));

  return (
    <div className="bg-at-section py-8 lg:py-14 overflow-hidden border-y border-at-border">
      <div className="flex w-max animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused] will-change-transform">
        <div className="flex items-center shrink-0">{rowItems}</div>
        <div aria-hidden className="flex items-center shrink-0">
          {rowItems}
        </div>
      </div>
    </div>
  );
}
