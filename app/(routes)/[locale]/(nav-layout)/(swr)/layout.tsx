import { type ReactNode } from "react";

import { SWRProviders } from "./providers";

const SWRLayout = ({ children }: { children: ReactNode }) => {
  return <SWRProviders>{children}</SWRProviders>;
};

export default SWRLayout;
