import { Locale } from "@/utils/locale-utils";

import { Providers } from "./providers";

import "@/styles/globals.scss";
import "@/styles/overrides/toast.scss";
import "@/styles/overrides/daisyui.scss";
import "@/styles/mdx.scss";

import { ReactNode } from "react";

import { fonts } from "@/lib/fonts";
import { cn } from "@/utils/styles.utils";

type RootLayoutProps = {
  params: { locale: Locale };
  children: ReactNode;
};

const RootLayout = ({
  params: { locale = "en" },
  children,
}: RootLayoutProps) => {
  return (
    <html
      lang={locale}
      className={cn(fonts.secondary.className, "bg-base-200")}
    >
      <head />
      <body
        className={cn(
          fonts.primary.variable,
          fonts.secondary.variable,
          "mx-auto max-w-screen-4xl",
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
