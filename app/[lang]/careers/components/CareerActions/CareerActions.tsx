import Link from "next/link";

import { Flex } from "app/components/ui/isolated/common";
import { Button } from "app/components/ui/isolated/wrapped";
import { AddIcon } from "public/images/icons";

import { CareerSettingsModal } from "./components/CareerSettingsModal";

const CareerActions = () => {
  return (
    <Flex className="gap-2 md:gap-4">
      <Link href="/careers/add">
        <Button
          tabIndex={-1}
          color="secondary"
          responsive
          startIcon={<AddIcon />}
        >
          <span className="hidden md:inline">add career</span>
        </Button>
      </Link>

      <CareerSettingsModal />
    </Flex>
  );
};

export { CareerActions };
