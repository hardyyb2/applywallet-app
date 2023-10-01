import { allBlogs } from "contentlayer/generated";

const BlogsPage = () => {
  return (
    <div>
      {allBlogs.map((blog, index) => (
        <div key={index}>{blog.title}</div>
      ))}
    </div>
  );
};

export default BlogsPage;
