import { Breadcrumbs } from "~/components/ds/Breadcrumbs";
import { Flex } from "~/components/ds/Flex";
import {
  ScrollArea,
  ScrollAreaViewport,
  ScrollBar,
} from "~/components/ds/ScrollArea";
import { AppRoutes } from "~/utils/routes";

import { IconLink } from "@/components/dependent/IconLink";

import { DFBWrapper } from "./DirectoryFlowBuilder/DFBWrapper";
import { DirectoryFlowBuilder } from "./DirectoryFlowBuilder/DirectoryFlowBuilder";

const ProjectStructure = () => {
  return (
    <Flex direction="column" className="bg-base-100 h-full">
      <ScrollArea className="pl-s pr-s w-full lg:block">
        <ScrollAreaViewport>
          <Breadcrumbs className="mb-2xs flex-0 pt-0 [&_a]:no-underline">
            <Breadcrumbs.Item>
              <IconLink href={AppRoutes.ABOUT} />
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

export default ProjectStructure;
