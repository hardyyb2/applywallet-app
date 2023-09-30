import Hello from "./hello.mdx";
import { SWRProviders } from "./providers";

const SWRLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SWRProviders>
      <Hello />
      {children}
    </SWRProviders>
  );
};

export default SWRLayout;
