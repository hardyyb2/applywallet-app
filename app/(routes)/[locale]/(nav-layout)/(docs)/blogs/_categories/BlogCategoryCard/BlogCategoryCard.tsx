import type { BlogCategory } from "contentlayer/generated";
import DOMPurify from "isomorphic-dompurify";

import { Card } from "~/components/ds/Card";
import { Typography } from "~/components/ds/Typography";

import { cn } from "@/utils/styles";

type BlogCategoryCardProps = {
  category: BlogCategory;
};

const BlogCategoryCard = ({ category }: BlogCategoryCardProps) => {
  const { image, name } = category;

  const imageHtml = image ? DOMPurify.sanitize(image) : null;

  return (
    <Card className={cn("group relative w-full")} compact>
      <Card.Body className="items-center bg-base-200">
        {imageHtml ? (
          <Card.Figure
            className={cn("m-3xs h-xl w-auto")}
            dangerouslySetInnerHTML={{ __html: imageHtml }}
          />
        ) : null}
        <Card.Title>
          <Typography variant="title-m" className="line-clamp-1">
            {name}
          </Typography>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export { BlogCategoryCard };
