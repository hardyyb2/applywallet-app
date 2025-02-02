import type { Metadata } from "next";
import Link from "next/link";

import { allBlogs } from "contentlayer/generated";

import { Flex } from "~/components/ds/Flex";
import { AppRoutes } from "~/utils/routes";

import { getI18n } from "@/locales/server";
import { getAppBaseURL } from "@/utils/app";
import { i18n } from "@/utils/locale-utils";

import { BlogCardsWrapper } from "./[...slug]/BlogCardsWrapper";
import { BlogCard, BlogCardMobile } from "./BlogCard";
import { BlogCardClient } from "./BlogCardClient";

export const metadata: Metadata = {
  title: "blogs | applywallet",
  description:
    "read blogs about engineering, frontend development, productivity, and more.",
  keywords: [
    "react",
    "interview",
    "blogs",
    "engineering",
    "productivity",
    "frontend development",
    "career insights",
    "resume tips",
  ],
  alternates: {
    canonical: AppRoutes.BLOGS,
    languages: i18n.locales.reduce(
      (acc, locale) => ({
        ...acc,
        [locale]: `${locale}/${AppRoutes.BLOGS}`,
      }),
      {},
    ),
  },
  metadataBase: new URL(`${getAppBaseURL()}${AppRoutes.BLOGS}`),
  openGraph: {
    title: "blogs | applywallet",
    description:
      "read blogs about engineering, frontend development, productivity, and more.",
    type: "website",
    url: `${getAppBaseURL()}${AppRoutes.BLOGS}`,
    siteName: "applywallet",
    images: [
      {
        url: "/images/seo/base-opengraph-image.png",
        alt: "blogs | applywallet",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "blogs | applywallet",
    description:
      "read blogs about engineering, frontend development, productivity, and more.",
    images: [
      {
        url: "/images/seo/base-twitter-image.png",
        alt: "blogs | applywallet",
        type: "image/png",
      },
    ],
  },
};

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
