import Link from "next/link";
import type { Locale } from "@/lib/i18n/types";

export function Breadcrumb({ current, locale }: { current: string; locale: Locale }) {
  return (
    <div className="flex items-center gap-2 text-xs tracking-[0.04em]">
      <Link href={`/${locale}`} className="text-white hover:opacity-70 transition-opacity">
        TOP
      </Link>
      <span className="text-white/50">/</span>
      <span className="text-white/50">{current}</span>
    </div>
  );
}
