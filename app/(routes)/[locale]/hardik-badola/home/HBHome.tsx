import { Flex } from "~/components/ds/Flex";
import { Typography } from "~/components/ds/Typography";

import { cnM } from "@/utils/styles";

import { HBHomeStripes } from "./HBHomeStripes";

const MainContent = () => {
  return (
    <Flex
      align="center"
      direction="column"
      justify="center"
      className="gap-3xs h-full w-full"
    >
      <Typography
        variant="headline-l"
        lg="display-l"
        align="center"
        className="font-bold!"
      >
        hello, I&apos;m hardik badola
      </Typography>
      <Typography variant="label-l" md="title-l" lg="headline-l" font="primary">
        a software engineer
      </Typography>
    </Flex>
  );
};

const HBHome = () => {
  return (
    <main className={cnM("relative h-full w-full overflow-x-hidden")}>
      <div
        className="absolute top-0 left-0 flex h-screen w-screen"
        style={{ clipPath: `inset(0 50% 0 0)` }}
      >
        <MainContent />
      </div>

      <div
        className="bg-primary text-primary-content absolute top-0 left-0 flex h-screen w-screen"
        style={{ clipPath: `inset(0 0 0 50%)` }}
      >
        <MainContent />
      </div>
      <HBHomeStripes />
    </main>
  );
};

export { HBHome };
