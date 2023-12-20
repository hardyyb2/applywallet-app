import Link from "next/link";

import { Button } from "@/components/isolated/Button";
import { Flex } from "@/components/isolated/Flex";
import { Icons } from "@/components/isolated/Icons";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/isolated/Tooltip";
import { Typography } from "@/components/isolated/Typography";
import { cn } from "@/utils/styles";

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
        className="btn btn-ghost flex-0 px-2"
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
          <TooltipContent>
            <Typography variant="body-l">
              {navOpen ? "close nav" : "open nav"}
            </Typography>
            <TooltipArrow />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Flex>
  );
};

export { SideNavBrand };
