import { type ReactNode } from "react";

import { domAnimation, LazyMotion, MotionConfig } from "framer-motion";

type ProvidersType = {
  children: ReactNode;
};

const ExtProviders = ({ children }: ProvidersType) => {
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig
        transition={{ type: "spring", stiffness: 400, damping: 24 }}
      >
        {children}
      </MotionConfig>
    </LazyMotion>
  );
};

export { ExtProviders };
