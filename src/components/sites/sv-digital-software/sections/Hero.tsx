import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/types";
import { HeroLottie } from "@/components/HeroLottie";

export function Hero({ dict, locale }: { dict: Dictionary; locale: Locale }) {

  return (
    <section className="relative bg-gradient-to-br from-at-primary to-at-secondary flex justify-center items-center min-h-[100vh] overflow-hidden px-5 lg:px-[76px] pb-[50px] lg:pb-[50px] pt-[100px]">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 25% 30%, rgba(255,255,255,0.18) 0%, transparent 45%), radial-gradient(circle at 78% 65%, rgba(66,211,165,0.3) 0%, transparent 40%), radial-gradient(circle at 50% 80%, rgba(255,255,255,0.08) 0%, transparent 50%)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.07]">
        <div className="w-[1200px] h-[700px] rounded-full border border-white/20 blur-[1px]" />
      </div>

      {/* Snake Lottie — full-width band weaving across the banner */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 z-0 hidden lg:block">
        <HeroLottie variant="desktop" className="w-full h-[420px] opacity-40" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 lg:hidden">
        <HeroLottie variant="mobile" className="w-full h-[220px] opacity-45" />
      </div>

      <div className="relative z-10 w-full max-w-[1288px] flex flex-col justify-end h-full min-h-[calc(100vh-120px)]">
        <div className="max-w-[897px] animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="font-[var(--font-montserrat)] text-white text-[28px] sm:text-[42px] lg:text-[50px] font-bold leading-[1.6] tracking-[0.04em]">
            {dict.hero.titleLine1} <br />
            {dict.hero.titleLine2}
          </h1>
          <p className="text-white text-xs lg:text-sm leading-[2] tracking-[0.04em] mt-4 max-w-[820px] font-[var(--font-noto-sans-jp)]">
            {dict.hero.subtitle}
          </p>

          <Link
            href={`/${locale}/contact`}
            className="mt-8 inline-flex items-center justify-between gap-3 bg-white rounded-lg px-6 py-[17px] w-full lg:w-[280px] hover:bg-at-hover hover:text-at-primary group transition-colors duration-300"
          >
            <span className="text-at-primary group-hover:text-at-primary text-sm font-bold tracking-[0.04em] transition-colors">
              {dict.hero.cta}
            </span>
            <ArrowRight className="w-6 h-6 shrink-0 text-at-primary" strokeWidth={2.5} />
          </Link>
        </div>

      </div>
    </section>
  );
}
