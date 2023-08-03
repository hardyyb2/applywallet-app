import "@total-typescript/ts-reset";
import clsx from "clsx";

import { BaseLayout, Navigation } from "@/components/ui/dependent/common";
import "@/styles/globals.css";
import { Header } from "@/components/ui/dependent/common/Header";
import { i18n, Locale } from "@/utils/locale-utils";

import { Providers } from "./providers";

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
                "fixed top-0 z-[5] h-16 w-full text-base-content lg:h-[--header-height] ",
                "bg-opacity-60 backdrop-blur",
              )}
            >
              {/* @ts-expect-error Server Component */}
              <Header />
            </BaseLayout.Head>
            <BaseLayout.Body
              className={clsx(
                "flex lg:grid lg:grid-cols-[max-content_auto]",
                "/ overflow-hidden bg-gradient-to-br from-primary/40 to-secondary/40",
              )}
            >
              <Navigation />
              {/* Padding top same as height of the header */}
              <section className="/ / h-full w-full  overflow-y-auto py-[--header-height]">
                {children}
              </section>
            </BaseLayout.Body>
          </Providers>
        </BaseLayout>
      </body>
    </html>
  );
}
