import Link from "next/link";

import { AppRoutes } from "~/utils/routes";

import { Button } from "@/components/isolated/Button";
import { Flex } from "@/components/isolated/Flex";
import { Icons } from "@/components/isolated/Icons";

const InterviewActions = () => {
  return (
    <Flex className="gap-2 md:gap-4">
      <Link href={AppRoutes.ADD_INTERVIEW}>
        <Button
          tabIndex={-1}
          color="secondary"
          responsive
          startIcon={<Icons.Plus />}
        >
          <span className="hidden md:inline">add interview</span>
        </Button>
      </Link>
    </Flex>
  );
};

export { InterviewActions };
