import { BaseLayout, Navigation } from "@/components/dependent/common";

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
          <BaseLayout.Body className="grid lg:grid-cols-[max-content_auto] / bg-base-300 / overflow-hidden">
            <Navigation />
            <section className="h-full overflow-y-auto">{children}</section>
          </BaseLayout.Body>
        </BaseLayout>
      </body>
    </html>
  );
}
