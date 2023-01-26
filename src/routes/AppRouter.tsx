import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { Button } from "@/components/common/Button";

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Button>Heloo</Button>
          </div>
        }
      />
      <Route path="/books">
        <Route index element={<div>Books</div>} />
        <Route path=":id" element={<div>Book 1</div>} />
      </Route>
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
};

export { AppRouter };
