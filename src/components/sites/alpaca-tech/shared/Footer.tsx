import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/types";

type Props = {
  dict: Dictionary;
  locale: Locale;
};

export function Footer({ dict, locale }: Props) {
  return (
    <footer className="bg-at-secondary w-full flex justify-center px-4 sm:px-8 lg:px-[76px] pt-16 pb-8">
      <div className="w-full max-w-[1288px] flex flex-col">
        {/* Top row: logos + back-to-top */}
        <div className="flex flex-row justify-between items-center h-[98px] max-[540px]:h-auto max-[540px]:flex-col max-[540px]:gap-4">
          <div className="flex items-center gap-2.5">
            {/* eslint-disable @next/next/no-img-element */}
            <img
              src="https://storage.googleapis.com/studio-design-asset-files/projects/4yqBl2mdWj/s-45x50_030be4ed-718d-43a1-829f-973b0b230ea6.svg"
              alt="AlpacaTech"
              className="h-[50px] w-auto"
            />
            {/* eslint-disable @next/next/no-img-element */}
            <img
              src="https://storage.googleapis.com/studio-design-asset-files/projects/4yqBl2mdWj/s-152x50_f6b98fc6-7513-4527-81e0-cadcd7b6be47.svg"
              alt="AlpacaTech"
              className="h-[50px] w-auto"
            />
          </div>
          <a href="#" className="w-20 h-20 hover:opacity-50 transition-opacity max-[540px]:hidden" aria-label={dict.footer.backToTop}>
            {/* eslint-disable @next/next/no-img-element */}
            <img
              src="https://storage.googleapis.com/studio-design-asset-files/projects/nBW2yYm1av/s-80x80_27b377c2-d2d6-4216-a3dd-dd4a432efac9.svg"
              alt=""
              className="w-full h-full"
            />
          </a>
        </div>

        {/* Middle row */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 mt-16">
          <div className="flex flex-col gap-4">
            <span className="text-white text-xs font-bold tracking-[0.04em]">{dict.footer.groupCompanies}</span>
            <div className="flex items-center gap-10 max-[540px]:flex-col max-[540px]:items-start max-[540px]:gap-6">
              <a href="https://www.folio-hd.co.jp/" target="_blank" rel="noreferrer" className="hover:opacity-50 transition-opacity">
                <img
                  src="https://storage.googleapis.com/studio-design-asset-files/projects/4yqBl2mdWj/s-280x28_885dcb01-32d1-4f35-aacf-3034aa67ed45.svg"
                  alt="FOLIO Holdings"
                  className="h-7 w-auto"
                />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-end gap-8 max-[540px]:items-start max-[540px]:w-full">
            <div className="flex items-end gap-10 max-[540px]:flex-col max-[540px]:items-start">
              <Link href={`/${locale}/solution`} className="group flex flex-col">
                <span className="text-white text-sm tracking-[0.04em]">{dict.footer.nav.solution}</span>
                <span className="h-px w-0 bg-white group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href={`/${locale}/aim`} className="group flex flex-col">
                <span className="text-white text-sm tracking-[0.04em]">{dict.footer.nav.aim}</span>
                <span className="h-px w-0 bg-white group-hover:w-full transition-all duration-300" />
              </Link>
            </div>

            <div className="flex items-center gap-4 max-[540px]:w-full max-[540px]:justify-between">
              <div className="flex items-center gap-3">
                {/* eslint-disable @next/next/no-img-element */}
                <img
                  src="https://storage.googleapis.com/studio-design-asset-files/projects/nBW2yYm1av/s-24x24_cd52f69d-166e-4375-b9a1-3d44257b4d69.svg"
                  alt=""
                  className="w-6 h-6"
                />
              </div>
              <div className="flex items-center gap-4">
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="hover:opacity-50 transition-opacity">
                  {/* eslint-disable @next/next/no-img-element */}
                  <img
                    src="https://storage.googleapis.com/studio-design-asset-files/projects/nBW2yYm1av/s-54x46_41ca83f9-0513-4600-8bc6-dc6bc9d7ec19.svg"
                    alt="Instagram"
                    className="h-[46px] w-[54px]"
                  />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:opacity-50 transition-opacity">
                  {/* eslint-disable @next/next/no-img-element */}
                  <img
                    src="https://storage.googleapis.com/studio-design-asset-files/projects/nBW2yYm1av/s-48x46_3fb51635-da93-443b-b42c-713b23250931.svg"
                    alt="LinkedIn"
                    className="h-[46px] w-12"
                  />
                </a>
              </div>
              <Link
                href={`/${locale}#contact`}
                className="hidden lg:flex items-center gap-3 bg-white rounded-lg px-4 py-3 hover:bg-at-accent group transition-colors"
              >
                <span className="text-at-primary group-hover:text-white text-sm font-bold tracking-[0.04em] transition-colors">
                  {dict.footer.contact}
                </span>
                {/* eslint-disable @next/next/no-img-element */}
                <img
                  src="https://storage.googleapis.com/studio-design-asset-files/projects/nBW2yYm1av/s-24x24_53ad8034-be39-43e4-a7ff-6ee82c06d5c3.svg"
                  alt=""
                  className="w-6 h-6 group-hover:opacity-0 transition-opacity"
                />
              </Link>
            </div>

            <Link href={`/${locale}#contact`} className="flex lg:hidden w-full items-center justify-center gap-3 bg-white rounded-lg px-6 py-4">
              <span className="text-at-primary text-sm font-bold tracking-[0.04em]">{dict.footer.contact}</span>
              {/* eslint-disable @next/next/no-img-element */}
              <img
                src="https://storage.googleapis.com/studio-design-asset-files/projects/nBW2yYm1av/s-24x24_53ad8034-be39-43e4-a7ff-6ee82c06d5c3.svg"
                alt=""
                className="w-6 h-6"
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-4 mt-6 pt-6 border-t border-at-footer-line">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-10">
              <Link
                href={`/${locale}/privacy-policy`}
                className="text-at-footer-muted text-xs tracking-[0.04em] hover:text-white/50 transition-colors"
              >
                {dict.footer.privacyPolicy}
              </Link>
              <Link
                href={`/${locale}/site-policy`}
                className="text-at-footer-muted text-xs tracking-[0.04em] hover:text-white/50 transition-colors"
              >
                {dict.footer.sitePolicy}
              </Link>
              <Link
                href={`/${locale}/security-policy`}
                className="text-at-footer-muted text-xs tracking-[0.04em] hover:text-white/50 transition-colors"
              >
                {dict.footer.securityPolicy}
              </Link>
            </div>
            <Link
              href={`/${locale}/email-disclaimer`}
              className="text-at-footer-muted text-xs tracking-[0.04em] hover:text-white/50 transition-colors"
            >
              {dict.footer.emailDisclaimer}
            </Link>
            <span className="text-at-footer-muted text-xs tracking-[0.04em] hidden lg:block">{dict.footer.copyright}</span>
          </div>
          <div className="flex flex-col items-end gap-4 lg:max-w-[320px]">
            <p className="text-at-footer-muted text-[10px] leading-[1.8] tracking-[0.04em] text-right max-[540px]:text-left whitespace-pre-line">
              {dict.footer.companyInfo}
            </p>
          </div>
        </div>
        <span className="text-at-footer-muted text-xs tracking-[0.04em] lg:hidden mt-6">{dict.footer.copyright}</span>
      </div>
    </footer>
  );
}
