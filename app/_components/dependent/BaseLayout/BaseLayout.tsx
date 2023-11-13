import { forwardRef, type ReactNode } from "react";

import { cn } from "@/utils/styles";

/* <BaseLayoutHead> */
interface BaseLayoutHeadProps {
  children: ReactNode;
  className?: string;
}

const BaseLayoutHead = forwardRef<HTMLDivElement, BaseLayoutHeadProps>(
  ({ className, ...rest }, ref) => {
    const classes = cn(className);

    return <header {...rest} className={classes} ref={ref} />;
  },
);

BaseLayoutHead.displayName = "BaseLayoutHead";
/* </BaseLayoutHead> */

/* <BaseLayoutBody> */
interface BaseLayoutBodyProps {
  children: ReactNode;
  className?: string;
}

const BaseLayoutBody = forwardRef<HTMLDivElement, BaseLayoutBodyProps>(
  ({ className, ...rest }, ref) => {
    const classes = cn("h-full flex-1", className);

    return <main {...rest} className={classes} ref={ref} />;
  },
);

BaseLayoutBody.displayName = "BaseLayoutBody";
/* </BaseLayoutBody> */

export interface BaseLayoutProps {
  children: ReactNode;
  className?: string;
}

const BaseLayout = forwardRef<HTMLDivElement, BaseLayoutProps>(
  ({ children, className = "", ...rest }, ref) => {
    const classes = cn("flex flex-col", className);

    return (
      <div {...rest} className={classes} ref={ref}>
        {children}
      </div>
    );
  },
);

BaseLayout.displayName = "BaseLayout";

const BaseLayoutCompound = Object.assign(BaseLayout, {
  Head: BaseLayoutHead,
  Body: BaseLayoutBody,
});

export { BaseLayoutCompound as BaseLayout };
