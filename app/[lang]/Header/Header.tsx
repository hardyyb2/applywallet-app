"use client";

import clsx from "clsx";
import { useEffect } from "react";
import { themeChange } from "theme-change";

import { LocaleSwitcher, ThemesMenu } from "@/components/dependent/common";
import { Flex, Typography } from "@/components/isolated/common";

console.log("header");
const Header = () => {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <Flex
      align="center"
      justify="space-between"
      className={clsx("h-full w-full / px-4 lg:px-10")}
    >
      <div className="inline-flex gap-1 / text-lg text-primary / lowercase">
        <Typography>hardik</Typography>
        <Typography className="text-base-content">badola</Typography>
      </div>
      <Flex align="center" className="gap-1 lg:gap-2">
        <ThemesMenu />
        <LocaleSwitcher />
      </Flex>
    </Flex>
  );
};

export { Header };
