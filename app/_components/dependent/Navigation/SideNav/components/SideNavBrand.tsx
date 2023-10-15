import Link from "next/link";

import {
  Button,
  Flex,
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Typography,
} from "@/components/isolated";
import { Icons } from "@/components/isolated/Icons";
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
        className="btn-ghost btn flex-0 px-2"
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
            <Typography variant="h6">
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
