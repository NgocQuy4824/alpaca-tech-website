import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/types";
import { PageHero } from "@/components/sites/sv-digital-software/shared/PageHero";
import { JsonLd } from "@/components/sites/sv-digital-software/shared/JsonLd";
import { SITE_URL, BRAND_NAME } from "@/lib/i18n/site";
import { jobPath, type JobSlug } from "@/lib/jobs";

type Props = { dict: Dictionary; locale: Locale };

/** ISO dates for JobPosting structured data (Google for Jobs). */
const DATE_POSTED = "2026-09-02";
const VALID_THROUGH = "2026-12-31";

export function RecruitPageContent({ dict, locale }: Props) {
  const d = dict.recruitPage;

  const jobPostings = {
    "@context": "https://schema.org",
    "@graph": d.jobs.map((job) => ({
      "@type": "JobPosting",
      title: job.title,
      description: job.desc,
      datePosted: DATE_POSTED,
      validThrough: VALID_THROUGH,
      employmentType: "FULL_TIME",
      hiringOrganization: { "@type": "Organization", name: BRAND_NAME, sameAs: SITE_URL },
      jobLocationType: "TELECOMMUTE",
      url: `${SITE_URL}${jobPath(locale, job.slug as JobSlug)}`,
      directApply: true,
    })),
  };

  return (
    <main className="flex flex-col">
      <JsonLd data={jobPostings} />
      <PageHero title={d.heroTitle} current={d.heroTitle} locale={locale} />

      <div className="flex justify-center bg-at-bg px-0">
        <div className="bg-at-section rounded-t-[60px] max-[991px]:rounded-t-[40px] w-full flex justify-center px-5 lg:px-[76px] py-20">
          <div className="w-full max-w-[1288px] flex flex-col gap-12">
            <Image
              src="https://storage.googleapis.com/studio-design-asset-files/projects/4yqBl2mdWj/s-1289x473_v-fms_webp_d751e825-390f-47ac-ae9e-7fcc038798ce.jpg"
              alt="SV Digital Software team"
              width={1289}
              height={473}
              className="w-full h-auto rounded-2xl object-cover"
            />

            <p className="text-at-text-dark text-base leading-[2] tracking-[0.04em] font-[var(--font-noto-sans-jp)]">{d.intro}</p>

            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-2">
                <span className="w-[6px] h-[6px] rounded-full bg-at-pink shrink-0" />
                <h2 className="text-at-primary text-[28px] lg:text-[34px] font-bold tracking-[0.04em] font-[var(--font-noto-sans-jp)]">
                  {d.career.heading}
                </h2>
              </div>

              <p className="text-at-text-dark text-base leading-[2] tracking-[0.04em] font-[var(--font-noto-sans-jp)]">{d.career.desc}</p>

              {/* Job cards */}
              <div className="grid md:grid-cols-2 gap-5">
                {d.jobs.map((job) => (
                  <article
                    key={job.slug}
                    className="flex flex-col gap-4 rounded-2xl border border-at-border bg-at-bg-soft p-6 transition-colors hover:border-at-pink/40"
                  >
                    <h3 className="text-at-primary text-lg font-bold leading-[1.4] font-[var(--font-noto-sans-jp)]">{job.shortTitle}</h3>

                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-at-border bg-at-section px-3 py-1 text-xs font-medium text-at-text-muted">
                        <MapPin className="w-3.5 h-3.5 text-at-pink" strokeWidth={2} />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-at-border bg-at-section px-3 py-1 text-xs font-medium text-at-text-muted">
                        <Clock className="w-3.5 h-3.5 text-at-pink" strokeWidth={2} />
                        {job.type}
                      </span>
                    </div>

                    <p className="flex-1 text-at-text-dark text-sm leading-[1.8] tracking-[0.03em] font-[var(--font-noto-sans-jp)]">{job.desc}</p>

                    <Link
                      href={jobPath(locale, job.slug as JobSlug)}
                      className="inline-flex items-center justify-between gap-3 bg-at-primary text-at-bg rounded-lg px-5 py-3 hover:bg-at-hover hover:text-at-primary transition-colors self-start"
                    >
                      <span className="text-sm font-bold tracking-[0.04em]">{d.apply}</span>
                      <ArrowRight className="w-5 h-5 shrink-0" strokeWidth={2.5} />
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
