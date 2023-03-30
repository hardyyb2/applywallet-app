import { Flex } from "@/components/ui/isolated/common";
import { Button } from "@/components/ui/isolated/wrapped";

import { CareerCardActions } from "./CareerCard/components/CareerCardActions";

const CareerCardMini = () => {
  return (
    <Flex direction="column" className="prose prose-h3:m-0 card / bg-base-100">
      <div className="grid grid-cols-[90%,10%]">
        <h3 className="px-6 pt-2">yellow.ai</h3>
        <Flex justify="center" align="center">
          <CareerCardActions />
        </Flex>
      </div>
      <div className="divider / !m-0" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] / p-1">
        <Button color="ghost" size="lg">
          cmp. desc.
        </Button>
        <Button color="ghost" size="lg">
          role
        </Button>
        <Button color="ghost" size="lg">
          role desc.
        </Button>
        <Button color="ghost" size="lg">
          job desc.
        </Button>
      </div>
    </Flex>
  );
};

export { CareerCardMini };
