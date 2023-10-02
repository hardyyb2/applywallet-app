import { AppRouteLinkType } from "@/_utils/routes.utils";
import { LucideIcon } from "lucide-react";

export enum NavigationCategories {
  GENERAL = "general",
  READ = "read",
}

export type NavItemType = {
  label: string;
  link: Extract<AppRouteLinkType, string>;
  icon: LucideIcon;
  key?: string;
  category?: NavigationCategories;
};
