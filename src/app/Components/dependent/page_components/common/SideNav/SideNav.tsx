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
              <Typography>{item.label}</Typography>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { SideNav };
