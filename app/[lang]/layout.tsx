import "@total-typescript/ts-reset";

import { i18n, Locale } from "@/utils/locale-utils";

import { Providers } from "./providers";

import "@/styles/globals.scss";
import "@/styles/overrides/toast.scss";
import "@/styles/overrides/daisyui.scss";

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
    <html lang={lang}>
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
