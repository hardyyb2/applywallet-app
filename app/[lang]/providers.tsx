"use client";

import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
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

export { Providers };
