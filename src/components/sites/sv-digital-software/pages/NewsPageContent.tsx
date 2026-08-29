import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/types";
import { PageHero } from "@/components/sites/sv-digital-software/shared/PageHero";

export function NewsPageContent({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const d = dict.newsPage;

  return (
    <main className="flex flex-col">
      <PageHero title={d.heroTitle} current={d.heroTitle} locale={locale} />

      <div className="flex justify-center bg-at-bg px-0">
        <div className="bg-at-section rounded-t-[60px] max-[991px]:rounded-t-[40px] w-full flex justify-center px-5 lg:px-[76px] py-[100px] max-[540px]:py-20">
          <div className="w-full max-w-[952px] flex flex-col gap-6">
            <ul className="flex flex-col">
              {d.items.map((n) => (
                <li
                  key={n.date + n.title.slice(0, 20)}
                  className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 lg:gap-6 py-6 border-b border-at-border group"
                >
                  <Link href={`/${locale}/news`} className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-6 flex-1 min-w-0">
                    <div className="flex items-center gap-2 shrink-0 lg:w-[220px]">
                      <span className="text-at-primary text-lg leading-[1.4] font-[var(--font-montserrat)]">{n.date}</span>
                      <span className="text-at-pink text-lg font-bold tracking-[0.05em] font-[var(--font-montserrat)]">NEW</span>
                    </div>
                    <span className="text-at-text-dark text-[15px] leading-[1.8] group-hover:underline underline-offset-2 flex-1">{n.title}</span>
                  </Link>
                  {/* eslint-disable @next/next/no-img-element */}
                  <img
                    src="https://storage.googleapis.com/studio-design-asset-files/projects/4yqBl2mdWj/s-24x25_8d4ecf56-3396-4d0a-b273-349d6c7f8bd6.svg"
                    alt=""
                    className="w-6 h-6 shrink-0 hidden lg:block"
                    aria-hidden
                  />
                </li>
              ))}
            </ul>

            <button className="self-center mt-4 inline-flex items-center justify-between gap-3 bg-at-primary text-at-bg rounded-lg px-6 py-[17px] w-full lg:w-auto hover:bg-at-accent transition-colors">
              <span className="text-sm font-bold tracking-[0.04em]">{d.viewMore}</span>
              <ArrowRight className="w-6 h-6 shrink-0 rotate-90" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
