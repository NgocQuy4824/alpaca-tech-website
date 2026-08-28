type Props = { children: React.ReactNode; as?: "h2" | "h3"; className?: string };

export function SectionHeading({ children, as: Tag = "h2", className = "" }: Props) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="w-2.5 h-2.5 rounded-lg bg-at-pink shrink-0" />
      <Tag className="text-at-primary text-[34px] font-bold tracking-[0.04em] font-[var(--font-noto-sans-jp)] leading-none">
        {children}
      </Tag>
    </div>
  );
}
