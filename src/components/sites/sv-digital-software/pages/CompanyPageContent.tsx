import Link from "next/link";
import { PackageCheck, Globe, Users, BadgeCheck, Compass } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/types";
import { PageHero } from "@/components/sites/sv-digital-software/shared/PageHero";
import { SectionHeading } from "@/components/sites/sv-digital-software/shared/SectionHeading";
import { JsonLd } from "@/components/sites/sv-digital-software/shared/JsonLd";
import {
  SITE_URL,
  BRAND_NAME,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  OFFICE_ADDRESS,
  SOCIAL_LINKS,
  absoluteUrl,
} from "@/lib/i18n/site";

const VALUE_ICONS = [PackageCheck, Globe, Users, BadgeCheck];

export function CompanyPageContent({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const d = dict.companyPage;
  const url = absoluteUrl(locale, "/company");
  const initials = d.ceo.name.split(" ").map((w) => w[0]).join("");

  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `${d.heroTitle} — ${BRAND_NAME}`,
    url,
    mainEntity: {
      "@type": "Organization",
      name: "SV Digital Software Co., Ltd.",
      url: SITE_URL,
      foundingDate: "2022-07-08",
      email: CONTACT_EMAIL,
      telephone: CONTACT_PHONE,
      address: {
        "@type": "PostalAddress",
        streetAddress: OFFICE_ADDRESS,
        addressCountry: "GB",
      },
      sameAs: [SOCIAL_LINKS.linkedin, SOCIAL_LINKS.instagram, SOCIAL_LINKS.facebook],
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "TOP", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: d.heroTitle, item: url },
    ],
  };

  return (
    <main className="flex flex-col">
      <JsonLd data={aboutJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <PageHero title={d.heroTitle} current={d.heroTitle} locale={locale} />

      <div className="flex justify-center bg-at-bg px-0">
        <div className="bg-at-section rounded-t-[60px] max-[991px]:rounded-t-[40px] w-full flex flex-col items-center gap-16 px-5 lg:px-[76px] py-20">
          {/* Business Philosophy — feature panel with decorative background image */}
          <section
            aria-labelledby="company-philosophy"
            className="relative w-full max-w-[1288px] overflow-hidden rounded-[60px] max-[991px]:rounded-[40px] bg-at-primary px-6 lg:px-[76px] py-14 lg:py-20"
          >
            {/* Decorative image — empty alt + aria-hidden keeps it out of SEO indexing; text remains crawlable */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop&q=80"
              alt=""
              aria-hidden
              loading="lazy"
              referrerPolicy="no-referrer"
              className="absolute inset-0 h-full w-full object-cover opacity-40"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-at-primary/70 via-at-primary/55 to-at-secondary/45" />

            <div className="relative z-10 flex flex-col items-center text-center gap-6">
              <h2 id="company-philosophy" className="font-[var(--font-montserrat)] text-white text-[26px] lg:text-[36px] font-bold tracking-[0.06em]">
                {d.philosophy.heading}
              </h2>
              <span aria-hidden className="h-1 w-16 rounded-full bg-at-pink" />
              <p className="text-white/90 text-base lg:text-lg leading-[2] tracking-[0.03em] max-w-[920px] font-[var(--font-noto-sans-jp)]">
                {d.philosophy.desc}
              </p>
            </div>
          </section>

          {/* Core Values — 4 cards */}
          <section className="w-full max-w-[1288px] flex flex-col gap-8">
            <SectionHeading>{d.values.heading}</SectionHeading>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {d.values.items.map((v, i) => {
                const Icon = VALUE_ICONS[i] ?? BadgeCheck;
                return (
                  <li key={v.title} className="flex flex-col gap-3 rounded-2xl border border-at-border bg-at-bg-soft p-6 transition-colors hover:border-at-pink/30">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-at-primary text-white">
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </span>
                    <h3 className="text-at-primary text-base font-bold font-[var(--font-noto-sans-jp)]">{v.title}</h3>
                    <p className="text-at-text-muted text-sm leading-[1.8] font-[var(--font-noto-sans-jp)]">{v.desc}</p>
                  </li>
                );
              })}
            </ul>
          </section>

          {/* Vision — accent band */}
          <section
            aria-labelledby="company-vision"
            className="w-full max-w-[1288px] rounded-[32px] border border-at-border bg-at-bg-soft px-6 lg:px-12 py-10 lg:py-14 flex flex-col gap-6"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-at-pink/15 text-at-primary">
                <Compass className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <h2 id="company-vision" className="text-at-primary text-[26px] lg:text-[30px] font-bold tracking-[0.04em] font-[var(--font-noto-sans-jp)]">
                {d.vision.heading}
              </h2>
            </div>
            <p className="text-at-text-dark text-base leading-[2] tracking-[0.03em] max-w-[1020px] font-[var(--font-noto-sans-jp)]">
              {d.vision.desc}
            </p>
          </section>

          {/* CEO Message — quote card with office-team background image */}
          <section aria-labelledby="company-ceo" className="relative overflow-hidden w-full max-w-[1288px] rounded-[32px] border border-at-border bg-at-section px-6 lg:px-12 py-10 lg:py-14 flex flex-col lg:flex-row gap-10 lg:gap-14 items-center lg:items-start">
            {/* Decorative background — alt empty + aria-hidden, text stays crawlable */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600&h=900&fit=crop&q=80"
              alt=""
              aria-hidden
              loading="lazy"
              referrerPolicy="no-referrer"
              className="absolute inset-0 h-full w-full object-cover opacity-60"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-at-section via-at-section/55 to-at-section/10" />

            <div className="relative z-10 flex flex-col items-center gap-4 shrink-0 w-full lg:w-[260px]">
              <span aria-hidden className="flex h-28 w-28 items-center justify-center rounded-full bg-at-primary text-white font-[var(--font-montserrat)] text-3xl font-extrabold tracking-[0.06em]">
                {initials}
              </span>
              <div className="text-center">
                <span className="block text-at-primary text-lg font-bold font-[var(--font-noto-sans-jp)]">{d.ceo.name}</span>
                <span className="mt-1 block text-at-text-muted text-xs font-bold tracking-[0.14em] uppercase">{d.ceo.role}</span>
              </div>
            </div>
            <div className="relative z-10 flex flex-1 flex-col gap-6">
              <SectionHeading>{d.ceo.label}</SectionHeading>
              <p className="relative pl-6 text-at-text-dark text-base leading-[2] tracking-[0.03em] font-[var(--font-noto-sans-jp)]">
                <span aria-hidden className="absolute left-0 top-1 bottom-1 w-1 rounded-full bg-at-pink" />
                {d.ceo.desc}
              </p>
            </div>
          </section>

          {/* Fact Sheet — striped table */}
          <section className="w-full max-w-[1288px] flex flex-col gap-8">
            <SectionHeading>{d.factSheet.heading}</SectionHeading>
            <div className="overflow-hidden rounded-[32px] border border-at-border">
              {d.factSheet.rows.map((row, i) => (
                <div key={row.label} className={`flex flex-col lg:flex-row gap-2 lg:gap-14 px-6 lg:px-10 py-5 ${i % 2 === 1 ? "bg-at-bg-soft" : "bg-at-section"}`}>
                  <span className="lg:w-[260px] shrink-0 text-at-text-muted text-xs font-bold tracking-[0.12em] uppercase leading-[1.8]">
                    {row.label}
                  </span>
                  <span className="flex-1 text-at-text-dark text-base leading-[1.8] font-[var(--font-noto-sans-jp)]">{row.value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Technology Partners — logo wall (text-based, crawlable) */}
          <section className="w-full max-w-[1288px] flex flex-col gap-8">
            <SectionHeading>{d.partners.heading}</SectionHeading>
            <p className="text-at-text-muted text-base leading-[1.8] tracking-[0.03em] max-w-[820px] font-[var(--font-noto-sans-jp)]">
              {d.partners.desc}
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {d.partners.items.map((p) => (
                <li
                  key={p}
                  className="flex items-center justify-center rounded-2xl border border-at-border bg-at-bg-soft px-4 py-7 text-at-primary text-[15px] font-bold tracking-[0.04em] font-[var(--font-montserrat)] transition-colors hover:border-at-pink/40 hover:bg-at-section"
                >
                  {p}
                </li>
              ))}
            </ul>
          </section>

          {/* Awards */}
          <div className="w-full max-w-[1288px] bg-at-section rounded-[60px] border border-at-border px-6 lg:px-[76px] py-12 lg:py-[76px] flex flex-col gap-6">
            <SectionHeading>{d.awards.heading}</SectionHeading>
            <ul className="flex flex-col pl-6">
              {d.awards.items.map((a) => (
                <li key={a.date} className="flex flex-col lg:flex-row gap-4 py-6 border-t border-dotted border-at-line first:border-0">
                  <span className="text-at-primary text-base font-bold w-[110px] shrink-0">{a.date}</span>
                  <div className="flex-1 flex flex-col gap-1">
                    <h3 className="text-at-primary text-xl font-bold leading-[1.4]">{a.title}</h3>
                    <p className="text-at-text-medium text-base leading-[1.6]">{a.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="w-full max-w-[1288px] bg-at-section rounded-[60px] px-6 lg:px-[76px] py-12 lg:py-20 flex flex-col items-center gap-6">
            <SectionHeading>{d.contact.heading}</SectionHeading>
            <p className="text-at-text-dark text-base leading-[2] tracking-[0.04em] text-center max-w-[640px]">{d.contact.desc}</p>
            <Link href={`/${locale}/contact`} className="inline-flex items-center gap-3 bg-at-primary text-at-bg rounded-lg px-8 py-4 hover:bg-at-hover hover:text-at-primary transition-colors">
              <span className="text-sm font-bold tracking-[0.04em]">{d.contact.contactUs}</span>
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
