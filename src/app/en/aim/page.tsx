import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/sites/alpaca-tech/shared/PageHero";

export const metadata: Metadata = {
  title: "AIM — AlpacaTech",
  description:
    "AIM (AlpacaTech Investment Management) — AI-driven asset management model powering ROBOPRO with over ¥40B in AUM.",
};

export default function AimPage() {
  return (
    <main className="flex flex-col">
      <PageHero title="AIM" subtitle="AlpacaTech Investment Management" current="AIM" />

      {/* White card */}
      <div className="flex justify-center bg-at-primary px-0">
        <div className="bg-white rounded-t-[60px] max-[991px]:rounded-t-[40px] w-full flex justify-center px-5 lg:px-[76px] py-[100px] max-[540px]:py-20">
          <div className="w-full max-w-[1288px] flex flex-col gap-16">
            {/* Intro */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-14">
              <div className="flex-1 flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-lg bg-at-pink shrink-0" />
                  <h2 className="text-at-text-medium text-[34px] font-bold leading-[1.4] font-[var(--font-noto-sans-jp)]">
                    AIM investment model
                  </h2>
                </div>
                <p className="text-at-text-dark text-base leading-[2] tracking-[0.04em] font-[var(--font-noto-sans-jp)]">
                  AlpacaTech provides asset management solutions that meet our clients&apos; needs, using cutting-edge research and medium to long term market forecasts that utilize our independently developed AI algorithms.
                </p>
                <p className="text-at-text-dark text-base leading-[2] tracking-[0.04em] font-[var(--font-noto-sans-jp)]">
                  AIM (AlpacaTech Investment Management) is our core quantitative model — it analyses a wide range of market data to generate disciplined, portfolio construction signals. AIM is used in the AI investment &ldquo;ROBOPRO&rdquo;, which was developed in collaboration with FOLIO and has over ¥40B in AUM.
                </p>
                <ul className="flex flex-col gap-3 pl-2">
                  {[
                    "Data-driven market forecasting with proprietary AI",
                    "Medium to long term horizon — avoids noise-driven churn",
                    "Risk-aware portfolio construction",
                    "Proven track record inside ROBOPRO (>¥40B AUM)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-at-text-dark text-sm leading-[1.8] tracking-[0.04em] font-[var(--font-noto-sans-jp)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-at-accent mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Image
                src="https://storage.googleapis.com/studio-design-asset-files/projects/4yqBl2mdWj/s-1580x900_v-fms_webp_31f15ca1-ecef-4de2-b1f6-3c60fd859499.jpg"
                alt="AIM investment model"
                width={791}
                height={450}
                className="flex-1 lg:max-w-[50%] w-full h-auto rounded-2xl object-cover"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { value: "¥40B+", label: "AUM via ROBOPRO" },
                { value: "No. 1", label: "FSA ranking — cumulative return & Sharpe ratio" },
                { value: "Since 2022", label: "Operating AIM in production" },
              ].map((stat) => (
                <div key={stat.label} className="bg-at-bg-soft border border-at-border rounded-2xl px-6 py-8 flex flex-col gap-2">
                  <span className="text-at-primary text-3xl font-extrabold font-[var(--font-montserrat)] leading-none">{stat.value}</span>
                  <span className="text-at-text-muted text-sm tracking-[0.04em] font-[var(--font-noto-sans-jp)]">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* How it works */}
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-lg bg-at-pink shrink-0" />
                <h2 className="text-at-primary text-[28px] lg:text-[34px] font-bold tracking-[0.04em] font-[var(--font-noto-sans-jp)]">
                  How AIM works
                </h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {[
                  { step: "01", title: "Data ingestion", desc: "Collects and cleanses market, macro, and alternative data at scale into a unified warehouse." },
                  { step: "02", title: "AI forecasting", desc: "Our proprietary algorithms produce medium to long term forecasts and regime signals." },
                  { step: "03", title: "Portfolio delivery", desc: "Forecasts are translated into risk-aware allocations, delivered as signals or as a managed product." },
                ].map((card) => (
                  <div key={card.step} className="border border-at-border rounded-2xl px-6 py-8 flex flex-col gap-3">
                    <span className="text-at-accent text-sm font-bold tracking-[0.2em] font-[var(--font-montserrat)]">{card.step}</span>
                    <h3 className="text-at-primary text-lg font-bold font-[var(--font-noto-sans-jp)]">{card.title}</h3>
                    <p className="text-at-text-dark text-sm leading-[1.8] tracking-[0.04em] font-[var(--font-noto-sans-jp)]">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ROBOPRO highlight */}
            <div className="bg-at-primary rounded-[32px] px-6 lg:px-10 py-10 lg:py-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-at-pink text-xs font-bold tracking-[0.2em]">PRODUCT</span>
                <h3 className="text-white text-2xl font-bold font-[var(--font-montserrat)]">ROBOPRO — AI investment powered by AIM</h3>
                <p className="text-white/70 text-sm leading-[1.8] tracking-[0.04em] font-[var(--font-noto-sans-jp)] max-w-[560px]">
                  Jointly developed with FOLIO. Evaluated by the Financial Services Agency as No. 1 in cumulative return and Sharpe ratio among domestic asset managers.
                </p>
              </div>
              <a
                href="https://folio-sec.com/"
                target="_blank"
                rel="noreferrer"
                className="shrink-0 inline-flex items-center justify-between gap-3 bg-white text-at-primary rounded-lg px-6 py-3 hover:bg-at-accent hover:text-white transition-colors"
              >
                <span className="text-sm font-bold tracking-[0.04em]">Learn about ROBOPRO</span>
                <span aria-hidden>→</span>
              </a>
            </div>

            {/* Contact CTA */}
            <div className="bg-at-bg-soft border border-at-border rounded-[32px] px-6 lg:px-[76px] py-12 lg:py-16 flex flex-col items-center gap-6 text-center">
              <h2 className="text-at-primary text-[32px] font-bold tracking-[0.04em] font-[var(--font-noto-sans-jp)]">Explore AIM for your needs</h2>
              <p className="text-at-text-dark text-base leading-[2] tracking-[0.04em] max-w-[640px] font-[var(--font-noto-sans-jp)]">
                Whether you are an institutional investor, asset manager, or platform partner — let&apos;s discuss how AIM can fit your mandate.
              </p>
              <Link
                href="/en#contact"
                className="inline-flex items-center justify-between gap-3 bg-at-primary text-white rounded-lg px-6 py-[17px] w-full lg:w-[280px] hover:bg-at-accent transition-colors"
              >
                <span className="text-sm font-bold tracking-[0.04em]">Contact Us</span>
                {/* eslint-disable @next/next/no-img-element */}
                <img
                  src="https://storage.googleapis.com/studio-design-asset-files/projects/nBW2yYm1av/s-96x96_webp_d036ae1d-3000-4afc-9403-6e669407edd6.png"
                  alt=""
                  className="w-6 h-6 invert"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
