import { i18n } from "@/utils/locale-utils/i18n-config";
import { NavigationCategories, NavItemType } from "./navigation.types";

export const navItems: NavItemType[] = [
  {
    label: "home",
    link: "",
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
  {
    label: "services",
    link: "/services",
    category: NavigationCategories.GENERAL,
  },
  {
    label: "blog",
    link: "/blog",
    category: NavigationCategories.INFORMATIONAL,
  },
  {
    label: "support",
    link: "/support",
    category: NavigationCategories.SUPPORT,
  },
  {
    label: "faq",
    link: "/faq",
    category: NavigationCategories.INFORMATIONAL,
  },
  {
    label: "careers",
    link: "/careers",
    category: NavigationCategories.GENERAL,
  },
  {
    label: "contact",
    link: "/contact",
    category: NavigationCategories.GENERAL,
  },
  {
    label: "terms",
    link: "/terms",
    category: NavigationCategories.LEGAL,
  },
  {
    label: "privacy",
    link: "/privacy",
    category: NavigationCategories.LEGAL,
  },
  {
    label: "features",
    link: "/features",
    category: NavigationCategories.GENERAL,
  },
  {
    label: "pricing",
    link: "/pricing",
    category: NavigationCategories.GENERAL,
  },
];

/** Nav items that will be directly visible on bottom nav bar while rest will show in menu */
export const bottomNavDisplayOptions = navItems.slice(0, 3) ?? [];

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

export const getLinkWithLocale = ({
  link,
  pathName,
}: {
  link: string;
  pathName: string | null;
}) => {
  const currentLocale = pathName?.split("/")?.[1] ?? i18n.defaultLocale;
  const itemLinkWithLocale = `/${currentLocale}${link}`;

  return itemLinkWithLocale;
};
