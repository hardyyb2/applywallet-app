import { ReactNode } from "react";

const BlogsLayout = ({ children }: { children: ReactNode }) => {
  return <div className="px-s-m py-xs">{children}</div>;
};

export default BlogsLayout;
