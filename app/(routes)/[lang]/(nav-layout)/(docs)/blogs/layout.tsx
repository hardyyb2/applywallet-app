import { ReactNode } from "react";

const BlogsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full overflow-hidden px-s-m py-2xs-xs">{children}</div>
  );
};

export default BlogsLayout;
