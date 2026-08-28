import type { MetadataRoute } from "next";

const SITE_URL = "https://www.alpaca-tech.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["", "/en", "/en/solution", "/en/aim", "/en/company", "/en/recruit", "/en/news"];
  return routes.map((path) => ({
    url: `${SITE_URL}${path || "/"}`,
    lastModified: now,
    changeFrequency: path === "/en/news" ? "weekly" : "monthly",
    priority: path === "/en" || path === "" ? 1 : 0.8,
  }));
}
