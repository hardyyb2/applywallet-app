import Link from "next/link";

import type { LucideIcon } from "lucide-react";

import { Flex } from "~/components/ds/Flex";
import { Icons } from "~/components/ds/Icons";
import { Typography } from "~/components/ds/Typography";

import { cnM } from "@/utils/styles";

import { HBHomeStripes } from "./HBHomeStripes";

const socials: { name: string; url: string; icon: LucideIcon }[] = [
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/hardik-badola/",
    icon: Icons.Linkedin,
  },
  {
    name: "github",
    url: "https://github.com/hardyyb2",
    icon: Icons.Github,
  },
  {
    name: "mail",
    url: "mailto:hardikb3732@gmail.com",
    icon: Icons.Mail,
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/hardikbadola/",
    icon: Icons.Instagram,
  },
];

const MainContent = ({ color = "primary" }: { color?: "primary" | "base" }) => {
  return (
    <Flex
      align="center"
      direction="column"
      justify="center"
      className="gap-3xs h-full w-full"
    >
      <Typography
        variant="headline-l"
        lg="display-m"
        align="center"
        className="font-bold!"
      >
        hello, I&apos;m hardik badola
      </Typography>
      <Typography variant="label-l" md="title-l" lg="headline-m" font="primary">
        a software engineer
      </Typography>

      <Flex className="gap-s-m mt-xs">
        {socials.map((social) => (
          <Link key={social.name} href={social.url} target="_blank">
            <social.icon
              className={cnM(
                "size-6 hover:fill-current md:size-8 lg:size-12",
                "hover:fill-current",
                color === "primary" && "hover:stroke-primary hover:scale-[1.2]",
              )}
            />
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};

const HBHome = () => {
  return (
    <main className={cnM("relative h-full w-full overflow-hidden")}>
      <div
        className="absolute top-0 left-0 flex h-full w-full"
        style={{ clipPath: `inset(0 50% 0 0)` }}
      >
        <MainContent color="base" />
      </div>

      <div
        className="bg-primary text-primary-content absolute top-0 left-0 flex h-full w-full"
        style={{ clipPath: `inset(0 0 0 50%)` }}
      >
        <MainContent color="primary" />
      </div>
      <HBHomeStripes />
    </main>
  );
};

export { HBHome };
