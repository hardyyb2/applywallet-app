"use client";

import { type PropsWithChildren } from "react";
import dynamic from "next/dynamic";

import { BarLoader } from "~/components/ds/BarLoader";

import { useBreakPoint } from "@/hooks/useBreakPoint";

const ResponsiveMasonry = dynamic(
  () => import("react-responsive-masonry").then((mod) => mod.ResponsiveMasonry),
  {
    loading: () => <BarLoader />,
    ssr: false,
  },
);
const Masonry = dynamic(
  () => import("react-responsive-masonry").then((mod) => mod.default),
  {
    loading: () => <BarLoader />,
    ssr: false,
  },
);

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
