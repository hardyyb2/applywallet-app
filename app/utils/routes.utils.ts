import { i18n } from "./locale-utils";

export enum AppRoutes {
  HOME = "",

  ABOUT = "/about",

  CAREERS = "/careers",
  ADD_CAREER = "/careers/add",

  NEW_USER = "/user/new",
}

export enum ApiRoutes {
  NEW_USER = "/user/new",
  LINK_USER = "/user/link",
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
