import { BaseLayout } from "@/components/dependent/page_components/common";
import { Drawer, Navbar } from "@/components/isolated/wrapped";
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
            <Navbar className="bg-primary text-primary-content">
              <Navbar.Center>hardik badola</Navbar.Center>
            </Navbar>
          </BaseLayout.Head>
          <BaseLayout.Body className="overflow-hidden">
            <Drawer mobile className="h-full">
              <Drawer.Side>
                <ul className="menu w80 p-4">
                  {Array(900)
                    .fill(undefined)
                    .map((_item, index) => (
                      <li key={index} className="">
                        <a href="#a">{index}</a>
                      </li>
                    ))}
                </ul>
                {/* <ScrollArea.Root>
                  <ScrollArea.Viewport className="w-full h-full">

                  </ScrollArea.Viewport>
                </ScrollArea.Root> */}
              </Drawer.Side>
              <Drawer.Main>{children}</Drawer.Main>
            </Drawer>
          </BaseLayout.Body>
        </BaseLayout>
      </body>
    </html>
  );
}
