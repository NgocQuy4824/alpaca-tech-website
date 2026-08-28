import type { MetadataRoute } from "next";

const SITE_URL = "https://www.alpaca-tech.ai";

const paths = ["", "/solution", "/aim", "/company", "/recruit", "/news"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [];
  for (const path of paths) {
    const isNews = path === "/news";
    const isHome = path === "";
    entries.push({
      url: `${SITE_URL}/en${path || ""}`,
      lastModified: now,
      changeFrequency: isNews ? "weekly" : "monthly",
      priority: isHome ? 1 : 0.8,
      alternates: {
        languages: {
          en: `${SITE_URL}/en${path || ""}`,
          vi: `${SITE_URL}/vi${path || ""}`,
        },
      },
    });
    entries.push({
      url: `${SITE_URL}/vi${path || ""}`,
      lastModified: now,
      changeFrequency: isNews ? "weekly" : "monthly",
      priority: isHome ? 1 : 0.8,
      alternates: {
        languages: {
          en: `${SITE_URL}/en${path || ""}`,
          vi: `${SITE_URL}/vi${path || ""}`,
        },
      },
    });
  }
  return entries;
}
