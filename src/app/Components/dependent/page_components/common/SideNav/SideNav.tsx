"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { sideNavItems } from "./sideNav.utils";

const SideNav = () => {
  const pathname = usePathname();

  return (
    <nav role="navigation" aria-label="Navbar" className="pt-4">
      <ul className="menu / w-56 / p-2">
        {sideNavItems.map((item, index) => (
          <li key={item.key ?? item.link}>
            <Link
              href={item.link}
              className={clsx({
                active: pathname === item.link,
              })}
            >
              Link {index}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { SideNav };
