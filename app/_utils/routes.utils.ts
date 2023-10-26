import { i18n } from "./locale-utils";
import type { ExperienceType, InterviewType } from "./schema-utils";

export type AppRouteLinkType = (typeof AppRoutes)[keyof typeof AppRoutes];

export const AppRoutes = {
  HOME: "",

  LOGIN: "/login",
  POST_LOGIN: "/post-login",
  LINK_SHEET: "/link-sheet",

  INTERVIEWS: "/interviews",
  ADD_INTERVIEW: "/interviews/add",

  EXPERIENCES: "/experiences",
  ADD_EXPERIENCE: "/experiences/add",
  editExperience: (experienceId: ExperienceType["id"]) =>
    `/experiences/edit/${experienceId}`,

  BLOGS: "/blogs",

  ABOUT: "/about",
  PROJECT_STRUCTURE: "/about/project-structure",
} as const;

export const ApiRoutes = {
  API: "/api",

  SHARED: "/api/shared",

  // next-auth related
  SESSION: "/api/auth/session",

  CREATE_SHEET: "/api/sheet/new",
  LINK_SHEET: "/api/sheet/link",

  ADD_EXPERIENCE: "/api/experiences",
  GET_EXPERIENCES: "/api/experiences",
  deleteExperience: (experienceId: ExperienceType["id"]) =>
    `/api/experiences/${experienceId}`,
  editExperience: (experienceId: ExperienceType["id"]) =>
    `/api/experiences/${experienceId}`,

  ADD_INTERVIEW: "/api/interviews",
  GET_INTERVIEWS: "/api/interviews",
  getInterview: (interviewId: InterviewType["id"]) =>
    `/api/interviews/${interviewId}`,
  deleteInterview: (interviewId: InterviewType["id"]) =>
    `/api/interviews/${interviewId}`,
  editInterview: (interviewId: InterviewType["id"]) =>
    `/api/interviews/${interviewId}`,
} as const;

export enum SearchParams {
  PATH = "path",
  FULL_SCREEN = "fullScreen",
}

export enum UrlParams {
  EXPERIENCE_ID = "experienceId",
  INTERVIEW_ID = "interviewId",
}

/** Get route name with locale */
export const getLinkWithLocale = ({
  link,
  pathName,
}: {
  link: Extract<AppRouteLinkType, string>;
  pathName: string | null;
}) => {
  const currentLocale = pathName?.split("/")?.[1] ?? i18n.defaultLocale;
  let itemLinkWithLocale = `/${currentLocale}`;

  if (typeof link === "string") {
    itemLinkWithLocale += link;
  }

  return itemLinkWithLocale;
};
