"use client";

import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <LazyMotion features={domAnimation}>
        <MotionConfig
          transition={{ type: "spring", stiffness: 400, damping: 24 }}
        >
          {children}
        </MotionConfig>
      </LazyMotion>
    </SessionProvider>
  );
};

export { Providers };
