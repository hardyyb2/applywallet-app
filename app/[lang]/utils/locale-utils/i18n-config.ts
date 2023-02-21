export const i18n = {
  defaultLocale: "en",
  locales: ["en", "de"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

console.log("[RENDER] utils/locale-utils/i18n-config.ts");