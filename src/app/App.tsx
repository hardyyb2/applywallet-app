import { FC } from "react";

import { AppRouter } from "@/routes";

const App: FC = () => {
  return (
    <div className="text-white">
      <AppRouter />
    </div>
  );
};
export { App };
