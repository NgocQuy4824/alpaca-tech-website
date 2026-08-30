import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n/types";
import { isValidLocale } from "@/lib/i18n/types";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { pageMetadata } from "@/lib/i18n/site";
import { TechnologiesPageContent } from "@/components/sites/sv-digital-software/pages/TechnologiesPageContent";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const descriptions: Record<Locale, string> = {
    en: "Technologies we master at SV Digital Software — frontend, backend, mobile, cloud, databases and AI.",
    vi: "Công nghệ chúng tôi làm chủ tại SV Digital Software — frontend, backend, di động, cloud, cơ sở dữ liệu và AI.",
    lo: "ເທັກໂນໂລຢີທີ່ພວກເຮົາຊ່ຽວຊານທີ່ SV Digital Software — frontend, backend, ມືຖື, cloud, ຖານຂໍ້ມູນ ແລະ AI.",
  };
  return pageMetadata({
    locale,
    path: "/technologies",
    title: dict.technologiesPage.heroTitle,
    description: descriptions[locale],
  });
}

export default async function TechnologiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  return <TechnologiesPageContent dict={dict} locale={locale} />;
}
