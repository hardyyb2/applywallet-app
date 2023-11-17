import { type ReactNode } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { domAnimation, LazyMotion, MotionConfig } from "framer-motion";

type ProvidersType = {
  children: ReactNode;
};

const queryClient = new QueryClient();

const ExtProviders = ({ children }: ProvidersType) => {
  return (
    <QueryClientProvider client={queryClient}>
      <LazyMotion features={domAnimation}>
        <MotionConfig
          transition={{ type: "spring", stiffness: 400, damping: 24 }}
        >
          {children}
        </MotionConfig>
      </LazyMotion>
    </QueryClientProvider>
  );
};

export { ExtProviders };
