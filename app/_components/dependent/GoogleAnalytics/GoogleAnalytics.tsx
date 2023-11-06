"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";

import { gaPageview } from "@/lib/gtag";

const GoogleAnalytics = ({ GA_TRACKING_ID }: { GA_TRACKING_ID?: string }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();

    if (GA_TRACKING_ID) {
      gaPageview(GA_TRACKING_ID, url);
    }
  }, [pathname, searchParams, GA_TRACKING_ID]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', "${GA_TRACKING_ID}");
        `,
        }}
      />
    </>
  );
};

export { GoogleAnalytics };
