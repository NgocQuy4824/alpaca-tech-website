// Single source of truth for site-wide SEO identity.
// Change the domain or brand here and every page's metadata follows.

import type { Metadata } from "next";
import { LOCALES } from "./types";

export const SITE_URL = "https://www.alpaca-tech.ai";
export const BRAND_NAME = "SV Digital Software";

// Contact details shown in the Contact section. Update these in one place.
export const CONTACT_EMAIL = "hello@svdigitalsoftware.com";
export const CONTACT_PHONE = "+81 3-1234-5678";

// Recruiting / careers page. Currently a placeholder — replace "#" with your
// real job-board URL (e.g. "https://careers.svdigitalsoftware.com") and every
// recruit link updates automatically.
export const CAREERS_URL = "#";
export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/",
  instagram: "https://www.instagram.com/",
};

/** Build an absolute URL for a given locale + path ("" = home). */
export function absoluteUrl(locale: string, path = ""): string {
  return `${SITE_URL}/${locale}${path}`;
}

/**
 * Auto-generate canonical + hreflang alternates for every configured locale.
 * Add a locale to LOCALES and every page picks it up with no per-page edits.
 */
export function buildAlternates(locale: string, path = "") {
  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[l] = absoluteUrl(l, path);
  return { canonical: absoluteUrl(locale, path), languages };
}

const OG_LOCALE: Record<string, string> = { en: "en_US", vi: "vi_VN" };

/**
 * Build a page's full SEO metadata from just (locale, path, title, description).
 * Canonical, hreflang, OpenGraph and Twitter cards are generated automatically,
 * so pages never hand-write URL strings. By default `title` should NOT include
 * the brand — the root layout template appends " | SV Digital Software".
 * Pass `brandFirst` (home page) when the title is already a complete brand-first string.
 */
export function pageMetadata(opts: {
  locale: string;
  path: string;
  title: string;
  description: string;
  brandFirst?: boolean;
}): Metadata {
  const { locale, path, title, description, brandFirst = false } = opts;
  const url = absoluteUrl(locale, path);
  const ogTitle = brandFirst ? title : `${title} | ${BRAND_NAME}`;
  return {
    title: brandFirst ? { absolute: title } : title,
    description,
    alternates: buildAlternates(locale, path),
    openGraph: {
      type: "website",
      url,
      siteName: BRAND_NAME,
      title: ogTitle,
      description,
      locale: OG_LOCALE[locale] ?? "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
  };
}
