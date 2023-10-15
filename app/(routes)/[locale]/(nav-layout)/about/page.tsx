"use client";

import { useMemo } from "react";
import Image from "next/image";

import { Flex, Typography } from "@/components/isolated";

import { useAboutStore } from "./about.state";
import { aboutCardsData } from "./about.utils";
import { AboutCard } from "./project-structure/AboutCard";

const AboutPage = () => {
  const inViewItemId = useAboutStore((store) => store.inViewItemId);

  const inViewItem = useMemo(
    () => aboutCardsData.find((card) => card.id === inViewItemId),
    [inViewItemId],
  );

  return (
    <Flex direction="column" className="h-full px-6 py-4 lg:px-10">
      <Flex justify="space-between" align="center" className="mb-m-l gap-4">
        <Flex direction="column">
          <Typography variant="h3">about</Typography>
          <Typography variant="subtitle2">extra things here</Typography>
        </Flex>
      </Flex>
      <Flex className="flex-1 overflow-scroll rounded-2xl bg-base-200">
        <div className="w-full">
          <ul className="h-full">
            {aboutCardsData.map((card) => (
              <li className="block h-full" key={card.id}>
                <AboutCard card={card} />
              </li>
            ))}
          </ul>
        </div>
        <div className="container sticky top-0 flex items-center">
          <div className="mr-8 h-1/2 w-full bg-red-100">
            {inViewItem ? (
              <Image
                src={inViewItem.image}
                alt={inViewItem.title}
                width={600}
                height={600}
                className="aspect-square"
              />
            ) : null}
          </div>
        </div>
      </Flex>
    </Flex>
  );
};

export default AboutPage;
