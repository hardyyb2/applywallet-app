import { Flex, Typography } from "@/components/isolated/common";
import { Button } from "@/components/isolated/wrapped";
import clsx from "clsx";
import { AnimatePresence, m } from "framer-motion";
import Link from "next/link";
import React from "react";

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
      className={clsx("gap-2 / py-2", className)}
    >
      <Link
        href={link}
        aria-current="page"
        aria-label="Homepage"
        className="flex-0 / px-2 / btn btn-ghost"
      >
        {navOpen ? (
          <div className="inline-flex gap-1 / text-lg text-primary / lowercase">
            <Typography>hardik</Typography>
            <Typography className="text-base-content">badola</Typography>
          </div>
        ) : (
          <div>h</div>
        )}
      </Link>
      <Button color="ghost" onClick={onToggleClick}>
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
      </Button>
    </Flex>
  );
};

export default SideNavBrand;
