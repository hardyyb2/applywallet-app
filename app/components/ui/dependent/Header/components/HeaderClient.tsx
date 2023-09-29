"use client";

import { ReactNode, useEffect } from "react";

import { themeChange } from "theme-change";

import { Flex, Typography } from "app/components/ui/isolated/common";

import { cn } from "@/utils/styles.utils";

const HeaderClient = ({ children }: { children?: ReactNode }) => {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <Flex
      align="center"
      justify="space-between"
      className={cn("h-full w-full px-4 lg:px-10")}
    >
      <div className="text-lg inline-flex lowercase text-primary">
        <Typography>apply</Typography>
        <Typography className="text-base-content">wallet</Typography>
      </div>
      <Flex align="center" className="gap-1 lg:gap-2">
        {children}
      </Flex>
    </Flex>
  );
};

export { HeaderClient };
