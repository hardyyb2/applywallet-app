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
      className={clsx("gap-2 / py-2", className)}
    >
      <Link
        href={link}
        aria-current="page"
        aria-label="Homepage"
        className="flex-0 / px-2 / btn btn-ghost"
      >
        <AnimatePresence>
          {navOpen ? (
            <div className="inline-flex gap-1 / text-lg text-primary / lowercase">
              <Typography>hardik</Typography>
              <Typography className="text-base-content">badola</Typography>
            </div>
          ) : (
            <div>h</div>
          )}
        </AnimatePresence>
      </Link>
    </Flex>
  );
};

export default SideNavBrand;
