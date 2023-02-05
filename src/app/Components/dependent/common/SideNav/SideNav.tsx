"use client";

import clsx from "clsx";
import { AnimatePresence, LazyMotion, m } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { sideNavItems } from "./sideNav.utils";
import { BaseScrollbar } from "../BaseScrollbar";

import { Typography } from "@/components/isolated/common";
import { Button } from "@/components/isolated/wrapped";

const loadFeatures = () =>
  import("@/utils/framer.utils").then((res) => res.default);

const MotionTypography = m(Typography);

const SideNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);

  return (
    <LazyMotion features={loadFeatures} strict>
      <div className="py-4 h-full grid grid-rows-[auto_1fr_auto]">
        <div className="sticky top-0 items-center gap-2 px-4 py-2">
          <Link
            href="/"
            aria-current="page"
            aria-label="Homepage"
            className="flex-0 btn btn-ghost px-2"
          >
            <div className="text-primary inline-flex text-lg ">
              <span className="lowercase">hardik</span>
              <span className="text-base-content">badola</span>
            </div>
          </Link>
        </div>
        <BaseScrollbar>
          <ul
            className={clsx(
              "menu menu-compact rounded-box",
              "h-full / flex-nowrap gap-y-2 / ml-4 p-2 / bg-base-200 / overflow-y-auto",
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
                      {open && (
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
          </ul>
        </BaseScrollbar>
        <div className="px-4 pt-4">Footer</div>
      </div>
    </LazyMotion>
  );
};

export { SideNav };
