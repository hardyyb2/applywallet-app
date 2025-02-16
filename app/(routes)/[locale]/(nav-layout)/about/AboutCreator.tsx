import Image from "next/image";
import Link from "next/link";

import type { LucideIcon } from "lucide-react";
import Wave from "react-wavify";

import { buttonVariants } from "~/components/ds/Button";
import { Card } from "~/components/ds/Card";
import { Icons } from "~/components/ds/Icons";
import { Typography } from "~/components/ds/Typography";

import HardikBadolaImg from "public/images/content/authors/hardik_badola.jpeg";

import { getI18n } from "@/locales/server";

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
    name: "instagram",
    url: "https://www.instagram.com/hardikbadola/",
    icon: Icons.Instagram,
  },
];

const AboutCreator = async () => {
  const t = await getI18n();

  return (
    <Card className="overflow-hidden">
      <Card.Body className="gap-xs items-center">
        <Card.Figure className="mt-xs border-base-content h-32 w-32 rounded-full border-2 lg:h-40 lg:w-40">
          <Image
            src={HardikBadolaImg}
            alt="hardik badola"
            width={120}
            height={120}
            className="z-1 h-full w-full object-cover"
            placeholder="blur"
            blurDataURL={HardikBadolaImg.blurDataURL}
          />
        </Card.Figure>

        <Wave
          className="text-secondary absolute right-0 bottom-0 left-0 z-0 h-68"
          paused={false}
          fill="currentColor"
          options={{
            height: 20,
            amplitude: 40,
            speed: 0.25,
            points: 5,
          }}
        />

        <Wave
          className="text-primary absolute right-0 bottom-0 left-0 z-0 h-68"
          paused={false}
          fill="currentColor"
          options={{
            height: 40,
            amplitude: 20,
            speed: 0.25,
            points: 5,
          }}
        />

        <Card.Title className="text-primary-content z-1">
          <Typography variant="headline-s">hardik badola</Typography>
        </Card.Title>
        <Typography
          variant="body-m"
          align="center"
          className="text-primary-content z-1"
        >
          {t("about.creator.position")}
        </Typography>

        <Card.Actions className="z-1">
          {socials.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              className={buttonVariants({
                variant: "soft",
                color: "primary",
              })}
            >
              <social.icon />
            </Link>
          ))}
        </Card.Actions>
      </Card.Body>
    </Card>
  );
};

export { AboutCreator };
