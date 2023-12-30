import Link from "next/link";

import { allBlogs } from "contentlayer/generated";

import { Flex } from "~/components/ds/Flex";

import { getI18n } from "@/locales/server";

import { BlogCardsWrapper } from "./[...slug]/BlogCardsWrapper";
import { BlogCard, BlogCardMobile } from "./BlogCard";
import { BlogCardClient } from "./BlogCardClient";

const BlogsPage = async () => {
  const t = await getI18n();

  return (
    <div className="px-5 py-4 lg:px-10">
      <Flex direction="column" className="mb-s-m">
        <h1 className="headline-s lg:headline-m">{t("blogs.title")}</h1>
        <h4 className="label-s lg:label-m">{t("blogs.subtitle")}</h4>
      </Flex>

      <BlogCardsWrapper>
        {allBlogs.map((blog) => (
          <Link
            href={blog.slug}
            key={blog._id}
            className="rounded-2xl outline-4 outline-base-content hover:outline-dashed focus-visible:outline-dashed"
          >
            <BlogCardClient mobile={<BlogCardMobile {...blog} />}>
              <BlogCard {...blog} />
            </BlogCardClient>
          </Link>
        ))}
      </BlogCardsWrapper>
    </div>
  );
};

export default BlogsPage;
