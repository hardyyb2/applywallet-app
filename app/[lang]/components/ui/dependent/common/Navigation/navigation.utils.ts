import { AppRoutes } from "@/utils/routes.utils";

import { NavigationCategories, NavItemType } from "./navigation.types";

export const navItems: NavItemType[] = [
  {
    label: "home",
    link: AppRoutes.HOME,
    category: NavigationCategories.GENERAL,
  },
  {
    label: "careers",
    link: AppRoutes.CAREERS,
    category: NavigationCategories.GENERAL,
  },
  {
    label: "about",
    link: AppRoutes.ABOUT,
    category: NavigationCategories.GENERAL,
  },
];

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
