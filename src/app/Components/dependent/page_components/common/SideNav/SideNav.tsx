"use client";

import { Typography } from "@/app/Components/isolated/common";
import { Button } from "@/app/Components/isolated/wrapped";
import clsx from "clsx";
import { AnimatePresence, LazyMotion, m } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { sideNavItems } from "./sideNav.utils";

const loadFeatures = () =>
  import("@/app/utils/framer.utils").then((res) => res.default);

const MotionTypography = m(Typography);

const SideNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <LazyMotion features={loadFeatures} strict>
      <nav role="navigation" aria-label="Navbar" className="pt-4">
        <Button onClick={() => setOpen((prevState) => !prevState)}>Open</Button>
        <ul
          className={clsx(
            "menu menu-compact rounded-box",
            "gap-y-4 / p-2 / bg-primary text-primary-content",
          )}
        >
          {sideNavItems.map((item) => {
            const active = pathname === item.link;

            return (
              <li key={item.key ?? item.link} className="hover-bordered">
                <Link
                  href={item.link}
                  className={clsx("h-9 py-2", {
                    "active text-primary-focus": active,
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
                        animate={{ width: "auto" }}
                        exit={{ width: 0, opacity: 0 }}
                        className="w-20 overflow-ellipsis"
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
      </nav>
    </LazyMotion>
  );
};

export { SideNav };
