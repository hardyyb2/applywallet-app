import { AppRoutes } from "@/utils/routes.utils";

import { Icons } from "../../isolated/wrapped/Icons";
import { NavigationCategories, NavItemType } from "./navigation.types";

export const navItems: NavItemType[] = [
  {
    label: "home",
    link: AppRoutes.HOME,
    category: NavigationCategories.GENERAL,
    icon: Icons.CustomHome,
  },
  {
    label: "experiences",
    link: AppRoutes.EXPERIENCES,
    category: NavigationCategories.GENERAL,
    icon: Icons.Briefcase,
  },
  {
    label: "interviews",
    link: AppRoutes.INTERVIEWS,
    category: NavigationCategories.GENERAL,
    icon: Icons.Clapperboard,
  },
  {
    label: "blogs",
    link: AppRoutes.BLOGS,
    category: NavigationCategories.READ,
    icon: Icons.BookOpen,
  },
];

export const navItemToIconsMapping = navItems.reduce((acc, item) => {
  if (item.link) {
    acc[item.link] = { icon: item.icon, label: item.label };
  }

  return acc;
}, {} as { [key in NavItemType["link"]]?: Pick<NavItemType, "icon" | "label"> });

/** Nav items that will be directly visible on bottom nav bar while rest will show in menu */
export const bottomNavDisplayOptions = navItems.slice(0, 3) ?? [];

/** Group nav items based on categories */
const groupedNavItems: { [key in NavigationCategories]: NavItemType[] } =
  navItems.reduce((grouped, item) => {
    const category = item.category ?? NavigationCategories.GENERAL;

    if (!grouped[category]) {
      grouped[category] = [];
    }
    grouped[category].push(item);
    return grouped;
  }, {} as { [key in NavigationCategories]: NavItemType[] });

export const groupedNavItemsEntries = Object.entries(groupedNavItems);
