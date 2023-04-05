import clsx from "clsx";

import { Flex } from "@/components/ui/isolated/common";
import { Button } from "@/components/ui/isolated/wrapped";

import { CareerCardActions } from "../CareerCard/components/CareerCardActions";

const CareerCardMini = () => {
  return (
    <Flex
      direction="column"
      className="prose prose-h3:m-0 card / gap-[1px] / rounded-lg overflow-hidden"
    >
      <div className="grid grid-cols-[90%,10%] /  bg-base-100 / rounded-none">
        <h3 className="px-6 pt-2">yellow.ai</h3>
        <Flex justify="center" align="center">
          <CareerCardActions />
        </Flex>
      </div>
      <div
        className={clsx(
          "grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] / gap-[1px]",
          "[&>button]:bg-base-100 [&>button]:rounded-none",
        )}
      >
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
