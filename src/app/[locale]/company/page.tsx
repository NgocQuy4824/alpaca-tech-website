import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n/types";
import { isValidLocale } from "@/lib/i18n/types";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { CompanyPageContent } from "@/components/sites/alpaca-tech/pages/CompanyPageContent";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  return {
    title: locale === "vi" ? "Công Ty — AlpacaTech" : "Company — AlpacaTech",
    description: locale === "vi" ? "Thông tin công ty AlpacaTech Co., Ltd. — Công ty thành viên của FOLIO Holdings." : "Company information for AlpacaTech Co., Ltd. — Group company of FOLIO Holdings.",
    alternates: {
      languages: {
        en: `${"https://www.alpaca-tech.ai"}/en/company`,
        vi: `${"https://www.alpaca-tech.ai"}/vi/company`,
      },
    },
  };
}

export default async function CompanyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  return <CompanyPageContent dict={dict} locale={locale} />;
}
