import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n/types";
import { isValidLocale } from "@/lib/i18n/types";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { NewsPageContent } from "@/components/sites/sv-digital-software/pages/NewsPageContent";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  return {
    title: locale === "vi" ? "Tin Tức — SV Digital Software" : "News — SV Digital Software",
    description: locale === "vi" ? "Tin tức mới nhất từ SV Digital Software — AlphaCrafter, Snowflake Summit, giải thưởng và cập nhật." : "Latest news from SV Digital Software — AlphaCrafter, Snowflake Summit, awards and updates.",
    alternates: {
      languages: {
        en: `${"https://www.alpaca-tech.ai"}/en/news`,
        vi: `${"https://www.alpaca-tech.ai"}/vi/news`,
      },
    },
  };
}

export default async function NewsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  return <NewsPageContent dict={dict} locale={locale} />;
}
