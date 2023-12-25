import { type ReactNode } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MotionConfig } from "framer-motion";

type ProvidersType = {
  children: ReactNode;
};

const queryClient = new QueryClient();

const ExtProviders = ({ children }: ProvidersType) => {
  return (
    <QueryClientProvider client={queryClient}>
      <MotionConfig
        transition={{ type: "spring", stiffness: 400, damping: 24 }}
      >
        {children}
      </MotionConfig>
    </QueryClientProvider>
  );
};

export { ExtProviders };
