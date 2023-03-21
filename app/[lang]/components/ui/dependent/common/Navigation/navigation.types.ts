import { AppRoutes } from "@/utils/routes.utils";

export enum NavigationCategories {
  GENERAL = "general",
  FAVORITE = "favorite",
  LEGAL = "legal",
  INFORMATIONAL = "informational",
  SUPPORT = "support",
}

export type NavItemType = {
  label: string;
  link: AppRoutes;
  key?: string;
  category?: NavigationCategories;
};
