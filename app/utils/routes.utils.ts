import { i18n } from "./locale-utils";
import { CareerType } from "./schema-utils";

export const AppRoutes = {
  HOME: "",

  LOGIN: "/login",
  POST_LOGIN: "/post-login",

  ABOUT: "/about",

  CAREERS: "/careers",
  ADD_CAREER: "/careers/add",
  editCareer: (careerId: CareerType["id"]) => `/careers/edit/${careerId}`,

  LINK_SHEET: "/link-sheet",
};

export const ApiRoutes = {
  CREATE_SHEET: "/api/sheet/new",
  LINK_SHEET: "/api/sheet/link",

  ADD_CAREER: "/api/careers",
  GET_CAREERS: "/api/careers",
  deleteCareer: (careerId: CareerType["id"]) => `/api/careers/${careerId}`,
  editCareer: (careerId: CareerType["id"]) => `/api/careers/${careerId}`,
};

export enum SearchParams {
  PATH = "path",
}

export enum UrlParams {
  CAREER_ID = "careerId",
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
