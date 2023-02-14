"use client";

import clsx from "clsx";
import { useEffect } from "react";
import { themeChange } from "theme-change";

import { Flex, Typography } from "@/components/isolated/common";

import { ThemesMenu } from "./components/ThemesMenu/ThemesMenu";
import { getActiveTheme } from "./components/ThemesMenu/themesMenu.utils";

const Header = () => {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <Flex
      align="center"
      justify="space-between"
      className={clsx("h-full w-full / px-10")}
    >
      <div className="inline-flex gap-1 / text-lg text-primary / lowercase">
        <Typography>hardik</Typography>
        <Typography className="text-base-content">badola</Typography>
      </div>
      <ThemesMenu />
    </Flex>
  );
};

export { Header };
