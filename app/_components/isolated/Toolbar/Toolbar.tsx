"use client";

import * as React from "react";

import * as ToolbarPrimitive from "@radix-ui/react-toolbar";
import { type VariantProps } from "cva";

import { cnM } from "@/utils/styles";

import { Divider } from "../Divider";
import { Icons } from "../Icons";
import { toggleVariants, type ToggleProps } from "../Toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipTrigger,
} from "../Tooltip";

const ToolbarToggleGroup = ToolbarPrimitive.ToggleGroup;

interface ToolbarProps
  extends React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Root> {}

const Toolbar = React.forwardRef<
  React.ElementRef<typeof ToolbarPrimitive.Root>,
  ToolbarProps
>(({ className, ...props }, ref) => (
  <ToolbarPrimitive.Root
    ref={ref}
    className={cnM(
      "relative flex select-none items-stretch gap-1 bg-base-100",
      className,
    )}
    {...props}
  />
));
Toolbar.displayName = ToolbarPrimitive.Root.displayName;

const ToolbarLink = React.forwardRef<
  React.ElementRef<typeof ToolbarPrimitive.Link>,
  React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Link>
>(({ className, ...props }, ref) => (
  <ToolbarPrimitive.Link
    ref={ref}
    className={cnM("font-medium underline underline-offset-4", className)}
    {...props}
  />
));
ToolbarLink.displayName = ToolbarPrimitive.Link.displayName;

const ToolbarSeparator = React.forwardRef<
  React.ElementRef<typeof ToolbarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ToolbarPrimitive.Separator
    ref={ref}
    className={cnM("shrink-0", "my-1 w-[1px]", className)}
    {...props}
  />
));
ToolbarSeparator.displayName = ToolbarPrimitive.Separator.displayName;

// TODO - add toggle
const ToolbarToggleItem = React.forwardRef<
  React.ElementRef<typeof ToolbarPrimitive.ToggleItem>,
  React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.ToggleItem>
>(({ className, ...props }, ref) => (
  <ToolbarPrimitive.ToggleItem ref={ref} className={className} {...props} />
));
ToolbarToggleItem.displayName = ToolbarPrimitive.ToggleItem.displayName;

const ToolbarGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { noSeparator?: boolean }
>(({ noSeparator, className, children }, ref) => {
  const childArr = React.Children.map(children, (c) => c);
  if (!childArr || childArr.length === 0) {
    return null;
  }

  return (
    <div ref={ref} className={cnM("flex", className)}>
      {!noSeparator && (
        <div className="h-full py-1">
          {/* TODO - replace with separator */}
          <Divider vertical />
        </div>
      )}

      <div className="mx-1 flex items-center gap-1">{children}</div>
    </div>
  );
});
ToolbarGroup.displayName = "ToolbarGroup";

export interface ToolbarButtonProps
  extends React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Button>,
    VariantProps<typeof toggleVariants>,
    Omit<ToggleProps, "type"> {
  buttonType?: "button" | "toggle";
  pressed?: boolean;
  tooltip?: React.ReactNode;
  isDropdown?: boolean;
}

const ToolbarButton = React.forwardRef<
  React.ElementRef<typeof ToolbarPrimitive.Button>,
  ToolbarButtonProps
>(
  (
    {
      className,
      variant,
      size = "sm",
      isDropdown,
      children,
      pressed,
      value,
      tooltip,
      ...props
    },
    ref,
  ) => {
    // const [isLoaded, setIsLoaded] = React.useState(false);

    // React.useEffect(() => {
    //   setIsLoaded(true);
    // }, []);

    const content =
      typeof pressed === "boolean" ? (
        <ToolbarToggleGroup type="single" value="single">
          <ToolbarToggleItem
            ref={ref}
            className={cnM(
              toggleVariants({
                variant,
                size,
              }),
              isDropdown && "my-1 justify-between pr-1",
              className,
            )}
            value={pressed ? "single" : ""}
            {...props}
          >
            <div className="flex flex-1">{children}</div>
            <div>
              {isDropdown && (
                <Icons.ChevronDown className="ml-0.5 h-4 w-4" data-icon />
              )}
            </div>
          </ToolbarToggleItem>
        </ToolbarToggleGroup>
      ) : (
        <ToolbarPrimitive.Button
          ref={ref}
          className={cnM(
            toggleVariants({
              variant,
              size,
            }),
            isDropdown && "pr-1",
            className,
          )}
          {...props}
        >
          {children}
        </ToolbarPrimitive.Button>
      );

    // return isLoaded &&
    return tooltip ? (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>{content}</TooltipTrigger>

          <TooltipPortal>
            <TooltipContent>{tooltip}</TooltipContent>
          </TooltipPortal>
        </Tooltip>
      </TooltipProvider>
    ) : (
      <>{content}</>
    );
  },
);
ToolbarButton.displayName = ToolbarPrimitive.Button.displayName;

export {
  Toolbar,
  ToolbarButton,
  ToolbarSeparator,
  ToolbarLink,
  ToolbarToggleGroup,
  ToolbarToggleItem,
  type ToolbarProps,
};
