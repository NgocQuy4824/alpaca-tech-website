// Source of truth for the Recruit job-detail sub-pages. Slug values match the
// `slug` field on each entry under `recruitPage.jobs` and are reused by the
// listing page links, the [slug] route (generateStaticParams) and the sitemap.

export const JOB_SLUGS = [
  "full-stack-engineer",
  "data-engineer",
  "ai-engineer",
  "product-manager",
  "platform-engineer",
  "uiux-designer",
] as const;

export type JobSlug = (typeof JOB_SLUGS)[number];

export function isJobSlug(value: string): value is JobSlug {
  return (JOB_SLUGS as readonly string[]).includes(value);
}

/** Build `/{locale}/recruit/{slug}` for a given locale + slug. */
export function jobPath(locale: string, slug: JobSlug): string {
  return `/${locale}/recruit/${slug}`;
}
