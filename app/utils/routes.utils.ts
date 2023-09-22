import { i18n } from "./locale-utils";

export enum AppRoutes {
  HOME = "",

  LOGIN = "/login",
  POST_LOGIN = "/post-login",

  ABOUT = "/about",

  CAREERS = "/careers",
  ADD_CAREER = "/careers/add",

  LINK_SHEET = "/link-sheet",
}

export enum ApiRoutes {
  CREATE_SHEET = "/api/sheet/new",
  LINK_SHEET = "/api/sheet/link",

  ADD_CAREER = "/api/careers",
  GET_CAREERS = "/api/careers",
  DELETE_CAREER = "/api/careers",
}

export enum SearchParams {
  PATH = "path",
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
