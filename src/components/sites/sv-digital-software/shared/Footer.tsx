import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/types";
import { CONTACT_EMAIL, CONTACT_PHONE, SOCIAL_LINKS } from "@/lib/i18n/site";
import { SERVICE_SLUG_BY_KEY, type ServiceKey } from "@/lib/services";
import { BackToTop } from "./BackToTop";

type Props = {
  dict: Dictionary;
  locale: Locale;
};

/** Official brand marks (Simple Icons paths, 24x24) — lucide dropped brand icons. */
const BRAND_PATHS = {
  facebook:
    "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 11.435z",
  x: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z",
  instagram:
    "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.844 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  linkedin:
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  github:
    "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  youtube:
    "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
};

function BrandIcon({ path, className }: { path: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d={path} />
    </svg>
  );
}

type Social = { href: string; label: string; path: string };

export function Footer({ dict, locale }: Props) {
  const serviceLinks: { key: ServiceKey; label: string }[] = [
    { key: "mobile", label: dict.services.nav.mobile },
    { key: "custom", label: dict.services.nav.custom },
    { key: "testing", label: dict.services.nav.testing },
    { key: "legacy", label: dict.services.nav.legacy },
  ];

  const companyLinks = [
    { href: `/${locale}/company`, label: dict.header.nav.company },
    { href: `/${locale}/technologies`, label: dict.header.nav.technologies },
    { href: `/${locale}/recruit`, label: dict.header.nav.recruit },
    { href: `/${locale}/contact`, label: dict.footer.contact },
  ];

  const socials: Social[] = [
    { href: SOCIAL_LINKS.facebook, label: "Facebook", path: BRAND_PATHS.facebook },
    { href: SOCIAL_LINKS.x, label: "X", path: BRAND_PATHS.x },
    { href: SOCIAL_LINKS.instagram, label: "Instagram", path: BRAND_PATHS.instagram },
    { href: SOCIAL_LINKS.linkedin, label: "LinkedIn", path: BRAND_PATHS.linkedin },
    { href: SOCIAL_LINKS.github, label: "GitHub", path: BRAND_PATHS.github },
    { href: SOCIAL_LINKS.youtube, label: "YouTube", path: BRAND_PATHS.youtube },
  ];

  const telHref = `tel:${CONTACT_PHONE.replace(/[^+\d]/g, "")}`;

  return (
    <footer className="bg-at-primary w-full flex justify-center px-4 sm:px-8 lg:px-[76px] pt-16 pb-8">
      <div className="w-full max-w-[1288px] flex flex-col">
        {/* Top row: logo + back-to-top */}
        <div className="flex flex-row justify-between items-center h-[98px] max-[540px]:h-auto max-[540px]:flex-col max-[540px]:gap-4">
          <div className="flex items-center gap-3">
            {/* Glow logo — transparent PNG, renders true colors on the dark footer */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-sv.png"
              alt=""
              aria-hidden
              width={520}
              height={277}
              className="h-[64px] w-auto object-contain"
            />
            <span className="flex flex-col leading-none">
              <span className="font-[var(--font-montserrat)] text-white font-extrabold text-[22px] tracking-[0.02em]">SV Digital</span>
              <span className="font-[var(--font-montserrat)] text-white/80 font-bold text-[10px] tracking-[0.28em] mt-1">SOFTWARE</span>
            </span>
          </div>
          <BackToTop
            label={dict.footer.backToTop}
            className="flex items-center justify-center w-14 h-14 rounded-full border border-white/20 text-white hover:bg-white hover:text-at-primary transition-colors max-[540px]:hidden"
          />
        </div>

        {/* Main grid: brand + tagline + socials | services | company | contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.4fr] gap-10 lg:gap-8 mt-14">
          {/* Brand column */}
          <div className="flex flex-col gap-6">
            <p className="text-white/70 text-sm leading-[1.9] tracking-[0.03em] max-w-[360px] font-[var(--font-noto-sans-jp)]">
              {dict.footer.tagline}
            </p>
            <div className="flex flex-col gap-3">
              <span className="text-white/50 text-[11px] font-bold tracking-[0.22em] font-[var(--font-montserrat)]">
                {dict.footer.followUs}
              </span>
              <ul className="flex flex-wrap items-center gap-2.5">
                {socials.map(({ href, label, path }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="flex items-center justify-center w-10 h-10 rounded-full border border-white/15 bg-white/5 text-white/80 hover:bg-at-hover hover:border-at-hover hover:text-at-primary transition-colors"
                    >
                      <BrandIcon path={path} className="w-[18px] h-[18px]" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services column */}
          <nav className="flex flex-col gap-5" aria-label={dict.footer.headings.services}>
            <h3 className="text-white text-xs font-bold tracking-[0.22em] font-[var(--font-montserrat)]">
              {dict.footer.headings.services}
            </h3>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((l) => (
                <li key={l.key}>
                  <Link
                    href={`/${locale}/services/${SERVICE_SLUG_BY_KEY[l.key]}`}
                    className="text-white/70 text-sm tracking-[0.03em] leading-[1.6] hover:text-at-pink transition-colors font-[var(--font-noto-sans-jp)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company column */}
          <nav className="flex flex-col gap-5" aria-label={dict.footer.headings.company}>
            <h3 className="text-white text-xs font-bold tracking-[0.22em] font-[var(--font-montserrat)]">
              {dict.footer.headings.company}
            </h3>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/70 text-sm tracking-[0.03em] leading-[1.6] hover:text-at-pink transition-colors font-[var(--font-noto-sans-jp)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact column */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white text-xs font-bold tracking-[0.22em] font-[var(--font-montserrat)]">
              {dict.footer.headings.contact}
            </h3>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-start gap-3 text-white/70 text-sm leading-[1.7] hover:text-at-pink transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-at-pink" strokeWidth={2} />
                  <span className="break-all">{CONTACT_EMAIL}</span>
                </a>
              </li>
              <li>
                <a href={telHref} className="flex items-start gap-3 text-white/70 text-sm leading-[1.7] hover:text-at-pink transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-at-pink" strokeWidth={2} />
                  <span>{CONTACT_PHONE}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm leading-[1.7]">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-at-pink" strokeWidth={2} />
                <span>{dict.contact.address}</span>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm leading-[1.7]">
                <Clock className="w-4 h-4 mt-0.5 shrink-0 text-at-pink" strokeWidth={2} />
                <span>{dict.contact.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col lg:flex-row justify-between gap-4 mt-14 pt-6 border-t border-at-footer-line">
          <span className="text-at-footer-muted text-xs tracking-[0.04em]">{dict.footer.copyright}</span>
          <p className="text-at-footer-muted text-[10px] leading-[1.8] tracking-[0.04em] text-left lg:text-right whitespace-pre-line">
            {dict.footer.companyInfo}
          </p>
        </div>
      </div>
    </footer>
  );
}
