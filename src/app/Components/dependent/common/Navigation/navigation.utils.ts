import { NavigationCategories, NavItemType } from "./navigation.types";

export const navItems: NavItemType[] = [
  {
    label: "home",
    link: "/",
    category: NavigationCategories.GENERAL,
  },
  {
    label: "about",
    link: "/about",
    category: NavigationCategories.FAVORITE,
  },
  {
    label: "install",
    link: "/install",
    category: NavigationCategories.GENERAL,
  },
];

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
