import { type LucideIcon } from "lucide-react";

import { type AppRouteLinkType } from "@/utils/routes.utils";

export enum NavigationCategories {
  GENERAL = "general",
  READ = "read",
  OTHERS = "others",
}

export type NavItemType = {
  label: string;
  link: Extract<AppRouteLinkType, string>;
  icon: LucideIcon;
  key?: string;
  category?: NavigationCategories;
};
