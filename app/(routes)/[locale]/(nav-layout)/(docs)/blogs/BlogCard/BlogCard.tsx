import Image from "next/image";

import { type Blog } from "contentlayer/generated";

import { Badge } from "~/components/ds/Badge";
import { Card } from "~/components/ds/Card";
import { Flex } from "~/components/ds/Flex";

import { cn, cnM } from "@/utils/styles";

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
          <div
            className={cnM(
              "absolute bottom-0 left-0 z-10 h-1/3 w-full",
              styles.imageMask,
            )}
          />
          <Image
            className="transition-all duration-500 group-hover:scale-110"
            src={image}
            alt={image}
            fill
          />
        </Card.Figure>
      ) : null}
      <Card.Body className="rounded-t-none">
        <span className="label-s line-clamp-1 text-secondary lg:label-m">
          {category.name}
        </span>
        <Card.Title className="headline-s mb-2xs-xs line-clamp-4">
          {title}
        </Card.Title>

        <span className="body-s mb-3xs-2xs line-clamp-3 font-light">
          {description}
        </span>

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
