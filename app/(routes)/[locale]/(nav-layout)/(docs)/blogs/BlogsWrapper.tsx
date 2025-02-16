"use client";

import { useBreakPoint } from "@/hooks/useBreakPoint";

type BlogsWrapperProps = {
  mobile: React.ReactNode;
  children: React.ReactNode;
};

const BlogsWrapper = ({ mobile, children }: BlogsWrapperProps) => {
  const { isBelowLg } = useBreakPoint("lg");

  if (isBelowLg) {
    return mobile;
  }

  return children;
};

export { BlogsWrapper };
