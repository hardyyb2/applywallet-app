export enum NavigationCategories {
  GENERAL = "general",
  FAVORITE = "favorite",
}

export type NavItemType = {
  label: string;
  link: string;
  key?: string;
  category?: NavigationCategories;
};
