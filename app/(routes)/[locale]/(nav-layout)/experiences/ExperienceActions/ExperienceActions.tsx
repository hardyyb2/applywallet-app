import Link from "next/link";

import { Button } from "@/components/isolated/Button";
import { Flex } from "@/components/isolated/Flex";
import { Icons } from "@/components/isolated/Icons";

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
    </Flex>
  );
};

export { ExperienceActions };
