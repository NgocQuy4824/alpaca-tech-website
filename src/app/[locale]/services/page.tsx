import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n/types";
import { isValidLocale } from "@/lib/i18n/types";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { pageMetadata } from "@/lib/i18n/site";
import { ServicesPageContent } from "@/components/sites/sv-digital-software/pages/ServicesPageContent";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const descriptions: Record<Locale, string> = {
    en: "SV Digital Software services — mobile app development, custom software, QA testing and legacy system migration, delivered end to end.",
    vi: "Dịch vụ SV Digital Software — phát triển ứng dụng di động, phần mềm theo yêu cầu, kiểm thử phần mềm và chuyển đổi hệ thống cũ, trọn vẹn từ A đến Z.",
    lo: "ບໍລິການ SV Digital Software — ພັດທະນາແອັບມືຖື, ຊອບແວຕາມຄຳຂໍ, ການທົດສອບ ແລະ ການຍ້າຍລະບົບເກົ່າ ແບບຄົບວົງຈອນ.",
  };
  return pageMetadata({
    locale,
    path: "/services",
    title: dict.services.heroTitle,
    description: descriptions[locale],
  });
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  return <ServicesPageContent dict={dict} locale={locale} />;
}
