import { NextLinkButton } from "@/components/dependent/common";
import { Flex } from "@/components/isolated/common";
import { Button } from "@/components/isolated/wrapped";
import { AddIcon, SettingsIcon } from "public/images";
import { CareerSettings } from "./CareerSettings";

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

      <CareerSettings />
    </Flex>
  );
};

export { CareerActions };
