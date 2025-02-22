import Image from "next/image";
import Link from "next/link";

import { Button } from "~/components/ds/Button";
import { Icons } from "~/components/ds/Icons";
import { NavBar } from "~/components/ds/NavBar";
import { Typography } from "~/components/ds/Typography";
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
      <NavBar.Center className="gap-l hidden lg:flex">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="">
            <Typography variant="title-s" className="text-base-content">
              {link.label}
            </Typography>
          </Link>
        ))}
      </NavBar.Center>
      <NavBar.End className="gap-1 lg:gap-2">
        <ThemesMenu />
        <LocaleSwitcher />
        <Button color="ghost" responsive>
          <Icons.Phone className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6" />
        </Button>
      </NavBar.End>
    </NavBar>
  );
};

export { HBNavbar };
