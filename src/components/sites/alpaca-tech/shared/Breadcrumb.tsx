import Link from "next/link";

export function Breadcrumb({ current }: { current: string }) {
  return (
    <div className="flex items-center gap-2 text-xs tracking-[0.04em]">
      <Link href="/en" className="text-white hover:opacity-70 transition-opacity">
        TOP
      </Link>
      <span className="text-white/50">/</span>
      <span className="text-white/50">{current}</span>
    </div>
  );
}
