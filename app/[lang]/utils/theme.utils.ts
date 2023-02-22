import { tailwindConfig } from "./tailwind.utils";

const getThemeNames = (themes: (string | Record<string, object>)[] = []) => {
  return themes?.map((theme) => {
    if (typeof theme === "object") {
      const themeName = Object.keys(theme ?? {})?.[0];

      return themeName;
    }

    return theme;
  });
};

export const appThemes: string[] = getThemeNames(
  tailwindConfig?.daisyui?.themes,
) ?? ["light"];
