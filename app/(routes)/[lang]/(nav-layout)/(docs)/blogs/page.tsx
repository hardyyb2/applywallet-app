import Link from "next/link";

import { BlogCard } from "@/_components/ui/dependent";
import { Flex, Typography } from "@/_components/ui/isolated/common";
import { allBlogs } from "contentlayer/generated";

import { BlogCardsWrapper } from "./BlogCardsWrapper";

const BlogsPage = () => {
  return (
    <div className="px-6 py-4 lg:px-10">
      <Flex justify="space-between" align="center" className="mb-m-l gap-4">
        <Flex direction="column">
          <Typography variant="h3">blogs</Typography>
          <Typography variant="subtitle2">explore ideas and stories</Typography>
        </Flex>
      </Flex>

      <BlogCardsWrapper>
        {allBlogs.map((blog) => (
          <Link
            href={blog.slug}
            key={blog._id}
            className="rounded-2xl outline-4 outline-base-content hover:outline-dashed focus-visible:outline-dashed"
          >
            <BlogCard {...blog} />
          </Link>
        ))}
      </BlogCardsWrapper>
    </div>
  );
};

export default BlogsPage;
