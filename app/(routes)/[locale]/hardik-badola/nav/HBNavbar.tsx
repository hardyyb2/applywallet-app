import Link from "next/link";

import { NavBar } from "~/components/ds/NavBar";
import { AppRoutes } from "~/utils/routes";

import HardikBadolaImg from "public/images/logo/HB.svg";

import { LocaleSwitcher } from "@/components/dependent/LocaleSwitcher";
import { ThemesMenu } from "@/components/dependent/ThemesMenu";

const HBNavbar = () => {
  return (
    <NavBar className="pl-xs md:pl-s lg:pl-l bg-base-100">
      <NavBar.Start className="gap-m pr-m flex">
        <Link href={AppRoutes.CREATOR}>
          <figure className="relative h-10 w-10">
            <HardikBadolaImg className="h-full w-full fill-current" />
          </figure>
        </Link>
      </NavBar.Start>

      <NavBar.End className="gap-1 lg:gap-2">
        <ThemesMenu />
        <LocaleSwitcher />
      </NavBar.End>
    </NavBar>
  );
};

export { HBNavbar };
