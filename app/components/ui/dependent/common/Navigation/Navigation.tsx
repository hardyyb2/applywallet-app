"server-only";

import { Fragment } from "react";

import { Flex } from "app/components/ui/isolated/common";

import { BottomNav } from "./BottomNav";
import { SideNav } from "./SideNav";

const Navigation = () => {
  return (
    <Fragment>
      <Flex
        component="aside"
        justify="center"
        className="hidden lg:flex pt-20 /  h-full overflow-hidden"
      >
        <SideNav />
      </Flex>

      <Flex component="nav" className="lg:hidden">
        <BottomNav />
      </Flex>
    </Fragment>
  );
};

export { Navigation };
