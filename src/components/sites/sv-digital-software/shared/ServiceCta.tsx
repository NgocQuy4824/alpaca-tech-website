import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  title: string;
  desc: string;
  contactLabel: string;
  locale: string;
};

/** Shared dark CTA panel reused across all service detail templates. */
export function ServiceCta({ title, desc, contactLabel, locale }: Props) {
  return (
    <div className="bg-at-primary rounded-[60px] max-[991px]:rounded-[40px] px-6 lg:px-[76px] py-12 lg:py-20 flex flex-col items-center gap-6 text-center">
      <h2 className="font-[var(--font-montserrat)] text-white text-[40px] max-[991px]:text-[32px] font-bold leading-none">
        {title}
      </h2>
      <p className="text-white/80 text-base leading-[2] tracking-[0.04em] max-w-[640px] font-[var(--font-noto-sans-jp)]">
        {desc}
      </p>
      <Link
        href={`/${locale}/contact`}
        className="inline-flex items-center justify-between gap-3 bg-white text-at-primary rounded-lg px-6 py-[17px] w-full lg:w-[280px] hover:bg-at-hover hover:text-at-primary group transition-colors"
      >
        <span className="text-sm font-bold tracking-[0.04em]">{contactLabel}</span>
        <ArrowRight className="w-6 h-6 shrink-0 text-at-primary" strokeWidth={2.5} />
      </Link>
    </div>
  );
}
