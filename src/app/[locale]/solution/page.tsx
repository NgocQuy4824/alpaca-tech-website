import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n/types";
import { isValidLocale } from "@/lib/i18n/types";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { pageMetadata } from "@/lib/i18n/site";
import { SolutionPageContent } from "@/components/sites/sv-digital-software/pages/SolutionPageContent";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const descriptions: Record<Locale, string> = {
    en: "SV Digital Software digital solutions — data platforms, AI and the AIM investment model.",
    vi: "Giải pháp phần mềm số SV Digital Software — nền tảng dữ liệu, AI và mô hình đầu tư AIM.",
    lo: "ວິທີແກ້ໄຂຊອບແວດິຈິຕອນ SV Digital Software — ແພລດຟອມຂໍ້ມູນ, AI ແລະ ໂມເດວການລົງທຶນ AIM.",
  };
  return pageMetadata({
    locale,
    path: "/solution",
    title: dict.solutionPage.heroTitle,
    description: descriptions[locale],
  });
}

export default async function SolutionPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  return <SolutionPageContent dict={dict} locale={locale} />;
}
