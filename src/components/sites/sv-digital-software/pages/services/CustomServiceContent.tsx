import { Code2, FileSearch, ClipboardCheck, Layers, PlugZap, RefreshCw, Database, Workflow, Check } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/types";
import { PageHero } from "@/components/sites/sv-digital-software/shared/PageHero";
import { SectionHeading } from "@/components/sites/sv-digital-software/shared/SectionHeading";
import { ServiceCta } from "@/components/sites/sv-digital-software/shared/ServiceCta";
import { ServiceCrossLinks } from "@/components/sites/sv-digital-software/shared/ServiceCrossLinks";
import { ServiceJsonLd } from "@/components/sites/sv-digital-software/shared/ServiceJsonLd";
import { withIcons } from "./steps";

type Props = { dict: Dictionary; locale: Locale };

const FEATURE_ICONS = [Layers, PlugZap, RefreshCw, Database, Workflow];
const STEP_ICONS = [FileSearch, ClipboardCheck, Code2, RefreshCw, Database];

/** Featured-project photos — automotive services, team workflow ERP, retail store. Distinct from other pages. */
const PROJECT_IMAGES = [
  "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=520&fit=crop&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=520&fit=crop&q=80",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=520&fit=crop&q=80",
];

/** Tech stack strip — logos map to self-hosted SVGs in /public/images/logos. */
const TECH_LOGOS: { name: string; file: string }[] = [
  { name: "React", file: "react" },
  { name: "Next.js", file: "nextdotjs" },
  { name: "Node.js", file: "nodedotjs" },
  { name: "Python", file: "python" },
  { name: "PostgreSQL", file: "postgresql" },
  { name: "AWS", file: "aws" },
  { name: "Docker", file: "docker" },
];

export function CustomServiceContent({ dict, locale }: Props) {
  const s = dict.services.custom;
  const features = withIcons(s.features.items.map((text, i) => ({ step: String(i + 1), title: text, desc: "" })), FEATURE_ICONS);
  const steps = withIcons(s.process.steps, STEP_ICONS);

  return (
    <main className="flex flex-col">
      <ServiceJsonLd dict={dict} locale={locale} slug="custom-software-development" serviceName={s.heroTitle} serviceDescription={s.intro} />
      <PageHero
        title={s.heroTitle}
        current={s.heroTitle}
        locale={locale}
        parent={{ label: dict.services.heroTitle, href: `/${locale}/services` }}
      />

      <div className="flex justify-center bg-at-bg px-0">
        <div className="bg-at-section rounded-t-[60px] max-[991px]:rounded-t-[40px] w-full flex justify-center px-5 lg:px-[76px] py-[100px] max-[540px]:py-16">
          <div className="w-full max-w-[1288px] flex flex-col gap-20">
            {/* Intro + code graphic */}
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
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=900&fit=crop&q=80"
                  alt={s.heroTitle}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Features — 5 icon cards */}
            <section className="flex flex-col gap-8">
              <SectionHeading>{s.features.heading}</SectionHeading>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {features.map((f) => {
                  const Icon = f.icon;
                  return (
                    <li key={f.step} className="group flex items-start gap-3 border border-at-border rounded-2xl bg-at-bg-soft px-5 py-4 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-at-pink/40 hover:bg-at-section hover:shadow-[0_16px_40px_rgba(45,56,100,0.14)]">
                      <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-at-pink/12 text-at-primary shrink-0 transition-all duration-300 group-hover:scale-110">
                        <Icon className="w-5 h-5" strokeWidth={1.75} />
                      </span>
                      <span className="text-at-text-dark text-sm font-medium leading-[1.6] font-[var(--font-noto-sans-jp)]">
                        {f.title}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </section>

            {/* Process — PHASE STEPPER (unique to Custom) */}
            <section className="flex flex-col gap-8" aria-labelledby="custom-process">
              <SectionHeading as="h2"><span id="custom-process">{s.process.heading}</span></SectionHeading>
              {/* Desktop: horizontal stepper with connecting rail */}
              <div className="relative hidden lg:block">
                <div aria-hidden className="absolute left-[9%] right-[9%] top-[26px] h-px bg-at-line" />
                <ol className="relative grid grid-cols-5 gap-5">
                  {steps.map((step) => {
                    const Icon = step.icon;
                    return (
                      <li key={step.step} className="group flex flex-col items-center text-center">
                        <span className="relative z-10 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-at-primary text-white ring-[8px] ring-at-section transition-all duration-300 group-hover:scale-110">
                          <Icon className="h-5 w-5" strokeWidth={1.9} />
                        </span>
                        <div className="mt-4 flex w-full flex-1 flex-col gap-2 rounded-2xl border border-at-border bg-at-bg-soft px-4 py-5 transition-all duration-300 hover:scale-[1.02] hover:border-at-pink/40 hover:bg-at-section hover:shadow-[0_16px_40px_rgba(45,56,100,0.14)]">
                          <span className="font-[var(--font-montserrat)] text-[11px] font-extrabold tracking-[0.18em] text-at-pink">PHASE {step.step}</span>
                          <h3 className="text-[15px] font-bold leading-[1.4] text-at-primary font-[var(--font-noto-sans-jp)]">{step.title}</h3>
                          <p className="text-[13px] leading-[1.7] text-at-text-muted font-[var(--font-noto-sans-jp)]">{step.desc}</p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
              {/* Mobile / tablet: vertical rail */}
              <ol className="flex flex-col gap-0 lg:hidden">
                {steps.map((step, idx) => {
                  const Icon = step.icon;
                  const isLast = idx === steps.length - 1;
                  return (
                    <li key={step.step} className="relative flex gap-4 pb-6 last:pb-0">
                      {!isLast && <span aria-hidden className="absolute left-[21px] top-[48px] bottom-0 w-px bg-at-line" />}
                      <span className="relative z-10 flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-at-primary text-white">
                        <Icon className="h-[18px] w-[18px]" strokeWidth={1.9} />
                      </span>
                      <div className="flex flex-1 flex-col gap-1.5 rounded-2xl border border-at-border bg-at-bg-soft px-5 py-4 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-at-pink/40 hover:bg-at-section hover:shadow-[0_16px_40px_rgba(45,56,100,0.14)]">
                        <span className="font-[var(--font-montserrat)] text-[11px] font-extrabold tracking-[0.18em] text-at-pink">PHASE {step.step}</span>
                        <h3 className="text-[15px] font-bold text-at-primary font-[var(--font-noto-sans-jp)]">{step.title}</h3>
                        <p className="text-[13.5px] leading-[1.7] text-at-text-muted font-[var(--font-noto-sans-jp)]">{step.desc}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </section>

            {/* Why choose — dark editorial panel (unique to Custom) */}
            <section className="overflow-hidden rounded-[32px] bg-at-primary px-6 py-10 lg:px-10 lg:py-12" aria-labelledby="custom-benefits">
              <div className="flex items-center gap-2">
                <span aria-hidden className="h-2.5 w-2.5 shrink-0 rounded-lg bg-at-pink" />
                <h2 id="custom-benefits" className="text-[22px] font-bold tracking-[0.04em] text-white font-[var(--font-noto-sans-jp)] lg:text-[26px]">
                  {s.benefits.heading}
                </h2>
              </div>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {s.benefits.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-at-pink/40 hover:bg-white/[0.12]">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-at-pink text-at-primary">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-[14px] font-medium leading-[1.7] text-white/90 font-[var(--font-noto-sans-jp)]">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Tech stack strip */}
            <section className="flex flex-col gap-6">
              <SectionHeading>TECH STACK</SectionHeading>
              <ul className="flex flex-wrap items-center gap-4">
                {TECH_LOGOS.map((t) => (
                  <li key={t.file} className="flex items-center gap-2.5 border border-at-border rounded-xl bg-at-bg-soft px-4 py-3 transition-colors hover:border-at-pink/40 hover:bg-at-section hover:text-at-primary">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`/images/logos/${t.file}.svg`} alt={t.name} loading="lazy" className="w-6 h-6 object-contain" />
                    <span className="text-at-text-dark text-sm font-bold tracking-[0.02em]">{t.name}</span>
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

            <ServiceCrossLinks locale={locale} currentKey="custom" heading={dict.services.crossLinksHeading} nav={dict.services.nav} />
            <ServiceCta title={s.cta.title} desc={s.cta.desc} contactLabel={s.cta.contactUs} locale={locale} />
          </div>
        </div>
      </div>
    </main>
  );
}
