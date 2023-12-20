import React from "react";

import type { Blog } from "contentlayer/generated";
import dayjs from "dayjs";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/isolated/Avatar";
import { Divider } from "@/components/isolated/Divider";
import { Flex } from "@/components/isolated/Flex";
import { typographyVariants } from "@/components/isolated/Typography";
import { getInitials } from "@/utils/string";

import styles from "./blogMetaInfo.module.scss";

type BlogMetaInfo = {
  blog: Blog;
};

const BlogMetaInfo = ({ blog }: BlogMetaInfo) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Avatar className="not-prose" color="secondary">
          <AvatarImage src={blog.author.image} />
          <AvatarFallback>{getInitials(blog.author.name)}</AvatarFallback>
        </Avatar>
      </div>
      <div className={styles.details}>
        <div className={styles.name}>{blog.author.name}</div>
        <div className={styles.meta}>
          <Flex
            className={typographyVariants({
              variant: "label-l",
              className: "font-light",
            })}
            component="h6"
          >
            {dayjs(blog.date).format("MMM DD, YYYY").toLowerCase()}
            <Divider horizontal />
            {blog.category.name}
          </Flex>
        </div>
      </div>
    </div>
  );
};

export { BlogMetaInfo };
