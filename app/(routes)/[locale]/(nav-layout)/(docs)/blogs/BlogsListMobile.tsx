import Image from "next/image";
import Link from "next/link";

import { allBlogs } from "contentlayer/generated";

import { Badge } from "~/components/ds/Badge";
import { Flex } from "~/components/ds/Flex";
import { List, listItemVariants } from "~/components/ds/List";
import { Typography } from "~/components/ds/Typography";

import { shimmer } from "@/utils/shimmer";
import { toBase64 } from "@/utils/string";

const BlogsListMobile = () => {
  return (
    <Flex direction="column" className="bg-base-100 -mx-5 h-full">
      <List>
        {allBlogs.map((blog) => (
          <Link
            href={blog.slug}
            key={blog._id}
            className={listItemVariants({ className: "items-center" })}
            aria-label={blog.title}
            role="listitem"
          >
            {blog.image ? (
              <div>
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={96}
                  height={96}
                  className="rounded-box size-24"
                  placeholder={`data:image/svg+xml;base64,${toBase64(
                    shimmer(500, 320),
                  )}`}
                />
              </div>
            ) : null}
            <Flex direction="column" justify="center" className="gap-0.5">
              <Typography
                variant="label-xs"
                lg="label-m"
                className="text-secondary"
              >
                {blog.category.name}
              </Typography>
              <Typography variant="body-s" md="body-m" className="line-clamp-3">
                {blog.title}
              </Typography>

              {blog.tags?.length ? (
                <Flex className="mt-2xs gap-2">
                  {blog.tags.map((tag) => (
                    <Badge variant="outline" size="xs" key={tag}>
                      {tag}
                    </Badge>
                  ))}
                </Flex>
              ) : null}
            </Flex>
          </Link>
        ))}
      </List>
    </Flex>
  );
};

export { BlogsListMobile };
