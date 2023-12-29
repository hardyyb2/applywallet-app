import Image from "next/image";

import { type Blog } from "contentlayer/generated";

import { Badge } from "~/components/ds/Badge";
import { Card } from "~/components/ds/Card";
import { Flex } from "~/components/ds/Flex";

import { cn } from "@/utils/styles";

type BlogCardMobileProps = Blog;

const BlogCardMobile = ({
  title,
  description,
  category,
  image,
  tags,
}: BlogCardMobileProps) => {
  return (
    <Card className={cn("group max-w-none bg-base-100")}>
      Mobile
      {image ? (
        <Card.Figure className={cn("m-3xs h-80")}>
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

export { BlogCardMobile };
