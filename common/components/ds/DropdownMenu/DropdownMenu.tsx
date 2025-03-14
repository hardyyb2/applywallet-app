"use client";

import * as React from "react";

import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui";

import { cnM } from "@/utils/styles";

import { Icons } from "../Icons";

const DropdownMenu = DropdownMenuPrimitive.Root;
interface DropdownMenuProps extends React.ComponentProps<typeof DropdownMenu> {}

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = ({
  ref,
  className,
  showIcon = true,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  showIcon?: boolean;
}) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cnM(
      "body-s lg:body-m",
      "px-xs py-3xs focus:bg-base-300 lg:py-2xs relative flex cursor-pointer items-center rounded-lg outline-hidden transition-colors select-none data-disabled:cursor-not-allowed data-disabled:opacity-50",
      "data-[state=open]:bg-secondary data-[state=open]:text-secondary-content",
      className,
    )}
    {...props}
  >
    {children}
    {showIcon ? (
      <Icons.ChevronRight className="ml-2xs-xs h-4 w-4 lg:h-6 lg:w-6" />
    ) : null}
  </DropdownMenuPrimitive.SubTrigger>
);
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = ({
  ref,
  className,
  sideOffset = 16,
  alignOffset = -8,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) => (
  <DropdownMenuPrimitive.SubContent
    sideOffset={sideOffset}
    alignOffset={alignOffset}
    ref={ref}
    className={cnM(
      "border-base-content/40 bg-base-100 p-3xs lg:p-2xs z-50 overflow-hidden rounded-xl border",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
);
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = ({
  ref,
  className,
  sideOffset = 4,
  align = "end",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      align={align}
      className={cnM(
        "gap-3xs border-base-content/40 bg-base-100 p-3xs lg:p-2xs z-50 flex flex-col overflow-hidden rounded-xl border",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
);
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = ({
  ref,
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item>) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cnM(
      "body-s lg:body-m",
      "px-xs py-3xs lg:py-2xs relative flex cursor-pointer items-center rounded-lg outline-hidden transition-colors select-none",
      "focus:bg-base-300 data-disabled:cursor-not-allowed data-disabled:opacity-50",
      className,
    )}
    {...props}
  />
);
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = ({
  ref,
  className,
  children,
  checked,
  showIcon = true,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem> & {
  showIcon?: boolean;
}) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cnM(
      "body-s lg:body-m",
      "focus:text-accent-foreground px-xs py-3xs lg:py-2xs relative flex cursor-pointer items-center rounded-lg outline-hidden transition-colors select-none",
      "focus:bg-base-300 data-disabled:cursor-not-allowed data-disabled:opacity-50",
      "data-[state=checked]:bg-secondary data-[state=checked]:pl-m data-[state=checked]:text-secondary-content",
      className,
    )}
    checked={checked}
    {...props}
  >
    {showIcon ? (
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <Icons.Check className="h-4 w-4 lg:h-6 lg:w-6" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
    ) : null}
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
);
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

interface DropdownMenuRadioItemProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem> {
  showIcon?: boolean;
}

const DropdownMenuRadioItem = ({
  ref,
  className,
  children,
  showIcon = true,
  ...props
}: DropdownMenuRadioItemProps) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cnM(
      "body-s lg:body-m",
      "px-xs py-3xs focus:bg-base-300 lg:py-2xs relative flex cursor-pointer items-center rounded-lg outline-hidden transition-colors select-none",
      "data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-disabled:opacity-50",
      "data-[state=checked]:bg-secondary data-[state=checked]:text-secondary-content",
      showIcon && "data-[state=checked]:pl-m",
      className,
    )}
    {...props}
  >
    {showIcon ? (
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <Icons.CustomRadio className="stroke-secondary h-4 w-4 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
    ) : null}
    {children}
  </DropdownMenuPrimitive.RadioItem>
);
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = ({
  ref,
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean;
}) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cnM("label-m-bold", "px-xs py-3xs", inset && "pl-m", className)}
    {...props}
  />
);
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = ({
  ref,
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cnM("d-divider my-0! shrink-0", className)}
    {...props}
  />
);
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cnM("pl-xs ml-auto tracking-widest opacity-60", className)}
      {...props}
    />
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
  type DropdownMenuProps,
};
