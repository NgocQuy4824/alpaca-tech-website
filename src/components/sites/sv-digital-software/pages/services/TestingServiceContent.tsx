import { ClipboardCheck, Smartphone, Bot, Globe, Clock3, FileSearch, ClipboardList, ListChecks, Server, PlayCircle, BarChart3, Check } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/types";
import { PageHero } from "@/components/sites/sv-digital-software/shared/PageHero";
import { SectionHeading } from "@/components/sites/sv-digital-software/shared/SectionHeading";
import { ServiceCta } from "@/components/sites/sv-digital-software/shared/ServiceCta";
import { ServiceCrossLinks } from "@/components/sites/sv-digital-software/shared/ServiceCrossLinks";
import { ServiceJsonLd } from "@/components/sites/sv-digital-software/shared/ServiceJsonLd";
import { withIcons } from "./steps";

type Props = { dict: Dictionary; locale: Locale };

const CAPABILITY_ICONS = [Smartphone, Bot, Globe, Clock3];
const STEP_ICONS = [FileSearch, ClipboardList, ListChecks, Server, PlayCircle, BarChart3];

/** Testing tools are proper nouns — same across locales. */
const TOOLS = ["Selenium", "Appium", "JMeter", "Cucumber", "Postman", "Playwright"];

export function TestingServiceContent({ dict, locale }: Props) {
  const s = dict.services.testing;
  const steps = withIcons(s.process.steps, STEP_ICONS);

  return (
    <main className="flex flex-col">
      <ServiceJsonLd dict={dict} locale={locale} slug="testing-services" serviceName={s.heroTitle} serviceDescription={s.intro} />
      <PageHero
        title={s.heroTitle}
        current={s.heroTitle}
        locale={locale}
        parent={{ label: dict.services.heroTitle, href: `/${locale}/services` }}
      />

      <div className="flex justify-center bg-at-bg px-0">
        <div className="bg-at-section rounded-t-[60px] max-[991px]:rounded-t-[40px] w-full flex justify-center px-5 lg:px-[76px] py-[100px] max-[540px]:py-16">
          <div className="w-full max-w-[1288px] flex flex-col gap-20">
            {/* Intro + QA dashboard graphic */}
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
                  src="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?w=1200&h=900&fit=crop&q=80"
                  alt={s.heroTitle}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Capabilities — 4 cards with distinct icons */}
            <section className="flex flex-col gap-8">
              <SectionHeading>{s.capabilities.heading}</SectionHeading>
              <div className="grid sm:grid-cols-2 gap-5">
                {s.capabilities.items.map((cap, i) => {
                  const Icon = CAPABILITY_ICONS[i] ?? ClipboardCheck;
                  return (
                    <article key={cap.title} className="flex gap-4 border border-at-border rounded-2xl bg-at-bg-soft p-6 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-at-pink/40 hover:bg-at-section hover:shadow-[0_16px_40px_rgba(45,56,100,0.14)]">
                      <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-at-primary text-white shrink-0">
                        <Icon className="w-6 h-6" strokeWidth={1.75} />
                      </span>
                      <div className="flex flex-col gap-1.5">
                        <h3 className="text-at-primary text-base font-bold font-[var(--font-noto-sans-jp)]">{cap.title}</h3>
                        <p className="text-at-text-dark text-sm leading-[1.7] font-[var(--font-noto-sans-jp)]">{cap.desc}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>

            {/* Process — CHEVRON PIPELINE (unique to Testing) */}
            <section className="flex flex-col gap-8" aria-labelledby="testing-process">
              <SectionHeading as="h2"><span id="testing-process">{s.process.heading}</span></SectionHeading>
              {/* Desktop: interlocking pipeline chevrons */}
              <div className="hidden lg:block">
                <ol className="flex items-stretch">
                  {steps.map((step, idx) => {
                    const Icon = step.icon;
                    const isFirst = idx === 0;
                    const isEven = idx % 2 === 0;
                    return (
                      <li
                        key={step.step}
                        className={`flex flex-col flex-1 ${isFirst ? "" : "-ml-[18px]"}`}
                        style={{ zIndex: idx }}
                      >
                        <div
                          className={`flex min-h-[64px] items-center gap-2.5 px-6 py-4 pl-9 text-white ${isEven ? "bg-at-primary" : "bg-at-secondary"} ${isFirst ? "!pl-6" : ""}`}
                          style={{
                            clipPath: isFirst
                              ? "polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%)"
                              : "polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 18px 50%)",
                          }}
                        >
                          <Icon className="h-[18px] w-[18px] shrink-0 text-at-pink" strokeWidth={2} />
                          <h3 className="text-[13px] font-bold leading-tight tracking-[0.02em] font-[var(--font-noto-sans-jp)]">{step.title}</h3>
                        </div>
                        <div className="flex flex-1 flex-col gap-1.5 border border-at-border bg-at-bg-soft px-5 py-4 transition-all duration-300 hover:scale-[1.02] hover:border-at-pink/40 hover:bg-at-section hover:shadow-[0_16px_40px_rgba(45,56,100,0.14)]">
                          <span className="font-[var(--font-montserrat)] text-[11px] font-extrabold tracking-[0.16em] text-at-pink">STAGE {step.step}</span>
                          <p className="flex-1 text-[13px] leading-[1.7] text-at-text-muted font-[var(--font-noto-sans-jp)]">{step.desc}</p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
              {/* Mobile / tablet: numbered flow rows */}
              <ol className="flex flex-col gap-3 lg:hidden">
                {steps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <li key={step.step} className="flex items-start gap-4 rounded-2xl border border-at-border bg-at-bg-soft px-5 py-4 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-at-pink/40 hover:bg-at-section hover:shadow-[0_16px_40px_rgba(45,56,100,0.14)]">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-at-primary text-white">
                        <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
                      </span>
                      <div className="flex flex-1 flex-col gap-1">
                        <div className="flex items-center gap-2.5">
                          <span className="font-[var(--font-montserrat)] text-[11px] font-extrabold tracking-[0.16em] text-at-pink">STAGE {step.step}</span>
                          <h3 className="text-[15px] font-bold text-at-primary font-[var(--font-noto-sans-jp)]">{step.title}</h3>
                        </div>
                        <p className="text-[13.5px] leading-[1.7] text-at-text-muted font-[var(--font-noto-sans-jp)]">{step.desc}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </section>

            {/* Tools strip */}
            <section className="flex flex-col gap-6">
              <SectionHeading>{s.toolsHeading}</SectionHeading>
              <ul className="flex flex-wrap gap-2">
                {TOOLS.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-full border border-at-border bg-at-bg-soft px-4 py-2 text-sm font-medium text-at-text-dark transition-colors hover:border-at-pink/40 hover:bg-at-section hover:text-at-primary"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </section>

            {/* Benefits — QA REPORT (unique to Testing) */}
            <section className="flex flex-col gap-8" aria-labelledby="testing-benefits">
              <SectionHeading as="h2"><span id="testing-benefits">{s.benefits.heading}</span></SectionHeading>
              <ul className="overflow-hidden rounded-2xl border border-at-border">
                {s.benefits.items.map((item, idx) => (
                  <li
                    key={item}
                    className={`flex items-center gap-4 px-5 py-4 lg:px-6 ${idx % 2 === 0 ? "bg-at-section" : "bg-at-bg-soft"}`}
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-at-primary/8 text-at-primary">
                      <Check className="h-4 w-4" strokeWidth={3} />
                    </span>
                    <span className="flex-1 text-[14px] font-medium leading-[1.7] text-at-text-dark font-[var(--font-noto-sans-jp)] lg:text-[15px]">{item}</span>
                    <span
                      aria-hidden
                      className="hidden shrink-0 rounded-full border border-at-pink/30 bg-at-pink/10 px-2.5 py-1 font-[var(--font-montserrat)] text-[10px] font-extrabold tracking-[0.14em] text-at-primary sm:inline-flex"
                    >
                      PASS
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <ServiceCrossLinks locale={locale} currentKey="testing" heading={dict.services.crossLinksHeading} nav={dict.services.nav} />
            <ServiceCta title={s.cta.title} desc={s.cta.desc} contactLabel={s.cta.contactUs} locale={locale} />
          </div>
        </div>
      </div>
    </main>
  );
}
