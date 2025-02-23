import { setStaticParamsLocale } from "next-international/server";

import { BaseLayout } from "@/components/dependent/BaseLayout";
import { getStaticParams } from "@/locales/server";
import { cn } from "@/utils/styles";

import { HBHome } from "./home/HBHome";
import { HBNavbar } from "./nav/HBNavbar";

export const generateStaticParams = () => {
  return getStaticParams();
};

type HardikBadolaPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const HardikBadola = async ({ params }: HardikBadolaPageProps) => {
  const { locale } = await params;
  setStaticParamsLocale(locale);

  return (
    <BaseLayout className="from-base-100 to-base-200 bg-linear-to-br">
      <BaseLayout.Body>
        <div className="hidden">side-nav</div>
        <div className="grid w-full grid-rows-[auto_1fr] overflow-auto">
          <BaseLayout.Head className={cn("text-base-content z-5 w-full")}>
            <HBNavbar />
          </BaseLayout.Head>
          <section className="w-full snap-y snap-mandatory overflow-auto">
            <HBHome className="min-h-[calc(100vh-4rem)] snap-start" />
          </section>
        </div>
      </BaseLayout.Body>
    </BaseLayout>
  );
};

export default HardikBadola;
