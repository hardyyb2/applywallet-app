import { FC } from "react";

import { Flex } from "@/components/common/Flex";
import { Button, Input, Textarea } from "@/components/wrapped";

const Home: FC = () => {
  return (
    <Flex className="gap-2">
      <Input color="secondary" />
      <Button color="secondary"> Hello </Button>
      <Textarea color="primary" />
    </Flex>
  );
};

export { Home };
