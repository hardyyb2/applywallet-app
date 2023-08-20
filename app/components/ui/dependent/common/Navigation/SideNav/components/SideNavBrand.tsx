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
          <div className="inline-flex gap-1 text-lg lowercase text-primary">
            <Typography>hardik</Typography>
            <Typography className="text-base-content">badola</Typography>
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
        {navOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-4 w-4 rotate-180 stroke-current"
          >
            <path
              d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
              className="fill-current"
            />
            <path
              d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
              className="fill-current "
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-4 w-4 stroke-current"
          >
            <path
              d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
              className="fill-current"
            />
            <path
              d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
              className="fill-current"
            />
          </svg>
        )}
      </Button>
    </Flex>
  );
};

export { SideNavBrand };
