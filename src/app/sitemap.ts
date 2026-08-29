import type { MetadataRoute } from "next";
import { LOCALES } from "@/lib/i18n/types";
import { absoluteUrl, buildAlternates } from "@/lib/i18n/site";

const paths = ["", "/solution", "/aim", "/company", "/recruit", "/news"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const path of paths) {
    const isNews = path === "/news";
    const isHome = path === "";
    for (const locale of LOCALES) {
      entries.push({
        url: absoluteUrl(locale, path),
        lastModified: now,
        changeFrequency: isNews ? "weekly" : "monthly",
        priority: isHome ? 1 : 0.8,
        alternates: { languages: buildAlternates(locale, path).languages },
      });
    }
  }
  return entries;
}
