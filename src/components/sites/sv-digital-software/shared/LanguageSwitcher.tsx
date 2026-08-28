"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import type { Locale } from "@/lib/i18n/types";
import { getDictionary } from "@/lib/i18n/getDictionary";

type Props = { locale: Locale; className?: string; onClick?: () => void };

export function LanguageSwitcher({ locale, className = "", onClick }: Props) {
  const pathname = usePathname();
  const other: Locale = locale === "en" ? "vi" : "en";
  const dict = getDictionary(locale);
  const label = dict.language[other];

  const target = (() => {
    if (!pathname) return `/${other}`;
    const swapped = pathname.replace(/^\/(en|vi)(\/|$)/, `/${other}$2`);
    // If pathname didn't start with locale (e.g. "/_not-found" or "/"), keep /other
    if (swapped === pathname) return `/${other}`;
    return swapped || `/${other}`;
  })();

  return (
    <Link
      href={target}
      onClick={onClick ? () => onClick() : undefined}
      className={`group flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 ${className}`}
      aria-label={`Switch to ${label}`}
    >
      <span className="text-[14px] font-bold leading-[1.6]">{label}</span>
      <Globe className="w-[18px] h-[18px] transition-transform duration-500 group-hover:rotate-[360deg]" />
    </Link>
  );
}
