"use client";

import { useMemo } from "react";
import Image from "next/image";

import { AnimatePresence, m } from "motion/react";

import { Flex } from "~/components/ds/Flex";

import { useAboutStore } from "./about.state";
import { aboutCardsData } from "./about.utils";
import { AboutCard } from "./folder-structure/AboutCard";

const MotionImage = m(Image);

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
          <h1 className="headline-s lg:headline-m">about</h1>
          <h4 className="label-s lg:label-m">extra things here</h4>
        </Flex>
      </Flex>
      <div className="flex h-full w-full items-start gap-20 overflow-auto rounded-2xl bg-base-200">
        <div className="w-full py-[25%]">
          <ul className="space-y-3xl">
            {aboutCardsData.map((card) => (
              <li className="" key={card.id}>
                <AboutCard card={card} />
              </li>
            ))}
          </ul>
        </div>
        <div className="container  sticky top-0 flex h-full items-center">
          <div className="mr-8 flex h-1/2 w-full items-center">
            <div className="relative">
              <AnimatePresence mode="wait">
                {aboutCardsData.map((card) => {
                  if (card.id === inViewItem?.id) {
                    return (
                      <MotionImage
                        key={card.id}
                        src={card.image}
                        alt={card.title}
                        width={700}
                        height={700}
                        initial={{
                          filter: "blur(10px)",
                          transform: "rotate(30deg) scale(0.5)",
                        }}
                        animate={{
                          filter: "blur(0px)",
                          transform: "rotate(0deg) scale(1)",
                        }}
                        exit={{
                          filter: "blur(10px)",
                          transform: "rotate(-30deg) scale(0.5)",
                        }}
                        className="aspect-square rounded-3xl"
                        transition={{
                          type: "spring",
                          duration: 0.2,
                        }}
                      />
                    );
                  }
                })}
              </AnimatePresence>
              <div className="absolute left-10 top-10 -z-10 aspect-square  w-full rounded-3xl bg-primary/50" />
            </div>
          </div>
        </div>
      </div>
    </Flex>
  );
};

export default AboutPage;
