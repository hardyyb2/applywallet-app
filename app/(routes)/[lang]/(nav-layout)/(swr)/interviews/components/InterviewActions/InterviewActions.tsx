import Link from "next/link";

import { Flex } from "@/components/ui/isolated/common";
import { Button } from "@/components/ui/isolated/wrapped";
import { Icons } from "@/components/ui/isolated/wrapped/Icons";
import { AppRoutes } from "@/utils/routes.utils";

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
