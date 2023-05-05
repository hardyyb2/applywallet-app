import "@total-typescript/ts-reset";
import clsx from "clsx";

import {
  BaseLayout,
  LocaleSwitcher,
  Navigation,
  ThemesMenu,
  UserMenu,
} from "@/components/ui/dependent/common";

import "./globals.css";
import { Header } from "./Header";
import { Providers } from "./providers";
import { i18n, Locale } from "./utils/locale-utils/i18n-config";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

// eslint-disable-next-line import/no-default-export
export default function RootLayout({
  params: { lang = "en" },
  children,
}: {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
}) {
  return (
    <html lang={lang}>
      <head />
      <body>
        <BaseLayout className="h-full">
          <Providers>
            <BaseLayout.Head
              className={clsx(
                "fixed top-0 z-[5] / h-16 lg:h-20 w-full / text-base-content ",
                "bg-opacity-60 backdrop-blur",
              )}
            >
              <Header>
                <ThemesMenu />
                <LocaleSwitcher />
                <UserMenu />
              </Header>
            </BaseLayout.Head>
            <BaseLayout.Body
              className={clsx(
                "flex lg:grid lg:grid-cols-[max-content_auto]",
                "bg-gradient-to-br to-secondary/40 from-primary/40 / overflow-hidden",
              )}
            >
              <Navigation />
              {/* Padding top same as height of the header */}
              <section className="h-full w-full / py-20 / overflow-y-auto">
                {children}
              </section>
            </BaseLayout.Body>
          </Providers>
        </BaseLayout>
      </body>
    </html>
  );
}
