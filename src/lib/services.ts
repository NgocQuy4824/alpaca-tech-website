// Source of truth for the Services sub-pages. Slug values match the
// dictionary keys under `services` and are reused by the Header dropdown,
// the [slug] route (generateStaticParams) and the sitemap.

export const SERVICE_SLUGS = [
  "mobile-solutions",
  "custom-software-development",
  "testing-services",
  "legacy-system-migration",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

/** Map a URL slug to the matching key in the `services` dictionary block. */
export const SERVICE_KEY_BY_SLUG: Record<ServiceSlug, "mobile" | "custom" | "testing" | "legacy"> = {
  "mobile-solutions": "mobile",
  "custom-software-development": "custom",
  "testing-services": "testing",
  "legacy-system-migration": "legacy",
};

/** Reverse map: dictionary key -> URL slug (for cross-links). */
export const SERVICE_SLUG_BY_KEY: Record<"mobile" | "custom" | "testing" | "legacy", ServiceSlug> = {
  mobile: "mobile-solutions",
  custom: "custom-software-development",
  testing: "testing-services",
  legacy: "legacy-system-migration",
};

export type ServiceKey = keyof typeof SERVICE_SLUG_BY_KEY;

export function isServiceSlug(value: string): value is ServiceSlug {
  return (SERVICE_SLUGS as readonly string[]).includes(value);
}

/** Build `/{locale}/services/{slug}` for a given locale + slug. */
export function servicePath(locale: string, slug: ServiceSlug): string {
  return `/${locale}/services/${slug}`;
}
