import Image from "next/image";
import { notFound } from "next/navigation";

import {
  Flex,
  Mdx,
  typographyVariants,
} from "@/_components/ui/isolated/common";
import { Divider } from "@/_components/ui/isolated/wrapped";
import { allBlogs } from "contentlayer/generated";
import dayjs from "dayjs";

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
    <main className="w-full rounded-2xl">
      <Flex
        direction="column"
        align="center"
        className="mx-auto rounded-2xl bg-base-100 p-m-l"
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
    </main>
  );
};

export default BlogPage;
