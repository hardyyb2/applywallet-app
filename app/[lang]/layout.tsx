/* eslint-disable import/no-default-export */
import clsx from "clsx";

import { BaseLayout, Header, Navigation } from "@/components/dependent/common";

import "./globals.css";
import { i18n, Locale } from "./utils/locale-utils/i18n-config";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

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
          <BaseLayout.Head
            className={clsx(
              "fixed top-0 z-[5] / h-20 w-full / bg-base-300 text-base-content ",
              "bg-opacity-60 backdrop-blur",
            )}
          >
            <Header />
          </BaseLayout.Head>
          <BaseLayout.Body
            className={clsx(
              "flex lg:grid lg:grid-cols-[max-content_auto]",
              "bg-base-300 / overflow-hidden",
            )}
          >
            <Navigation />
            {/* Padding top same as height of the header */}
            <section className="h-full w-full / pt-20 / overflow-y-auto">
              {children}
            </section>
          </BaseLayout.Body>
        </BaseLayout>
      </body>
    </html>
  );
}
