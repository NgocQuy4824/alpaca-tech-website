"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Globe, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "SOLUTION", href: "/en/solution" },
  { label: "AIM", href: "/en/aim" },
  { label: "COMPANY", href: "/en/company" },
  { label: "RECRUIT", href: "/en/recruit" },
  { label: "NEWS", href: "/en/news" },
] as const;

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  // Close the mobile menu whenever the route changes (render-time reset,
  // per https://react.dev/learn/you-might-not-need-an-effect)
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

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) => {
    const [path] = href.split("#");
    return path !== "/en" && pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-at-primary/85 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
          : "bg-transparent"
      }`}
    >
      <div
        className={`flex items-center justify-between w-full max-w-[1360px] mx-auto px-[76px] max-[991px]:px-8 max-[540px]:px-5 transition-all duration-500 ${
          scrolled ? "py-3.5" : "py-6"
        }`}
      >
        {/* Logo */}
        <Link
          href="/en"
          className="flex items-center gap-[5px] shrink-0 transition-transform duration-300 hover:scale-[1.03]"
          aria-label="AlpacaTech home"
        >
          {/* eslint-disable @next/next/no-img-element */}
          <img
            src="https://storage.googleapis.com/studio-design-asset-files/projects/4yqBl2mdWj/s-45x50_030be4ed-718d-43a1-829f-973b0b230ea6.svg"
            alt="AlpacaTech icon"
            className="h-[50px] w-[44px] max-[991px]:h-[30px] max-[991px]:w-[35px] object-contain"
          />
          <img
            src="https://storage.googleapis.com/studio-design-asset-files/projects/4yqBl2mdWj/s-152x50_f6b98fc6-7513-4527-81e0-cadcd7b6be47.svg"
            alt="AlpacaTech"
            className="h-[50px] w-[152px] max-[991px]:h-[30px] max-[991px]:w-[108px] object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-9">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`group relative flex flex-col items-start py-1.5 ${
                isActive(item.href) ? "text-white" : "text-white/80"
              }`}
            >
              <span className="text-[14px] font-bold tracking-[0.08em] leading-[1.4] transition-colors duration-300 group-hover:text-white">
                {item.label}
              </span>
              <span
                className={`h-[2px] rounded-full bg-gradient-to-r from-at-accent to-at-pink transition-all duration-300 ${
                  isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Right side: language + contact */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            href="/"
            className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300"
          >
            <span className="text-[14px] font-bold leading-[1.6]">Japanese</span>
            <Globe className="w-[18px] h-[18px] transition-transform duration-500 group-hover:rotate-[360deg]" />
          </Link>

          <Link
            href="/en#contact"
            className="group flex items-center gap-2.5 bg-white rounded-full pl-5 pr-1.5 py-1.5 hover:bg-at-accent hover:shadow-[0_8px_24px_rgba(116,114,226,0.5)] transition-all duration-300"
          >
            <span className="text-at-primary group-hover:text-white text-[14px] font-bold tracking-[0.08em] transition-colors duration-300">
              CONTACT
            </span>
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-at-primary group-hover:bg-white transition-colors duration-300">
              <ArrowRight
                className="w-4 h-4 text-white group-hover:text-at-primary transition-all duration-300 group-hover:translate-x-0.5"
                strokeWidth={2.5}
              />
            </span>
          </Link>
        </div>

        {/* Hamburger — visible on tablet/mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="lg:hidden flex items-center justify-center w-11 h-11 rounded-full text-white hover:bg-white/10 transition-colors"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-0 z-40 bg-at-primary/98 backdrop-blur-2xl transition-all duration-500 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full pt-28 pb-10 px-8">
          <nav className="flex flex-col flex-1">
            {NAV_ITEMS.map((item, i) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{ transitionDelay: menuOpen ? `${100 + i * 60}ms` : "0ms" }}
                className={`flex items-center justify-between py-5 border-b border-white/10 transition-all duration-500 ${
                  menuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
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
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <Globe className="w-5 h-5" />
              <span className="text-sm font-bold tracking-[0.08em]">Japanese</span>
            </Link>
            <Link
              href="/en#contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between bg-white rounded-full px-6 py-4 hover:bg-at-accent group transition-colors"
            >
              <span className="text-at-primary group-hover:text-white text-sm font-bold tracking-[0.08em] transition-colors">
                CONTACT
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
