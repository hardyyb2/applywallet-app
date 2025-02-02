import Link from "next/link";

import { Button } from "~/components/ds/Button";
import { Flex } from "~/components/ds/Flex";
import { Icons } from "~/components/ds/Icons";
import { AppRoutes } from "~/utils/routes";

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
