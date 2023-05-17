import clsx from "clsx";
import Link from "next/link";

import { Flex, Typography } from "app/components/ui/isolated/common";
import { Button } from "app/components/ui/isolated/wrapped";

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
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </div>
        )}
      </Link>
      <Button
        color="ghost"
        onClick={onToggleClick}
        className={clsx(navOpen && "p-2")}
      >
        {navOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-4 w-4 stroke-current rotate-180"
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
