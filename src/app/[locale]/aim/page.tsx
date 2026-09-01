import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n/types";
import { isValidLocale } from "@/lib/i18n/types";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { pageMetadata } from "@/lib/i18n/site";
import { AimPageContent } from "@/components/sites/sv-digital-software/pages/AimPageContent";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  const descriptions: Record<Locale, string> = {
    en: "AIM — SV Digital Software AI Platform — powering the AI investment product ROBOPRO with over $250M in AUM.",
    vi: "AIM — Nền tảng AI SV Digital Software — vận hành sản phẩm đầu tư AI ROBOPRO với hơn 250 triệu USD AUM.",
    lo: "AIM — ແພລດຟອມ AI ຂອງ SV Digital Software — ຂັບເຄື່ອນຜະລິດຕະພັນການລົງທຶນ AI ROBOPRO ມີຫຼາຍກວ່າ $250M AUM.",
  };
  return pageMetadata({
    locale,
    path: "/aim",
    title: locale === "vi" ? "Mục tiêu (AIM)" : "AIM",
    description: descriptions[locale],
  });
}

export default async function AimPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  return <AimPageContent dict={dict} locale={locale} />;
}
