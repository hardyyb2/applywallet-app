"use client";

import React, { useEffect, useRef, type ElementRef } from "react";

import { useInView } from "framer-motion";

import { Card } from "@/components/isolated/Card";
import { cn, cnMerge } from "@/utils/styles";

import { useAboutStore } from "../about.state";
import { type AboutCardType } from "../about.types";

type AboutCardProps = {
  card: AboutCardType;
};

const AboutCard = ({ card }: AboutCardProps) => {
  const ref = useRef<ElementRef<typeof Card>>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  const setInViewItemId = useAboutStore((store) => store.setInViewItemId);

  useEffect(() => {
    if (isInView) {
      setInViewItemId(card.id);
    }
  }, [card.id, isInView, setInViewItemId]);

  return (
    <Card
      ref={ref}
      className={cn(
        "group prose dui-prose max-w-none bg-base-200 prose-headings:mt-0 prose-figure:mb-0",
      )}
    >
      <Card.Body>
        <Card.Title
          variant="headline-m"
          className={cnMerge(
            "not-prose line-clamp-4",
            isInView ? "text-base-content" : "text-base-content/20",
          )}
        >
          {card.title}
        </Card.Title>

        <p className="line-clamp-3">{card.subTitle}</p>
      </Card.Body>
    </Card>
  );
};

export { AboutCard };
