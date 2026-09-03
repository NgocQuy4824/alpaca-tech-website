import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/types";

export function CompanyTeaser({ dict, locale }: { dict: Dictionary; locale: Locale }) {

  return (
    <section className="flex justify-center bg-at-bg px-5 lg:px-[76px] py-[120px] max-[540px]:py-20">
      <div className="relative w-full max-w-[1288px] bg-gradient-to-br from-at-primary to-at-secondary rounded-[60px] max-[991px]:rounded-[40px] overflow-hidden flex flex-col items-center justify-center px-5 sm:px-10 lg:px-[75px] py-16 sm:py-[120px]">
        <Image
          src="https://storage.googleapis.com/studio-design-asset-files/projects/4yqBl2mdWj/s-1440x634_v-fms_webp_eaeead84-56d3-4d35-9a03-82800126eb5f.jpg"
          alt=""
          fill
          sizes="(max-width: 1288px) 100vw, 1288px"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-at-secondary/50 to-transparent" />
        <div className="relative z-10 flex flex-col items-center gap-10 max-w-[1100px] text-center">
          <h2 className="font-[var(--font-montserrat)] text-white font-extrabold leading-none break-words [overflow-wrap:anywhere] text-[40px] sm:text-[50px] lg:text-[72px]">
            {dict.companyTeaser.heading}
          </h2>
          <p className="text-white text-base leading-[2] tracking-[0.04em] text-center font-[var(--font-noto-sans-jp)]">
            {dict.companyTeaser.desc}
          </p>
          <Link
            href={`/${locale}/company`}
            className="inline-flex items-center justify-between gap-3 bg-white text-at-primary rounded-lg px-6 py-[17px] w-full sm:w-[280px] hover:bg-at-hover hover:text-at-primary group transition-colors"
          >
            <span className="text-sm font-bold tracking-[0.04em]">{dict.companyTeaser.readMore}</span>
            <ArrowRight className="w-6 h-6 shrink-0 text-at-primary" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
