import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/sites/alpaca-tech/shared/PageHero";

export const metadata: Metadata = {
  title: "Recruit — AlpacaTech",
  description: "Join AlpacaTech — Career opportunities in data engineering, AI, and quantitative research.",
};

export default function RecruitPage() {
  return (
    <main className="flex flex-col">
      <PageHero title="RECRUIT" current="RECRUIT" />

      {/* White card */}
      <div className="flex justify-center bg-at-primary px-0">
        <div className="bg-white rounded-t-[60px] max-[991px]:rounded-t-[40px] w-full flex justify-center px-5 lg:px-[76px] py-20">
          <div className="w-full max-w-[1288px] flex flex-col gap-12">
            {/* Hero image */}
            <Image
              src="https://storage.googleapis.com/studio-design-asset-files/projects/4yqBl2mdWj/s-1289x473_v-fms_webp_d751e825-390f-47ac-ae9e-7fcc038798ce.jpg"
              alt="AlpacaTech team"
              width={1289}
              height={473}
              className="w-full h-auto rounded-2xl object-cover"
            />

            <p className="text-at-text-dark text-base leading-[2] tracking-[0.04em] font-[var(--font-noto-sans-jp)]">
              AlpacaTech values five principles: &ldquo;Strive for Excellence in Quality&rdquo;, &ldquo;Think and Act Bold&rdquo;, &ldquo;Stronger Together&rdquo;, &ldquo;Integrity and Trust&rdquo; and &ldquo;Embrace Change&rdquo;.
              <br />
              We look forward to working with future colleagues who share these principles and can help us provide new value that goes Beyond Limits In Finance.
            </p>

            {/* Career opportunities */}
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-2">
                <span className="w-[6px] h-[6px] rounded-full bg-at-pink shrink-0" />
                <h2 className="text-at-primary text-[28px] lg:text-[34px] font-bold tracking-[0.04em] font-[var(--font-noto-sans-jp)]">CAREER OPPORTUNITIES</h2>
              </div>

              <p className="text-at-text-dark text-base leading-[2] tracking-[0.04em] font-[var(--font-noto-sans-jp)]">
                Complete list of our current job openings can be viewed from the link below.
                <br />
                We look forward to applications from individuals who share AlpacaTech&apos;s vision and enthusiasm for our services.
              </p>

              <Link
                href="https://www.alpaca-tech.ai/en/recruit"
                target="_blank"
                className="inline-flex items-center justify-between gap-3 bg-at-primary text-white rounded-lg px-6 py-[17px] w-full lg:w-[280px] hover:bg-at-accent transition-colors"
              >
                <span className="text-base font-bold tracking-[0.04em]">View Our Open Positions</span>
                {/* eslint-disable @next/next/no-img-element */}
                <img
                  src="https://storage.googleapis.com/studio-design-asset-files/projects/nBW2yYm1av/s-96x96_webp_d036ae1d-3000-4afc-9403-6e669407edd6.png"
                  alt=""
                  className="w-6 h-6 invert"
                />
              </Link>

              {/* Job list placeholder — mirrors STUDIO list styling */}
              <div className="flex flex-col border-t border-at-border mt-4">
                {[
                  { title: "Data Engineer — Snowflake / dbt", location: "Tokyo / Remote", type: "Full-time" },
                  { title: "AI Engineer — LLMs & Data Agents", location: "Tokyo / Remote", type: "Full-time" },
                  { title: "Quant Researcher — AIM Models", location: "Tokyo", type: "Full-time" },
                  { title: "Product Manager — Financial Data Platform", location: "Tokyo", type: "Full-time" },
                ].map((job) => (
                  <a
                    key={job.title}
                    href="https://www.alpaca-tech.ai/en/recruit"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col lg:flex-row lg:items-center justify-between gap-2 lg:gap-6 py-6 border-b border-at-border group"
                  >
                    <span className="text-at-primary text-base font-bold group-hover:underline underline-offset-4">{job.title}</span>
                    <span className="text-at-text-muted text-sm tracking-[0.04em] shrink-0">
                      {job.location} · {job.type}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
