import { Breadcrumb } from "./Breadcrumb";
import type { Locale } from "@/lib/i18n/types";

type Props = {
  title: string;
  subtitle?: string;
  current: string;
  locale: Locale;
};

export function PageHero({ title, subtitle, current, locale }: Props) {
  return (
    <section className="relative bg-gradient-to-br from-at-primary to-at-secondary flex justify-center px-5 lg:px-[76px] pt-[114px] pb-8">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 25% 30%, rgba(255,255,255,0.16) 0%, transparent 45%), radial-gradient(circle at 78% 65%, rgba(2,70,167,0.5) 0%, transparent 40%)",
        }}
      />
      <div className="relative z-10 w-full max-w-[1288px] flex flex-col gap-10">
        <div className="flex flex-col gap-1">
          <h1 className="font-[var(--font-montserrat)] text-white text-[60px] lg:text-[100px] font-bold leading-none">
            {title}
          </h1>
          {subtitle ? (
            <p className="text-white/70 text-sm tracking-[0.04em] font-[var(--font-noto-sans-jp)]">
              {subtitle}
            </p>
          ) : null}
        </div>
        <div className="flex justify-end">
          <Breadcrumb current={current} locale={locale} />
        </div>
      </div>
    </section>
  );
}
