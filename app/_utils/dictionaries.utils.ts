import "server-only";

import type { Locale } from "./locale-utils/i18n-config";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries: Record<Locale, () => any> = {
  en: () =>
    import("public/dictionaries/en.json").then((module) => module.default),
  es: () =>
    import("public/dictionaries/es.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
