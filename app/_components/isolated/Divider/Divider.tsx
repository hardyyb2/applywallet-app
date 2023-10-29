import { type HTMLAttributes } from "react";

import { cn } from "@/utils/styles";

export type DividerProps = HTMLAttributes<HTMLDivElement> & {
  vertical?: boolean;
  horizontal?: boolean;
  responsive?: boolean;
};

const Divider = ({
  children,
  vertical,
  horizontal,
  responsive,
  className,
  ...props
}: DividerProps): JSX.Element => {
  const classes = cn("divider", className, {
    "divider-vertical": vertical,
    "divider-horizontal": horizontal,
    "lg:divider-horizontal": responsive,
  });

  return (
    <div role="separator" {...props} className={classes}>
      {children}
    </div>
  );
};

export { Divider };
