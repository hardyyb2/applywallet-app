import { i18n, Locale } from "@/_utils/locale-utils";

import { Providers } from "./providers";

import "@/styles/globals.scss";
import "@/styles/overrides/toast.scss";
import "@/styles/overrides/daisyui.scss";
import "@/styles/mdx.scss";

import { ReactNode } from "react";

import { fonts } from "@/_lib/fonts";
import { cn } from "@/_utils/styles.utils";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const RootLayout = ({
  params: { lang = "en" },
  children,
}: {
  children: ReactNode;
  params: {
    lang: Locale;
  };
}) => {
  return (
    <html lang={lang} className={cn(fonts.secondary.className, "bg-base-200")}>
      <head />
      <body
        className={cn(
          fonts.primary.variable,
          fonts.secondary.variable,
          "mx-auto max-w-screen-4xl",
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
