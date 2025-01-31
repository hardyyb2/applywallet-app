import Image from "next/image";
import { notFound } from "next/navigation";

import { allBlogs } from "contentlayer/generated";

import { Breadcrumbs } from "~/components/ds/Breadcrumbs";
import { Flex } from "~/components/ds/Flex";
import {
  ScrollArea,
  ScrollAreaViewport,
  ScrollBar,
} from "~/components/ds/ScrollArea";
import { AppRoutes } from "~/utils/routes";

import { IconLink } from "@/components/dependent/IconLink";
import { Mdx } from "@/components/dependent/Mdx";
import { shimmer } from "@/utils/shimmer";
import { toBase64 } from "@/utils/string";

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
        <ScrollArea className="mb-2xs-xs w-full lg:block">
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
                  className="h-full w-full"
                  placeholder={`data:image/svg+xml;base64,${toBase64(
                    shimmer(700, 475),
                  )}`}
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
