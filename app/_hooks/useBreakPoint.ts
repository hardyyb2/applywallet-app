"use client";

import { useMedia } from "react-use";

import { tailwindConfig } from "@/utils/tailwind";

const breakpoints = tailwindConfig.theme.screens;

type BreakPointKeyType = keyof typeof breakpoints;

const useBreakPoint = <K extends BreakPointKeyType>(breakPointKey: K) => {
  const breakPointValue = breakpoints[breakPointKey];
  const bool = useMedia(`(max-width: ${breakPointValue})`);

  const capitalizedKey =
    breakPointKey[0].toUpperCase() + breakPointKey.substring(1);

  type KeyAbove = `isAbove${Capitalize<K>}`;
  type KeyBelow = `isBelow${Capitalize<K>}`;

  return {
    [`isAbove${capitalizedKey}`]: !bool,
    [`isBelow${capitalizedKey}`]: bool,
    [breakPointKey]: Number(String(breakPointValue).replace(/[^0-9]/g, "")),
  } as Record<K, number> & Record<KeyAbove | KeyBelow, boolean>;
};

export { useBreakPoint };
