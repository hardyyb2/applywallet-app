const config = {
  next: {
    entry: [
      "next.config.{js,ts,cjs,mjs}",
      "{instrumentation,middleware}.{js,ts,jsx,tsx}",
      "app/global-error.{js,jsx,ts,tsx}",
      "app/**/{error,layout,loading,not-found,page,template,default}.{js,jsx,ts,tsx}",
      "app/**/route.{js,jsx,ts,tsx}",
      "app/{manifest,sitemap,robots}.{js,ts}",
      "contentlayer.config.ts",
      "app/**/{icon,apple-icon}.{js,jsx,ts,tsx}",
      "app/**/{opengraph,twitter}-image.{js,jsx,ts,tsx}",
      "pages/**/*.{js,jsx,ts,tsx}",
      "src/**/*.{js,jsx,ts,tsx}",
      "tailwind.config.ts",
    ],
  },
  ignoreDependencies: [
    "@types/gtag.js",
    "type-fest",
    "@vitest/ui",
    "concurrently",
    "axios-mock-adapter",
  ],
  ignore: ["/setupTest.ts"],
  ignoreUnresolved: ["/setupTest.ts"],
};

export default config;
