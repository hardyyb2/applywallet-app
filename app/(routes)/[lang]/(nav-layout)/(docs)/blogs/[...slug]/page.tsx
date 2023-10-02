import { notFound } from "next/navigation";

import { Flex, Mdx } from "@/_components/ui/isolated/common";
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
          </Mdx.Header>
          <Mdx.Content code={blog.body.code} />
        </Mdx>
      </Flex>
    </main>
  );
};

export default BlogPage;
