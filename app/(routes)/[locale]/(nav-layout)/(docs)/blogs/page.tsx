import Link from "next/link";

import { allBlogs } from "contentlayer/generated";

import { Flex } from "~/components/isolated/Flex";

import { BlogCard } from "@/components/dependent/BlogCard";
import { getI18n } from "@/locales/server";

import { BlogCardsWrapper } from "./[...slug]/BlogCardsWrapper";

const BlogsPage = async () => {
  const t = await getI18n();

  return (
    <div className="px-6 py-4 lg:px-10">
      <Flex justify="space-between" align="center" className="mb-m-l gap-4">
        <Flex direction="column">
          <h1 className="headline-s lg:headline-m">{t("blogs.title")}</h1>
          <h4 className="label-s lg:label-m">{t("blogs.subtitle")}</h4>
        </Flex>
      </Flex>

      <BlogCardsWrapper>
        {allBlogs.map((blog) => (
          <Link
            href={blog.slug}
            key={blog._id}
            className="rounded-2xl outline-4 outline-base-content hover:outline-dashed focus-visible:outline-dashed"
          >
            <BlogCard {...blog} />
          </Link>
        ))}
      </BlogCardsWrapper>
    </div>
  );
};

export default BlogsPage;
