import { AppRoutes } from "~/utils/routes";

import type { LocaleKeys } from "@/locales/langs/en";

import { Icons } from "../../../../common/components/ds/Icons";
import { NavigationCategories, type NavItemType } from "./navigation.types";

const navItems: NavItemType[] = [
  {
    label: "nav.home",
    link: AppRoutes.HOME,
    category: NavigationCategories.GENERAL,
    icon: Icons.CustomHome,
    isActive: (pathname, locale) => pathname === `/${locale}${AppRoutes.HOME}`,
  },
  {
    label: "nav.experiences",
    link: AppRoutes.EXPERIENCES,
    category: NavigationCategories.GENERAL,
    icon: Icons.Briefcase,
    inactive: true,
    isActive: (pathname, locale) =>
      pathname === `/${locale}${AppRoutes.EXPERIENCES}`,
  },
  {
    label: "nav.interviews",
    link: AppRoutes.INTERVIEWS,
    category: NavigationCategories.GENERAL,
    icon: Icons.Clapperboard,
    inactive: true,
    isActive: (pathname, locale) =>
      pathname === `/${locale}${AppRoutes.INTERVIEWS}`,
  },
  {
    label: "nav.blogs",
    link: AppRoutes.BLOGS,
    category: NavigationCategories.READ,
    icon: Icons.BookOpen,
    isActive: (pathname, locale) =>
      pathname.startsWith(`/${locale}${AppRoutes.BLOGS}`),
  },
  {
    label: "common.app",
    link: AppRoutes.ABOUT,
    category: NavigationCategories.ABOUT,
    icon: Icons.AppWindow,
    isActive: (pathname, locale) => pathname === `/${locale}${AppRoutes.ABOUT}`,
  },
  {
    label: "common.creator",
    link: AppRoutes.CREATOR,
    category: NavigationCategories.ABOUT,
    icon: Icons.UserCircle2,
    isActive: (pathname, locale) =>
      pathname === `/${locale}${AppRoutes.CREATOR}`,
  },
  {
    label: "common.app_structure",
    link: AppRoutes.APP_STRUCTURE,
    category: NavigationCategories.ABOUT,
    icon: Icons.FolderOpen,
    isActive: (pathname, locale) =>
      pathname === `/${locale}${AppRoutes.APP_STRUCTURE}`,
  },
  {
    label: "common.technologies",
    link: AppRoutes.TECHNOLOGIES,
    category: NavigationCategories.ABOUT,
    icon: Icons.Hammer,
    isActive: (pathname, locale) =>
      pathname === `/${locale}${AppRoutes.TECHNOLOGIES}`,
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

export const groupedNavItemsEntries = Object.entries(groupedNavItems) as [
  NavigationCategories,
  NavItemType[],
][];

export const categoryLabelMapping = {
  [NavigationCategories.GENERAL]: "nav.general",
  [NavigationCategories.READ]: "nav.read",
  [NavigationCategories.ABOUT]: "nav.about",
} as const satisfies Record<NavigationCategories, LocaleKeys>;
