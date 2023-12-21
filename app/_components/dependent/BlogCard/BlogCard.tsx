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
    <Card className={cn("group max-w-none bg-base-100")}>
      {image ? (
        <Card.Figure className={cn("m-3xs h-80")}>
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
      <Card.Body className="rounded-t-none">
        <Typography variant="title-s" className="line-clamp-1 text-secondary">
          {category.name}
        </Typography>
        <Card.Title variant="headline-l" className="mb-2xs-xs line-clamp-4">
          {title}
        </Card.Title>

        <Typography
          variant="body-l"
          className="mb-3xs-2xs line-clamp-3 font-light"
        >
          {description}
        </Typography>

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
