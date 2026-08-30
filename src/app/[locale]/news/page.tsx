import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n/types";
import { isValidLocale } from "@/lib/i18n/types";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { pageMetadata } from "@/lib/i18n/site";
import { NewsPageContent } from "@/components/sites/sv-digital-software/pages/NewsPageContent";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const descriptions: Record<Locale, string> = {
    en: "Latest news from SV Digital Software — AlphaCrafter, Snowflake Summit, awards and updates.",
    vi: "Tin tức mới nhất từ SV Digital Software — AlphaCrafter, Snowflake Summit, giải thưởng và cập nhật.",
    lo: "ຂ່າວສານຫຼ້າສຸດຈາກ SV Digital Software — AlphaCrafter, Snowflake Summit, ລາງວັນ ແລະ ການອັບເດດ.",
  };
  return pageMetadata({
    locale,
    path: "/news",
    title: dict.newsPage.heroTitle,
    description: descriptions[locale],
  });
}

export default async function NewsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  return <NewsPageContent dict={dict} locale={locale} />;
}
