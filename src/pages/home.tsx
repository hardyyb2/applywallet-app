import { FC } from "react";

import { Flex } from "@/components/common/Flex";
import { Button, Input } from "@/components/wrapped";

const Home: FC = () => {
  return (
    <Flex className="gap-2">
      <Input color="secondary" />
      <Button color="secondary"> Hello </Button>
    </Flex>
  );
};

export { Home };
