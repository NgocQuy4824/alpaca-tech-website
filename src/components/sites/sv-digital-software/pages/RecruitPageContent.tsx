import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/types";
import { PageHero } from "@/components/sites/sv-digital-software/shared/PageHero";
import { CAREERS_URL } from "@/lib/i18n/site";

export function RecruitPageContent({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const d = dict.recruitPage;

  return (
    <main className="flex flex-col">
      <PageHero title={d.heroTitle} current={d.heroTitle} locale={locale} />

      <div className="flex justify-center bg-at-bg px-0">
        <div className="bg-at-section rounded-t-[60px] max-[991px]:rounded-t-[40px] w-full flex justify-center px-5 lg:px-[76px] py-20">
          <div className="w-full max-w-[1288px] flex flex-col gap-12">
            <Image
              src="https://storage.googleapis.com/studio-design-asset-files/projects/4yqBl2mdWj/s-1289x473_v-fms_webp_d751e825-390f-47ac-ae9e-7fcc038798ce.jpg"
              alt="SV Digital Software team"
              width={1289}
              height={473}
              className="w-full h-auto rounded-2xl object-cover"
            />

            <p className="text-at-text-dark text-base leading-[2] tracking-[0.04em] font-[var(--font-noto-sans-jp)]">{d.intro}</p>

            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-2">
                <span className="w-[6px] h-[6px] rounded-full bg-at-pink shrink-0" />
                <h2 className="text-at-primary text-[28px] lg:text-[34px] font-bold tracking-[0.04em] font-[var(--font-noto-sans-jp)]">
                  {d.career.heading}
                </h2>
              </div>

              <p className="text-at-text-dark text-base leading-[2] tracking-[0.04em] font-[var(--font-noto-sans-jp)]">{d.career.desc}</p>

              <a
                href={CAREERS_URL}
                className="inline-flex items-center justify-between gap-3 bg-at-primary text-at-bg rounded-lg px-6 py-[17px] w-full lg:w-[280px] hover:bg-at-hover hover:text-at-primary transition-colors self-center"
              >
                <span className="text-base font-bold tracking-[0.04em]">{d.career.viewPositions}</span>
                <ArrowRight className="w-6 h-6 shrink-0" strokeWidth={2.5} />
              </a>

              <div className="flex flex-col border-t border-at-border mt-4">
                {d.jobs.map((job) => (
                  <a
                    key={job.title}
                    href={CAREERS_URL}
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
