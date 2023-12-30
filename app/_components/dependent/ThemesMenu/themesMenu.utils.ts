import { appThemes } from "~/utils/tailwind/theme";

export const selectableThemes: { label?: string; value: string }[] =
  appThemes?.map((theme) => ({
    value: theme,
  }));
