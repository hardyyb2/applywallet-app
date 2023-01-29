import { FC, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("@/pages/home").then((module) => ({ default: module.Home })));

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books">
        <Route index element={<div>Books</div>} />
        <Route path=":id" element={<div>Book 1</div>} />
      </Route>
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
};

export { AppRouter };
