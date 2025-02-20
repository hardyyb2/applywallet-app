import Image from "next/image";
import Link from "next/link";

import { Button } from "~/components/ds/Button";
import { Icons } from "~/components/ds/Icons";
import { NavBar } from "~/components/ds/NavBar";
import { Typography } from "~/components/ds/Typography";

import HardikBadolaImg from "public/images/content/authors/hardik_badola.jpeg";

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
    <NavBar className="p-3xs md:p-2xs lg:p-xs pl-xs md:pl-s lg:pl-l bg-secondary">
      <NavBar.Start className="gap-m pr-m flex">
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

        <Typography
          variant="headline-m"
          className="text-primary-content hidden lg:block"
        >
          hardik badola
        </Typography>
      </NavBar.Start>
      <NavBar.Center className="gap-l hidden lg:flex">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="">
            <Typography variant="title-m" className="text-primary-content">
              {link.label}
            </Typography>
          </Link>
        ))}
      </NavBar.Center>
      <NavBar.End>
        <Button
          size="lg"
          className="hidden lg:flex"
          startIcon={<Icons.Phone />}
        >
          contact me
        </Button>
      </NavBar.End>
    </NavBar>
  );
};

export { HBNavbar };
