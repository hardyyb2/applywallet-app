import Link from "next/link";

import { cn } from "@/_utils/styles.utils";

import { Flex, Typography } from "@/components/ui/isolated/common";
import {
  Button,
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/isolated/wrapped";
import { Icons } from "@/components/ui/isolated/wrapped/Icons";

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
          <div className="text-lg inline-flex lowercase text-primary">
            <Typography>apply</Typography>
            <Typography className="text-base-content  ">wallet</Typography>
          </div>
        ) : (
          <div>
            <Icons.CustomHome />
          </div>
        )}
      </Link>
      <TooltipProvider delayDuration={600}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              color="ghost"
              onClick={onToggleClick}
              className={cn(navOpen && "p-2")}
            >
              {navOpen ? <Icons.PanelLeftClose /> : <Icons.PanelLeftOpen />}
            </Button>
          </TooltipTrigger>
          <TooltipContent className="bg-primary text-primary-content">
            <Typography variant="h6">
              {navOpen ? "close nav" : "open nav"}
            </Typography>
            <TooltipArrow className="fill-primary" />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Flex>
  );
};

export { SideNavBrand };
