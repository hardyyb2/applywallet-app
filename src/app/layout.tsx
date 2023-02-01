import {
  BaseLayout,
  BaseScrollbar,
  SideNav,
} from "@/app/Components/dependent/page_components/common";
import { Drawer, Navbar } from "@/app/Components/isolated/wrapped";
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
            <Navbar className="bg-base-200 text-primary-content">
              <Navbar.Start className="pl-4">hardik badola</Navbar.Start>
            </Navbar>
          </BaseLayout.Head>
          <BaseLayout.Body className="overflow-hidden">
            <Drawer mobile className="h-full">
              <Drawer.Side>
                <BaseScrollbar>
                  <SideNav />
                </BaseScrollbar>
              </Drawer.Side>
              <Drawer.Main className="p-4">
                <BaseScrollbar>{children}</BaseScrollbar>
              </Drawer.Main>
            </Drawer>
          </BaseLayout.Body>
        </BaseLayout>
      </body>
    </html>
  );
}
