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
      <div className="inline-flex gap-1 text-lg lowercase text-primary">
        <Typography>hardik</Typography>
        <Typography className="text-base-content">badola</Typography>
      </div>
      <Flex align="center" className="gap-1 lg:gap-2">
        {children}
      </Flex>
    </Flex>
  );
};

export { HeaderClient };
