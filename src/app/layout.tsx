import {
  BaseLayout,
  BaseScrollbar,
  SideNav,
} from "@/app/Components/dependent/page_components/common";
import { Navbar } from "@/app/Components/isolated/wrapped";
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
          <BaseLayout.Head>
            <Navbar className="text-primary-content">
              <Navbar.Start className="pl-4">hardik badola</Navbar.Start>
            </Navbar>
          </BaseLayout.Head>
          <BaseLayout.Body className="grid grid-cols-[max-content_auto] / overflow-hidden">
            <aside className="overflow-y-auto">
              <BaseScrollbar>
                <SideNav />
              </BaseScrollbar>
            </aside>
            <section className="overflow-y-auto">
              <BaseScrollbar>{children}</BaseScrollbar>
            </section>
          </BaseLayout.Body>
        </BaseLayout>
      </body>
    </html>
  );
}
