import React from "react";
import Image from "next/image";

import { Card, Typography } from "@/components/isolated";
import { cn } from "@/utils/styles.utils";

const AboutCard = () => {
  return (
    <Card
      className={cn(
        "group prose max-w-none bg-base-200 prose-headings:mt-0 prose-figure:mb-0",
      )}
    >
      <Card.Figure>
        <Image
          className="transition-all duration-500 group-hover:scale-110"
          objectFit="cover"
          src="https://picsum.photos/200/300"
          alt="https://picsum.photos/200/300"
          fill
        />
      </Card.Figure>
      <Card.Body>
        <Card.Title variant="h4" className="not-prose line-clamp-4">
          project structure
        </Card.Title>

        <p className="line-clamp-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          eaque molestias sed voluptate nemo? Vero voluptatibus possimus illo
          minima impedit itaque esse architecto molestiae, voluptates ex aliquam
          aliquid. Autem, earum!
        </p>
      </Card.Body>
    </Card>
  );
};

export { AboutCard };
