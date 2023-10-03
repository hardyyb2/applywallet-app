import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  Flex,
  Mdx,
  typographyVariants,
} from "@/_components/ui/isolated/common";
import { Breadcrumbs, Divider } from "@/_components/ui/isolated/wrapped";
import { AppRoutes } from "@/_utils/routes.utils";
import { allBlogs } from "contentlayer/generated";
import dayjs from "dayjs";

import { BlogScrollWrapper } from "./BlogScrollWrapper";

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
        <Breadcrumbs className="mb-2xs flex-0 pt-0 [&_a]:no-underline">
          <Breadcrumbs.Item>
            <Link href={AppRoutes.BLOGS}>blogs</Link>
          </Breadcrumbs.Item>
          <Breadcrumbs.Item>{blog.title}</Breadcrumbs.Item>
        </Breadcrumbs>
        <BlogScrollWrapper>
          <Flex
            direction="column"
            align="center"
            className="absolute top-0 mx-auto w-full flex-1 rounded-2xl bg-base-100 p-m-l"
          >
            <Mdx className="prose prose-sm w-full  md:prose-base lg:prose-lg xl:prose-xl">
              <Mdx.Header>
                <h1>{blog.title}</h1>
                <Flex
                  className={typographyVariants({
                    variant: "caption",
                    className: "font-light",
                  })}
                  component="h6"
                >
                  {dayjs(blog.publishedAt).format("MMM DD, YYYY").toLowerCase()}
                  <Divider horizontal />
                  {blog.topic}
                </Flex>
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
          </Flex>
        </BlogScrollWrapper>
      </Flex>
    </div>
  );
};

export default BlogPage;
