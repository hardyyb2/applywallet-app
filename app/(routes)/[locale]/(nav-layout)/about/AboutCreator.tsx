import Image from "next/image";
import Link from "next/link";

import type { LucideIcon } from "lucide-react";

import { buttonVariants } from "~/components/ds/Button";
import { Card } from "~/components/ds/Card";
import { Icons } from "~/components/ds/Icons";
import { Typography } from "~/components/ds/Typography";

import HardikBadolaImg from "public/images/content/authors/hardik_badola.jpeg";

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

const AboutCreator = () => {
  return (
    <Card>
      <Card.Body className="items-center gap-xs">
        <Card.Figure className="mt-xs h-32 w-32 rounded-full border-2 border-base-content lg:h-40 lg:w-40">
          <Image
            src={HardikBadolaImg}
            alt="hardik badola"
            width={120}
            height={120}
            className="h-full w-full object-cover"
          />
        </Card.Figure>

        <Card.Title>
          <Typography variant="headline-s">hardik badola</Typography>
        </Card.Title>
        <Typography variant="body-s" align="center">
          frontend engineer
        </Typography>

        <Card.Actions>
          {socials.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              className={buttonVariants({
                color: "ghost",
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
