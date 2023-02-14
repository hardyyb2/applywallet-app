import { LabelHTMLAttributes } from "react";

export type DropdownToggleProps = Omit<
  LabelHTMLAttributes<HTMLLabelElement>,
  "color"
>;

const DropdownToggle = ({
  children,
  className,
  ...props
}: DropdownToggleProps) => {
  return (
    <label tabIndex={0} className={className} {...props}>
      {children}
    </label>
  );
};

export { DropdownToggle };
