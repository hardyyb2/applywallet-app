import { redirect } from "next/navigation";

import { authOptions } from "@/_lib/auth";
import { experienceSchema, ExperienceType } from "@/_utils/schema-utils";
import { SheetNames } from "@/_utils/sheet.utils";
import { cn } from "@/_utils/styles.utils";
import axios from "axios";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { getServerSession } from "next-auth";

import { ExperienceCard } from "./ExperienceCard";

const fetchExperiences = async (): Promise<ExperienceType[]> => {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session?.accessToken) {
      // TODO - Create a login page
      redirect(authOptions.pages?.signIn ?? "/login");
    }

    const { primarySheetId } = session.user;

    //  TODO - link sheet page
    if (!primarySheetId) {
      redirect("/link-sheet");
    }

    const doc = new GoogleSpreadsheet(primarySheetId, {
      token: session.accessToken,
    });
    await doc.loadInfo();
    const allSheets = doc.sheetsByTitle;
    let experienceSheet = allSheets[SheetNames.EXPERIENCES];

    //  TODO - link sheet page
    if (!experienceSheet) {
      redirect("/link-sheet");
    }

    // TODO - return damaged rows as well
    const experienceRows = (await experienceSheet.getRows())
      .map((cr) => {
        const experience = { ...cr.toObject(), id: cr.rowNumber };
        const parsedExperience = experienceSchema.safeParse(experience);

        if (parsedExperience.success) {
          return parsedExperience.data;
        }

        return null;
      })
      .filter(Boolean);

    return experienceRows;
  } catch (err) {
    // TODO - redirect to link page or login page
    if (axios.isAxiosError(err)) {
      const status = err.response?.status;
    }
    return [];
  }
};

const ExperienceList = async () => {
  const experiences = await fetchExperiences();

  return (
    <div
      className={cn(
        "grid w-full gap-8",
        "grid-cols-[repeat(auto-fill,minmax(256px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(480px,1fr))]",
      )}
    >
      {experiences.map((experience) => (
        <ExperienceCard key={experience.id} experience={experience} />
      ))}
    </div>
  );
};

export { ExperienceList };
