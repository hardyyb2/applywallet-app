import clsx from "clsx";

import { Flex } from "app/components/ui/isolated/common";
import { Button } from "app/components/ui/isolated/wrapped";

import { CareerCardActions } from "../CareerCard/components/CareerCardActions";

const CareerCardMini = () => {
  return (
    <Flex
      direction="column"
      className="card prose gap-[1px] overflow-hidden rounded-lg prose-h3:m-0"
    >
      <div className="grid  grid-cols-[90%,10%] rounded-none bg-base-100">
        <h3 className="px-6 pt-2">yellow.ai</h3>
        <Flex justify="center" align="center">
          <CareerCardActions />
        </Flex>
      </div>
      <div
        className={clsx(
          "/ grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-[1px]",
          "[&>button]:rounded-none [&>button]:bg-base-100",
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
