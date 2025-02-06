import { type ReactNode } from "react";

import { cn, cnM } from "@/utils/styles";

/* <BaseLayoutHead> */
interface BaseLayoutHeadProps {
  children: ReactNode;
  className?: string;
  ref?: React.RefObject<HTMLDivElement>;
}

const BaseLayoutHead = ({ ref, className, ...rest }: BaseLayoutHeadProps) => {
  const classes = cn("flex-0", className);

  return <header {...rest} className={classes} ref={ref} />;
};

BaseLayoutHead.displayName = "BaseLayoutHead";
/* </BaseLayoutHead> */

/* <BaseLayoutBody> */
interface BaseLayoutBodyProps {
  children: ReactNode;
  className?: string;
}

const BaseLayoutBody = ({
  ref,
  className,
  ...rest
}: BaseLayoutBodyProps & {
  ref?: React.RefObject<HTMLDivElement>;
}) => {
  const classes = cn("flex h-full flex-1", className);

  return <main {...rest} className={classes} ref={ref} />;
};

BaseLayoutBody.displayName = "BaseLayoutBody";
/* </BaseLayoutBody> */

export interface BaseLayoutProps {
  children: ReactNode;
  className?: string;
}

const BaseLayout = ({
  ref,
  children,
  className = "",
  ...rest
}: BaseLayoutProps & {
  ref?: React.RefObject<HTMLDivElement>;
}) => {
  const classes = cnM("flex h-full flex-col", className);

  return (
    <div {...rest} className={classes} ref={ref}>
      {children}
    </div>
  );
};

BaseLayout.displayName = "BaseLayout";

const BaseLayoutCompound = Object.assign(BaseLayout, {
  Head: BaseLayoutHead,
  Body: BaseLayoutBody,
});

export { BaseLayoutCompound as BaseLayout };
