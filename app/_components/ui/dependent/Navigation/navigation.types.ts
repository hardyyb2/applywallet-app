import { AppRoutes } from "@/_utils/routes.utils";
import { LucideIcon } from "lucide-react";

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
