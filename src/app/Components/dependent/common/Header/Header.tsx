"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useEffect, useMemo } from "react";
import { themeChange } from "theme-change";

import { Flex, Typography } from "@/components/isolated/common";
import { ThemesMenu } from "./components/ThemesMenu";
import { Button, Dropdown } from "@/components/isolated/wrapped";

const Header = () => {
  const pathName = usePathname();

  useEffect(() => {
    themeChange(false);
  }, []);

  const displayName = useMemo(() => {
    return pathName?.split("/")?.[1];
  }, [pathName]);

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
      <Dropdown vertical="end">
        <Dropdown.Toggle>
          <Button aria-haspopup>Click</Button>
        </Dropdown.Toggle>
        <Dropdown.Menu role="listbox">
          <Dropdown.Item data-set-theme="dark">dark</Dropdown.Item>
          <Dropdown.Item data-set-theme="light">light</Dropdown.Item>
          <Dropdown.Item data-set-theme="garden">cyberpunk</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Flex>
  );
};

export { Header };
