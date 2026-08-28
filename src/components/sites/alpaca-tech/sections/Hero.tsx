import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/types";

export function Hero({ dict, locale }: { dict: Dictionary; locale: Locale }) {

  return (
    <section className="relative bg-gradient-to-br from-at-primary to-at-secondary flex justify-center items-center min-h-[100vh] overflow-hidden px-5 lg:px-[76px] pb-[50px] lg:pb-[50px] pt-[100px]">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 25% 30%, rgba(255,255,255,0.18) 0%, transparent 45%), radial-gradient(circle at 78% 65%, rgba(2,70,167,0.55) 0%, transparent 40%), radial-gradient(circle at 50% 80%, rgba(255,255,255,0.08) 0%, transparent 50%)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.07]">
        <div className="w-[1200px] h-[700px] rounded-full border border-white/20 blur-[1px]" />
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
            href={`/${locale}#contact`}
            className="mt-8 inline-flex items-center justify-between gap-3 bg-white rounded-lg px-6 py-[17px] w-full lg:w-[280px] hover:bg-at-accent group transition-colors duration-300"
          >
            <span className="text-at-primary group-hover:text-white text-sm font-bold tracking-[0.04em] transition-colors">
              {dict.hero.cta}
            </span>
            {/* eslint-disable @next/next/no-img-element */}
            <img
              src="https://storage.googleapis.com/studio-design-asset-files/projects/nBW2yYm1av/s-24x24_53ad8034-be39-43e4-a7ff-6ee82c06d5c3.svg"
              alt=""
              className="w-6 h-6 group-hover:opacity-0 transition-opacity"
            />
          </Link>
        </div>

        {/* floating news cards */}
        <div className="mt-10 lg:mt-0 lg:absolute lg:bottom-8 lg:right-0 flex flex-col gap-3 w-full lg:w-[392px]">
          {dict.hero.news.map((item, idx) => (
            <Link
              key={item.title}
              href={`/${locale}/news`}
              className={`flex items-center justify-between gap-4 bg-white rounded-lg px-6 py-4 hover:bg-at-accent group transition-colors ${idx === 1 ? "hidden lg:flex" : ""}`}
            >
              <div className="flex flex-col gap-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-at-primary/40 group-hover:text-white/60 text-sm font-normal">{item.date}</span>
                  <span className="text-at-pink group-hover:text-white text-sm font-bold">NEW</span>
                </div>
                <span className="text-at-text-medium group-hover:text-white text-sm leading-[1.8] truncate">
                  {item.title}
                </span>
              </div>
              {/* eslint-disable @next/next/no-img-element */}
              <img
                src="https://storage.googleapis.com/studio-design-asset-files/projects/4yqBl2mdWj/s-24x25_7e72b4d9-f9f2-4254-b013-bb2ba8954be7.svg"
                alt=""
                className="w-6 h-6 shrink-0 group-hover:opacity-0 transition-opacity"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
