import { Button } from "@/components/common/Button";
import { Flex } from "@/components/common/Flex";
import { TextInput } from "@/components/common/TextInput";
import { FC } from "react";

const Home: FC = () => {
  return (
    <Flex className="gap-2">
      <TextInput variant="secondary" />
      <Button variant="secondary"> Hello </Button>
    </Flex>
  );
};

export { Home };
