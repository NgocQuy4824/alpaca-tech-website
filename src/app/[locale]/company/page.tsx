import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n/types";
import { isValidLocale } from "@/lib/i18n/types";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { pageMetadata } from "@/lib/i18n/site";
import { CompanyPageContent } from "@/components/sites/sv-digital-software/pages/CompanyPageContent";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const descriptions: Record<Locale, string> = {
    en: "Company information for SV Digital Software Co., Ltd. — digital software company specializing in software development, AI & data platforms and digital transformation.",
    vi: "Thông tin công ty SV Digital Software Co., Ltd. — công ty phần mềm số chuyên về phát triển phần mềm, nền tảng AI & dữ liệu và chuyển đổi số.",
    lo: "ຂໍ້ມູນບໍລິສັດ SV Digital Software Co., Ltd. — ບໍລິສັດຊອບແວດິຈິຕອນ ຊ່ຽວຊານດ້ານການພັດທະນາຊອບແວ, ແພລດຟອມ AI & ຂໍ້ມູນ ແລະ ການປ່ຽນແປງດິຈິຕອນ.",
  };
  return pageMetadata({
    locale,
    path: "/company",
    title: dict.companyPage.heroTitle,
    description: descriptions[locale],
  });
}

export default async function CompanyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  return <CompanyPageContent dict={dict} locale={locale} />;
}
