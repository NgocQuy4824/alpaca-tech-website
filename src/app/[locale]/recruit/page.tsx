import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n/types";
import { isValidLocale } from "@/lib/i18n/types";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { RecruitPageContent } from "@/components/sites/sv-digital-software/pages/RecruitPageContent";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  return {
    title: locale === "vi" ? "Tuyển Dụng — SV Digital Software" : "Recruit — SV Digital Software",
    description: locale === "vi" ? "Gia nhập SV Digital Software — Cơ hội nghề nghiệp trong phát triển phần mềm, kỹ thuật dữ liệu, AI và thiết kế sản phẩm." : "Join SV Digital Software — Career opportunities in software development, data engineering, AI and product design.",
    alternates: {
      languages: {
        en: `${"https://www.alpaca-tech.ai"}/en/recruit`,
        vi: `${"https://www.alpaca-tech.ai"}/vi/recruit`,
      },
    },
  };
}

export default async function RecruitPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  return <RecruitPageContent dict={dict} locale={locale} />;
}
