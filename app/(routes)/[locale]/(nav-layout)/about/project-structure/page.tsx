import { Flex } from "@/components/isolated/Flex";
import { Typography } from "@/components/isolated/Typography";

import { DFBWrapper } from "./DFBWrapper";
import { DirectoryFlowBuilder } from "./DirectoryFlowBuilder/DirectoryFlowBuilder";

const ProjectStructure = () => {
  return (
    <Flex direction="column" className="h-full w-full px-xs py-4 lg:px-s">
      <Flex justify="space-between" className="mb-xs flex-0 gap-4">
        <Flex direction="column">
          <Typography variant="h3">project structure</Typography>
          <Typography variant="subtitle2">
            see the entire app directory structure
          </Typography>
        </Flex>
      </Flex>
      <DFBWrapper>
        <DirectoryFlowBuilder />
      </DFBWrapper>
    </Flex>
  );
};

export default ProjectStructure;
