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
    en: "About SV Digital Software — business philosophy, core values, vision, CEO message, fact sheet and technology partners. Custom software development, legacy migration and digital transformation.",
    vi: "Về SV Digital Software — triết lý kinh doanh, giá trị cốt lõi, tầm nhìn, thông điệp từ CEO, fact sheet và đối tác công nghệ. Phát triển phần mềm theo yêu cầu, chuyển đổi hệ thống cũ và chuyển đổi số.",
    lo: "ກ່ຽວກັບ SV Digital Software — ປັດຊະຍາທຸລະກິດ, ຄຸນຄ່າຫຼັກ, ວິໄສທັດ, ຂໍ້ຄວາມຈາກ CEO, fact sheet ແລະ ຄູ່ຮ່ວມເທັກໂນໂລຢີ. ພັດທະນາຊອບແວຕາມຄວາມຕ້ອງການ, ຍ້າຍລະບົບເກົ່າ ແລະ ປ່ຽນແປງດິຈິຕອນ.",
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
