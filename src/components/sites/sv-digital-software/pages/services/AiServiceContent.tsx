import { Database, BrainCircuit, Bot, Layers, Cpu, Rocket, TrendingUp, GitBranch } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/types";
import { PageHero } from "@/components/sites/sv-digital-software/shared/PageHero";
import { SectionHeading } from "@/components/sites/sv-digital-software/shared/SectionHeading";
import { ServiceCta } from "@/components/sites/sv-digital-software/shared/ServiceCta";
import { ServiceCrossLinks } from "@/components/sites/sv-digital-software/shared/ServiceCrossLinks";
import { ServiceJsonLd } from "@/components/sites/sv-digital-software/shared/ServiceJsonLd";
import { withIcons } from "./steps";

type Props = { dict: Dictionary; locale: Locale };

const CAPABILITY_ICONS = [Database, BrainCircuit, Bot];
const FLOW_ICONS = [Database, Layers, Cpu, Rocket, TrendingUp];

/** Featured-project photos — document agent, forecast model, support assistant. */
const PROJECT_IMAGES = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=520&fit=crop&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=520&fit=crop&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=520&fit=crop&q=80",
];

export function AiServiceContent({ dict, locale }: Props) {
  const s = dict.services.ai;
  const capabilities = withIcons(
    s.capabilities.items.map((c, i) => ({ step: String(i + 1), title: c.title, desc: c.desc })),
    CAPABILITY_ICONS
  );
  const flow = s.steps.items.map((item, i) => ({
    ...item,
    icon: FLOW_ICONS[i] ?? GitBranch,
  }));

  return (
    <main className="flex flex-col">
      <ServiceJsonLd dict={dict} locale={locale} slug="ai" serviceName={s.heroTitle} serviceDescription={s.intro} />
      <PageHero
        title={s.heroTitle}
        current={s.heroTitle}
        locale={locale}
        parent={{ label: dict.services.heroTitle, href: `/${locale}/services` }}
      />

      <div className="flex justify-center bg-at-bg px-0">
        <div className="bg-at-section rounded-t-[60px] max-[991px]:rounded-t-[40px] w-full flex justify-center px-5 lg:px-[76px] py-[100px] max-[540px]:py-16">
          <div className="w-full max-w-[1288px] flex flex-col gap-20">
            {/* Intro + AI graphic */}
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
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=900&fit=crop&q=80"
                  alt={s.heroTitle}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Capabilities — 3 large feature cards */}
            <section className="flex flex-col gap-8">
              <SectionHeading>{s.capabilities.heading}</SectionHeading>
              <div className="grid md:grid-cols-3 gap-5">
                {capabilities.map((cap) => {
                  const Icon = cap.icon;
                  return (
                    <article
                      key={cap.title}
                      className="group flex flex-col gap-4 rounded-2xl border border-at-border bg-at-bg-soft p-6 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-at-pink/40 hover:bg-at-section hover:shadow-[0_16px_40px_rgba(45,56,100,0.14)]"
                    >
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-at-primary text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-at-pink group-hover:text-at-primary">
                        <Icon className="h-6 w-6" strokeWidth={1.75} />
                      </span>
                      <h3 className="text-at-primary text-base font-bold leading-[1.4] font-[var(--font-noto-sans-jp)]">{cap.title}</h3>
                      <p className="text-at-text-muted text-sm leading-[1.7] font-[var(--font-noto-sans-jp)]">{cap.desc}</p>
                    </article>
                  );
                })}
              </div>
            </section>

            {/* Intelligence Flow — node-graph timeline */}
            <section className="flex flex-col gap-8" aria-labelledby="ai-flow">
              <SectionHeading as="h2">
                <span id="ai-flow">{s.steps.heading}</span>
              </SectionHeading>
              {/* Desktop: horizontal node graph */}
              <div className="relative hidden lg:block">
                <div aria-hidden className="absolute left-[48px] right-[48px] top-[28px] h-px bg-at-line" />
                <ol className="relative grid grid-cols-5 gap-2">
                  {flow.map((node) => {
                    const Icon = node.icon;
                    return (
                      <li key={node.step} className="group flex flex-col items-center text-center">
                        <span className="relative z-10 flex h-[56px] w-[56px] items-center justify-center rounded-full bg-at-primary text-white ring-[8px] ring-at-section transition-all duration-300 group-hover:scale-110 group-hover:bg-at-pink group-hover:text-at-primary">
                          <Icon className="h-5 w-5" strokeWidth={1.75} />
                        </span>
                        <div className="mt-4 flex w-full flex-1 flex-col gap-1 rounded-2xl border border-at-border bg-at-bg-soft px-4 py-4 transition-all duration-300 hover:scale-[1.02] hover:border-at-pink/40 hover:bg-at-section hover:shadow-[0_16px_40px_rgba(45,56,100,0.14)]">
                          <span className="font-[var(--font-montserrat)] text-[11px] font-extrabold tracking-[0.18em] text-at-pink">{node.step.toUpperCase()}</span>
                          <p className="text-[12.5px] leading-[1.65] text-at-text-muted font-[var(--font-noto-sans-jp)]">{node.desc}</p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
              {/* Mobile / tablet: vertical spine */}
              <ol className="flex flex-col gap-0 lg:hidden">
                {flow.map((node, idx) => {
                  const Icon = node.icon;
                  const isLast = idx === flow.length - 1;
                  return (
                    <li key={node.step} className="relative flex gap-4 pb-6 last:pb-0">
                      {!isLast && <span aria-hidden className="absolute left-[21px] top-[48px] bottom-0 w-px bg-at-line" />}
                      <span className="relative z-10 flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-at-primary text-white">
                        <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                      </span>
                      <div className="flex flex-1 flex-col gap-1.5 rounded-2xl border border-at-border bg-at-bg-soft px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-at-pink/40 hover:bg-at-section hover:shadow-[0_16px_40px_rgba(45,56,100,0.14)]">
                        <span className="font-[var(--font-montserrat)] text-[11px] font-extrabold tracking-[0.18em] text-at-pink">{node.step.toUpperCase()}</span>
                        <p className="text-[13px] leading-[1.7] text-at-text-muted font-[var(--font-noto-sans-jp)]">{node.desc}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </section>

            {/* Stack — badge strip */}
            <section className="flex flex-col gap-6">
              <SectionHeading>{s.stack.heading}</SectionHeading>
              <ul className="flex flex-wrap gap-2.5">
                {s.stack.items.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-at-border bg-at-bg-soft px-5 py-2 text-sm font-bold tracking-[0.02em] text-at-text-dark font-[var(--font-montserrat)] transition-colors hover:border-at-pink/40 hover:bg-at-section hover:text-at-primary"
                  >
                    {tech}
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

            <ServiceCrossLinks locale={locale} currentKey="ai" heading={dict.services.crossLinksHeading} nav={dict.services.nav} />
            <ServiceCta title={s.cta.title} desc={s.cta.desc} contactLabel={s.cta.contactUs} locale={locale} />
          </div>
        </div>
      </div>
    </main>
  );
}
