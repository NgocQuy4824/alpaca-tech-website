import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/types";
import { PageHero } from "@/components/sites/sv-digital-software/shared/PageHero";

export function ServicesPageContent({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const d = dict.solutionPage;

  return (
    <main className="flex flex-col">
      <PageHero title={d.heroTitle} current={d.heroTitle} locale={locale} />

      <div className="flex justify-center bg-at-bg px-0">
        <div className="bg-at-section rounded-t-[60px] max-[991px]:rounded-t-[40px] w-full flex justify-center px-5 lg:px-[76px] py-[100px] max-[540px]:py-20">
          <div className="w-full max-w-[1288px] flex flex-col gap-16">
            <h2 className="font-[var(--font-montserrat)] text-at-primary text-[72px] max-[991px]:text-[50px] font-extrabold leading-none">
              {d.heading}
            </h2>

            <div className="flex flex-col gap-10">
              {/* Data Solution */}
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-14">
                <div className="flex-1 flex flex-col gap-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-lg bg-at-pink shrink-0" />
                    <h3 className="text-at-text-medium text-[34px] font-bold leading-[1.4] font-[var(--font-noto-sans-jp)]">
                      {d.dataSolution.title}
                    </h3>
                  </div>
                  <p className="text-at-text-dark text-base leading-[2] tracking-[0.04em] font-[var(--font-noto-sans-jp)]">
                    {d.dataSolution.desc}
                  </p>
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center justify-between gap-3 bg-at-primary text-at-bg rounded-lg px-6 py-[17px] w-fit hover:bg-at-hover hover:text-at-primary transition-colors"
                  >
                    <span className="text-sm font-bold tracking-[0.04em]">{d.dataSolution.contactUs}</span>
                    <ArrowRight className="w-6 h-6 shrink-0" strokeWidth={2.5} />
                  </Link>
                </div>
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=900&fit=crop&q=80"
                  alt="SV Digital Software — end-to-end software services"
                  width={791}
                  height={450}
                  className="flex-1 lg:max-w-[50%] w-full h-auto rounded-2xl object-cover"
                />
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-at-primary rounded-[60px] max-[991px]:rounded-[40px] px-6 lg:px-[76px] py-12 lg:py-20 flex flex-col items-center gap-6 text-center">
              <h2 className="font-[var(--font-montserrat)] text-white text-[40px] max-[991px]:text-[32px] font-bold leading-none">
                {d.cta.title}
              </h2>
              <p className="text-white/80 text-base leading-[2] tracking-[0.04em] max-w-[640px] font-[var(--font-noto-sans-jp)]">
                {d.cta.desc}
              </p>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-between gap-3 bg-white text-at-primary rounded-lg px-6 py-[17px] w-full lg:w-[280px] hover:bg-at-hover hover:text-at-primary group transition-colors"
              >
                <span className="text-sm font-bold tracking-[0.04em]">{d.cta.contactUs}</span>
                <ArrowRight className="w-6 h-6 shrink-0 text-at-primary" strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
