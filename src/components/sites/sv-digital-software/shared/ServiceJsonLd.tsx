import { SITE_URL, BRAND_NAME } from "@/lib/i18n/site";
import { JsonLd } from "@/components/sites/sv-digital-software/shared/JsonLd";
import type { Locale } from "@/lib/i18n/types";
import { getDictionary } from "@/lib/i18n/getDictionary";

/**
 * Emits two JSON-LD blocks for a service detail page: BreadcrumbList and Service.
 * SEO-first: each sub-page gets its own BreadcrumbList + Service description.
 */
export function ServiceJsonLd({
  dict,
  locale,
  slug,
  serviceName,
  serviceDescription,
}: {
  dict: ReturnType<typeof getDictionary>;
  locale: Locale;
  slug: string;
  serviceName: string;
  serviceDescription: string;
}) {
  const servicesHref = `/${locale}/services`;
  const url = `${SITE_URL}/${locale}/services/${slug}`;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "TOP", item: `${SITE_URL}/${locale}` },
      { "@type": "ListItem", position: 2, name: dict.services.heroTitle, item: `${SITE_URL}${servicesHref}` },
      { "@type": "ListItem", position: 3, name: serviceName, item: url },
    ],
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: serviceDescription,
    serviceType: serviceName,
    url,
    provider: { "@type": "Organization", name: BRAND_NAME, url: SITE_URL },
    areaServed: "Worldwide",
  };

  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={service} />
    </>
  );
}
