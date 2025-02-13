import type { Metadata } from "next";

import { setStaticParamsLocale } from "next-international/server";

import { AppRoutes } from "~/utils/routes";

import { BasePageHeader } from "@/components/dependent/BasePageHeader";
import { getI18n, getStaticParams } from "@/locales/server";
import { i18n } from "@/utils/locale-utils";

import { AboutApp } from "./AboutApp";
import { AboutCreator } from "./AboutCreator";

export const metadata: Metadata = {
  title: "about | applywallet",
  description: "about the app and the creator",
  keywords: ["about", "applywallet", "creator", "hardik badola"],
  alternates: {
    canonical: AppRoutes.ABOUT,
    languages: i18n.locales.reduce(
      (acc, locale) => ({
        ...acc,
        [locale]: `${locale}/${AppRoutes.ABOUT}`,
      }),
      {},
    ),
  },
};

export const generateStaticParams = () => {
  return getStaticParams();
};

type AboutPageProps = {
  params: Promise<{ locale: string }>;
};

const AboutPage = async ({ params }: AboutPageProps) => {
  setStaticParamsLocale((await params).locale);

  const t = await getI18n();

  return (
    <div className="h-full px-5 py-4 lg:px-10">
      <BasePageHeader title={t("about.title")} subtitle={t("about.subtitle")} />

      <div className="grid grid-cols-1 gap-xs-s lg:grid-cols-2">
        <AboutApp />

        <AboutCreator />
      </div>
    </div>
  );
};

export default AboutPage;
