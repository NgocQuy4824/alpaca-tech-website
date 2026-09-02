import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/types";
import { isValidLocale } from "@/lib/i18n/types";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { pageMetadata } from "@/lib/i18n/site";
import { Hero } from "@/components/sites/sv-digital-software/sections/Hero";
import { SolutionsSection } from "@/components/sites/sv-digital-software/sections/SolutionsSection";
import { CompanyTeaser } from "@/components/sites/sv-digital-software/sections/CompanyTeaser";
import { RecruitTeaser } from "@/components/sites/sv-digital-software/sections/RecruitTeaser";
import { InfiniteMarquee } from "@/components/sites/sv-digital-software/sections/InfiniteMarquee";
import { notFound } from "next/navigation";

const HOME_TITLES: Record<Locale, string> = {
  en: "SV Digital Software — Digital Products, Data Platforms & AI",
  vi: "SV Digital Software — Sản Phẩm Số, Nền Tảng Dữ Liệu & AI",
  lo: "SV Digital Software — ຜະລິດຕະພັນດິຈິຕອນ, ແພລດຟອມຂໍ້ມູນ & AI",
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  return pageMetadata({
    locale,
    path: "",
    brandFirst: true,
    title: HOME_TITLES[locale],
    description: dict.hero.subtitle,
  });
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
    </main>
  );
}
