import React from "react";

import { Blog } from "contentlayer/generated";
import dayjs from "dayjs";

import { Flex, typographyVariants } from "@/components/ui/isolated/common";
import { Divider } from "@/components/ui/isolated/wrapped";

type BlogMetaInfo = {
  blog: Blog;
};

const BlogMetaInfo = ({ blog }: BlogMetaInfo) => {
  return (
    <Flex>
      <Flex
        className={typographyVariants({
          variant: "caption",
          className: "font-light",
        })}
        component="h6"
      >
        {dayjs(blog.date).format("MMM DD, YYYY").toLowerCase()}
        <Divider horizontal />
        {blog.category.name}
      </Flex>
    </Flex>
  );
};

export { BlogMetaInfo };
