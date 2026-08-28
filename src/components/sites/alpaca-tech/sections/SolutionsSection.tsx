import Image from "next/image";
import Link from "next/link";

export function SolutionsSection() {
  return (
    <section id="solutions" className="flex justify-center bg-at-primary px-0">
      <div className="bg-white rounded-t-[60px] max-[991px]:rounded-t-[40px] w-full flex justify-center px-5 lg:px-[76px] py-[120px] max-[540px]:py-20">
        <div className="w-full max-w-[1288px] flex flex-col gap-16">
          <h2 className="font-[var(--font-montserrat)] text-at-primary text-[72px] max-[991px]:text-[50px] font-extrabold leading-none">
            SOLUTIONS
          </h2>

          <div className="flex flex-col gap-10">
            {/* Data Solution */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-14">
              <div className="flex-1 flex flex-col gap-6">
                <h3 className="text-at-text-medium text-[34px] font-bold leading-[1.4] font-[var(--font-noto-sans-jp)]">DATA SOLUTION</h3>
                <p className="text-at-text-dark text-base leading-[2] tracking-[0.04em] font-[var(--font-noto-sans-jp)]">
                  As a Snowflake Solutions Partner, AlpacaTech supports clients from environment setup through to data analytics and utilization.
                  <br />
                  We have also developed &quot;AlphaCrafter&quot; — a generative AI data agent operating directly within data warehouses. Utilizing this technology, SBI Securities&apos; product won the Grand Prize at the Japan Financial Innovation Award 2024.
                </p>
                <Link
                  href="/en/solution"
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
                <div>
                  <h3 className="text-at-text-medium text-[34px] font-bold leading-[1.4] font-[var(--font-noto-sans-jp)]">AIM investment model</h3>
                  <p className="text-at-text-dark text-xs tracking-[0.04em]">(AlpacaTech Investment Management)</p>
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
        </div>
      </div>
    </section>
  );
}
