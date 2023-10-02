import Image from "next/image";

import { cn } from "@/_utils/styles.utils";
import { Blog } from "contentlayer/generated";

import { Typography } from "../../isolated/common";
import { Card } from "../../isolated/wrapped";
import styles from "./blogCard.module.scss";

type BlogCardProps = Blog;

const BlogCard = ({ title, description, topic, image }: BlogCardProps) => {
  return (
    <Card
      className={cn(
        "group prose max-w-none bg-base-200 prose-headings:mt-0 prose-figure:mb-0",
      )}
    >
      {image ? (
        <Card.Figure className={cn("m-5 h-80")}>
          <div className={styles.imageMask} />
          <Image
            className="transition-all duration-500 group-hover:scale-110"
            objectFit="cover"
            src={image}
            alt={image}
            fill
          />
        </Card.Figure>
      ) : null}
      <Card.Body>
        <Typography variant="caption" className="line-clamp-1 text-secondary">
          {topic}
        </Typography>
        <Card.Title variant="h4" className="not-prose line-clamp-4">
          {title}
        </Card.Title>
        <p className="line-clamp-3">{description}</p>
      </Card.Body>
    </Card>
  );
};

export { BlogCard };
