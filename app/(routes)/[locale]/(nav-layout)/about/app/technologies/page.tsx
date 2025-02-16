import { setStaticParamsLocale } from "next-international/server";

import { BasePageHeader } from "@/components/dependent/BasePageHeader";
import { getI18n, getStaticParams } from "@/locales/server";

import { TechStack } from "./TechStack";

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
