"use client";

import { PropsWithChildren } from "react";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const BlogCardsWrapper = ({ children }: PropsWithChildren) => {
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 300: 1, 768: 2, 900: 3, 1440: 4, 1920: 5 }}
    >
      <Masonry gutter="1rem">{children}</Masonry>
    </ResponsiveMasonry>
  );
};

export { BlogCardsWrapper };
