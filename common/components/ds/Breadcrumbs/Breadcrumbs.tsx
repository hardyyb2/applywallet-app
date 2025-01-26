import {
  forwardRef,
  type HTMLAttributes,
  type JSX,
  type LiHTMLAttributes,
  type ReactElement,
  type Ref,
} from "react";

import { cn } from "@/utils/styles";

/** <BreadcrumbsItem> */
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
/** </BreadcrumbsItem> */

export type BreadcrumbsProps = HTMLAttributes<HTMLDivElement> & {
  children?:
    | ReactElement<BreadcrumbsItemProps>
    | ReactElement<BreadcrumbsItemProps>[];
  innerRef?: Ref<HTMLUListElement>;
  innerProps?: HTMLAttributes<HTMLUListElement>;
};

const Breadcrumbs = forwardRef<HTMLDivElement, BreadcrumbsProps>(
  (
    { children, className, innerProps, innerRef, ...props },
    ref,
  ): JSX.Element => {
    return (
      <div
        role="navigation"
        aria-label="Breadcrumbs"
        {...props}
        className="dui-breadcrumbs caption-s !font-semibold lg:caption-l"
        ref={ref}
      >
        <ul {...innerProps} ref={innerRef}>
          {children}
        </ul>
      </div>
    );
  },
);

Breadcrumbs.displayName = "Breadcrumbs";

const BreadcrumbsCompound = Object.assign(Breadcrumbs, {
  Item: BreadcrumbsItem,
});

export { BreadcrumbsCompound as Breadcrumbs };
