import Link from "next/link";

import { BlogCard } from "@/_components/ui/dependent";
import { allBlogs } from "contentlayer/generated";

import { BlogCardsWrapper } from "./BlogCardsWrapper";

const BlogsPage = () => {
  return (
    <BlogCardsWrapper>
      {allBlogs.map((blog, index) => (
        <Link href={blog.slug} key={blog._id}>
          <BlogCard {...blog} index={index} />
        </Link>
      ))}
    </BlogCardsWrapper>
  );
};

export default BlogsPage;
