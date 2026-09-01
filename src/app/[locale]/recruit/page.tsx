import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n/types";
import { isValidLocale } from "@/lib/i18n/types";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { pageMetadata } from "@/lib/i18n/site";
import { RecruitPageContent } from "@/components/sites/sv-digital-software/pages/RecruitPageContent";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const descriptions: Record<Locale, string> = {
    en: "Join SV Digital Software — Career opportunities in software development, data engineering, AI and product design.",
    vi: "Gia nhập SV Digital Software — Cơ hội nghề nghiệp trong phát triển phần mềm, kỹ thuật dữ liệu, AI và thiết kế sản phẩm.",
    lo: "ຮ່ວມງານກັບ SV Digital Software — ໂອກາດອາຊີບໃນການພັດທະນາຊອບແວ, ວິສະວະກຳຂໍ້ມູນ, AI ແລະ ານອອກແບບຜະລິດຕະພັນ.",
  };
  return pageMetadata({
    locale,
    path: "/recruit",
    title: dict.recruitPage.heroTitle,
    description: descriptions[locale],
  });
}

export default async function RecruitPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  return <RecruitPageContent dict={dict} locale={locale} />;
}
