import Link from "next/link";

import { Flex, Typography } from "app/components/ui/isolated/common";
import { Button } from "app/components/ui/isolated/wrapped";

import { Icons } from "@/components/ui/isolated/wrapped/Icons";
import { cn } from "@/utils/styles.utils";

interface SideNavBrandProps {
  link?: string;
  className?: string;
  navOpen: boolean;
  onToggleClick: () => void;
}

const SideNavBrand = ({
  link = "/",
  className = "",
  navOpen = false,
  onToggleClick,
}: SideNavBrandProps) => {
  return (
    <Flex
      align="center"
      justify="space-between"
      direction={navOpen ? "row" : "column"}
      className={cn("gap-2 py-2", className)}
    >
      <Link
        href={link}
        aria-current="page"
        aria-label="Homepage"
        className="flex-0 btn-ghost btn px-2"
      >
        {navOpen ? (
          <div className="inline-flex text-lg lowercase text-primary">
            <Typography>apply</Typography>
            <Typography className="text-base-content  ">wallet</Typography>
          </div>
        ) : (
          <div>
            <Icons.CustomHome />
          </div>
        )}
      </Link>
      <Button
        color="ghost"
        onClick={onToggleClick}
        className={cn(navOpen && "p-2")}
      >
        {navOpen ? <Icons.PanelLeftClose /> : <Icons.PanelLeftOpen />}
      </Button>
    </Flex>
  );
};

export { SideNavBrand };
