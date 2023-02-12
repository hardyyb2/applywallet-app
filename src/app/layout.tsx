/* eslint-disable import/no-default-export */
import { BaseLayout, Header, Navigation } from "@/components/dependent/common";
import clsx from "clsx";

import { Flex } from "./components/isolated/common";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <BaseLayout className="h-full">
          <BaseLayout.Head
            className={clsx(
              "fixed top-0 z-20 / h-20 w-full / bg-base-300 text-base-content ",
              "bg-opacity-50 backdrop-blur",
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
