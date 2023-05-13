import { i18n } from "./locale-utils/i18n-config";

export enum AppRoutes {
  HOME = "",

  ABOUT = "/about",

  CAREERS = "/careers",
  ADD_CAREER = "/careers/add",

  NEW_USER = "/new-user",
}

/** Get route name with locale */
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
