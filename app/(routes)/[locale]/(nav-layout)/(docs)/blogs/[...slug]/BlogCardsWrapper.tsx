"use client";

import type { PropsWithChildren } from "react";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { useBreakPoint } from "@/hooks/useBreakPoint";

const BlogCardsWrapper = ({ children }: PropsWithChildren) => {
  const { isBelowLg } = useBreakPoint("lg");

  if (isBelowLg) {
    return <div className="grid grid-cols-1 gap-xs">{children}</div>;
  }

  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 300: 1, 768: 2, 1440: 3, 1920: 4 }}
    >
      <Masonry gutter="1rem">{children}</Masonry>
    </ResponsiveMasonry>
  );
};

export { BlogCardsWrapper };
