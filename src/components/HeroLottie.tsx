"use client";

import { useEffect, useRef } from "react";

type Variant = "desktop" | "mobile";

const SRC: Record<Variant, string> = {
  desktop: "/lottie/hero-lottie.json",
  mobile: "/lottie/hero-lottie-sp.json",
};

export function HeroLottie({ variant, className }: { variant: Variant; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let animation: { destroy: () => void } | null = null;
    let cancelled = false;

    (async () => {
      try {
        const [data, { default: lottie }] = await Promise.all([
          fetch(SRC[variant]).then((r) => (r.ok ? r.json() : null)),
          import("lottie-web/build/player/lottie_svg"),
        ]);
        if (cancelled || !data) return;
        animation = lottie.loadAnimation({
          container: el,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: data,
          rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
        });
      } catch {}
    })();

    return () => {
      cancelled = true;
      animation?.destroy();
    };
  }, [variant]);

  return <div ref={ref} aria-hidden className={className} />;
}
