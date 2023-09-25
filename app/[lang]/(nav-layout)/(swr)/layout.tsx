import { SWRProviders } from "./providers";

const SWRLayout = ({ children }: { children: React.ReactNode }) => {
  return <SWRProviders>{children}</SWRProviders>;
};

export default SWRLayout;
