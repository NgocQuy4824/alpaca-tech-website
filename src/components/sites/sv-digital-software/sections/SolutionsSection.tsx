import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/types";

export function SolutionsSection({ dict, locale }: { dict: Dictionary; locale: Locale }) {

  return (
    <section id="solutions" className="flex justify-center bg-at-bg px-0">
      <div className="bg-at-section rounded-t-[60px] max-[991px]:rounded-t-[40px] w-full flex justify-center px-5 lg:px-[76px] py-[120px] max-[540px]:py-20">
        <div className="w-full max-w-[1288px] flex flex-col gap-16">
          <h2 className="font-[var(--font-montserrat)] text-at-primary font-extrabold leading-none break-words [overflow-wrap:anywhere] text-[40px] sm:text-[50px] lg:text-[72px]">
            {dict.solutions.heading}
          </h2>

          <div className="flex flex-col gap-10">
            {/* Data Solution */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-14">
              <div className="flex-1 flex flex-col gap-6">
                <h3 className="text-at-text-medium text-[34px] font-bold leading-[1.4] font-[var(--font-noto-sans-jp)]">
                  {dict.solutions.dataSolution.title}
                </h3>
                <p className="text-at-text-dark text-base leading-[2] tracking-[0.04em] font-[var(--font-noto-sans-jp)]">
                  {dict.solutions.dataSolution.desc}
                </p>
                <Link
                  href={`/${locale}/services`}
                  className="inline-flex items-center justify-between gap-3 bg-at-primary text-at-bg rounded-lg px-6 py-[17px] w-fit hover:bg-at-hover hover:text-at-primary transition-colors"
                >
                  <span className="text-sm font-bold tracking-[0.04em]">{dict.solutions.dataSolution.learnMore}</span>
                  <ArrowRight className="w-6 h-6 shrink-0" strokeWidth={2.5} />
                </Link>
              </div>
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=900&fit=crop&q=80"
                alt="SV Digital Software — custom software development services"
                width={791}
                height={450}
                className="flex-1 lg:max-w-[50%] w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
