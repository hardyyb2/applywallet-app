import { ReactNode } from "react";

import { BaseLayout } from "@/_components/ui/dependent";
import { cn } from "@/_utils/styles.utils";

const BlogsLayout = ({ children }: { children: ReactNode }) => {
  return <div className="h-full px-6 py-4 lg:px-10">{children}</div>;
};

export default BlogsLayout;
