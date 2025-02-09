import { type ReactNode } from "react";

import { fonts } from "@/lib/fonts";
import { i18n, type Locale } from "@/utils/locale-utils";
import { cn } from "@/utils/styles";

import { Providers } from "./providers";

import "@/styles/globals.app.scss";
import "@/styles/overrides/toast.css";
import "@/styles/mdx.css";
import "~/styles/overrides/daisyui.scss";

import type { Metadata } from "next";

import { getAppBaseURL } from "@/utils/app";

export const metadata: Metadata = {
  title: "applywallet - your ultimate interview toolkit",
  description:
    "applywallet helps you organize and track your job search effortlessly. save previous interviews, manage experiences, store referral contacts, and stay updated with insightful blogs—all in one place.",
  keywords: [
    "interview",
    "interview prep",
    "blogs",
    "engineering",
    "job search",
    "interview tracker",
    "career toolkit",
    "apply wallet",
    "job application management",
    "referral contacts",
    "interview experiences",
    "resume storage",
    "job hunting",
  ],
  alternates: {
    canonical: "/",
    languages: i18n.locales.reduce(
      (acc, locale) => ({
        ...acc,
        [locale]: `/${locale}`,
      }),
      {},
    ),
  },
  metadataBase: new URL(getAppBaseURL()),
  openGraph: {
    title: "applywallet - your ultimate interview toolkit",
    description:
      "organize your job search with applywallet. track interviews, store experiences, manage referral contacts, and access career insights.",
    type: "website",
    url: getAppBaseURL(),
    siteName: "applywallet",
    images: [
      {
        url: "/images/seo/base-opengraph-image.png",
        alt: "applywallet - your ultimate interview toolkit",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "applywallet - your ultimate interview toolkit",
    description:
      "organize your job search with applywallet. track interviews, store experiences, manage referral contacts, and access career insights.",
    images: [
      {
        url: "/images/seo/base-twitter-image.png",
        alt: "applywallet - your ultimate interview toolkit",
        type: "image/png",
      },
    ],
  },
  applicationName: "applywallet",
  authors: [
    {
      name: "hardik badola",
      url: "https://www.linkedin.com/in/hardik-badola/",
    },
  ],
  creator: "hardik badola",
};

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
