import { FileSearch, Palette, Code2, FlaskConical, Rocket } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/types";
import { PageHero } from "@/components/sites/sv-digital-software/shared/PageHero";
import { SectionHeading } from "@/components/sites/sv-digital-software/shared/SectionHeading";
import { ServiceCta } from "@/components/sites/sv-digital-software/shared/ServiceCta";
import { ServiceCrossLinks } from "@/components/sites/sv-digital-software/shared/ServiceCrossLinks";
import { ServiceJsonLd } from "@/components/sites/sv-digital-software/shared/ServiceJsonLd";
import { withIcons } from "./steps";

type Props = { dict: Dictionary; locale: Locale };

const STEP_ICONS = [FileSearch, Palette, Code2, FlaskConical, Rocket];

/** Featured-project photos — mobile banking, e-commerce fulfillment, parental control. */
const PROJECT_IMAGES = [
  "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=520&fit=crop&q=80",
  "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=520&fit=crop&q=80",
  "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&h=520&fit=crop&q=80",
];

export function MobileServiceContent({ dict, locale }: Props) {
  const s = dict.services.mobile;
  const steps = withIcons(s.process.steps, STEP_ICONS);

  return (
    <main className="flex flex-col">
      <ServiceJsonLd dict={dict} locale={locale} slug="mobile-solutions" serviceName={s.heroTitle} serviceDescription={s.intro} />
      <PageHero
        title={s.heroTitle}
        current={s.heroTitle}
        locale={locale}
        parent={{ label: dict.services.heroTitle, href: `/${locale}/services` }}
      />

      <div className="flex justify-center bg-at-bg px-0">
        <div className="bg-at-section rounded-t-[60px] max-[991px]:rounded-t-[40px] w-full flex justify-center px-5 lg:px-[76px] py-[100px] max-[540px]:py-16">
          <div className="w-full max-w-[1288px] flex flex-col gap-20">
            {/* Intro + device graphic */}
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
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=900&fit=crop&q=80"
                  alt={s.heroTitle}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Process — zigzag roadmap (unique to Mobile) */}
            <section className="flex flex-col gap-8" aria-labelledby="mobile-process">
              <SectionHeading as="h2"><span id="mobile-process">{s.process.heading}</span></SectionHeading>
              <ol className="relative flex flex-col gap-0">
                {/* central spine */}
                <div aria-hidden className="pointer-events-none absolute left-6 top-6 bottom-6 w-px bg-at-line lg:left-1/2 lg:-translate-x-px" />
                {steps.map((step, idx) => {
                  const Icon = step.icon;
                  const isLeft = idx % 2 === 0;
                  return (
                    <li key={step.step} className="relative flex gap-5 lg:grid lg:grid-cols-2 lg:gap-0 py-5 first:pt-0 last:pb-0">
                      {/* dot on spine */}
                      <span
                        aria-hidden
                        className="absolute left-6 top-[30px] z-10 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border-[3px] border-at-section bg-at-primary text-white shadow-[0_2px_12px_rgba(45,56,100,0.18)] lg:left-1/2"
                      >
                        <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
                      </span>

                      {/* card — alternates left / right on desktop, always right of spine on mobile */}
                      <div className={`pl-[56px] lg:pl-0 ${isLeft ? "lg:col-start-1 lg:pr-12 lg:text-right" : "lg:col-start-2 lg:pl-12"}`}>
                        <div className="rounded-2xl border border-at-border bg-at-bg-soft p-6 text-left transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-at-pink/40 hover:bg-at-section hover:shadow-[0_16px_40px_rgba(45,56,100,0.14)]">
                          <div className={`flex items-center gap-2.5 ${isLeft ? "lg:flex-row-reverse" : ""}`}>
                            <span className="font-[var(--font-montserrat)] text-xs font-extrabold tracking-[0.18em] text-at-pink">{step.step}</span>
                            <span aria-hidden className="h-px w-6 bg-at-line lg:hidden" />
                            <span aria-hidden className={`hidden h-px w-6 bg-at-line lg:block ${isLeft ? "" : "lg:hidden"}`} />
                          </div>
                          <h3 className={`mt-1.5 text-[15px] font-bold leading-[1.4] text-at-primary font-[var(--font-noto-sans-jp)] ${isLeft ? "lg:text-right" : ""}`}>{step.title}</h3>
                          <p className={`mt-2 text-[13.5px] leading-[1.75] text-at-text-muted font-[var(--font-noto-sans-jp)] ${isLeft ? "lg:text-right" : ""}`}>{step.desc}</p>
                        </div>
                      </div>

                      {/* spacer for opposite side on desktop */}
                      <div aria-hidden className="hidden lg:block" />
                    </li>
                  );
                })}
              </ol>
            </section>

            {/* Why choose — ghost-number cards (unique to Mobile) */}
            <section className="flex flex-col gap-8" aria-labelledby="mobile-benefits">
              <SectionHeading as="h2"><span id="mobile-benefits">{s.benefits.heading}</span></SectionHeading>
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {s.benefits.items.map((item, i) => (
                  <li
                    key={item}
                    className="relative overflow-hidden rounded-2xl border border-at-border bg-at-section p-6 pt-8 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-at-pink/40 hover:shadow-[0_16px_40px_rgba(45,56,100,0.14)]"
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -right-1 -top-1 font-[var(--font-montserrat)] text-[64px] font-extrabold leading-none text-at-primary/[0.06]"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="relative flex h-1 w-10 rounded-full bg-at-pink" aria-hidden />
                    <p className="relative mt-4 text-[14px] font-semibold leading-[1.7] text-at-text-dark font-[var(--font-noto-sans-jp)]">{item}</p>
                  </li>
                ))}
              </ul>
            </section>

            {/* Featured projects */}
            <section className="flex flex-col gap-8">
              <SectionHeading>{s.projects.heading}</SectionHeading>
              <div className="grid md:grid-cols-3 gap-5">
                {s.projects.items.map((p, i) => (
                  <article key={p.title} className="group flex flex-col overflow-hidden rounded-2xl border border-at-border bg-at-bg-soft transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-at-pink/40 hover:bg-at-section hover:shadow-[0_16px_40px_rgba(45,56,100,0.14)]">
                    <div className="relative h-[180px] overflow-hidden bg-at-bg-soft">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={PROJECT_IMAGES[i % PROJECT_IMAGES.length]}
                        alt={p.title}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-4 p-6">
                      <h3 className="text-at-primary text-lg font-bold font-[var(--font-noto-sans-jp)]">{p.title}</h3>
                      <p className="text-at-text-dark text-sm leading-[1.7] font-[var(--font-noto-sans-jp)] flex-1">{p.desc}</p>
                      <ul className="flex flex-wrap gap-1.5">
                        {p.stack.map((tech) => (
                          <li
                            key={tech}
                            className="rounded-full border border-at-border bg-at-section px-2.5 py-1 text-[11px] font-medium text-at-text-muted hover:border-at-pink/40 hover:bg-at-bg-soft hover:text-at-primary transition-colors"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <ServiceCrossLinks locale={locale} currentKey="mobile" heading={dict.services.crossLinksHeading} nav={dict.services.nav} />
            <ServiceCta title={s.cta.title} desc={s.cta.desc} contactLabel={s.cta.contactUs} locale={locale} />
          </div>
        </div>
      </div>
    </main>
  );
}
