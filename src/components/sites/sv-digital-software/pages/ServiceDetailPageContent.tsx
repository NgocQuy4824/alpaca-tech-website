import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/types";
import type { ServiceSlug } from "@/lib/services";
import { SERVICE_KEY_BY_SLUG } from "@/lib/services";
import { MobileServiceContent } from "./services/MobileServiceContent";
import { CustomServiceContent } from "./services/CustomServiceContent";
import { TestingServiceContent } from "./services/TestingServiceContent";
import { LegacyServiceContent } from "./services/LegacyServiceContent";
import { LowCodeServiceContent } from "./services/LowCodeServiceContent";
import { CloudServiceContent } from "./services/CloudServiceContent";
import { AiServiceContent } from "./services/AiServiceContent";

type Props = { dict: Dictionary; locale: Locale; slug: ServiceSlug };

/**
 * Dispatcher — each service key maps to its own template (distinct layout,
 * distinct visuals). Keeps `/services/[slug]` as a single dynamic route while
 * giving every sub-page a TSO-aligned, SEO-optimized body.
 */
export function ServiceDetailPageContent({ dict, locale, slug }: Props) {
  const key = SERVICE_KEY_BY_SLUG[slug];
  switch (key) {
    case "mobile":
      return <MobileServiceContent dict={dict} locale={locale} />;
    case "custom":
      return <CustomServiceContent dict={dict} locale={locale} />;
    case "testing":
      return <TestingServiceContent dict={dict} locale={locale} />;
    case "legacy":
      return <LegacyServiceContent dict={dict} locale={locale} />;
    case "lowcode":
      return <LowCodeServiceContent dict={dict} locale={locale} />;
    case "cloud":
      return <CloudServiceContent dict={dict} locale={locale} />;
    case "ai":
      return <AiServiceContent dict={dict} locale={locale} />;
  }
}
