"use client";

import { useEffect, useState } from "react";

import {
  extractThemeColorsFromDOM,
  type ThemeColors,
} from "~/utils/tailwind/theme";

const useThemeColors = () => {
  const [themeColors, setThemeColors] = useState<ThemeColors | null>(null);

  useEffect(() => {
    setThemeColors(extractThemeColorsFromDOM());
  }, []);

  return themeColors;
};

export { useThemeColors };
