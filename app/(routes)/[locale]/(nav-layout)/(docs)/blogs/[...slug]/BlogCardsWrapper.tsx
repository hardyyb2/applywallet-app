"use client";

import type { PropsWithChildren } from "react";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const BlogCardsWrapper = ({ children }: PropsWithChildren) => {
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 300: 1, 768: 2, 1440: 3, 1920: 4 }}
    >
      {/* @ts-expect-error some issue with types, fix it when it works */}
      <Masonry gutter="1rem">{children}</Masonry>
    </ResponsiveMasonry>
  );
};

export { BlogCardsWrapper };
