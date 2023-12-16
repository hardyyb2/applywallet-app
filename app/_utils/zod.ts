import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { z } from "zod";

dayjs.extend(customParseFormat);

export const zodKeys = <T extends z.ZodTypeAny>(schema: T): string[] => {
  if (schema === null || schema === undefined) {
    return [];
  }

  if (schema instanceof z.ZodNullable || schema instanceof z.ZodOptional) {
    return zodKeys(schema.unwrap());
  }

  if (schema instanceof z.ZodArray) {
    return zodKeys(schema.element);
  }

  if (schema instanceof z.ZodObject) {
    const entries = Object.entries(schema.shape);

    return entries.flatMap(([key, value]) => {
      const nested =
        value instanceof z.ZodType
          ? zodKeys(value).map((subKey) => `${key}.${subKey}`)
          : [];

      return nested.length ? nested : key;
    });
  }

  return [];
};

export const zodDDMMYYYYDate = z
  .string({
    required_error: "please enter a date",
  })
  .refine(
    (dateString) =>
      /^(?:(?:31(\/)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(
        dateString,
      ),
    {
      message: "please enter a valid date in the format dd/mm/yyyy",
    },
  )
  .transform((dateString, ctx) => {
    const date = dayjs(dateString, "DD/MM/YYYY", true).toDate();

    if (!z.date().safeParse(date).success) {
      ctx.addIssue({
        code: z.ZodIssueCode.invalid_date,
        message: "please enter a valid date",
      });
    }
    return date;
  });
