import { Button } from "~/components/ds/Button";
import { Flex } from "~/components/ds/Flex";

import { cn } from "@/utils/styles";

import { ExperienceCardActions } from "../ExperienceCard/ExperienceCardActions";

const ExperienceCardMini = () => {
  return (
    <Flex
      direction="column"
      className="card gap-[1px] overflow-hidden rounded-lg"
    >
      <div className="bg-base-100 grid grid-cols-[90%_10%] rounded-none">
        <Flex className="p-2 px-6" align="center">
          {/* <Typography className="line-clamp-1">
            This is a very big company name so that we can test line clamp
          </Typography> */}
        </Flex>
        <Flex justify="center" align="center">
          {/* <ExperienceCardActions /> */}
        </Flex>
      </div>
      <div
        className={cn(
          "grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-[1px]",
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

export { ExperienceCardMini };
