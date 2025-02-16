import type { Metadata } from "next";
import Link from "next/link";

import { allBlogs } from "contentlayer/generated";
import { setStaticParamsLocale } from "next-international/server";

import { AppRoutes } from "~/utils/routes";

import { BasePageHeader } from "@/components/dependent/BasePageHeader";
import { getI18n, getStaticParams } from "@/locales/server";
import { getAppBaseURL } from "@/utils/app";
import { i18n } from "@/utils/locale-utils";

import { BlogCard } from "./BlogCard";
import { BlogsListMobile } from "./BlogsListMobile";
import { BlogsWrapper } from "./BlogsWrapper";

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

export const generateStaticParams = () => {
  return getStaticParams();
};

type BlogsPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const BlogsPage = async ({ params }: BlogsPageProps) => {
  const { locale } = await params;
  setStaticParamsLocale(locale);
  const t = await getI18n();

  return (
    <div className="px-5 py-4 lg:px-10">
      <BasePageHeader title={t("blogs.title")} subtitle={t("blogs.subtitle")} />

      <BlogsWrapper mobile={<BlogsListMobile />}>
        <div className="gap-xs-s hidden grid-cols-1 lg:grid lg:grid-cols-[repeat(auto-fill,minmax(360px,1fr))]">
          {allBlogs.map((blog) => (
            <Link
              href={blog.slug}
              key={blog._id}
              className="outline-base-content rounded-2xl hover:outline-4 hover:outline-dashed focus-visible:outline-dashed"
            >
              <BlogCard {...blog} />
            </Link>
          ))}
        </div>
      </BlogsWrapper>
    </div>
  );
};

export default BlogsPage;
