"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, ChevronDown, Check } from "lucide-react";
import { LOCALES, type Locale } from "@/lib/i18n/types";
import { getDictionary } from "@/lib/i18n/getDictionary";

type Props = { locale: Locale; className?: string; onClick?: () => void };

const LOCALE_CODES: Record<Locale, string> = { en: "EN", vi: "VI", lo: "LO" };

export function LanguageSwitcher({ locale, className = "", onClick }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const dict = getDictionary(locale);

  const swapLocale = (target: Locale) => {
    if (!pathname) return `/${target}`;
    const swapped = pathname.replace(/^\/(en|vi|lo)(\/|$)/, `/${target}$2`);
    if (swapped === pathname) return `/${target}`;
    return swapped || `/${target}`;
  };

  // Close on outside click or Escape.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const pick = () => {
    setOpen(false);
    onClick?.();
  };

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Change language"
        className="group flex items-center gap-1.5 text-white/80 hover:text-white transition-colors duration-300"
      >
        <Globe className="w-[18px] h-[18px] transition-transform duration-500 group-hover:rotate-[360deg]" />
        <span className="text-[14px] font-bold leading-[1.6]">{dict.language[locale]}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <ul
          role="menu"
          className="absolute right-0 mt-2 z-50 w-[190px] rounded-xl bg-at-section border border-at-border shadow-xl py-1.5 overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        >
          {LOCALES.map((l) => {
            const isCurrent = l === locale;
            return (
              <li key={l} role="none">
                {isCurrent ? (
                  <span
                    role="menuitem"
                    aria-current="true"
                    className="flex items-center justify-between gap-3 px-4 py-2.5 bg-at-bg-soft"
                  >
                    <span className="flex items-center gap-2.5 min-w-0">
                      <span className="text-[11px] font-bold tracking-[0.08em] text-at-text-muted w-7 shrink-0">
                        {LOCALE_CODES[l]}
                      </span>
                      <span className="text-sm font-bold text-at-primary truncate">{dict.language[l]}</span>
                    </span>
                    <Check className="w-4 h-4 text-at-pink shrink-0" />
                  </span>
                ) : (
                  <Link
                    role="menuitem"
                    href={swapLocale(l)}
                    onClick={pick}
                    className="flex items-center gap-2.5 px-4 py-2.5 text-at-text-dark hover:bg-at-bg-soft hover:text-at-primary transition-colors"
                  >
                    <span className="text-[11px] font-bold tracking-[0.08em] text-at-text-muted w-7 shrink-0">
                      {LOCALE_CODES[l]}
                    </span>
                    <span className="text-sm font-medium truncate">{dict.language[l]}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
