import Link from "next/link";

import { Flex } from "@/components/isolated/common";
import { Button } from "@/components/isolated/wrapped";
import { AddIcon } from "public/images";

import { CareerSettingsModal } from "./components/CareerSettingsModal";

const CareerActions = () => {
  return (
    <Flex className="gap-2 md:gap-4">
      <Link href="/careers/add">
        <Button color="secondary" responsive startIcon={<AddIcon />}>
          <span className="hidden md:inline">add career</span>
        </Button>
      </Link>

      <CareerSettingsModal />
    </Flex>
  );
};

export { CareerActions };
