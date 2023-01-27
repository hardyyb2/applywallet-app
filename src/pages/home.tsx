import { FC } from "react";
import { Button, Input } from "react-daisyui";

import { Flex } from "@/components/common/Flex";

const Home: FC = () => {
  return (
    <Flex className="gap-2">
      <Input color="secondary" />
      <Button color="secondary"> Hello </Button>
    </Flex>
  );
};

export { Home };
