/* eslint-disable import/no-default-export */
import { BaseLayout, Header, Navigation } from "@/components/dependent/common";

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
          <BaseLayout.Body className="flex lg:grid lg:grid-cols-[max-content_auto] / bg-base-300 / overflow-hidden">
            <Navigation />

            <BaseLayout.Body>
              <BaseLayout.Head
                className="sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-5  transition-all duration-100
  bg-base-100 text-base-content shadow-sm"
              >
                <Header />
              </BaseLayout.Head>
              <section className="h-full overflow-y-auto">{children}</section>
            </BaseLayout.Body>
          </BaseLayout.Body>
        </BaseLayout>
      </body>
    </html>
  );
}
