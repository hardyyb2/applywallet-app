import Image from "next/image";
import Link from "next/link";

import { Button } from "~/components/ds/Button";
import { Flex } from "~/components/ds/Flex";
import { Icons } from "~/components/ds/Icons";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ds/Tooltip";

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
      className={cn("gap-2", className)}
    >
      <Link
        href={link}
        aria-current="page"
        aria-label="Homepage"
        className="btn btn-ghost flex-0 px-2"
      >
        <Image
          src={"/images/logo/aw-logo.png"}
          alt="applywallet"
          width={40}
          height={40}
          priority
          quality={100}
        />
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
            {navOpen ? "close nav" : "open nav"}
            <TooltipArrow />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Flex>
  );
};

export { SideNavBrand };
