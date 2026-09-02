import type { MetadataRoute } from "next";
import { LOCALES } from "@/lib/i18n/types";
import { absoluteUrl, buildAlternates } from "@/lib/i18n/site";
import { SERVICE_SLUGS } from "@/lib/services";

const paths = [
  "",
  "/services",
  ...SERVICE_SLUGS.map((slug) => `/services/${slug}`),
  "/technologies",
  "/company",
  "/recruit",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const path of paths) {
    const isHome = path === "";
    for (const locale of LOCALES) {
      entries.push({
        url: absoluteUrl(locale, path),
        lastModified: now,
        changeFrequency: "monthly",
        priority: isHome ? 1 : 0.8,
        alternates: { languages: buildAlternates(locale, path).languages },
      });
    }
  }
  return entries;
}
