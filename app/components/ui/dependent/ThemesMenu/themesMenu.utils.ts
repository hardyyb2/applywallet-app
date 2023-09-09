import { appThemes } from "app/utils/theme.utils";

export const selectableThemes: { label?: string; value: string }[] =
  appThemes?.map((theme) => ({
    value: theme,
  }));
