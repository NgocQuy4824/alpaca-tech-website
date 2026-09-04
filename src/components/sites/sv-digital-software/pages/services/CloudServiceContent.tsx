import { UploadCloud, Server, ShieldCheck, Gauge } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/types";
import { PageHero } from "@/components/sites/sv-digital-software/shared/PageHero";
import { SectionHeading } from "@/components/sites/sv-digital-software/shared/SectionHeading";
import { ServiceCta } from "@/components/sites/sv-digital-software/shared/ServiceCta";
import { ServiceCrossLinks } from "@/components/sites/sv-digital-software/shared/ServiceCrossLinks";
import { ServiceJsonLd } from "@/components/sites/sv-digital-software/shared/ServiceJsonLd";
import { withIcons } from "./steps";

type Props = { dict: Dictionary; locale: Locale };

const PILLAR_ICONS = [UploadCloud, Server, ShieldCheck, Gauge];

export function CloudServiceContent({ dict, locale }: Props) {
  const s = dict.services.cloud;
  const pillars = withIcons(s.pillars.items.map((p, i) => ({ step: String(i + 1), title: p.title, desc: p.desc })), PILLAR_ICONS);

  return (
    <main className="flex flex-col">
      <ServiceJsonLd dict={dict} locale={locale} slug="cloud-services" serviceName={s.heroTitle} serviceDescription={s.intro} />
      <PageHero
        title={s.heroTitle}
        current={s.heroTitle}
        locale={locale}
        parent={{ label: dict.services.heroTitle, href: `/${locale}/services` }}
      />

      <div className="flex justify-center bg-at-bg px-0">
        <div className="bg-at-section rounded-t-[60px] max-[991px]:rounded-t-[40px] w-full flex justify-center px-5 lg:px-[76px] py-[100px] max-[540px]:py-16">
          <div className="w-full max-w-[1288px] flex flex-col gap-20">
            {/* Intro + cloud graphic — image on the right on desktop (reversed) */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
              <div className="flex flex-col gap-6 order-2 lg:order-1">
                <h2 className="sr-only">{s.heroTitle}</h2>
                <p className="text-at-text-dark text-lg leading-[1.9] tracking-[0.03em] font-[var(--font-noto-sans-jp)]">
                  {s.intro}
                </p>
              </div>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-at-border bg-at-bg-soft order-1 lg:order-2" role="img" aria-label={s.heroTitle}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&h=900&fit=crop&q=80"
                  alt={s.heroTitle}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Pillars — STACKED LAYERS (vertical stack of horizontal bars connected by a spine) */}
            <section className="flex flex-col gap-8" aria-labelledby="cloud-pillars">
              <SectionHeading as="h2"><span id="cloud-pillars">{s.pillars.heading}</span></SectionHeading>
              <div className="relative flex flex-col gap-4 lg:gap-5">
                {/* vertical spine */}
                <div aria-hidden className="absolute left-5 lg:left-6 top-6 bottom-6 w-px bg-at-line" />
                <ol className="flex flex-col gap-4">
                  {pillars.map((pillar) => {
                    const Icon = pillar.icon;
                    return (
                      <li
                        key={pillar.title}
                        className="relative flex items-center gap-4 lg:gap-5"
                      >
                        {/* node */}
                        <span aria-hidden className="relative z-10 flex h-10 w-10 lg:h-12 lg:w-12 shrink-0 items-center justify-center rounded-xl bg-at-primary text-white ring-[6px] ring-at-section">
                          <Icon className="h-5 w-5 lg:h-6 lg:w-6" strokeWidth={1.75} />
                        </span>
                        {/* bar */}
                        <div className="flex-1 flex flex-col gap-1 rounded-2xl border border-at-border bg-at-bg-soft px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-at-pink/40 hover:bg-at-section hover:shadow-[0_16px_40px_rgba(45,56,100,0.14)]">
                          <h3 className="text-at-primary text-[16px] lg:text-lg font-bold font-[var(--font-noto-sans-jp)]">{pillar.title}</h3>
                          <p className="text-at-text-muted text-[13.5px] lg:text-sm leading-[1.7] font-[var(--font-noto-sans-jp)]">{pillar.desc}</p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </section>

            {/* Pillars of trust — dark panel highlighting the two cross-cutting themes */}
            <section className="overflow-hidden rounded-[32px] bg-at-primary px-6 py-10 lg:px-10 lg:py-12" aria-labelledby="cloud-trust">
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-2">
                  <span aria-hidden className="h-2.5 w-2.5 shrink-0 rounded-lg bg-at-pink" />
                  <h2 id="cloud-trust" className="text-[20px] lg:text-[24px] font-bold tracking-[0.04em] text-white font-[var(--font-noto-sans-jp)]">
                    {s.pillars.nut} & {s.pillars.bolt}
                  </h2>
                </div>
                <ul className="grid sm:grid-cols-2 gap-4">
                  <li className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-at-pink/40 hover:bg-white/[0.12]">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-at-pink/20 text-at-pink">
                      <ShieldCheck className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <span className="text-white text-lg font-bold font-[var(--font-noto-sans-jp)]">{s.pillars.nut}</span>
                  </li>
                  <li className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-at-pink/40 hover:bg-white/[0.12]">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-at-pink/20 text-at-pink">
                      <Gauge className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <span className="text-white text-lg font-bold font-[var(--font-noto-sans-jp)]">{s.pillars.bolt}</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Certifications — badge strip */}
            <section className="flex flex-col gap-6">
              <SectionHeading>{s.certifications.heading}</SectionHeading>
              <ul className="flex flex-wrap gap-3">
                {s.certifications.items.map((cert) => (
                  <li
                    key={cert}
                    className="inline-flex items-center gap-2 rounded-full border border-at-border bg-at-bg-soft px-5 py-2.5 text-sm font-bold tracking-[0.02em] text-at-text-dark font-[var(--font-montserrat)] transition-colors hover:border-at-pink/40 hover:bg-at-section hover:text-at-primary"
                  >
                    <span className="flex h-2 w-2 rounded-full bg-at-pink shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </section>

            <ServiceCrossLinks locale={locale} currentKey="cloud" heading={dict.services.crossLinksHeading} nav={dict.services.nav} />
            <ServiceCta title={s.cta.title} desc={s.cta.desc} contactLabel={s.cta.contactUs} locale={locale} />
          </div>
        </div>
      </div>
    </main>
  );
}
