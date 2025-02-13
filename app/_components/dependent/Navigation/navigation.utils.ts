import { AppRoutes } from "~/utils/routes";

import { Icons } from "../../../../common/components/ds/Icons";
import { NavigationCategories, type NavItemType } from "./navigation.types";

const navItems: NavItemType[] = [
  {
    label: "nav.home",
    link: AppRoutes.HOME,
    category: NavigationCategories.GENERAL,
    icon: Icons.CustomHome,
  },
  {
    label: "experiences",
    link: AppRoutes.EXPERIENCES,
    category: NavigationCategories.GENERAL,
    icon: Icons.Briefcase,
    inactive: true,
  },
  {
    label: "interviews",
    link: AppRoutes.INTERVIEWS,
    category: NavigationCategories.GENERAL,
    icon: Icons.Clapperboard,
    inactive: true,
  },
  {
    label: "blogs",
    link: AppRoutes.BLOGS,
    category: NavigationCategories.READ,
    icon: Icons.BookOpen,
  },
  {
    label: "nav.about",
    link: AppRoutes.ABOUT,
    category: NavigationCategories.OTHERS,
    icon: Icons.Info,
  },
];

const activeNavItems = navItems.filter((item) => !item.inactive);

export const navItemToIconsMapping = activeNavItems.reduce(
  (acc, item) => {
    if (item.link) {
      acc[item.link] = { icon: item.icon, label: item.label };
    }

    return acc;
  },
  {} as { [key in NavItemType["link"]]?: Pick<NavItemType, "icon" | "label"> },
);

/** Nav items that will be directly visible on bottom nav bar while rest will show in menu */
export const bottomNavDisplayOptions = activeNavItems.slice(0, 3) ?? [];

/** Group nav items based on categories */
const groupedNavItems: { [key in NavigationCategories]: NavItemType[] } =
  activeNavItems.reduce(
    (grouped, item) => {
      const category = item.category ?? NavigationCategories.GENERAL;

      if (!grouped[category]) {
        grouped[category] = [];
      }
      grouped[category].push(item);
      return grouped;
    },
    {} as { [key in NavigationCategories]: NavItemType[] },
  );

export const groupedNavItemsEntries = Object.entries(groupedNavItems);
