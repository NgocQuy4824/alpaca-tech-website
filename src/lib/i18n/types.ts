export type Locale = "en" | "vi";
export const LOCALES = ["en", "vi"] as const;
export const DEFAULT_LOCALE: Locale = "en";

export function isValidLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
