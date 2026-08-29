import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/types";

export function NewsTeaser({ dict, locale }: { dict: Dictionary; locale: Locale }) {

  return (
    <section className="flex justify-center bg-at-bg px-0 pt-0">
      <div className="bg-at-section rounded-t-[60px] max-[991px]:rounded-t-[40px] w-full flex justify-center px-5 lg:px-[76px] py-[120px]">
        <div className="w-full max-w-[1288px] flex flex-col lg:flex-row gap-10 lg:gap-14">
          <div className="w-full lg:w-[280px] shrink-0 flex flex-col gap-10">
            <h2 className="font-[var(--font-montserrat)] text-at-primary text-[72px] max-[991px]:text-[50px] font-extrabold leading-none">
              {dict.newsTeaser.heading}
            </h2>
            <Link
              href={`/${locale}/news`}
              className="hidden lg:inline-flex items-center justify-between gap-3 bg-at-primary text-at-bg rounded-lg px-6 py-[17px] hover:bg-at-accent transition-colors"
            >
              <span className="text-sm font-bold tracking-[0.04em]">{dict.newsTeaser.viewAll}</span>
              <ArrowRight className="w-6 h-6 shrink-0" strokeWidth={2.5} />
            </Link>
          </div>

          <ul className="flex-1 flex flex-col">
            {dict.newsTeaser.items.map((n) => (
              <li key={n.date} className="border-b border-at-border py-6 flex items-center justify-between gap-6 group">
                <Link href={`/${locale}/news`} className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-6 flex-1 min-w-0">
                  <div className="flex items-center gap-2 shrink-0 w-[220px]">
                    <span className="text-at-text-muted text-lg font-normal font-[var(--font-montserrat)]">{n.date}</span>
                    <span className="text-at-pink text-lg font-bold font-[var(--font-montserrat)] tracking-[0.05em]">NEW</span>
                  </div>
                  <span className="text-at-text-dark text-[15px] leading-[1.8] group-hover:underline underline-offset-2">{n.title}</span>
                </Link>
                {/* eslint-disable @next/next/no-img-element */}
                <img
                  src="https://storage.googleapis.com/studio-design-asset-files/projects/4yqBl2mdWj/s-24x25_7e72b4d9-f9f2-4254-b013-bb2ba8954be7.svg"
                  alt=""
                  className="w-6 h-6 shrink-0"
                />
              </li>
            ))}
            <Link
              href={`/${locale}/news`}
              className="lg:hidden mt-8 inline-flex items-center justify-between gap-3 bg-at-primary text-at-bg rounded-lg px-6 py-[17px] hover:bg-at-accent transition-colors"
            >
              <span className="text-sm font-bold tracking-[0.04em]">{dict.newsTeaser.viewAll}</span>
              <ArrowRight className="w-6 h-6 shrink-0" strokeWidth={2.5} />
            </Link>
          </ul>
        </div>
      </div>
    </section>
  );
}
