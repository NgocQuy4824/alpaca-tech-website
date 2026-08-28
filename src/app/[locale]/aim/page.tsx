import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n/types";
import { isValidLocale } from "@/lib/i18n/types";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { AimPageContent } from "@/components/sites/sv-digital-software/pages/AimPageContent";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  return {
    title: locale === "vi" ? "AIM — SV Digital Software" : "AIM — SV Digital Software",
    description: locale === "vi" ? "AIM (Quản lý Đầu tư SV Digital Software) — Mô hình quản lý tài sản bằng AI vận hành ROBOPRO với hơn 40 tỷ yên AUM." : "AIM (SV Digital Software Investment Management) — AI-driven asset management model powering ROBOPRO with over ¥40B in AUM.",
    alternates: {
      languages: {
        en: `${"https://www.alpaca-tech.ai"}/en/aim`,
        vi: `${"https://www.alpaca-tech.ai"}/vi/aim`,
      },
    },
  };
}

export default async function AimPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  return <AimPageContent dict={dict} locale={locale} />;
}
