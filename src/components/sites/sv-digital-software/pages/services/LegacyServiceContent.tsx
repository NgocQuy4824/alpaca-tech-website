import { DatabaseBackup, Search, ClipboardList, TestTube, Sparkles, UploadCloud, ShieldCheck, Check } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/types";
import { PageHero } from "@/components/sites/sv-digital-software/shared/PageHero";
import { SectionHeading } from "@/components/sites/sv-digital-software/shared/SectionHeading";
import { ServiceCta } from "@/components/sites/sv-digital-software/shared/ServiceCta";
import { ServiceCrossLinks } from "@/components/sites/sv-digital-software/shared/ServiceCrossLinks";
import { ServiceJsonLd } from "@/components/sites/sv-digital-software/shared/ServiceJsonLd";
import { withIcons } from "./steps";

type Props = { dict: Dictionary; locale: Locale };

const VALUE_ICONS = [ShieldCheck, ClipboardList, Search];
const STEP_ICONS = [Search, DatabaseBackup, ClipboardList, TestTube, Sparkles, UploadCloud];

export function LegacyServiceContent({ dict, locale }: Props) {
  const s = dict.services.legacy;
  const steps = withIcons(s.process.steps, STEP_ICONS);

  return (
    <main className="flex flex-col">
      <ServiceJsonLd dict={dict} locale={locale} slug="legacy-system-migration" serviceName={s.heroTitle} serviceDescription={s.intro} />
      <PageHero
        title={s.heroTitle}
        current={s.heroTitle}
        locale={locale}
        parent={{ label: dict.services.heroTitle, href: `/${locale}/services` }}
      />

      <div className="flex justify-center bg-at-bg px-0">
        <div className="bg-at-section rounded-t-[60px] max-[991px]:rounded-t-[40px] w-full flex justify-center px-5 lg:px-[76px] py-[100px] max-[540px]:py-16">
          <div className="w-full max-w-[1288px] flex flex-col gap-20">
            {/* Intro + migration graphic */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
              <div className="flex flex-col gap-6">
                <h2 className="sr-only">{s.heroTitle}</h2>
                <p className="text-at-text-dark text-lg leading-[1.9] tracking-[0.03em] font-[var(--font-noto-sans-jp)]">
                  {s.intro}
                </p>
              </div>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-at-border bg-at-bg-soft" role="img" aria-label={s.heroTitle}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&h=900&fit=crop&q=80"
                  alt={s.heroTitle}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Values — 3 feature cards (data integrity / feature retention / minimal disruption) */}
            <section className="flex flex-col gap-8">
              <SectionHeading>{s.values.heading}</SectionHeading>
              <div className="grid md:grid-cols-3 gap-5">
                {s.values.items.map((v, i) => {
                  const Icon = VALUE_ICONS[i] ?? ShieldCheck;
                  return (
                    <div key={v.title} className="flex flex-col gap-3 border border-at-border rounded-2xl bg-at-bg-soft p-6">
                      <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-at-primary text-white">
                        <Icon className="w-6 h-6" strokeWidth={1.75} />
                      </span>
                      <h3 className="text-at-primary text-lg font-bold font-[var(--font-noto-sans-jp)]">{v.title}</h3>
                      <p className="text-at-text-dark text-sm leading-[1.7] font-[var(--font-noto-sans-jp)]">{v.desc}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Process — PHASED STAIRCASE (unique to Legacy) */}
            <section className="flex flex-col gap-8" aria-labelledby="legacy-process">
              <SectionHeading as="h2"><span id="legacy-process">{s.process.heading}</span></SectionHeading>
              {/* Desktop: staircase — later phases sit higher (uniform card size via stretch + translate) */}
              <ol className="hidden gap-4 lg:grid lg:grid-cols-5 lg:pt-[80px]">
                {steps.map((step, idx) => {
                  const Icon = step.icon;
                  const rise = idx * 20;
                  return (
                    <li
                      key={step.step}
                      className="flex flex-col gap-3 rounded-2xl border border-at-border bg-at-bg-soft p-6 transition-colors hover:border-at-pink/40"
                      style={{ transform: `translateY(-${rise}px)` }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-at-primary text-white">
                          <Icon className="h-5 w-5" strokeWidth={1.75} />
                        </span>
                        <span className="font-[var(--font-montserrat)] text-[22px] font-extrabold leading-none text-at-pink/30">{step.step}</span>
                      </div>
                      <h3 className="text-[15px] font-bold leading-[1.4] text-at-primary font-[var(--font-noto-sans-jp)]">{step.title}</h3>
                      <p className="flex-1 text-[13px] leading-[1.7] text-at-text-muted font-[var(--font-noto-sans-jp)]">{step.desc}</p>
                      {/* arrow — reserved space on every card so the last one is not shorter */}
                      <span aria-hidden className={`mt-1 flex justify-end text-at-pink/60 ${idx === steps.length - 1 ? "invisible" : ""}`}>
                        <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                          <path d="M1 7H17M17 7L11 1M17 7L11 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </li>
                  );
                })}
              </ol>
              {/* Mobile / tablet: vertical stepped rail */}
              <ol className="grid gap-4 sm:grid-cols-2 lg:hidden">
                {steps.map((step, idx) => {
                  const Icon = step.icon;
                  const isLast = idx === steps.length - 1;
                  return (
                    <li key={step.step} className="relative flex flex-col gap-3 rounded-2xl border border-at-border bg-at-bg-soft p-6">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-at-primary text-white">
                          <Icon className="h-5 w-5" strokeWidth={1.75} />
                        </span>
                        <span className="font-[var(--font-montserrat)] text-xs font-extrabold tracking-[0.16em] text-at-pink">{step.step}</span>
                      </div>
                      <h3 className="text-[15px] font-bold text-at-primary font-[var(--font-noto-sans-jp)]">{step.title}</h3>
                      <p className="flex-1 text-[13.5px] leading-[1.7] text-at-text-muted font-[var(--font-noto-sans-jp)]">{step.desc}</p>
                      {!isLast && <span aria-hidden className="absolute -bottom-2 left-1/2 hidden h-4 w-px bg-at-line sm:block" />}
                    </li>
                  );
                })}
              </ol>
            </section>

            {/* Case highlight */}
            <section className="flex flex-col gap-8">
              <SectionHeading>{s.caseStudy.heading}</SectionHeading>
              <article className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-at-primary to-at-secondary p-[1px]">
                <div className="rounded-2xl bg-at-primary px-6 py-8 lg:px-8 lg:py-10 flex flex-col gap-4">
                  <span className="inline-flex w-fit rounded-full bg-white/12 border border-white/15 px-3 py-1 text-[11px] font-bold tracking-[0.14em] text-white">
                    {s.caseStudy.tag}
                  </span>
                  <h3 className="text-white text-xl font-bold font-[var(--font-noto-sans-jp)]">{s.caseStudy.title}</h3>
                  <p className="text-white/80 text-base leading-[1.9] font-[var(--font-noto-sans-jp)] max-w-[820px]">{s.caseStudy.desc}</p>
                </div>
              </article>
            </section>

            {/* Benefits — ACCENT-BAR TILES (unique to Legacy) */}
            <section className="flex flex-col gap-8" aria-labelledby="legacy-benefits">
              <SectionHeading as="h2"><span id="legacy-benefits">{s.benefits.heading}</span></SectionHeading>
              <ul className="grid gap-4 sm:grid-cols-2">
                {s.benefits.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 rounded-2xl border border-at-border bg-at-section p-6 transition-colors hover:border-at-pink/30"
                  >
                    <span aria-hidden className="w-1 shrink-0 self-stretch rounded-full bg-at-pink" />
                    <span className="flex-1 text-[14px] font-medium leading-[1.7] text-at-text-dark font-[var(--font-noto-sans-jp)] lg:text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <ServiceCrossLinks locale={locale} currentKey="legacy" heading={dict.services.crossLinksHeading} nav={dict.services.nav} />
            <ServiceCta title={s.cta.title} desc={s.cta.desc} contactLabel={s.cta.contactUs} locale={locale} />
          </div>
        </div>
      </div>
    </main>
  );
}
