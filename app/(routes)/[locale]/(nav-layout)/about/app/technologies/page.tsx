import type { Metadata } from "next";

import { setStaticParamsLocale } from "next-international/server";

import { AppRoutes } from "~/utils/routes";

import { BasePageHeader } from "@/components/dependent/BasePageHeader";
import { getI18n, getStaticParams } from "@/locales/server";
import { i18n } from "@/utils/locale-utils";

import { technologies } from "./technologies.utils";
import { TechStack } from "./TechStack";

export const metadata: Metadata = {
  title: "technologies | applywallet",
  description: "technologies used in applywallet",
  keywords: ["technologies", "applywallet", "technologies used"].concat(
    technologies.map((technology) => technology.name),
  ),
  alternates: {
    canonical: AppRoutes.TECHNOLOGIES,
    languages: i18n.locales.reduce(
      (acc, locale) => ({
        ...acc,
        [locale]: `${locale}/${AppRoutes.TECHNOLOGIES}`,
      }),
      {},
    ),
  },
};

export const generateStaticParams = () => {
  return getStaticParams();
};

type TechnologiesPageProps = {
  params: Promise<{ locale: string }>;
};

const TechnologiesPage = async ({ params }: TechnologiesPageProps) => {
  setStaticParamsLocale((await params).locale);
  const t = await getI18n();

  return (
    <main className="h-full px-5 py-4 lg:px-10">
      <BasePageHeader
        title={t("about.app.technologies.title")}
        subtitle={t("about.app.technologies.subtitle")}
      />
      <TechStack />
    </main>
  );
};

export default TechnologiesPage;
