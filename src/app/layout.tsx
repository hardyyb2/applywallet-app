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

            <BaseLayout.Body className="overflow-hidden">
              <BaseLayout.Head className="h-20 w-full / fixed top-0 z-20 / bg-base-300 text-base-content / bg-opacity-50 backdrop-blur rounded-b-3xl">
                <Header />
              </BaseLayout.Head>
              <section className="h-full / pt-20 / overflow-y-auto">
                {children}
              </section>
            </BaseLayout.Body>
          </BaseLayout.Body>
        </BaseLayout>
      </body>
    </html>
  );
}
