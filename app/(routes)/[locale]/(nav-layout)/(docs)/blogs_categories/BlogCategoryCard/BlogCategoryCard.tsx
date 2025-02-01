import type { BlogCategory } from "contentlayer/generated";

import { Card } from "~/components/ds/Card";

import { cn } from "@/utils/styles";

type BlogCategoryCardProps = {
  category: BlogCategory;
};

const BlogCategoryCard = ({ category }: BlogCategoryCardProps) => {
  const { image, name } = category;

  console.log("image" + image);

  return (
    <Card
      className={cn(
        "group relative w-full",
        "before:absolute before:-left-2 before:-z-[1] before:h-full before:w-full before:rounded-2xl before:bg-accent",
      )}
      compact
    >
      <Card.Body className="items-center bg-base-200">
        {image ? (
          <Card.Figure
            className={cn("m-3xs h-16 w-2xl min-w-2xl rounded-xl")}
            dangerouslySetInnerHTML={{ __html: image }}
          />
        ) : null}
        <Card.Title className="title-m line-clamp-1">{name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export { BlogCategoryCard };
