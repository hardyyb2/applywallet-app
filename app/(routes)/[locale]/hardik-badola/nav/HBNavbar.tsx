import Image from "next/image";
import Link from "next/link";

import { NavBar } from "~/components/ds/NavBar";
import { AppRoutes } from "~/utils/routes";

import HardikBadolaImg from "public/images/logo/hb-logo.jpeg";

import { LocaleSwitcher } from "@/components/dependent/LocaleSwitcher";
import { ThemesMenu } from "@/components/dependent/ThemesMenu";

const links: { label: string; href: string }[] = [
  {
    label: "projects",
    href: "#projects",
  },
  {
    label: "skills",
    href: "#skills",
  },
  {
    label: "experience",
    href: "#experience",
  },
];

const HBNavbar = () => {
  return (
    <NavBar className="p-3xs md:p-2xs lg:p-xs pl-xs md:pl-s lg:pl-l bg-base-100">
      <NavBar.Start className="gap-m pr-m flex">
        <Link href={AppRoutes.CREATOR}>
          <figure className="relative h-12 w-12">
            <Image
              src={HardikBadolaImg}
              alt="Hardik Badola"
              fill
              placeholder="blur"
              blurDataURL={HardikBadolaImg.blurDataURL}
              className="h-full w-full rounded-full"
            />
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
