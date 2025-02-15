"use client";

import { Fragment } from "react";

import { Flex } from "~/components/ds/Flex";

import { useBreakPoint } from "@/hooks/useBreakPoint";

import { SideNav } from "./SideNav";
import { SideNavMobile } from "./SideNav/SideNavMobile";

const Navigation = () => {
  const { isAboveLg } = useBreakPoint("lg");

  return (
    <Fragment>
      {isAboveLg ? (
        <Flex
          component="aside"
          justify="center"
          className="hidden h-full overflow-hidden lg:flex"
        >
          <SideNav />
        </Flex>
      ) : (
        <SideNavMobile />
      )}
    </Fragment>
  );
};

export { Navigation };
