"use client";

import { useEffect } from "react";

import { useLocalStorage } from "react-use";

import { LocalStorageKeys } from "@/utils/localStorage";
import { appThemes } from "@/utils/theme";

const initialTheme = appThemes[0];

const useTheme = () => {
  const [theme = initialTheme, setTheme] = useLocalStorage(
    LocalStorageKeys.DUI_THEME,
    initialTheme,
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return { theme, setTheme };
};

export { useTheme };
