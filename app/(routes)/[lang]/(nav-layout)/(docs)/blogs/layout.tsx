import { ReactNode } from "react";

const BlogsLayout = ({ children }: { children: ReactNode }) => {
  return <div className="px-m-l py-s">{children}</div>;
};

export default BlogsLayout;
