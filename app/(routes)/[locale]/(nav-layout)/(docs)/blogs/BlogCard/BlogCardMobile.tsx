import Image from "next/image";

import { type Blog } from "contentlayer/generated";

import { Badge } from "~/components/ds/Badge";
import { Card } from "~/components/ds/Card";
import { Flex } from "~/components/ds/Flex";
import { Typography } from "~/components/ds/Typography";

import { cn } from "@/utils/styles";

type BlogCardMobileProps = Blog;

const BlogCardMobile = ({
  title,
  category,
  image,
  tags,
}: BlogCardMobileProps) => {
  return (
    <Card className={cn("group max-w-none")}>
      <Card.Body>
        <div className="grid grid-cols-[1fr_120px] gap-xs">
          <Flex direction="column" className="gap-3xs">
            <Typography
              variant="label-xs"
              lg="label-m"
              className="line-clamp-1 text-secondary"
            >
              {category.name}
            </Typography>

            <Card.Title>
              <Typography
                variant="body-s"
                md="body-m"
                className="mb-2xs-xs line-clamp-3"
              >
                {title}
              </Typography>
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
            <Card.Figure className={cn("aspect-square rounded-lg")}>
              <Image
                className="h-full w-full transition-all duration-500 group-hover:scale-110"
                src={image}
                alt={image}
                width={120}
                height={120}
              />
            </Card.Figure>
          ) : null}
        </div>
      </Card.Body>
    </Card>
  );
};

export { BlogCardMobile };
