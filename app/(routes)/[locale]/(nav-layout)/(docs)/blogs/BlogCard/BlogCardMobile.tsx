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
    <Card className={cn("group max-w-none")}>
      <Card.Body>
        <div className="grid grid-cols-[1fr_120px] gap-xs">
          <Flex direction="column">
            <span className="label-xs line-clamp-1 text-secondary lg:label-m">
              {category.name}
            </span>
            <Card.Title className="title-s mb-2xs-xs line-clamp-2 md:title-m">
              {title}
            </Card.Title>

            {tags?.length ? (
              <Flex className="gap-2">
                {tags.map((tag) => (
                  <Badge variant="outline" size="sm" key={tag}>
                    {tag}
                  </Badge>
                ))}
              </Flex>
            ) : null}
          </Flex>
          {image ? (
            <Card.Figure className={cn(" aspect-square rounded-lg")}>
              <Image
                className="transition-all duration-500 group-hover:scale-110"
                objectFit="cover"
                src={image}
                alt={image}
                fill
              />
            </Card.Figure>
          ) : null}
        </div>
      </Card.Body>
    </Card>
  );
};

export { BlogCardMobile };
