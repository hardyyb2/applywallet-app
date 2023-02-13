export const selectableThemes: { label?: string; value: string }[] = [
  {
    value: "dark",
  },
  {
    value: "light",
  },
  {
    value: "night",
  },
  {
    value: "emerald",
  },
];

export const getActiveTheme = () => {
  const activeTheme = document?.querySelector("html")?.dataset?.theme;

  return activeTheme ?? "dark";
};
