import {
  forwardRef,
  type HTMLAttributes,
  type ReactElement,
  type Ref,
} from "react";

import { cn } from "@/utils/styles.utils";

import { typographyVariants } from "../Typography";
import { BreadcrumbsItem, type BreadcrumbsItemProps } from "./BreadcrumbsItem";

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
        className={typographyVariants({
          variant: "caption",
          className: cn("breadcrumbs", className),
        })}
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
