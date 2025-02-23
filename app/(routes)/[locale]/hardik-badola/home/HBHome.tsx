import Image from "next/image";
import Link from "next/link";

import type { LucideIcon } from "lucide-react";

import { Flex } from "~/components/ds/Flex";
import { Icons } from "~/components/ds/Icons";
import { Typography } from "~/components/ds/Typography";

import HardikBadolaImage from "public/images/content/authors/hardik_badola.jpeg";

import { getI18n } from "@/locales/server";
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

const MainContent = async ({
  color = "primary",
}: {
  color?: "primary" | "base";
}) => {
  const t = await getI18n();

  return (
    <Flex
      align="center"
      direction="column"
      justify="center"
      className="gap-3xs h-full w-full"
    >
      <figure
        className={cnM(
          "mb-xs relative z-10 size-32 rounded-full lg:size-48",
          color === "primary" && "border-base-100",
          color === "base" && "border-primary",
        )}
      >
        <div
          className={cnM(
            "absolute top-1/2 left-1/2 -z-10 size-[102%] -translate-x-1/2 -translate-y-1/2",
            "animate-spin rounded-full bg-linear-to-r",
            color === "primary" && "from-primary to-base-100",
            color === "base" && "from-base-100 to-primary",
          )}
        />
        <Image
          src={HardikBadolaImage}
          alt="Hardik Badola"
          width={200}
          height={200}
          className="size-full rounded-full"
          placeholder="blur"
          blurDataURL={HardikBadolaImage.blurDataURL}
        />
      </figure>
      <Typography
        variant="headline-l"
        lg="display-m"
        align="center"
        className="font-bold!"
      >
        {t("hardikBadola.title")}
      </Typography>
      <Typography variant="label-l" md="title-l" lg="headline-m" font="primary">
        {t("hardikBadola.subtitle")}
      </Typography>

      <Flex className="gap-s-m mt-m">
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

const HBHome = ({ className }: { className?: string }) => {
  return (
    <main className={cnM("relative w-full overflow-hidden", className)}>
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
