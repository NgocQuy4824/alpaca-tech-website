import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/types";

export function RecruitTeaser({ dict, locale }: { dict: Dictionary; locale: Locale }) {

  return (
    <section className="flex justify-center bg-at-bg px-5 lg:px-[76px] py-0 pb-[120px]">
      <div className="bg-white rounded-[60px] max-[991px]:rounded-[40px] border border-at-border w-full max-w-[1288px] flex flex-col items-center px-10 lg:px-8 py-[120px] gap-10">
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
          className="inline-flex items-center justify-between gap-3 bg-at-primary text-white rounded-lg px-6 py-[17px] w-full lg:w-[280px] hover:bg-at-accent transition-colors self-start"
        >
          <span className="text-sm font-bold tracking-[0.04em]">{dict.recruitTeaser.readMore}</span>
          {/* eslint-disable @next/next/no-img-element */}
          <img
            src="https://storage.googleapis.com/studio-design-asset-files/projects/nBW2yYm1av/s-96x96_webp_d036ae1d-3000-4afc-9403-6e669407edd6.png"
            alt=""
            className="w-6 h-6 invert"
          />
        </Link>
      </div>
    </section>
  );
}
