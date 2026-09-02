type Props = { data: Record<string, unknown> };

/** Renders a JSON-LD structured-data block. Server-safe (no client hooks). */
export function JsonLd({ data }: Props) {
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
