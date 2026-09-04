// Source of truth for the Services sub-pages. Slug values match the
// dictionary keys under `services` and are reused by the Header dropdown,
// the [slug] route (generateStaticParams) and the sitemap.

export const SERVICE_SLUGS = [
  "mobile-solutions",
  "custom-software-development",
  "testing-services",
  "legacy-system-migration",
  "low-code",
  "cloud-services",
  "ai",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

/** Map a URL slug to the matching key in the `services` dictionary block. */
export const SERVICE_KEY_BY_SLUG = {
  "mobile-solutions": "mobile",
  "custom-software-development": "custom",
  "testing-services": "testing",
  "legacy-system-migration": "legacy",
  "low-code": "lowcode",
  "cloud-services": "cloud",
  ai: "ai",
} as const;

/** Reverse map: dictionary key -> URL slug (for cross-links). */
export const SERVICE_SLUG_BY_KEY = {
  mobile: "mobile-solutions",
  custom: "custom-software-development",
  testing: "testing-services",
  legacy: "legacy-system-migration",
  lowcode: "low-code",
  cloud: "cloud-services",
  ai: "ai",
} as const;

export type ServiceKey = keyof typeof SERVICE_SLUG_BY_KEY;

/**
 * Services are presented in two groups (mirrors the header mega-menu and the
 * TSO-style "outsourcing vs advanced technology" split).
 */
export const SERVICE_GROUPS: { key: "outsourcing" | "advanced"; services: ServiceKey[] }[] = [
  { key: "outsourcing", services: ["mobile", "custom", "testing", "legacy"] },
  { key: "advanced", services: ["lowcode", "cloud", "ai"] },
];

/** The group a service belongs to (used for cross-links of related services). */
export function serviceGroupOf(key: ServiceKey): ServiceKey[] {
  const group = SERVICE_GROUPS.find((g) => g.services.includes(key));
  return group ? group.services : [key];
}

export function isServiceSlug(value: string): value is ServiceSlug {
  return (SERVICE_SLUGS as readonly string[]).includes(value);
}

/** Build `/{locale}/services/{slug}` for a given locale + slug. */
export function servicePath(locale: string, slug: ServiceSlug): string {
  return `/${locale}/services/${slug}`;
}
