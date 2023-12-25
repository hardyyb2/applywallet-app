"use client";

import { Fragment } from "react";

import { Flex } from "~/components/ds/Flex";

import { SideNav } from "./SideNav";
import { SideNavMobile } from "./SideNav/SideNavMobile";

const Navigation = () => {
  return (
    <Fragment>
      <Flex
        component="aside"
        justify="center"
        className="hidden h-full overflow-hidden lg:flex"
      >
        <SideNav />
      </Flex>

      <SideNavMobile className="lg:hidden" />
    </Fragment>
  );
};

export { Navigation };
