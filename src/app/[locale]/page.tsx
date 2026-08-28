import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/types";
import { isValidLocale } from "@/lib/i18n/types";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { Hero } from "@/components/sites/sv-digital-software/sections/Hero";
import { SolutionsSection } from "@/components/sites/sv-digital-software/sections/SolutionsSection";
import { CompanyTeaser } from "@/components/sites/sv-digital-software/sections/CompanyTeaser";
import { RecruitTeaser } from "@/components/sites/sv-digital-software/sections/RecruitTeaser";
import { InfiniteMarquee } from "@/components/sites/sv-digital-software/sections/InfiniteMarquee";
import { NewsTeaser } from "@/components/sites/sv-digital-software/sections/NewsTeaser";
import { notFound } from "next/navigation";

const SITE_URL = "https://www.alpaca-tech.ai";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  // Use first paragraph of hero as description (locale-aware)
  return {
    title: locale === "vi" ? "SV Digital Software — Vượt Mọi Giới Hạn Tài Chính Bằng Khoa Học Dữ Liệu" : "SV Digital Software — Beyond Limits in Finance with Data Science",
    description: dict.hero.subtitle,
    alternates: {
      languages: {
        en: `${SITE_URL}/en`,
        vi: `${SITE_URL}/vi`,
      },
    },
  };
}

export default async function LocaleHomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <main className="flex flex-col">
      <Hero dict={dict} locale={locale} />
      <SolutionsSection dict={dict} locale={locale} />
      <CompanyTeaser dict={dict} locale={locale} />
      <RecruitTeaser dict={dict} locale={locale} />
      <InfiniteMarquee dict={dict} locale={locale} />
      <NewsTeaser dict={dict} locale={locale} />
    </main>
  );
}
