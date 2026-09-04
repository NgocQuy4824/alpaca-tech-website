import { Blocks, Workflow, PlugZap, Code2, GraduationCap, Layers, Boxes, Wrench, CheckCircle2, Rocket } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/types";
import { PageHero } from "@/components/sites/sv-digital-software/shared/PageHero";
import { SectionHeading } from "@/components/sites/sv-digital-software/shared/SectionHeading";
import { ServiceCta } from "@/components/sites/sv-digital-software/shared/ServiceCta";
import { ServiceCrossLinks } from "@/components/sites/sv-digital-software/shared/ServiceCrossLinks";
import { ServiceJsonLd } from "@/components/sites/sv-digital-software/shared/ServiceJsonLd";
import { withIcons } from "./steps";

type Props = { dict: Dictionary; locale: Locale };

const CAPABILITY_ICONS = [Blocks, Workflow, PlugZap, Code2, GraduationCap];
const STEP_ICONS = [Layers, Boxes, Wrench, CheckCircle2, Rocket];

/** Featured-project photos — workflow automation, field ops, HR self-service. Distinct from other pages. */
const PROJECT_IMAGES = [
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=520&fit=crop&q=80",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=520&fit=crop&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=520&fit=crop&q=80",
];

export function LowCodeServiceContent({ dict, locale }: Props) {
  const s = dict.services.lowcode;
  const capabilities = withIcons(
    s.capabilities.items.map((c, i) => ({ step: String(i + 1), title: c.title, desc: c.desc })),
    CAPABILITY_ICONS
  );
  const steps = withIcons(s.process.steps, STEP_ICONS);

  return (
    <main className="flex flex-col">
      <ServiceJsonLd dict={dict} locale={locale} slug="low-code" serviceName={s.heroTitle} serviceDescription={s.intro} />
      <PageHero
        title={s.heroTitle}
        current={s.heroTitle}
        locale={locale}
        parent={{ label: dict.services.heroTitle, href: `/${locale}/services` }}
      />

      <div className="flex justify-center bg-at-bg px-0">
        <div className="bg-at-section rounded-t-[60px] max-[991px]:rounded-t-[40px] w-full flex justify-center px-5 lg:px-[76px] py-[100px] max-[540px]:py-16">
          <div className="w-full max-w-[1288px] flex flex-col gap-20">
            {/* Intro + image */}
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
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=900&fit=crop&q=80"
                  alt={s.heroTitle}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Capabilities — BENTO grid (first card spans two columns) */}
            <section className="flex flex-col gap-8">
              <SectionHeading>{s.capabilities.heading}</SectionHeading>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {capabilities.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <li
                      key={c.title}
                      className={`group flex flex-col gap-4 rounded-2xl border border-at-border bg-at-bg-soft p-6 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-at-pink/40 hover:bg-at-section hover:shadow-[0_16px_40px_rgba(45,56,100,0.14)] ${
                        i === 0 ? "sm:col-span-2 lg:col-span-2" : ""
                      }`}
                    >
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-at-primary text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-at-pink group-hover:text-at-primary">
                        <Icon className="h-6 w-6" strokeWidth={1.75} />
                      </span>
                      <div className="flex flex-col gap-1.5">
                        <h3 className="text-at-primary text-base font-bold font-[var(--font-noto-sans-jp)]">{c.title}</h3>
                        <p className="text-at-text-muted text-sm leading-[1.7] font-[var(--font-noto-sans-jp)]">{c.desc}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>

            {/* Process — ASSEMBLY LINE (horizontal chips with arrow connectors, equal-height cards) */}
            <section className="flex flex-col gap-8" aria-labelledby="lowcode-process">
              <SectionHeading as="h2"><span id="lowcode-process">{s.process.heading}</span></SectionHeading>
              <ol className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6">
                {steps.map((step, idx) => {
                  const Icon = step.icon;
                  const isLast = idx === steps.length - 1;
                  return (
                    <li key={step.step} className="relative flex">
                      <div className="flex-1 flex flex-col gap-3 rounded-2xl border border-at-border bg-at-bg-soft p-5 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-at-pink/40 hover:bg-at-section hover:shadow-[0_16px_40px_rgba(45,56,100,0.14)]">
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-at-primary text-white">
                            <Icon className="h-5 w-5" strokeWidth={1.75} />
                          </span>
                          <span className="font-[var(--font-montserrat)] text-[11px] font-extrabold tracking-[0.18em] text-at-pink">{step.step}</span>
                        </div>
                        <h3 className="text-[15px] font-bold leading-[1.4] text-at-primary font-[var(--font-noto-sans-jp)]">{step.title}</h3>
                        <p className="flex-1 text-[13px] leading-[1.7] text-at-text-muted font-[var(--font-noto-sans-jp)]">{step.desc}</p>
                      </div>
                      {!isLast && (
                        <span aria-hidden className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -right-[26px] z-10 items-center justify-center text-at-line">
                          <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
                            <path d="M1 7H19M19 7L13 1M19 7L13 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      )}
                    </li>
                  );
                })}
              </ol>
            </section>

            {/* Platforms — badge strip */}
            <section className="flex flex-col gap-6">
              <SectionHeading>{s.platforms.heading}</SectionHeading>
              <ul className="flex flex-wrap gap-2.5">
                {s.platforms.items.map((p) => (
                  <li
                    key={p}
                    className="rounded-full border border-at-border bg-at-bg-soft px-5 py-2.5 text-sm font-bold tracking-[0.02em] text-at-text-dark font-[var(--font-montserrat)] transition-colors hover:border-at-pink/40 hover:bg-at-section hover:text-at-primary"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </section>

            {/* Benefits — numbered list with left accent bar */}
            <section className="flex flex-col gap-8" aria-labelledby="lowcode-benefits">
              <SectionHeading as="h2"><span id="lowcode-benefits">{s.benefits.heading}</span></SectionHeading>
              <ul className="flex flex-col gap-3">
                {s.benefits.items.map((item, i) => (
                  <li
                    key={item}
                    className="group flex items-center gap-4 rounded-2xl border border-at-border bg-at-bg-soft px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-at-pink/40 hover:bg-at-section hover:shadow-[0_16px_40px_rgba(45,56,100,0.14)]"
                  >
                    <span aria-hidden className="w-1 self-stretch rounded-full bg-at-pink" />
                    <span className="font-[var(--font-montserrat)] text-lg font-extrabold text-at-primary/25 w-8 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    <span className="flex-1 text-[14px] font-medium leading-[1.7] text-at-text-dark font-[var(--font-noto-sans-jp)] lg:text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Projects */}
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

            <ServiceCrossLinks locale={locale} currentKey="lowcode" heading={dict.services.crossLinksHeading} nav={dict.services.nav} />
            <ServiceCta title={s.cta.title} desc={s.cta.desc} contactLabel={s.cta.contactUs} locale={locale} />
          </div>
        </div>
      </div>
    </main>
  );
}
