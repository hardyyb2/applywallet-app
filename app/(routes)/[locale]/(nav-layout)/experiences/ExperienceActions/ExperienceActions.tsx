import Link from "next/link";

import { Button, Flex } from "@/components/isolated";
import { Icons } from "@/components/isolated/Icons";

import { ExperienceSettingsModal } from "./components/ExperienceSettingsModal";

const ExperienceActions = () => {
  return (
    <Flex className="gap-2 md:gap-4">
      <Link href="/experiences/add">
        <Button
          tabIndex={-1}
          color="secondary"
          responsive
          startIcon={<Icons.Plus />}
        >
          <span className="hidden md:inline">add experience</span>
        </Button>
      </Link>

      <ExperienceSettingsModal />
    </Flex>
  );
};

export { ExperienceActions };
