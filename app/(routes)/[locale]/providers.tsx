"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import dynamic from "next/dynamic";

import { domAnimation, LazyMotion, MotionConfig } from "framer-motion";
import { ToastContainer } from "react-toastify";

import { I18nProviderClient } from "@/locales/client";

const TopLoader = dynamic(
  () =>
    import("@/components/ui/dependent/TopLoader").then((module) => ({
      default: module.TopLoader,
    })),
  { ssr: false },
);

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <TopLoader />
      <LazyMotion features={domAnimation}>
        <MotionConfig
          transition={{ type: "spring", stiffness: 400, damping: 24 }}
        >
          <I18nProviderClient>{children}</I18nProviderClient>
        </MotionConfig>
      </LazyMotion>
      <ToastContainer position="top-right" limit={4} autoClose={5000} />
    </SessionProvider>
  );
};

export { Providers };
