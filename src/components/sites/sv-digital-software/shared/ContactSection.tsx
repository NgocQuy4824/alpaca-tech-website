import { Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/types";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  SITE_URL,
  SOCIAL_LINKS,
} from "@/lib/i18n/site";

type Props = { dict: Dictionary; locale: Locale };

export function ContactSection({ dict }: Props) {
  const c = dict.contact;
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(c.emailSubject)}`;
  const address = dict.companyPage.map.address;

  const cards: { icon: typeof Mail; label: string; value: string; href?: string }[] = [
    { icon: Mail, label: c.emailLabel, value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
    {
      icon: Phone,
      label: c.phoneLabel,
      value: CONTACT_PHONE,
      href: `tel:${CONTACT_PHONE.replace(/[^+\d]/g, "")}`,
    },
    { icon: MapPin, label: c.addressLabel, value: address },
    { icon: Clock, label: c.hoursLabel, value: c.hours },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: c.heading,
    description: c.description,
    mainEntity: {
      "@type": "Organization",
      url: SITE_URL,
      email: CONTACT_EMAIL,
      telephone: CONTACT_PHONE,
      address: {
        "@type": "PostalAddress",
        streetAddress: address,
        addressCountry: "JP",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: CONTACT_EMAIL,
        telephone: CONTACT_PHONE,
        contactType: "customer service",
        availableLanguage: ["en", "vi", "lo"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      },
      sameAs: [SOCIAL_LINKS.linkedin, SOCIAL_LINKS.instagram, SOCIAL_LINKS.facebook],
    },
  };

  return (
    <section id="contact" className="flex justify-center bg-at-bg px-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-at-section rounded-t-[60px] max-[991px]:rounded-t-[40px] w-full flex justify-center px-5 lg:px-[76px] py-[100px] max-[540px]:py-16">
        <div className="w-full max-w-[820px] flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col gap-3">
            <h2 className="font-[var(--font-montserrat)] text-at-primary text-[34px] lg:text-[44px] font-bold leading-[1.15] tracking-[0.01em]">
              {c.heading}
            </h2>
            <p className="text-at-text-dark/80 text-base leading-[2] tracking-[0.04em] font-[var(--font-noto-sans-jp)] max-w-[640px] mx-auto">
              {c.description}
            </p>
          </div>

          <a
            href={mailto}
            className="inline-flex items-center justify-between gap-3 bg-at-primary text-at-bg rounded-lg px-8 py-4 w-full sm:w-[300px] hover:bg-at-accent transition-colors"
          >
            <span className="text-sm font-bold tracking-[0.04em]">{c.emailButton}</span>
            <Mail className="w-5 h-5" strokeWidth={2} />
          </a>

          {/* Info cards */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {cards.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="border border-at-border rounded-2xl bg-at-bg-soft px-5 py-5 flex gap-4"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-at-primary shrink-0">
                  <Icon className="w-5 h-5 text-at-bg" strokeWidth={2} />
                </span>
                <div className="flex flex-col gap-1 min-w-0">
                  <span className="text-at-text-muted text-xs font-bold tracking-[0.14em] uppercase">{label}</span>
                  {href ? (
                    <a
                      href={href}
                      className="text-at-text-dark text-sm leading-[1.7] tracking-[0.02em] font-medium hover:text-at-primary transition-colors break-all"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-at-text-dark text-sm leading-[1.7] tracking-[0.02em] font-medium">
                      {value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-3 bg-at-bg-soft border border-at-border rounded-2xl px-6 py-4 w-full justify-center">
            <span className="text-at-text-muted text-xs font-bold tracking-[0.1em] uppercase">{c.followUs}</span>
            <span className="w-px h-4 bg-at-border" aria-hidden />
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-at-primary hover:text-at-accent transition-colors"
            >
              <span className="text-sm font-bold tracking-[0.04em]">LinkedIn</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-at-primary hover:text-at-accent transition-colors"
            >
              <span className="text-sm font-bold tracking-[0.04em]">Instagram</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-at-primary hover:text-at-accent transition-colors"
            >
              <span className="text-sm font-bold tracking-[0.04em]">Facebook</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
