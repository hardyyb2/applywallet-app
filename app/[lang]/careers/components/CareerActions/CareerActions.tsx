import { NextLinkButton } from "@/components/dependent/common";
import { Flex } from "@/components/isolated/common";
import { AddIcon } from "public/images";

import { CareerSettingsModal } from "./components/CareerSettingsModal";

const CareerActions = () => {
  return (
    <Flex className="gap-2 md:gap-4">
      <NextLinkButton
        href="/careers/add"
        color="secondary"
        responsive
        startIcon={<AddIcon />}
      >
        <span className="hidden md:inline">add career</span>
      </NextLinkButton>

      <CareerSettingsModal />
    </Flex>
  );
};

export { CareerActions };
