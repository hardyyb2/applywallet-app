import { i18n } from "./locale-utils/i18n-config";

export enum AppRoutes {
  ABOUT = "/about",
  CAREERS = "/careers",
  ADD_CAREER = "/career/add",
  HOME = "",
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
