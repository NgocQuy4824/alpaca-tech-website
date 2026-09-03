import { Breadcrumb } from "./Breadcrumb";
import type { Locale } from "@/lib/i18n/types";

type Props = {
  title: string;
  subtitle?: string;
  current: string;
  locale: Locale;
  parent?: { label: string; href: string };
};

export function PageHero({ title, subtitle, current, locale, parent }: Props) {
  return (
    <section className="relative bg-gradient-to-br from-at-primary to-at-secondary flex justify-center px-5 lg:px-[76px] pt-[96px] sm:pt-[104px] lg:pt-[114px] pb-8 max-[375px]:px-4">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 25% 30%, rgba(255,255,255,0.16) 0%, transparent 45%), radial-gradient(circle at 78% 65%, rgba(66,211,165,0.25) 0%, transparent 40%)",
        }}
      />
      <div className="relative z-10 w-full max-w-[1288px] flex flex-col gap-8 sm:gap-10 min-w-0">
        <div className="flex flex-col gap-1 min-w-0">
          <h1 className="font-[var(--font-montserrat)] text-white font-bold leading-[0.95] tracking-[-0.02em] break-words [overflow-wrap:anywhere] text-[36px] max-[375px]:text-[30px] sm:text-[42px] lg:text-[72px] xl:text-[100px]">
            {title}
          </h1>
          {subtitle ? (
            <p className="text-white/70 text-sm tracking-[0.04em] font-[var(--font-noto-sans-jp)] break-words">
              {subtitle}
            </p>
          ) : null}
        </div>
        <div className="flex justify-end overflow-x-auto">
          <Breadcrumb current={current} locale={locale} parent={parent} />
        </div>
      </div>
    </section>
  );
}
