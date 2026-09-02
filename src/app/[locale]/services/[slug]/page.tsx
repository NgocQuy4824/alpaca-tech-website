import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n/types";
import { LOCALES, isValidLocale } from "@/lib/i18n/types";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { pageMetadata } from "@/lib/i18n/site";
import { SERVICE_SLUGS, SERVICE_KEY_BY_SLUG, isServiceSlug, type ServiceSlug } from "@/lib/services";
import { ServiceDetailPageContent } from "@/components/sites/sv-digital-software/pages/ServiceDetailPageContent";

export const dynamicParams = false;

export function generateStaticParams(): { locale: string; slug: string }[] {
  return LOCALES.flatMap((locale) => SERVICE_SLUGS.map((slug) => ({ locale, slug })));
}

type Params = Promise<{ locale: string; slug: string }>;

function trimmedDescription(text: string): string {
  const normalized = text.replace(/\s+/g, " ").trim();
  return normalized.length <= 160 ? normalized : `${normalized.slice(0, 160).trim()}…`;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isValidLocale(raw) || !isServiceSlug(slug)) return {};
  const locale = raw as Locale;
  const key = SERVICE_KEY_BY_SLUG[slug as ServiceSlug];
  const dict = getDictionary(locale);
  const title = dict.services[key].heroTitle;
  return pageMetadata({
    locale,
    path: `/services/${slug}`,
    title,
    description: trimmedDescription(dict.services[key].intro),
  });
}

export default async function ServiceDetailPage({ params }: { params: Params }) {
  const { locale: raw, slug } = await params;
  if (!isValidLocale(raw) || !isServiceSlug(slug)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  return <ServiceDetailPageContent dict={dict} locale={locale} slug={slug as ServiceSlug} />;
}
