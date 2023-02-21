export enum NavigationCategories {
  GENERAL = "general",
  FAVORITE = "favorite",
  LEGAL = "legal",
  INFORMATIONAL = "informational",
  SUPPORT = "support",
}

export type NavItemType = {
  label: string;
  link: string;
  key?: string;
  category?: NavigationCategories;
};

console.log("[RENDER] components/dependent/common/Navigation/navigation.types.ts");