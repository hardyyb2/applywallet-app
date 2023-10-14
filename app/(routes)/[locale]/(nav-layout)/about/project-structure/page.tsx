import { Flex, Typography } from "@/components/ui/isolated/common";

import { DirectoryFlowBuilder } from "./components/DirectoryFlowBuilder/DirectoryFlowBuilder";

const About = () => {
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
      <div className="flex-1 rounded-2xl bg-base-content/20">
        <DirectoryFlowBuilder />
      </div>
    </Flex>
  );
};

export default About;
