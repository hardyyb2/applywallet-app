import { setStaticParamsLocale } from "next-international/server";

import { Breadcrumbs } from "~/components/ds/Breadcrumbs";
import { Flex } from "~/components/ds/Flex";
import {
  ScrollArea,
  ScrollAreaViewport,
  ScrollBar,
} from "~/components/ds/ScrollArea";
import { AppRoutes } from "~/utils/routes";

import { IconLink } from "@/components/dependent/IconLink";
import { getI18n, getStaticParams } from "@/locales/server";

import { DFBWrapper } from "./DirectoryFlowBuilder/DFBWrapper";
import { DirectoryFlowBuilder } from "./DirectoryFlowBuilder/DirectoryFlowBuilder";

export const generateStaticParams = async () => {
  return getStaticParams();
};

type AppStructureProps = {
  params: Promise<{ locale: string }>;
};

const AppStructure = async ({ params }: AppStructureProps) => {
  setStaticParamsLocale((await params).locale);
  const t = await getI18n();

  return (
    <Flex direction="column" className="bg-base-100 h-full">
      <ScrollArea className="pl-s pr-s w-full lg:block">
        <ScrollAreaViewport>
          <Breadcrumbs className="mb-2xs flex-0 pt-0 [&_a]:no-underline">
            <Breadcrumbs.Item>
              <IconLink href={AppRoutes.ABOUT} translate={t} />
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>app structure</Breadcrumbs.Item>
          </Breadcrumbs>
        </ScrollAreaViewport>
        <ScrollBar orientation="horizontal" className="hidden h-0" />
      </ScrollArea>

      <DFBWrapper>
        <DirectoryFlowBuilder />
      </DFBWrapper>
    </Flex>
  );
};

export default AppStructure;
