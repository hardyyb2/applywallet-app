import { i18n, Locale } from "@/_utils/locale-utils";

import { Providers } from "./providers";

import "@/styles/globals.scss";
import "@/styles/overrides/toast.scss";
import "@/styles/overrides/daisyui.scss";

import { fonts } from "@/_lib/fonts";
import { cn } from "@/_utils/styles.utils";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const RootLayout = ({
  params: { lang = "en" },
  children,
}: {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
}) => {
  return (
    <html lang={lang} className={fonts.secondary.className}>
      <head />
      <body className={cn(fonts.primary.variable, fonts.secondary.variable)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
