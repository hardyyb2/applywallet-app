"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

import { Flex, Typography } from "@/components/isolated/common";

const Header = () => {
  const pathName = usePathname();

  const displayName = useMemo(() => {
    return pathName?.split("/")?.[1];
  }, [pathName]);

  return (
    <Flex
      justify="center"
      direction="column"
      className={clsx("breadcrumbs", "h-full w-full / pl-10 / overflow-hidden")}
    >
      <div className="inline-flex gap-1 / text-lg text-primary / lowercase">
        <Typography>hardik</Typography>
        <Typography className="text-base-content">badola</Typography>
      </div>
    </Flex>
  );
};

export { Header };
