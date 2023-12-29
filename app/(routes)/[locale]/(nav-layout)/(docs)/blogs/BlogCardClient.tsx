"use client";

import type { Blog } from "contentlayer/generated";

import { useBreakPoint } from "@/hooks/useBreakPoint";

import { BlogCard } from "./BlogCard/BlogCard";
import { BlogCardMobile } from "./BlogCard/BlogCardMobile";

type BlogCardClientProps = {
  blog: Blog;
};

const BlogCardClient = ({ blog }: BlogCardClientProps) => {
  const { isBelowLg } = useBreakPoint("lg");

  if (isBelowLg) {
    return <BlogCardMobile {...blog} />;
  }

  return <BlogCard {...blog} />;
};

export { BlogCardClient };
