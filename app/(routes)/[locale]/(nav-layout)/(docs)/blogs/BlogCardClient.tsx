"use client";

import { useBreakPoint } from "@/hooks/useBreakPoint";

type BlogCardClientProps = {
  mobile: React.ReactNode;
  children: React.ReactNode;
};

const BlogCardClient = ({ mobile, children }: BlogCardClientProps) => {
  const { isBelowLg } = useBreakPoint("lg");

  if (isBelowLg) {
    return mobile;
  }

  return children;
};

export { BlogCardClient };
