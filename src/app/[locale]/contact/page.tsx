import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n/types";
import { isValidLocale } from "@/lib/i18n/types";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { pageMetadata } from "@/lib/i18n/site";
import { PageHero } from "@/components/sites/sv-digital-software/shared/PageHero";
import { ContactSection } from "@/components/sites/sv-digital-software/shared/ContactSection";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  return pageMetadata({
    locale,
    path: "/contact",
    title: dict.contact.heroTitle,
    description: dict.contact.description,
  });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  return (
    <main className="flex flex-col">
      <PageHero title={dict.contact.heroTitle} current={dict.contact.heroTitle} locale={locale} />
      <ContactSection dict={dict} locale={locale} />
    </main>
  );
}
