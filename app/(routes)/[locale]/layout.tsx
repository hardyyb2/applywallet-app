import { type ReactNode } from "react";

import { fonts } from "@/lib/fonts";
import { type Locale } from "@/utils/locale-utils";
import { cn } from "@/utils/styles";

import { Providers } from "./providers";

import "@/styles/globals.app.scss";
import "@/styles/overrides/toast.scss";
import "@/styles/mdx.scss";
import "~/styles/overrides/daisyui.scss";

type RootLayoutProps = {
  params: Promise<{ locale: Locale }>;
  children: ReactNode;
};

const RootLayout = async (props: RootLayoutProps) => {
  const params = await props.params;

  const { locale = "en" } = params;

  const { children } = props;

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
        <Providers locale={locale}>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
