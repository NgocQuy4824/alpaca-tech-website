import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-at-primary min-h-screen flex flex-col items-center justify-center px-5 lg:px-[76px]">
      <div className="max-w-[640px] flex flex-col items-center gap-8 text-center">
        <p className="text-at-pink text-sm font-bold tracking-[0.2em]">404 — PAGE NOT FOUND</p>
        <h1 className="font-[var(--font-montserrat)] text-white font-bold leading-none text-[40px] sm:text-[48px] lg:text-[72px]">
          Oops!
        </h1>
        <p className="text-white/70 text-base leading-[2] tracking-[0.04em] font-[var(--font-noto-sans-jp)]">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/en"
          className="inline-flex items-center gap-3 bg-white text-at-primary rounded-lg px-8 py-4 hover:bg-at-hover hover:text-at-primary transition-colors"
        >
          <span className="text-sm font-bold tracking-[0.04em]">Back to home</span>
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
