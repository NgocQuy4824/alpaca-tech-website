"use client";

import { ArrowUp } from "lucide-react";

type Props = {
  label: string;
  className?: string;
};

/**
 * Smooth-scrolls the viewport to the top. Rendered as a <button> (not an
 * <a href="#">) so it carries correct action semantics and never pollutes
 * the URL with a hash — better for accessibility and SEO.
 */
export function BackToTop({ label, className = "" }: Props) {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={label}
      className={className}
    >
      <ArrowUp className="w-6 h-6" strokeWidth={2.5} />
    </button>
  );
}
