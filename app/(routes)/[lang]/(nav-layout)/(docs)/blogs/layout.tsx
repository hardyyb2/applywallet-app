import { ReactNode } from "react";

const BlogsLayout = ({ children }: { children: ReactNode }) => {
  return <article className="prose">{children}</article>;
};

export default BlogsLayout;
