import { type LucideIcon } from "lucide-react";

import { type AppRouteLinkType } from "~/utils/routes";

import type { LocaleKeys } from "@/locales/langs/en";

export enum NavigationCategories {
  GENERAL = "general",
  READ = "read",
  ABOUT = "about",
}

export type NavItemType = {
  label: LocaleKeys;
  link: Extract<AppRouteLinkType, string>;
  icon: LucideIcon;
  key?: string;
  category?: NavigationCategories;
  inactive?: boolean;
};
