import { dictionaries } from "./dictionaries";
import type { Locale } from "./types";
import type { Dictionary } from "./dictionaries";

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
