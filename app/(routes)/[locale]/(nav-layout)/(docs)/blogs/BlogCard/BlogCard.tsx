import Image from "next/image";

import { type Blog } from "contentlayer/generated";

import { Badge } from "~/components/ds/Badge";
import { Card } from "~/components/ds/Card";
import { Flex } from "~/components/ds/Flex";
import { Typography } from "~/components/ds/Typography";

import { shimmer } from "@/utils/shimmer";
import { toBase64 } from "@/utils/string";
import { cn, cnM } from "@/utils/styles";

import styles from "./blogCard.module.css";

type BlogCardProps = Blog;

const BlogCard = ({
  title,
  description,
  category,
  image,
  tags,
}: BlogCardProps) => {
  return (
    <Card className={cn("group bg-base-100 max-w-none")}>
      {image ? (
        <Card.Figure className={cn("m-3xs h-80")}>
          <div
            className={cnM(
              "absolute bottom-0 left-0 z-10 h-1/3 w-full",
              styles.imageMask,
            )}
          />
          <Image
            className="h-full w-full transition-all duration-500 group-hover:scale-110"
            src={image}
            alt={image}
            fill
            sizes="(max-width: 1024px) 120px, 420px"
            placeholder={`data:image/svg+xml;base64,${toBase64(
              shimmer(500, 320),
            )}`}
          />
        </Card.Figure>
      ) : null}
      <Card.Body className="rounded-t-none">
        <Typography
          variant="label-s"
          lg="label-m"
          className="text-secondary line-clamp-1"
        >
          {category.name}
        </Typography>

        <Card.Title>
          <Typography variant="headline-s" className="mb-2xs-xs line-clamp-4">
            {title}
          </Typography>
        </Card.Title>

        <Typography
          variant="body-s"
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
