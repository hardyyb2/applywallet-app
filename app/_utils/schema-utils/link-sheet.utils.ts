import { z } from "zod";

export const getSheetIdFromLink = (link: string): string => {
  const match = link.match(/spreadsheets\/d\/(.+)\//);
  const sheetId = match?.[1] || "";
  return sheetId;
};

const hasASheetId = (link: string): boolean => {
  const sheetId = getSheetIdFromLink(link);
  return !!sheetId;
};

export const linkSheetFormSchema = z.object({
  link: z
    .string()
    .min(1, {
      message: "please enter a google sheet url",
    })
    .url("not a valid url")
    .refine(hasASheetId, "invalid google sheet url"),
});

export type LinkSheetType = z.infer<typeof linkSheetFormSchema>;
