import { LucideIcon } from "lucide-react";

import { AppRoutes } from "app/utils/routes.utils";

export enum NavigationCategories {
  GENERAL = "general",
  FAVORITE = "favorite",
  LEGAL = "legal",
  INFORMATIONAL = "informational",
  SUPPORT = "support",
}

export type NavItemType = {
  label: string;
  link: (typeof AppRoutes)[keyof typeof AppRoutes];
  icon: LucideIcon;
  key?: string;
  category?: NavigationCategories;
};
