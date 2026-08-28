import Link from "next/link";
import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/types";
import { PageHero } from "@/components/sites/alpaca-tech/shared/PageHero";
import { SectionHeading } from "@/components/sites/alpaca-tech/shared/SectionHeading";

function InfoRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-14 py-6 border-b border-at-border last:border-0">
      <div className="flex flex-col gap-2 lg:w-[22%] shrink-0">
        <span className="text-at-text-medium text-base tracking-[0.04em] leading-[1.6]">{label}</span>
        <span className="block h-px w-full bg-at-accent" />
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <div className="text-at-text-medium text-base tracking-[0.04em] leading-[1.6]">{children}</div>
        <span className="block h-px w-full bg-at-border" />
      </div>
    </div>
  );
}

export function CompanyPageContent({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const d = dict.companyPage;

  return (
    <main className="flex flex-col">
      <PageHero title={d.heroTitle} current={d.heroTitle} locale={locale} />

      <div className="flex justify-center bg-at-bg px-0">
        <div className="bg-white rounded-t-[60px] max-[991px]:rounded-t-[40px] w-full flex flex-col items-center gap-16 px-5 lg:px-[76px] py-20">
          {/* Company info */}
          <div className="w-full max-w-[1288px] flex flex-col gap-10">
            <Image
              src="https://storage.googleapis.com/studio-design-asset-files/projects/nBW2yYm1av/s-1288x568_v-fms_webp_7ca49a22-4fcb-4fce-92b8-2971466e6190.jpg"
              alt="AlpacaTech team"
              width={1288}
              height={568}
              className="w-full h-auto rounded-2xl object-cover"
            />

            <div className="flex flex-col gap-4">
              <SectionHeading>{d.info.heading}</SectionHeading>
              <div className="flex flex-col pt-4">
                {d.info.rows.map((row) => (
                  <InfoRow key={row.label} label={row.label}>
                    <span>{row.value}</span>
                  </InfoRow>
                ))}
              </div>
            </div>
          </div>

          {/* Company History */}
          <div className="w-full max-w-[1288px] bg-white rounded-[60px] max-[991px]:rounded-[40px] border border-at-border px-6 lg:px-[76px] py-12 lg:py-[76px] flex flex-col gap-12">
            <SectionHeading>{d.history.heading}</SectionHeading>
            <ul className="flex flex-col pl-6 border-l-0">
              {d.history.items.map((h) => (
                <li key={h.year} className="flex gap-4 py-4 border-t border-dotted border-at-line first:border-0">
                  <span className="text-at-primary text-base font-bold w-[110px] shrink-0">{h.year}</span>
                  <span className="text-at-text-medium text-base leading-[1.6]">{h.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          <div className="w-full max-w-[1288px] flex flex-col gap-6">
            <SectionHeading>{d.achievements.heading}</SectionHeading>
            <div className="flex flex-col">
              {d.achievements.items.map((a) => (
                <div key={a.title} className="flex flex-col lg:flex-row lg:items-center gap-4 py-6 border-t border-dotted border-at-line first:border-t">
                  <div className="lg:w-[32%] bg-at-bg-soft border border-at-line rounded-[64px] px-6 py-4 flex items-center justify-center">
                    <span className="text-at-primary text-lg font-bold tracking-[0.04em] text-center">{a.title}</span>
                  </div>
                  <div className="flex-1 flex flex-col gap-1">
                    <span className="text-at-text-medium text-base leading-[1.6] underline underline-offset-2">{a.desc}</span>
                    <span className="text-at-text-muted text-sm">{a.meta}</span>
                  </div>
                </div>
              ))}
            </div>
            <span className="text-at-text-medium text-sm tracking-[0.04em] text-center">{d.achievements.note}</span>
          </div>

          {/* Awards */}
          <div className="w-full max-w-[1288px] bg-white rounded-[60px] border border-at-border px-6 lg:px-[76px] py-12 lg:py-[76px] flex flex-col gap-6">
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

          {/* Map */}
          <div className="w-full max-w-[1288px] bg-white rounded-[60px] overflow-hidden relative h-[567px] flex flex-col justify-end p-8">
            <Image
              src="https://storage.googleapis.com/studio-design-asset-files/projects/4yqBl2mdWj/s-2400x960_v-frms_webp_44a88171-ab75-4da1-ac69-eed42270853b.png"
              alt="Map — H1O Hirakawacho"
              fill
              sizes="(max-width: 1288px) 100vw, 1288px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10 bg-white rounded-lg flex flex-col lg:flex-row items-center justify-between gap-4 px-8 py-4">
              <span className="text-at-text-medium text-sm tracking-[0.04em] leading-[2]">{d.map.address}</span>
              <a
                href="https://maps.google.com/?q=H1O+Hirakawacho+Tokyo"
                target="_blank"
                rel="noreferrer"
                className="bg-at-primary text-white rounded-lg px-6 py-3 text-sm font-medium tracking-[0.04em] hover:bg-at-accent transition-colors shrink-0"
              >
                {d.map.viewMap}
              </a>
            </div>
          </div>

          {/* Group companies */}
          <div className="w-full max-w-[1288px] bg-white rounded-[60px] px-6 lg:px-[76px] py-12 lg:py-[76px] flex flex-col gap-10">
            <SectionHeading>{d.groupCompanies.heading}</SectionHeading>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14">
              <a href="https://www.folio-hd.co.jp/" target="_blank" rel="noreferrer" className="border border-at-border rounded-lg h-[346px] max-[991px]:h-[188px] flex flex-col items-center justify-center gap-6 hover:bg-white transition-colors group p-4">
                {/* eslint-disable @next/next/no-img-element */}
                <img
                  src="https://storage.googleapis.com/studio-design-asset-files/projects/nBW2yYm1av/s-400x40_95708867-a98f-47c3-85b3-ba75056b3d52.svg"
                  alt="FOLIO Holdings"
                  className="w-[65%] max-w-[280px] h-auto group-hover:w-[75%] transition-all duration-700"
                />
                <span className="text-at-primary text-sm flex items-center gap-2">
                  {d.groupCompanies.visitSite} <span aria-hidden>↗</span>
                </span>
              </a>
              <a href="https://folio-sec.com/" target="_blank" rel="noreferrer" className="border border-at-border rounded-lg h-[346px] max-[991px]:h-[188px] flex flex-col items-center justify-center gap-6 hover:bg-white transition-colors group p-4">
                {/* eslint-disable @next/next/no-img-element */}
                <img
                  src="https://storage.googleapis.com/studio-design-asset-files/projects/4yqBl2mdWj/s-200x114_a5036b2e-8320-4b76-9ed6-13bd2a05a0f3.svg"
                  alt="FOLIO Securities"
                  className="w-[32%] max-w-[150px] h-auto group-hover:w-[42%] transition-all duration-700"
                />
                <span className="text-at-primary text-sm flex items-center gap-2">
                  {d.groupCompanies.visitSite} <span aria-hidden>↗</span>
                </span>
              </a>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="w-full max-w-[1288px] bg-white rounded-[60px] px-6 lg:px-[76px] py-12 lg:py-20 flex flex-col items-center gap-6">
            <SectionHeading>{d.contact.heading}</SectionHeading>
            <p className="text-at-text-dark text-base leading-[2] tracking-[0.04em] text-center max-w-[640px]">{d.contact.desc}</p>
            <Link href={`/${locale}#contact`} className="inline-flex items-center gap-3 bg-at-primary text-white rounded-lg px-8 py-4 hover:bg-at-accent transition-colors">
              <span className="text-sm font-bold tracking-[0.04em]">{d.contact.contactUs}</span>
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
