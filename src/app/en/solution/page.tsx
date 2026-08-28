import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/sites/alpaca-tech/shared/PageHero";

export const metadata: Metadata = {
  title: "Solution — AlpacaTech",
  description: "AlpacaTech Data Solution — Snowflake and AlphaCrafter for financial data analytics.",
};

export default function SolutionPage() {
  return (
    <main className="flex flex-col">
      <PageHero title="SOLUTION" current="SOLUTION" />

      {/* White card */}
      <div className="flex justify-center bg-at-primary px-0">
        <div className="bg-white rounded-t-[60px] max-[991px]:rounded-t-[40px] w-full flex justify-center px-5 lg:px-[76px] py-[100px] max-[540px]:py-20">
          <div className="w-full max-w-[1288px] flex flex-col gap-16">
            <h2 className="font-[var(--font-montserrat)] text-at-primary text-[72px] max-[991px]:text-[50px] font-extrabold leading-none">
              SOLUTIONS
            </h2>

            <div className="flex flex-col gap-10">
              {/* Data Solution */}
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-14">
                <div className="flex-1 flex flex-col gap-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-lg bg-at-pink shrink-0" />
                    <h3 className="text-at-text-medium text-[34px] font-bold leading-[1.4] font-[var(--font-noto-sans-jp)]">DATA SOLUTION</h3>
                  </div>
                  <p className="text-at-text-dark text-base leading-[2] tracking-[0.04em] font-[var(--font-noto-sans-jp)]">
                    As a Snowflake Solutions Partner, AlpacaTech supports clients from environment setup through to data analytics and utilization.
                    <br />
                    We have also developed &quot;AlphaCrafter&quot; — a generative AI data agent operating directly within data warehouses. Utilizing this technology, SBI Securities&apos; product won the Grand Prize at the Japan Financial Innovation Award 2024.
                  </p>
                  <Link
                    href="/en#contact"
                    className="inline-flex items-center justify-between gap-3 bg-at-primary text-white rounded-lg px-6 py-[17px] w-fit hover:bg-at-accent transition-colors"
                  >
                    <span className="text-sm font-bold tracking-[0.04em]">Contact us</span>
                    {/* eslint-disable @next/next/no-img-element */}
                    <img
                      src="https://storage.googleapis.com/studio-design-asset-files/projects/nBW2yYm1av/s-96x96_webp_d036ae1d-3000-4afc-9403-6e669407edd6.png"
                      alt=""
                      className="w-6 h-6 invert"
                    />
                  </Link>
                </div>
                <Image
                  src="https://storage.googleapis.com/studio-design-asset-files/projects/4yqBl2mdWj/s-1580x900_v-fms_webp_ee0da3ea-4ff8-4991-8b15-6e21fd13bcd4.jpg"
                  alt="Data Solution — Snowflake and AlphaCrafter"
                  width={791}
                  height={450}
                  className="flex-1 lg:max-w-[50%] w-full h-auto rounded-2xl object-cover"
                />
              </div>

              {/* AIM */}
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-14">
                <div className="flex-1 flex flex-col gap-6 order-2 lg:order-1">
                  <Image
                    src="https://storage.googleapis.com/studio-design-asset-files/projects/4yqBl2mdWj/s-1580x900_v-fms_webp_31f15ca1-ecef-4de2-b1f6-3c60fd859499.jpg"
                    alt="AIM investment model"
                    width={791}
                    height={450}
                    className="w-full h-auto rounded-2xl object-cover lg:hidden"
                  />
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-lg bg-at-pink shrink-0" />
                    <div>
                      <h3 className="text-at-text-medium text-[34px] font-bold leading-[1.4] font-[var(--font-noto-sans-jp)]">AIM investment model</h3>
                      <p className="text-at-text-dark text-xs tracking-[0.04em]">(AlpacaTech Investment Management)</p>
                    </div>
                  </div>
                  <p className="text-at-text-dark text-base leading-[2] tracking-[0.04em] font-[var(--font-noto-sans-jp)]">
                    AlpacaTech provides asset management solutions that meet our clients&apos; needs, using cutting-edge research and medium to long term market forecasts that utilize our independently developed AI algorithms.
                    <br />
                    <br />
                    AIM is used in the AI investment &ldquo;ROBOPRO&rdquo;, which was developed in collaboration with FOLIO and has over ¥40B in AUM.
                  </p>
                  <Link
                    href="/en/aim"
                    className="inline-flex items-center justify-between gap-3 bg-at-primary text-white rounded-lg px-6 py-[17px] w-fit hover:bg-at-accent transition-colors"
                  >
                    <span className="text-sm font-bold tracking-[0.04em]">Learn more</span>
                    {/* eslint-disable @next/next/no-img-element */}
                    <img
                      src="https://storage.googleapis.com/studio-design-asset-files/projects/nBW2yYm1av/s-96x96_webp_d036ae1d-3000-4afc-9403-6e669407edd6.png"
                      alt=""
                      className="w-6 h-6 invert"
                    />
                  </Link>
                </div>
                <Image
                  src="https://storage.googleapis.com/studio-design-asset-files/projects/4yqBl2mdWj/s-1580x900_v-fms_webp_31f15ca1-ecef-4de2-b1f6-3c60fd859499.jpg"
                  alt="AIM investment model"
                  width={791}
                  height={450}
                  className="hidden lg:block flex-1 max-w-[50%] w-full h-auto rounded-2xl object-cover order-2"
                />
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-at-primary rounded-[60px] max-[991px]:rounded-[40px] px-6 lg:px-[76px] py-12 lg:py-20 flex flex-col items-center gap-6 text-center">
              <h2 className="font-[var(--font-montserrat)] text-white text-[40px] max-[991px]:text-[32px] font-bold leading-none">
                Interested in our solutions?
              </h2>
              <p className="text-white/80 text-base leading-[2] tracking-[0.04em] max-w-[640px] font-[var(--font-noto-sans-jp)]">
                For inquiries about our solutions, partnerships, or anything else, please reach out via our contact form.
              </p>
              <Link
                href="/en#contact"
                className="inline-flex items-center justify-between gap-3 bg-white text-at-primary rounded-lg px-6 py-[17px] w-full lg:w-[280px] hover:bg-at-accent hover:text-white group transition-colors"
              >
                <span className="text-sm font-bold tracking-[0.04em]">Contact Us</span>
                {/* eslint-disable @next/next/no-img-element */}
                <img
                  src="https://storage.googleapis.com/studio-design-asset-files/projects/nBW2yYm1av/s-24x24_53ad8034-be39-43e4-a7ff-6ee82c06d5c3.svg"
                  alt=""
                  className="w-6 h-6 group-hover:opacity-0 transition-opacity"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
