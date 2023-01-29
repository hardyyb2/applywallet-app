import { FC, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { BaseLayout } from "@/components/dependent/page_components/common";
import { Navbar } from "@/components/isolated/wrapped";

const Home = lazy(() => import("@/pages/home").then((module) => ({ default: module.Home })));

const AppRouter: FC = () => {
  return (
    <BaseLayout className="h-full">
      <BaseLayout.Head>
        <Navbar className="bg-primary text-primary-content">Hi there</Navbar>
      </BaseLayout.Head>
      <BaseLayout.Body>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books">
            <Route index element={<div>Books</div>} />
            <Route path=":id" element={<div>Book 1</div>} />
          </Route>
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </BaseLayout.Body>
    </BaseLayout>
  );
};

export { AppRouter };
