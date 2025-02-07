import { notFound } from "next/navigation";

import { allBlogCategories } from "contentlayer/generated";

import { Flex } from "~/components/ds/Flex";

type BlogCategoryPageProps = {
  params: Promise<{ slug: string[] }>;
};

export const generateStaticParams = async () => {
  return allBlogCategories.map((cat) => ({
    slug: cat.slugAsParams.split("/"),
  }));
};

export const generateMetadata = async (props: BlogCategoryPageProps) => {
  const params = await props.params;
  const cat = await getCategoryFromParams(params);

  if (!cat) {
    return {};
  }

  return { title: cat.name, description: cat.description };
};

async function getCategoryFromParams(params: { slug: string[] }) {
  const slug = params.slug?.join("/") || "";
  const blog = allBlogCategories.find((cat) => cat.slugAsParams === slug);

  if (!blog) {
    null;
  }

  return blog;
}

const BlogCategoryPage = async (props: BlogCategoryPageProps) => {
  const params = await props.params;
  const cat = await getCategoryFromParams(params);

  if (!cat) {
    notFound();
  }

  return (
    <Flex direction="column" className="h-full">
      {cat.name}
    </Flex>
  );
};

export default BlogCategoryPage;
