import "@total-typescript/ts-reset";
import clsx from "clsx";

import { BaseLayout, Navigation } from "@/components/ui/dependent/common";

import "../globals.css";
import { Providers } from "./providers";

import { Header } from "@/components/ui/dependent/common/Header";
import { i18n, Locale } from "@/utils/locale-utils/i18n-config";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

// eslint-disable-next-line import/no-default-export
export default async function RootLayout({
  params: { lang = "en" },
  children,
}: {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
}) {
  return (
    <html lang={lang} suppressHydrationWarning>
      <head />
      <body>
        <BaseLayout className="h-full">
          <Providers>
            <BaseLayout.Head
              className={clsx(
                "fixed top-0 z-[5] / h-16 lg:h-[--header-height] w-full / text-base-content ",
                "bg-opacity-60 backdrop-blur",
              )}
            >
              {/* @ts-expect-error Server Component */}
              <Header />
            </BaseLayout.Head>
            <BaseLayout.Body
              className={clsx(
                "flex lg:grid lg:grid-cols-[max-content_auto]",
                "bg-gradient-to-br to-secondary/40 from-primary/40 / overflow-hidden",
              )}
            >
              <Navigation />
              {/* Padding top same as height of the header */}
              <section className="h-full w-full / py-[--header-height]  / overflow-y-auto">
                {children}
              </section>
            </BaseLayout.Body>
          </Providers>
        </BaseLayout>
      </body>
    </html>
  );
}
