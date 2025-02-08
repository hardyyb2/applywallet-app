import Link from "next/link";

import type { Blog } from "contentlayer/generated";
import dayjs from "dayjs";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ds/Avatar";
import { Separator } from "~/components/ds/Separator";
import { Typography } from "~/components/ds/Typography";

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
          <Typography
            variant="caption-l"
            lg="label-s"
            className="flex font-light"
          >
            {dayjs(blog.date).format("MMM DD, YYYY").toLowerCase()}
            <Separator orientation="horizontal" />
            <Link href={blog.category.slug}>{blog.category.name}</Link>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export { BlogMetaInfo };
