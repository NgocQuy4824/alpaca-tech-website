import { Breadcrumb } from "./Breadcrumb";

type Props = {
  title: string;
  subtitle?: string;
  current: string;
};

export function PageHero({ title, subtitle, current }: Props) {
  return (
    <section className="relative bg-at-primary flex justify-center px-5 lg:px-[76px] pt-[114px] pb-8">
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 25% 30%, rgba(116,114,226,0.45) 0%, transparent 45%), radial-gradient(circle at 78% 65%, rgba(241,45,144,0.18) 0%, transparent 40%)",
        }}
      />
      <div className="relative z-10 w-full max-w-[1288px] flex flex-col gap-10">
        <div className="flex flex-col gap-1">
          <h1 className="font-[var(--font-montserrat)] text-white text-[60px] lg:text-[100px] font-bold leading-none">
            {title}
          </h1>
          {subtitle ? (
            <p className="text-white/70 text-sm tracking-[0.04em] font-[var(--font-noto-sans-jp)]">
              {subtitle}
            </p>
          ) : null}
        </div>
        <div className="flex justify-end">
          <Breadcrumb current={current} />
        </div>
      </div>
    </section>
  );
}
