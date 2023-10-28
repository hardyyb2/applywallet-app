"server-only";

import { Fragment } from "react";

import { Flex } from "@/components/isolated/Flex";

import { BottomNav } from "./BottomNav";
import { SideNav } from "./SideNav";

const Navigation = () => {
  return (
    <Fragment>
      <Flex
        component="aside"
        justify="center"
        className="hidden h-full overflow-hidden pt-20 lg:flex"
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
