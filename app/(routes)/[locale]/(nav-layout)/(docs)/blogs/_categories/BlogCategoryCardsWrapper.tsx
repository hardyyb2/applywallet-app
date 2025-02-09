import { type PropsWithChildren } from "react";

const BlogCategoryCardsWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(256px,1fr))] gap-xs">
      {children}
    </div>
  );
};

export { BlogCategoryCardsWrapper };
