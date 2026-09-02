import Link from "next/link";
import type { Locale } from "@/lib/i18n/types";

type Props = {
  current: string;
  locale: Locale;
  parent?: { label: string; href: string };
};

export function Breadcrumb({ current, locale, parent }: Props) {
  return (
    <div className="flex items-center gap-2 text-xs tracking-[0.04em]">
      <Link href={`/${locale}`} className="text-white hover:opacity-70 transition-opacity">
        TOP
      </Link>
      <span className="text-white/50">/</span>
      {parent ? (
        <>
          <Link href={parent.href} className="text-white hover:opacity-70 transition-opacity">
            {parent.label}
          </Link>
          <span className="text-white/50">/</span>
        </>
      ) : null}
      <span className="text-white/50">{current}</span>
    </div>
  );
}
