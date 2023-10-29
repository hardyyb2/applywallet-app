import { appThemes } from "@/utils/theme";

export const selectableThemes: { label?: string; value: string }[] =
  appThemes?.map((theme) => ({
    value: theme,
  }));
