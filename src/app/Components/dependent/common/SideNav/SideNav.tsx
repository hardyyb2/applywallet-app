"use client";

import { Flex, Typography } from "@/components/isolated/common";
import { useBoolean } from "@/hooks/useBoolean";
import clsx from "clsx";
import { AnimatePresence, LazyMotion, m } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

import SideNavBrand from "./components/SideNavBrand";
import { sideNavItems } from "./sideNav.utils";
import { BaseScrollbar } from "../BaseScrollbar";
import { Button } from "@/components/isolated/wrapped";

const loadFeatures = () =>
  import("@/utils/framer.utils").then((res) => res.default);

const MotionTypography = m(Typography);

const SideNav = () => {
  const pathname = usePathname();

  const [sideNavOpen, { toggle: toggleSideNav }] = useBoolean({
    initialVal: false,
  });

  return (
    <LazyMotion features={loadFeatures} strict>
      <div
        className={clsx(
          "h-[96%] / grid grid-rows-[auto_1fr_auto]",
          "ml-4 my-auto / bg-base-200 / rounded-box ",
        )}
      >
        <div className="p-2">
          <SideNavBrand navOpen={sideNavOpen} onToggleClick={toggleSideNav} />
          <Button color="ghost" onClick={toggleSideNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-4 w-4 stroke-current"
            >
              <path
                d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
                className="fill-current"
              />
            </svg>
          </Button>
        </div>
        <BaseScrollbar>
          <Flex
            component="ul"
            wrap="nowrap"
            className={clsx(
              "menu menu-compact",
              "h-full / gap-y-2 / p-2 / overflow-y-auto",
            )}
          >
            {sideNavItems.map((item) => {
              const active = pathname === item.link;

              return (
                <li key={item.key ?? item.link}>
                  <Link
                    href={item.link}
                    className={clsx("h-9 py-2", {
                      active,
                    })}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
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
                    <AnimatePresence>
                      {sideNavOpen && (
                        <MotionTypography
                          key={item.key}
                          variant="caption"
                          initial={{ width: 0 }}
                          animate={{ width: 160 }}
                          exit={{ width: 0, opacity: 0 }}
                          className="overflow-ellipsis"
                        >
                          {item.label}
                        </MotionTypography>
                      )}
                    </AnimatePresence>
                  </Link>
                </li>
              );
            })}
          </Flex>
        </BaseScrollbar>
      </div>
    </LazyMotion>
  );
};

export { SideNav };
