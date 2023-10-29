import Image from "next/image";

import { type Blog } from "contentlayer/generated";

import { Badge } from "@/components/isolated/Badge";
import { Card } from "@/components/isolated/Card";
import { Flex } from "@/components/isolated/Flex";
import { Typography } from "@/components/isolated/Typography";
import { cn } from "@/utils/styles";

import styles from "./blogCard.module.scss";

type BlogCardProps = Blog;

const BlogCard = ({
  title,
  description,
  category,
  image,
  tags,
}: BlogCardProps) => {
  return (
    <Card
      className={cn(
        "group prose max-w-none bg-base-200 prose-headings:mt-0 prose-figure:mb-0",
      )}
    >
      {image ? (
        <Card.Figure className={cn("m-1 h-80")}>
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
          {category.name}
        </Typography>
        <Card.Title variant="h4" className="not-prose line-clamp-4">
          {title}
        </Card.Title>

        <p className="line-clamp-3">{description}</p>

        {tags?.length ? (
          <Flex className="gap-2">
            {tags.map((tag) => (
              <Badge variant="outline" size="lg" key={tag}>
                {tag}
              </Badge>
            ))}
          </Flex>
        ) : null}
      </Card.Body>
    </Card>
  );
};

export { BlogCard };
