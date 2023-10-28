import Image from "next/image";
import { notFound } from "next/navigation";

import { allBlogs } from "contentlayer/generated";

import { IconLink, Mdx } from "@/components/dependent";
import { Breadcrumbs } from "@/components/isolated/Breadcrumbs";
import { Flex } from "@/components/isolated/Flex";
import {
  ScrollArea,
  ScrollAreaViewport,
  ScrollBar,
} from "@/components/isolated/ScrollArea";
import { AppRoutes } from "@/utils/routes.utils";

import { BlogMetaInfo } from "./BlogMetaInfo/BlogMetaInfo";
import { BlogScrollWrapper } from "./BlogScrollWrapper/BlogScrollWrapper";

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

  if (!blog) {
    notFound();
  }

  return (
    <div className="h-full overflow-hidden px-s-m pb-s">
      <Flex direction="column" className="h-full">
        <ScrollArea>
          <ScrollAreaViewport>
            <Breadcrumbs className="mb-2xs flex-0 pt-0 [&_a]:no-underline">
              <Breadcrumbs.Item>
                <IconLink href={AppRoutes.BLOGS} />
              </Breadcrumbs.Item>
              <Breadcrumbs.Item>{blog.title}</Breadcrumbs.Item>
            </Breadcrumbs>
          </ScrollAreaViewport>
          <ScrollBar orientation="horizontal" className="hidden h-0" />
        </ScrollArea>
        <BlogScrollWrapper>
          <Mdx className="prose prose-sm w-full md:prose-base lg:prose-lg xl:prose-xl">
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
    </div>
  );
};

export default BlogPage;
