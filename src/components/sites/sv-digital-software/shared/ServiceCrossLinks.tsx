import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SERVICE_SLUG_BY_KEY, serviceGroupOf, type ServiceKey } from "@/lib/services";

type Props = {
  locale: string;
  currentKey: ServiceKey;
  heading: string;
  nav: Record<ServiceKey, string>;
};

export function ServiceCrossLinks({ locale, currentKey, heading, nav }: Props) {
  // Show other services in the same group first, then one from the other group
  // (keeps the card row at 3 items and surfaces the full range).
  const group = serviceGroupOf(currentKey);
  const groupOthers = group.filter((k) => k !== currentKey);
  const external = (Object.keys(SERVICE_SLUG_BY_KEY) as ServiceKey[]).filter(
    (k) => k !== currentKey && !group.includes(k)
  ) as ServiceKey[];
  const others: ServiceKey[] = [...groupOthers, external[0]].slice(0, 3);
  return (
    <nav className="flex flex-col gap-4" aria-label={heading}>
      <h2 className="text-at-text-muted text-xs font-bold tracking-[0.24em] font-[var(--font-montserrat)]">
        {heading}
      </h2>
      <ul className="grid sm:grid-cols-3 gap-3">
        {others.map((key) => (
          <li key={key}>
            <Link
              href={`/${locale}/services/${SERVICE_SLUG_BY_KEY[key]}`}
              className="group flex items-center justify-between gap-3 rounded-2xl border border-at-border bg-at-bg-soft px-4 py-4 hover:border-at-primary/20 hover:bg-at-hover hover:text-at-primary transition-colors"
            >
              <span className="text-at-text-dark text-sm font-bold tracking-[0.02em] font-[var(--font-noto-sans-jp)] group-hover:text-at-primary transition-colors">
                {nav[key]}
              </span>
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-at-primary/8 text-at-primary group-hover:bg-at-primary group-hover:text-white hover:bg-at-hover hover:text-at-primary transition-colors shrink-0">
                <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
