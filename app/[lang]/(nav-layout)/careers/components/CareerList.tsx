import { redirect } from "next/navigation";

import axios from "axios";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";
import { careerSchema, CareerType } from "@/utils/schema-utils";
import { SheetNames } from "@/utils/sheet.utils";
import { cn } from "@/utils/styles.utils";

import { CareerCard } from "./CareerCard";

const fetchCareers = async (): Promise<CareerType[]> => {
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
    let careerSheet = allSheets[SheetNames.CAREERS];

    //  TODO - link sheet page
    if (!careerSheet) {
      redirect("/link-sheet");
    }

    // TODO - return damaged rows as well
    const careerRows = (await careerSheet.getRows())
      .map((cr) => {
        const career = { ...cr.toObject(), id: cr.rowNumber };
        const parsedCareer = careerSchema.safeParse(career);

        if (parsedCareer.success) {
          return parsedCareer.data;
        }

        return null;
      })
      .filter(Boolean);

    return careerRows;
  } catch (err) {
    // TODO - redirect to link page or login page
    if (axios.isAxiosError(err)) {
      const status = err.response?.status;
    }
    return [];
  }
};

const CareerList = async () => {
  const careers = await fetchCareers();

  return (
    <div
      className={cn(
        "grid w-full gap-8",
        "grid-cols-[repeat(auto-fill,minmax(256px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(480px,1fr))]",
      )}
    >
      {careers.map((career) => (
        <CareerCard key={career.id} career={career} />
      ))}
    </div>
  );
};

export { CareerList };
