import Image from "next/image";
import Link from "next/link";

import { Card } from "~/components/ds/Card";
import { Flex } from "~/components/ds/Flex";
import { Typography } from "~/components/ds/Typography";

import { shimmer } from "@/utils/shimmer";
import { toBase64 } from "@/utils/string";

import { technologies, type Technology } from "./technologies.utils";

const TechStack = () => {
  return (
    <Flex direction="column" className="gap-m pb-m">
      {Object.entries(
        technologies
          .filter((tech) => tech.enabled !== false)
          .reduce(
            (acc, tech) => {
              acc[tech.category] = [...(acc[tech.category] || []), tech];
              return acc;
            },
            {} as Record<string, Technology[]>,
          ),
      ).map(([category, techs]) => (
        <Flex key={category} direction="column" className="gap-s">
          <Typography variant="label-s" lg="label-l">
            {category}
          </Typography>
          <Flex wrap className="gap-2xs">
            {techs.map((tech) => (
              <Link
                key={tech.name}
                href={tech.url}
                target="_blank"
                className="transition-transform hover:scale-105"
              >
                <Card className="bg-base-100 p-3xs h-24 w-24 lg:h-32 lg:w-32">
                  <Card.Figure className="h-full w-full">
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      width={120}
                      height={120}
                      className="rounded-box h-full w-full object-contain lowercase"
                      placeholder={`data:image/svg+xml;base64,${toBase64(
                        shimmer(120, 120),
                      )}`}
                    />
                  </Card.Figure>
                </Card>
              </Link>
            ))}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export { TechStack };
