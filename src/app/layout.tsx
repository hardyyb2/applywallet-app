import { BaseLayout, SideNav } from "@/components/dependent/common";
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
          <BaseLayout.Body className="grid grid-cols-[max-content_auto] / bg-base-300 / overflow-hidden">
            <Flex
              component="aside"
              justify="center"
              className="h-full overflow-hidden"
            >
              <SideNav />
            </Flex>

            <section className="h-full overflow-y-auto">{children}</section>
          </BaseLayout.Body>
        </BaseLayout>
      </body>
    </html>
  );
}
