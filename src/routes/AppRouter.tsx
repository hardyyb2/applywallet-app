/* eslint-disable react/no-array-index-key */
import { FC, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { BaseLayout } from "@/components/dependent/page_components/common";
import { Drawer, Navbar, ScrollArea } from "@/components/isolated/wrapped";

const Home = lazy(() => import("@/pages/home").then((module) => ({ default: module.Home })));

const AppRouter: FC = () => {
  return (
    <BaseLayout className="h-full">
      <BaseLayout.Head>
        <Navbar className="bg-primary text-primary-content">
          <Navbar.Center>Applywallet</Navbar.Center>
        </Navbar>
      </BaseLayout.Head>
      <BaseLayout.Body className="overflow-hidden">
        <Drawer mobile className="h-full">
          <Drawer.Side>
            <ScrollArea.Root>
              <ScrollArea.Viewport className="w-full h-full">
                <ul className="menu w80 p-4">
                  {Array(900)
                    .fill(undefined)
                    .map((_item, index) => (
                      <li key={index} className="">
                        <a href="#a">{index}</a>
                      </li>
                    ))}
                </ul>
              </ScrollArea.Viewport>
            </ScrollArea.Root>
          </Drawer.Side>
          <Drawer.Main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/books">
                <Route index element={<div>Books</div>} />
                <Route path=":id" element={<div>Book 1</div>} />
              </Route>
              <Route path="*" element={<div>Not found</div>} />
            </Routes>
          </Drawer.Main>
        </Drawer>
      </BaseLayout.Body>
    </BaseLayout>
  );
};

export { AppRouter };
