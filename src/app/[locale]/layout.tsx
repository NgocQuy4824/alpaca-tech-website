import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n/types";
import { isValidLocale } from "@/lib/i18n/types";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { Header } from "@/components/sites/sv-digital-software/shared/Header";
import { Footer } from "@/components/sites/sv-digital-software/shared/Footer";
import { HtmlLang } from "@/components/sites/sv-digital-software/shared/HtmlLang";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "vi" }];
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: rawLocale } = await params;
  if (!isValidLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <HtmlLang locale={locale} />
      <div className="bg-at-bg min-h-screen flex flex-col">
        <Header locale={locale} />
        {children}
        <Footer dict={dict} locale={locale} />
      </div>
    </>
  );
}
