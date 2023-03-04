
import { NextLinkButton } from "@/components/dependent/common";
import { Flex } from "@/components/isolated/common";
import { AddIcon, SettingsIcon } from "public/images";

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

      <NextLinkButton
        href="/careers/add"
        variant="outline"
        color="secondary"
        responsive
        startIcon={<SettingsIcon />}
      >
        <span className="hidden md:inline">settings</span>
      </NextLinkButton>
    </Flex>
  );
};

export { CareerActions };
