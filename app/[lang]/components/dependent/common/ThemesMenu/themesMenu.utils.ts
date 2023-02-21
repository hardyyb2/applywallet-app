import { appThemes } from "@/utils/theme.utils";

export const selectableThemes: { label?: string; value: string }[] =
  appThemes?.map((theme) => ({
    value: theme,
  }));
