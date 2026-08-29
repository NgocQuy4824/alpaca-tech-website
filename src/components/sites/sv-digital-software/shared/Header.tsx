"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import type { Locale } from "@/lib/i18n/types";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { LanguageSwitcher } from "./LanguageSwitcher";

type Props = { locale: Locale };

export function Header({ locale }: Props) {
  const pathname = usePathname();
  const dict = getDictionary(locale);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) => {
    const [path] = href.split("#");
    return path !== `/${locale}` && pathname === path;
  };

  const NAV_ITEMS = [
    { label: dict.header.nav.solution, href: `/${locale}/solution` },
    { label: dict.header.nav.aim, href: `/${locale}/aim` },
    { label: dict.header.nav.company, href: `/${locale}/company` },
    { label: dict.header.nav.recruit, href: `/${locale}/recruit` },
    { label: dict.header.nav.news, href: `/${locale}/news` },
  ] as const;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-at-primary/85 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
          : "bg-transparent"
      }`}
    >
      <div
        className={`flex items-center justify-between w-full max-w-[1360px] mx-auto px-[76px] max-[991px]:px-8 max-[540px]:px-5 transition-all duration-500 ${
          scrolled ? "py-3.5" : "py-6"
        }`}
      >
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2.5 shrink-0 transition-transform duration-300 hover:scale-[1.03]"
          aria-label={dict.header.homeAria}
        >
          <span className="flex items-center justify-center h-[46px] w-[46px] max-[991px]:h-[34px] max-[991px]:w-[34px] rounded-xl bg-white text-at-primary font-[var(--font-montserrat)] font-extrabold text-lg max-[991px]:text-sm leading-none select-none">
            SV
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-[var(--font-montserrat)] text-white font-extrabold text-[22px] max-[991px]:text-[17px] tracking-[0.02em]">SV Digital</span>
            <span className="font-[var(--font-montserrat)] text-white/80 font-bold text-[10px] max-[991px]:text-[8px] tracking-[0.28em] mt-1">SOFTWARE</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative flex flex-col items-start py-1.5 ${
                isActive(item.href) ? "text-white" : "text-white/80"
              }`}
            >
              <span className="text-[14px] font-bold tracking-[0.08em] leading-[1.4] transition-colors duration-300 group-hover:text-white">
                {item.label}
              </span>
              <span
                className={`h-[2px] rounded-full bg-white transition-all duration-300 ${
                  isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <LanguageSwitcher locale={locale} />

          <Link
            href={`/${locale}#contact`}
            className="group flex items-center gap-2.5 bg-white rounded-full pl-5 pr-1.5 py-1.5 hover:bg-at-accent hover:shadow-[0_8px_24px_rgba(88,149,7,0.4)] transition-all duration-300"
          >
            <span className="text-at-primary group-hover:text-white text-[14px] font-bold tracking-[0.08em] transition-colors duration-300">
              {dict.header.contact}
            </span>
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-at-primary group-hover:bg-white transition-colors duration-300">
              <ArrowRight
                className="w-4 h-4 text-white group-hover:text-at-primary transition-all duration-300 group-hover:translate-x-0.5"
                strokeWidth={2.5}
              />
            </span>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="lg:hidden flex items-center justify-center w-11 h-11 rounded-full text-white hover:bg-white/10 transition-colors"
          aria-label={menuOpen ? dict.header.closeMenu : dict.header.openMenu}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div
        className={`lg:hidden fixed inset-0 top-0 z-40 bg-at-primary/98 backdrop-blur-2xl transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full pt-28 pb-10 px-8">
          <nav className="flex flex-col flex-1">
            {NAV_ITEMS.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{ transitionDelay: menuOpen ? `${100 + i * 60}ms` : "0ms" }}
                className={`flex items-center justify-between py-5 border-b border-white/10 transition-all duration-500 ${
                  menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <span className="font-[var(--font-montserrat)] text-white text-2xl font-bold tracking-[0.08em]">
                  {item.label}
                </span>
                <ArrowRight className="w-5 h-5 text-white/40" />
              </Link>
            ))}
          </nav>

          <div
            style={{ transitionDelay: menuOpen ? "450ms" : "0ms" }}
            className={`flex flex-col gap-4 transition-all duration-500 ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <LanguageSwitcher locale={locale} onClick={() => setMenuOpen(false)} className="text-white/80 hover:text-white" />
            <Link
              href={`/${locale}#contact`}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between bg-white rounded-full px-6 py-4 hover:bg-at-accent group transition-colors"
            >
              <span className="text-at-primary group-hover:text-white text-sm font-bold tracking-[0.08em] transition-colors">
                {dict.header.contact}
              </span>
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-at-primary group-hover:bg-white transition-colors">
                <ArrowRight className="w-4 h-4 text-white group-hover:text-at-primary transition-colors" strokeWidth={2.5} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
