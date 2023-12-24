import { type HTMLAttributes } from "react";

import { cn } from "@/utils/styles";

export type DividerProps = HTMLAttributes<HTMLDivElement> & {
  vertical?: boolean;
  horizontal?: boolean;
  responsive?: boolean;
};

/** @deprecated use `Separator` instead */
const Divider = ({
  children,
  vertical,
  horizontal,
  responsive,
  className,
  ...props
}: DividerProps): JSX.Element => {
  const classes = cn("dui-divider", className, {
    "dui-divider-vertical": vertical,
    "dui-divider-horizontal": horizontal,
    "lg:dui-divider-horizontal": responsive,
  });

  return (
    <div role="separator" {...props} className={classes}>
      {children}
    </div>
  );
};

export { Divider };
