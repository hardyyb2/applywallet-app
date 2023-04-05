import { forwardRef, HTMLAttributes, ReactElement } from "react";
import clsx from "clsx";
import { ButtonProps } from "../Button/Button";

export type ButtonGroupProps = HTMLAttributes<HTMLDivElement> & {
  vertical?: boolean;
  children: ReactElement<ButtonProps>[];
};

const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ vertical, children, className, ...props }, ref): JSX.Element => {
    const classes = clsx("btn-group", className, {
      "btn-group-vertical": vertical,
    });

    return (
      <div {...props} className={classes} ref={ref}>
        {children}
      </div>
    );
  },
);

ButtonGroup.displayName = "ButtonGroup";
export { ButtonGroup };
