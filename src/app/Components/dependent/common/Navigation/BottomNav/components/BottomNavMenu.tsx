import { Flex, Typography } from "@/components/isolated/common";
import { BottomNavigation, Button } from "@/components/isolated/wrapped";
import clsx from "clsx";
import Link from "next/link";
import React, { Fragment } from "react";
import { groupedNavItemsEntries } from "../../navigation.utils";

const BottomNavMenu = () => {
  return (
    <Flex
      component="ul"
      wrap="nowrap"
      className={clsx("h-full / gap-y-2 / px-2 / overflow-y-auto")}
    >
      {groupedNavItemsEntries.map(([group, items]) => {
        return (
          <Fragment key={group}>
            <li className="menu-title">
              <span>{group}</span>
            </li>

            <Flex>
              {items.map((item) => {
                //   const active = item.link === pathName;

                return (
                  <li key={item.key ?? item.link}>
                    <Link href={item.link} key={item.key ?? item.link}>
                      <Button
                        //   color={active ? "primary" : "ghost"}
                        className=" w-[90%] h-16 / flex flex-col "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>
                        <BottomNavigation.Label className="lowercase text-xs">
                          {item.label}
                        </BottomNavigation.Label>
                      </Button>
                    </Link>
                  </li>
                );
              })}
            </Flex>
          </Fragment>
        );
      })}
    </Flex>
  );
};

export { BottomNavMenu };
