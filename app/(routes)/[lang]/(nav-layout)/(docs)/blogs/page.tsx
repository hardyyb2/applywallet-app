import { BlogCard } from "@/_components/ui/dependent";
import { cn } from "@/_utils/styles.utils";
import { allBlogs } from "contentlayer/generated";

const BlogsPage = () => {
  return (
    <div
      className={cn(
        "grid w-full gap-8",
        "grid-cols-[repeat(auto-fill,minmax(256px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(480px,1fr))]",
        "grid-flow-[row_dense]",
      )}
    >
      {allBlogs
        .concat(allBlogs)
        .concat(allBlogs)
        .concat(allBlogs)
        .concat(allBlogs)
        .concat(allBlogs)
        .concat(allBlogs)
        .concat(allBlogs)
        .map((blog) => (
          <BlogCard {...blog} key={blog._id} />
        ))}
    </div>
  );
};

export default BlogsPage;
