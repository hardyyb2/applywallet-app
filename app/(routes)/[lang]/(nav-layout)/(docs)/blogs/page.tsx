import Link from "next/link";

import { BlogCard } from "@/_components/ui/dependent";
import { allBlogs } from "contentlayer/generated";

import { BlogCardsWrapper } from "./BlogCardsWrapper";

const BlogsPage = () => {
  return (
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
  );
};

export default BlogsPage;
