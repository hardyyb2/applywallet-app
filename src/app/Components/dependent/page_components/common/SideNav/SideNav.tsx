"use client";

import { Typography } from "@/app/Components/isolated/common";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { sideNavItems } from "./sideNav.utils";

const SideNav = () => {
  const pathname = usePathname();

  return (
    <nav role="navigation" aria-label="Navbar" className="w-80 pt-4">
      <ul className="menu menu-compact / px-4">
        {sideNavItems.map((item, index) => (
          <li key={item.key ?? item.link}>
            <Link
              href={item.link}
              className={clsx({
                active: pathname === item.link,
              })}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <Typography>{item.label}</Typography>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { SideNav };
