"use client";

import { ReactNode, useEffect } from "react";

import { Flex, Typography } from "@/_components/ui/isolated/common";
import { cn } from "@/_utils/styles.utils";
import { themeChange } from "theme-change";

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
