"use client";

import { memo } from "react";

import { extractThemeColorsFromDOM } from "@/_utils/theme.utils";
import NextTopLoader from "nextjs-toploader";

const TopLoader = memo(() => {
  const themeColors = extractThemeColorsFromDOM();

  return (
    <NextTopLoader
      height={4}
      color={themeColors.secondary}
      shadow={`0 0 8px ${themeColors.secondary},0 0 4px ${themeColors.secondary}`}
    />
  );
});

TopLoader.displayName = "TopLoader";

export { TopLoader };
