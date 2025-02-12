import { type ComponentProps, type JSX } from "react";

import { cva, type VariantProps } from "cva";

import { cnM } from "@/utils/styles";

const indicatorItemVariants = cva("d-indicator-item", {
  variants: {
    horizontal: {
      start: "d-indicator-start",
      center: "d-indicator-center",
      end: "d-indicator-end",
    },
    vertical: {
      top: "d-indicator-top",
      middle: "d-indicator-middle",
      bottom: "d-indicator-bottom",
    },
  },
});

interface IndicatorItemProps
  extends ComponentProps<"div">,
    VariantProps<typeof indicatorItemVariants> {}

const IndicatorItem = ({
  ref,
  children,
  horizontal = "end",
  vertical = "top",
  className,
  ...props
}: IndicatorItemProps) => {
  return (
    <div
      aria-label="indicator"
      {...props}
      className={indicatorItemVariants({ horizontal, vertical, className })}
      ref={ref}
    >
      {children}
    </div>
  );
};
IndicatorItem.displayName = "IndicatorItem";

type IndicatorProps = ComponentProps<"div">;

const Indicator = ({
  ref,
  children,
  className,
  ...props
}: IndicatorProps): JSX.Element => {
  return (
    <div {...props} className={cnM("d-indicator", className)} ref={ref}>
      {children}
    </div>
  );
};

Indicator.displayName = "Indicator";

export {
  Indicator,
  IndicatorItem,
  type IndicatorItemProps,
  type IndicatorProps,
  indicatorItemVariants,
};
