"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import type { Locale } from "@/lib/i18n/types";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { SERVICE_SLUG_BY_KEY, SERVICE_GROUPS, servicePath, type ServiceKey } from "@/lib/services";
import { LanguageSwitcher } from "./LanguageSwitcher";

type Props = { locale: Locale };

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
  groups?: { heading: string; items: { label: string; href: string }[] }[];
};

export function Header({ locale }: Props) {
  const pathname = usePathname();
  const dict = getDictionary(locale);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenuOpen(false);
    setServicesOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    document.body.style.touchAction = menuOpen ? "none" : "";
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [menuOpen]);

  const servicesHref = `/${locale}/services`;
  // Services are grouped in the desktop mega-menu exactly as the site nav labels them:
  // outsourcing (mobile, custom, testing, legacy) vs advanced tech (low-code, cloud, AI).
  const hrefFor = (key: ServiceKey) => servicePath(locale, SERVICE_SLUG_BY_KEY[key]);
  const serviceGroups = SERVICE_GROUPS.map((group) => ({
    heading: dict.services.groups[group.key],
    items: group.services.map((key) => ({ label: dict.services.nav[key], href: hrefFor(key) })),
  }));
  const serviceChildren = serviceGroups.flatMap((g) => g.items);

  const NAV_ITEMS: NavItem[] = [
    { label: dict.header.nav.solution, href: servicesHref, children: serviceChildren, groups: serviceGroups },
    { label: dict.header.nav.technologies, href: `/${locale}/technologies` },
    { label: dict.header.nav.recruit, href: `/${locale}/recruit` },
    { label: dict.header.nav.company, href: `/${locale}/company` },
  ];

  const isActive = (item: NavItem) => {
    if (item.children) return pathname.startsWith(servicesHref);
    const [path] = item.href.split("#");
    return path !== `/${locale}` && pathname === path;
  };

  return (
    <>
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
          className="flex items-center gap-3 shrink-0 transition-transform duration-300 hover:scale-[1.03]"
          aria-label={dict.header.homeAria}
        >
          {/* Glow logo — transparent PNG, renders true colors on the dark header */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo-sv.png"
            alt=""
            aria-hidden
            width={520}
            height={277}
            className="h-[56px] w-auto object-contain max-[991px]:h-[40px]"
          />
          <span className="flex flex-col leading-none">
            <span className="font-[var(--font-montserrat)] text-white font-extrabold text-[22px] max-[991px]:text-[17px] tracking-[0.02em]">SV Digital</span>
            <span className="font-[var(--font-montserrat)] text-white/80 font-bold text-[10px] max-[991px]:text-[8px] tracking-[0.28em] mt-1">SOFTWARE</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={`group/nav relative flex flex-col items-start py-1.5 ${
                    isActive(item) ? "text-white" : "text-white/80"
                  }`}
                >
                  <span className="flex items-center gap-1 text-[14px] font-bold tracking-[0.08em] leading-[1.4] transition-colors duration-300 group-hover:text-white">
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                  </span>
                  <span
                    className={`h-[2px] rounded-full bg-white transition-all duration-300 ${
                      isActive(item) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
                {/* Mega-dropdown — pt-3 bridges the hover gap so it doesn't drop */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {item.groups ? (
                    <div className="min-w-[560px] rounded-2xl bg-at-section border border-at-border shadow-xl overflow-hidden p-6 grid grid-cols-2 gap-8">
                      {item.groups.map((group) => (
                        <div key={group.heading} className="flex flex-col gap-3">
                          <span className="text-[11px] font-extrabold tracking-[0.18em] text-at-primary/70">{group.heading.toUpperCase()}</span>
                          <ul className="flex flex-col gap-0.5">
                            {group.items.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  className="flex items-center gap-2.5 py-2 text-at-text-dark hover:text-at-primary text-sm font-medium transition-colors"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-at-pink shrink-0" />
                                  <span>{child.label}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="w-[300px] rounded-xl bg-at-section border border-at-border shadow-xl py-2 overflow-hidden">
                      {item.children!.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="flex items-center gap-2.5 px-4 py-2.5 text-at-text-dark hover:bg-at-bg-soft hover:text-at-primary text-sm font-medium transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-at-pink shrink-0" />
                            <span className="truncate">{child.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative flex flex-col items-start py-1.5 ${
                  isActive(item) ? "text-white" : "text-white/80"
                }`}
              >
                <span className="text-[14px] font-bold tracking-[0.08em] leading-[1.4] transition-colors duration-300 group-hover:text-white">
                  {item.label}
                </span>
                <span
                  className={`h-[2px] rounded-full bg-white transition-all duration-300 ${
                    isActive(item) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <LanguageSwitcher locale={locale} />

          <Link
            href={`/${locale}/contact`}
            className="group flex items-center gap-2.5 bg-white rounded-full pl-5 pr-1.5 py-1.5 hover:bg-at-hover hover:text-at-primary hover:shadow-[0_8px_24px_rgba(45,56,100,0.35)] transition-all duration-300"
          >
            <span className="text-at-primary group-hover:text-at-primary text-[14px] font-bold tracking-[0.08em] transition-colors duration-300">
              {dict.header.contact}
            </span>
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-at-primary text-white group-hover:bg-white transition-colors duration-300">
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
          className="relative z-50 lg:hidden flex items-center justify-center w-11 h-11 -m-2 p-2 rounded-full text-white hover:bg-white/10 transition-colors"
          aria-label={menuOpen ? dict.header.closeMenu : dict.header.openMenu}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </header>

    <div
      id="mobile-menu"
      className={`lg:hidden fixed inset-0 z-40 bg-at-primary/98 backdrop-blur-2xl transition-opacity duration-500 ${
        menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
        <div
          className="flex flex-col h-full pt-28 pb-10 px-8 overflow-y-auto overscroll-contain"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <nav className="flex flex-col flex-1">
            {NAV_ITEMS.map((item, i) =>
              item.children ? (
                <div
                  key={item.href}
                  style={{ transitionDelay: menuOpen ? `${100 + i * 60}ms` : "0ms" }}
                  className={`border-b border-white/10 transition-all duration-500 ${
                    menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setServicesOpen((v) => !v)}
                    aria-expanded={servicesOpen}
                    className="w-full flex items-center justify-between py-5"
                  >
                    <span className="font-[var(--font-montserrat)] text-white text-2xl font-bold tracking-[0.08em]">
                      {item.label}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-white/40 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 overflow-hidden ${
                      servicesOpen ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="flex flex-col gap-3 min-h-0">
                      {item.groups ? (
                        item.groups.map((group) => (
                          <div key={group.heading} className="flex flex-col gap-1">
                            <span className="px-4 pt-1 text-[10px] font-extrabold tracking-[0.18em] text-white/40">
                              {group.heading.toUpperCase()}
                            </span>
                            <ul className="flex flex-col gap-0.5">
                              {group.items.map((child) => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="flex items-center gap-2.5 py-2.5 pl-4 text-white/80 hover:text-white text-base font-medium transition-colors"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-at-pink shrink-0" />
                                    <span className="truncate">{child.label}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))
                      ) : (
                        <ul className="flex flex-col gap-1">
                          {item.children!.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={() => setMenuOpen(false)}
                                className="flex items-center gap-2.5 py-2.5 pl-4 text-white/80 hover:text-white text-base font-medium transition-colors"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-at-pink shrink-0" />
                                <span className="truncate">{child.label}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
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
              )
            )}
          </nav>

          <div
            style={{ transitionDelay: menuOpen ? "450ms" : "0ms" }}
            className={`flex flex-col gap-4 transition-all duration-500 ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <LanguageSwitcher locale={locale} onClick={() => setMenuOpen(false)} className="text-white/80 hover:text-white" />
            <Link
              href={`/${locale}/contact`}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between bg-white rounded-full px-6 py-4 hover:bg-at-hover hover:text-at-primary group transition-colors"
            >
              <span className="text-at-primary group-hover:text-at-primary text-sm font-bold tracking-[0.08em] transition-colors">
                {dict.header.contact}
              </span>
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-at-primary group-hover:bg-white transition-colors">
                <ArrowRight className="w-4 h-4 text-white group-hover:text-at-primary transition-colors" strokeWidth={2.5} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
