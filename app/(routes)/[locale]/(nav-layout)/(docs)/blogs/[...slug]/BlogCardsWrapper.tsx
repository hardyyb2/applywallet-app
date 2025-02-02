import { type PropsWithChildren } from "react";

const BlogCardsWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid grid-cols-1 gap-xs-s lg:grid-cols-[repeat(auto-fill,minmax(360px,1fr))]">
      {children}
    </div>
  );
};

export { BlogCardsWrapper };
