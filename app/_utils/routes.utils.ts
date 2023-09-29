import { i18n } from "./locale-utils";
import { ExperienceType, InterviewType } from "./schema-utils";

export const AppRoutes = {
  HOME: "",

  LOGIN: "/login",
  POST_LOGIN: "/post-login",

  INTERVIEWS: "/interviews",
  ADD_INTERVIEW: "/interviews/add",

  EXPERIENCES: "/experiences",
  ADD_EXPERIENCE: "/experiences/add",
  editExperience: (experienceId: ExperienceType["id"]) =>
    `/experiences/edit/${experienceId}`,

  LINK_SHEET: "/link-sheet",
} as const;

export const ApiRoutes = {
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
  link: string;
  pathName: string | null;
}) => {
  const currentLocale = pathName?.split("/")?.[1] ?? i18n.defaultLocale;
  const itemLinkWithLocale = `/${currentLocale}${link}`;

  return itemLinkWithLocale;
};
