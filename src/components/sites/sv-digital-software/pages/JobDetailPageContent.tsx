import Link from "next/link";
import { ArrowRight, ArrowLeft, MapPin, Clock, Check } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/types";
import { PageHero } from "@/components/sites/sv-digital-software/shared/PageHero";
import { JsonLd } from "@/components/sites/sv-digital-software/shared/JsonLd";
import { CONTACT_EMAIL, SITE_URL, BRAND_NAME } from "@/lib/i18n/site";
import { jobPath, type JobSlug } from "@/lib/jobs";

type Props = { dict: Dictionary; locale: Locale; slug: JobSlug };

const DATE_POSTED = "2026-09-02";
const VALID_THROUGH = "2026-12-31";

/** Builds the mailto: apply link (opens the default mail client, e.g. Outlook) — no form. */
function applyHref(d: Dictionary["recruitPage"], jobTitle: string): string {
  const subject = `${d.applySubject}${jobTitle}`;
  const body = d.applyBody.replace("{title}", jobTitle);
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** A section with a heading and a bulleted list. */
function JobSection({ heading, items }: { heading: string; items: string[] }) {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex items-center gap-2">
        <span className="w-[6px] h-[6px] rounded-full bg-at-pink shrink-0" />
        <h2 className="text-at-primary text-[22px] lg:text-[26px] font-bold tracking-[0.04em] font-[var(--font-noto-sans-jp)]">
          {heading}
        </h2>
      </div>
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-at-pink/15 text-at-primary shrink-0 mt-0.5">
              <Check className="w-3 h-3" strokeWidth={3} />
            </span>
            <span className="text-at-text-dark text-[15px] leading-[1.8] tracking-[0.02em] font-[var(--font-noto-sans-jp)]">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function JobDetailPageContent({ dict, locale, slug }: Props) {
  const d = dict.recruitPage;
  const job = d.jobs.find((j) => j.slug === slug);
  const detail = d.jobDetail.jobs[slug];

  // Guard: slug validated at the route level, but keep a safe fallback.
  if (!job || !detail) return null;

  const url = `${SITE_URL}${jobPath(locale, slug)}`;

  // Full job description for JobPosting (short desc + responsibilities + requirements).
  const fullDescription = [
    job.desc,
    "",
    d.jobDetail.descriptionHeading + ":",
    ...detail.description.map((s) => `• ${s}`),
    "",
    d.jobDetail.requirementsHeading + ":",
    ...detail.requirements.map((s) => `• ${s}`),
  ].join("\n");

  const jobPosting = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: fullDescription,
    datePosted: DATE_POSTED,
    validThrough: VALID_THROUGH,
    employmentType: "FULL_TIME",
    hiringOrganization: { "@type": "Organization", name: BRAND_NAME, sameAs: SITE_URL },
    jobLocationType: "TELECOMMUTE",
    url,
    directApply: true,
  };

  return (
    <main className="flex flex-col">
      <JsonLd data={jobPosting} />
      <PageHero
        title={job.shortTitle}
        current={job.shortTitle}
        locale={locale}
        parent={{ label: d.heroTitle, href: `/${locale}/recruit` }}
      />

      <div className="flex justify-center bg-at-bg px-0">
        <div className="bg-at-section rounded-t-[60px] max-[991px]:rounded-t-[40px] w-full flex justify-center px-5 lg:px-[76px] py-[80px] max-[540px]:py-16">
          <div className="w-full max-w-[900px] flex flex-col gap-12">
            {/* Back link */}
            <Link
              href={`/${locale}/recruit`}
              className="inline-flex items-center gap-2 text-at-text-muted text-sm font-medium hover:text-at-primary transition-colors self-start"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={2.5} />
              {d.jobDetail.backToJobs}
            </Link>

            {/* Meta badges */}
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-at-border bg-at-bg-soft px-3 py-1.5 text-sm font-medium text-at-text-muted">
                <MapPin className="w-4 h-4 text-at-pink" strokeWidth={2} />
                {job.location}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-at-border bg-at-bg-soft px-3 py-1.5 text-sm font-medium text-at-text-muted">
                <Clock className="w-4 h-4 text-at-pink" strokeWidth={2} />
                {job.type}
              </span>
            </div>

            <JobSection heading={d.jobDetail.descriptionHeading} items={detail.description} />
            <JobSection heading={d.jobDetail.requirementsHeading} items={detail.requirements} />
            <JobSection heading={d.jobDetail.benefitsHeading} items={d.jobDetail.benefits} />
            <JobSection heading={d.jobDetail.specialHeading} items={d.jobDetail.special} />

            {/* Apply CTA — opens the default mail client (no form) */}
            <div className="flex flex-col items-center gap-4 pt-4 border-t border-at-border">
              <a
                href={applyHref(d, job.title)}
                className="inline-flex items-center justify-between gap-3 bg-at-primary text-at-bg rounded-lg px-8 py-4 hover:bg-at-hover hover:text-at-primary transition-colors w-full sm:w-[320px]"
              >
                <span className="text-base font-bold tracking-[0.04em]">{d.jobDetail.apply}</span>
                <ArrowRight className="w-6 h-6 shrink-0" strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
