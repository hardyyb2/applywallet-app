"use client";

import { memo } from "react";

import NextTopLoader from "nextjs-toploader";

import { extractThemeColorsFromDOM } from "@/utils/theme";

const TopLoader = memo(() => {
  const themeColors = extractThemeColorsFromDOM();

  return (
    <NextTopLoader
      height={8}
      color={themeColors.secondary}
      shadow={`0 0 8px ${themeColors.secondary},0 0 4px ${themeColors.secondary}`}
    />
  );
});

TopLoader.displayName = "TopLoader";

export { TopLoader };
