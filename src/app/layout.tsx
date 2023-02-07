import { BaseLayout, BottomNav, SideNav } from "@/components/dependent/common";

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
            <Flex
              component="aside"
              justify="center"
              className="hidden lg:flex /  h-full overflow-hidden"
            >
              <SideNav />
            </Flex>

            <section className="h-full overflow-y-auto">{children}</section>

            <BottomNav className="lg:hidden" />
          </BaseLayout.Body>
        </BaseLayout>
      </body>
    </html>
  );
}
