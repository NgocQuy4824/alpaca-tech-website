import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n/types";
import { LOCALES, isValidLocale } from "@/lib/i18n/types";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { pageMetadata } from "@/lib/i18n/site";
import { JOB_SLUGS, isJobSlug, type JobSlug } from "@/lib/jobs";
import { JobDetailPageContent } from "@/components/sites/sv-digital-software/pages/JobDetailPageContent";

export const dynamicParams = false;

export function generateStaticParams(): { locale: string; slug: string }[] {
  return LOCALES.flatMap((locale) => JOB_SLUGS.map((slug) => ({ locale, slug })));
}

type Params = Promise<{ locale: string; slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isValidLocale(raw) || !isJobSlug(slug)) return {};
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const job = dict.recruitPage.jobs.find((j) => j.slug === slug);
  if (!job) return {};
  return pageMetadata({
    locale,
    path: `/recruit/${slug}`,
    title: job.title,
    description: job.desc,
  });
}

export default async function JobDetailPage({ params }: { params: Params }) {
  const { locale: raw, slug } = await params;
  if (!isValidLocale(raw) || !isJobSlug(slug)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  return <JobDetailPageContent dict={dict} locale={locale} slug={slug as JobSlug} />;
}
