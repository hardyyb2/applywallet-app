"use client";

import { Suspense, useState, type ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import dynamic from "next/dynamic";

import { GoogleAnalytics } from "@next/third-parties/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { MotionConfig } from "motion/react";
import { ToastContainer } from "react-toastify";

import { env } from "~/utils/env";

import { I18nProviderClient } from "@/locales/client";
import { type Locale } from "@/utils/locale-utils";

const TopLoader = dynamic(
  () =>
    import("@/components/dependent/TopLoader").then((module) => ({
      default: module.TopLoader,
    })),
  { ssr: false },
);

type ProvidersType = {
  children: ReactNode;
  locale: Locale;
};

const Providers = ({ children, locale }: ProvidersType) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 2,
            staleTime: 5 * 60 * 1000, // 5 minutes
            gcTime: 15 * 60 * 1000, // 15 minutes
          },
        },
      }),
  );

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <Suspense>
          <GoogleAnalytics gaId={env.NEXT_PUBLIC_GA_APP_ID} />
        </Suspense>
        <TopLoader />
        <MotionConfig
          transition={{ type: "spring", stiffness: 400, damping: 24 }}
        >
          <I18nProviderClient locale={locale}>{children}</I18nProviderClient>
        </MotionConfig>
        <ToastContainer position="top-right" limit={4} autoClose={5000} />
        <ReactQueryDevtools
          initialIsOpen={false}
          buttonPosition="bottom-left"
        />
      </QueryClientProvider>
    </SessionProvider>
  );
};

export { Providers };
