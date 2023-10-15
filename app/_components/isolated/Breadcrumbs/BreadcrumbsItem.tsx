import { forwardRef, LiHTMLAttributes } from "react";

export type BreadcrumbsItemProps = LiHTMLAttributes<HTMLLIElement> & {
  href?: string;
};

const BreadcrumbsItem = forwardRef<HTMLLIElement, BreadcrumbsItemProps>(
  ({ children, href, ...props }, ref): JSX.Element => {
    return (
      <li role="link" {...props} ref={ref}>
        {children}
      </li>
    );
  },
);

BreadcrumbsItem.displayName = "BreadcrumbsItem";

export { BreadcrumbsItem };
