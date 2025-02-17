import { type ComponentProps } from "react";

import { cnM } from "@/utils/styles";

interface MenuProps extends ComponentProps<"ul"> {
  horizontal?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const Menu = ({ className, horizontal, size, ...props }: MenuProps) => {
  return (
    <ul
      className={cnM(
        "d-menu space-y-3xs-2xs",
        {
          "d-menu-horizontal": horizontal,
          "d-menu-xs": size === "xs",
          "d-menu-sm": size === "sm",
          "d-menu-md": size === "md",
          "d-menu-lg": size === "lg",
          "d-menu-xl": size === "xl",
        },
        className,
      )}
      {...props}
    />
  );
};

interface MenuTitleProps extends ComponentProps<"li"> {}

const MenuTitle = ({ className, ...props }: MenuTitleProps) => {
  return <li className={cnM("d-menu-title", className)} {...props} />;
};

interface MenuItemProps extends ComponentProps<"li"> {
  disabled?: boolean;
}

const MenuItem = ({ className, disabled, ...props }: MenuItemProps) => {
  return (
    <li
      className={cnM({ "d-menu-disabled": disabled }, className)}
      {...props}
    />
  );
};

export { Menu, MenuItem, MenuTitle };
