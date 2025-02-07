import React from "react";
import Link from "next/link";

import { allBlogCategories } from "contentlayer/generated";

import { Flex } from "~/components/ds/Flex";

import { BlogCategoryCard } from "./BlogCategoryCard/BlogCategoryCard";
import { BlogCategoryCardsWrapper } from "./BlogCategoryCardsWrapper";

const BlogsCategoriesPage = () => {
  return (
    <div className="px-5 py-4 lg:px-10">
      <Flex direction="column" className="mb-s-m">
        <h1 className="headline-s lg:headline-m">blog categories</h1>
        <h4 className="label-s lg:label-m">categories for blogs</h4>
      </Flex>
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
