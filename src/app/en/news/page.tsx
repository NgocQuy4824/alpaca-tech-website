import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sites/alpaca-tech/shared/PageHero";

export const metadata: Metadata = {
  title: "News — AlpacaTech",
  description: "Latest news from AlpacaTech — AlphaCrafter, Snowflake Summit, awards and updates.",
};

const newsItems = [
  { date: "2025.04.14", title: "AlpacaTech participates in Snowflake Summit 2025 — Booth demo of AlphaCrafter", featured: true },
  { date: "2025.03.17", title: "AlphaCrafter wins Grand Prize at the 3rd Google Cloud Generative AI Innovation Awards", featured: true },
  { date: "2024.11.20", title: "AlphaCrafter featured at AWS re:Invent 2024 — live demo of generative AI data agent", featured: false },
  { date: "2024.09.10", title: "SBI Securities' AlphaCrafter-powered product wins Japan Financial Innovation Award 2024 Grand Prize", featured: false },
  { date: "2023.05.16", title: "Financial Services Agency evaluates ROBOPRO as No. 1 in cumulative return and Sharpe ratio", featured: false },
  { date: "2023.02.14", title: "AlpacaTech becomes Snowflake Solutions Partner", featured: false },
];

export default function NewsPage() {
  return (
    <main className="flex flex-col">
      <PageHero title="NEWS" current="NEWS" />

      {/* White card */}
      <div className="flex justify-center bg-at-primary px-0">
        <div className="bg-white rounded-t-[60px] max-[991px]:rounded-t-[40px] w-full flex justify-center px-5 lg:px-[76px] py-[100px] max-[540px]:py-20">
          <div className="w-full max-w-[952px] flex flex-col gap-6">
            <ul className="flex flex-col">
              {newsItems.map((n) => (
                <li
                  key={n.date + n.title.slice(0, 20)}
                  className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 lg:gap-6 py-6 border-b border-at-border group"
                >
                  <Link href="/en/news" className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-6 flex-1 min-w-0">
                    <div className="flex items-center gap-2 shrink-0 lg:w-[220px]">
                      <span className={`text-lg leading-[1.4] font-[var(--font-montserrat)] ${n.featured ? "text-at-primary/60" : "text-at-primary"}`}>{n.date}</span>
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

            <button className="self-center mt-4 inline-flex items-center justify-between gap-3 bg-at-primary text-white rounded-lg px-6 py-[17px] w-full lg:w-auto hover:bg-at-accent transition-colors">
              <span className="text-sm font-bold tracking-[0.04em]">View More</span>
              {/* eslint-disable @next/next/no-img-element */}
              <img
                src="https://storage.googleapis.com/studio-design-asset-files/projects/nBW2yYm1av/s-96x96_webp_d036ae1d-3000-4afc-9403-6e669407edd6.png"
                alt=""
                className="w-6 h-6 invert rotate-90"
              />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
