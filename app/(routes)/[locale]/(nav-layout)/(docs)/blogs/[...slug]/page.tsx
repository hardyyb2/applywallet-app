import Image from "next/image";
import { notFound } from "next/navigation";

import { allBlogs } from "contentlayer/generated";

import { Flex } from "~/components/ds/Flex";

import { Mdx } from "@/components/dependent/Mdx";

import { BlogMetaInfo } from "./BlogMetaInfo/BlogMetaInfo";
import { BlogScrollWrapper } from "./BlogScrollWrapper/BlogScrollWrapper";

type BlogPageProps = {
  params: Promise<{ slug: string[] }>;
};

export const generateStaticParams = async () => {
  return allBlogs.map((blog) => ({ slug: blog.slugAsParams.split("/") }));
};

export const generateMetadata = async (props: BlogPageProps) => {
  const params = await props.params;
  const blog = await getBlogFromParams(params);

  if (!blog) {
    return {};
  }

  return { title: blog.title, description: blog.description };
};

async function getBlogFromParams(params: { slug: string[] }) {
  const slug = params.slug?.join("/") || "";
  const blog = allBlogs.find((blog) => blog.slugAsParams === slug);

  if (!blog) {
    null;
  }

  return blog;
}

const BlogPage = async (props: BlogPageProps) => {
  const params = await props.params;
  const blog = await getBlogFromParams(params);

  if (!blog) {
    notFound();
  }

  return (
    <Flex direction="column" className="h-full">
      <BlogScrollWrapper>
        <Mdx className="prose prose-sm dui-prose w-full md:prose-base lg:prose-lg xl:prose-xl">
          <Mdx.Header>
            <h1>{blog.title}</h1>
            <BlogMetaInfo blog={blog} />
            {blog.image ? (
              <figure className="relative aspect-video overflow-hidden rounded-2xl">
                <Image
                  src={blog.image}
                  fill
                  alt={blog.title}
                  objectFit="cover"
                  className="h-full w-full"
                />
              </figure>
            ) : null}
          </Mdx.Header>
          <Mdx.Content code={blog.body.code} />
        </Mdx>
      </BlogScrollWrapper>
    </Flex>
  );
};

export default BlogPage;
