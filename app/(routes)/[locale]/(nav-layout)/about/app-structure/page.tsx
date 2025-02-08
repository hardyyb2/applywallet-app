import { Flex } from "~/components/ds/Flex";

import { DFBWrapper } from "./DirectoryFlowBuilder/DFBWrapper";
import { DirectoryFlowBuilder } from "./DirectoryFlowBuilder/DirectoryFlowBuilder";

const ProjectStructure = () => {
  return (
    <Flex direction="column" className="h-full w-full px-xs py-4 lg:px-s">
      <Flex justify="space-between" className="mb-xs flex-0 gap-4">
        <Flex direction="column">
          <h1 className="headline-s lg:headline-m">app structure</h1>
          <h4 className="label-s lg:label-m">
            see the entire directory structure
          </h4>
        </Flex>
      </Flex>
      <DFBWrapper>
        <DirectoryFlowBuilder />
      </DFBWrapper>
    </Flex>
  );
};

export default ProjectStructure;
