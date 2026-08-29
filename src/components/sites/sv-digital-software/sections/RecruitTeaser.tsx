import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/types";

export function RecruitTeaser({ dict, locale }: { dict: Dictionary; locale: Locale }) {

  return (
    <section className="flex justify-center bg-at-bg px-5 lg:px-[76px] py-0 pb-[120px]">
      <div className="bg-at-section rounded-[60px] max-[991px]:rounded-[40px] border border-at-border w-full max-w-[1288px] flex flex-col items-center px-10 lg:px-8 py-[120px] gap-10">
        <h2 className="font-[var(--font-montserrat)] text-at-primary text-[72px] max-[991px]:text-[50px] font-bold leading-none self-start w-full">
          {dict.recruitTeaser.heading}
        </h2>
        <Image
          src="https://storage.googleapis.com/studio-design-asset-files/projects/4yqBl2mdWj/s-1289x473_v-fms_webp_d751e825-390f-47ac-ae9e-7fcc038798ce.jpg"
          alt="Team at SV Digital Software"
          width={1289}
          height={473}
          className="w-full h-auto rounded-2xl object-cover"
        />
        <p className="text-at-text-dark text-base leading-[1.8] tracking-[0.04em] font-[var(--font-noto-sans-jp)] self-start">
          {dict.recruitTeaser.desc}
        </p>
        <Link
          href={`/${locale}/recruit`}
          className="inline-flex items-center justify-between gap-3 bg-at-primary text-at-bg rounded-lg px-6 py-[17px] w-full lg:w-[280px] hover:bg-at-accent transition-colors self-center"
        >
          <span className="text-sm font-bold tracking-[0.04em]">{dict.recruitTeaser.readMore}</span>
          <ArrowRight className="w-6 h-6 shrink-0" strokeWidth={2.5} />
        </Link>
      </div>
    </section>
  );
}
