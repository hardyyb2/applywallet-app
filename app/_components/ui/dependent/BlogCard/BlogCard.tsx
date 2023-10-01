import Image from "next/image";

import { cn } from "@/_utils/styles.utils";
import { Blog } from "contentlayer/generated";

import { Typography } from "../../isolated/common";
import { Card } from "../../isolated/wrapped";
import styles from "./blogCard.module.scss";

type BlogCardProps = Blog;

const BlogCard = ({ title, description, topic }: BlogCardProps) => {
  return (
    <Card className="prose max-w-none bg-base-200 prose-headings:mt-0 prose-figure:mb-0">
      <Card.Figure className={cn("m-5 h-80")}>
        <div className={styles.imageMask} />
        <Image
          objectFit="cover"
          src="https://picsum.photos/600/500"
          alt="image"
          fill
        />
      </Card.Figure>
      <Card.Body>
        <Typography variant="caption" className="text-secondary">
          {topic}
        </Typography>
        <Card.Title variant="h4" className="not-prose">
          {title}
        </Card.Title>
        <p className="line-clamp-3">{description}</p>
      </Card.Body>
    </Card>
  );
};

export { BlogCard };
