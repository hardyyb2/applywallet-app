import {
  BaseLayout,
  BaseScrollbar,
  SideNav,
} from "@/app/components/dependent/page_components/common";
import { Navbar } from "@/app/components/isolated/wrapped";
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
            <aside className="h-full overflow-hidden">
              <SideNav />
            </aside>

            <section className="h-full overflow-y-auto">{children}</section>
          </BaseLayout.Body>
        </BaseLayout>
      </body>
    </html>
  );
}
