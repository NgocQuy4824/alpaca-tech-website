type Props = { children: React.ReactNode; as?: "h2" | "h3"; className?: string };

export function SectionHeading({ children, as: Tag = "h2", className = "" }: Props) {
  return (
    <div className={`flex items-center gap-2 ${className} min-w-0`}>
      <span className="w-2.5 h-2.5 rounded-lg bg-at-pink shrink-0" />
      <Tag className="text-at-primary font-bold tracking-[0.04em] font-[var(--font-noto-sans-jp)] leading-none break-words [overflow-wrap:anywhere] text-[24px] sm:text-[28px] lg:text-[34px]">
        {children}
      </Tag>
    </div>
  );
}
