import React from "react";
import Link from "next/link";

import { allBlogCategories } from "contentlayer/generated";

import { Flex } from "~/components/ds/Flex";
import { Typography } from "~/components/ds/Typography";

import { BasePageHeader } from "@/components/dependent/BasePageHeader";

import { BlogCategoryCard } from "./BlogCategoryCard/BlogCategoryCard";
import { BlogCategoryCardsWrapper } from "./BlogCategoryCardsWrapper";

const BlogsCategoriesPage = () => {
  return (
    <div className="px-5 py-4 lg:px-10">
      <BasePageHeader title="blog categories" subtitle="categories for blogs" />
      <BlogCategoryCardsWrapper>
        {allBlogCategories.map((category) => {
          return (
            <Link
              href={category.slug}
              key={category._id}
              className="w-full rounded-2xl"
            >
              <BlogCategoryCard category={category} />
            </Link>
          );
        })}
      </BlogCategoryCardsWrapper>
    </div>
  );
};

export default BlogsCategoriesPage;
