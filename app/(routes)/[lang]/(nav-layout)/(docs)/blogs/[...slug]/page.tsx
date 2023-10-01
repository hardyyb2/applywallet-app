import React from "react";
import { notFound } from "next/navigation";

import { allBlogs } from "contentlayer/generated";

type BlogPageProps = {
  params: { slug: string[] };
};

export const generateStaticParams = async () => {
  return allBlogs.map((blog) => ({ slug: blog.slugAsParams.split("/") }));
};

export const generateMetadata = async ({ params }: BlogPageProps) => {
  const blog = await getBlogFromParams(params);

  if (!blog) {
    return {};
  }

  return { title: blog.title, description: blog.description };
};

async function getBlogFromParams(params: BlogPageProps["params"]) {
  const slug = params.slug?.join("/") || "";
  const blog = allBlogs.find((blog) => blog.slugAsParams === slug);

  if (!blog) {
    null;
  }

  return blog;
}

const BlogPage = async ({ params }: BlogPageProps) => {
  const blog = await getBlogFromParams(params);

  console.log("blog", blog);

  if (!blog) {
    notFound();
  }

  return <div>{blog.title}</div>;
};

export default BlogPage;
