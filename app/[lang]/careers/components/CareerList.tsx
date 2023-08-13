import { notFound, redirect } from "next/navigation";

import clsx from "clsx";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { getServerSession } from "next-auth";

import { authOptions } from "@/utils/auth-utils";
import { CareerType } from "@/utils/schema-utils";
import { SheetNames } from "@/utils/sheet.utils";

import { CareerCard } from "./CareerCard";

const fetchCareers = async (): Promise<Partial<CareerType>[]> => {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session?.accessToken) {
      // Create a login page
      redirect(authOptions.pages?.signIn ?? "/login");
    }

    const { primarySheetId } = session.user;

    // redirect to sheet link or creation page
    if (!primarySheetId) {
      redirect("/link-sheet");
    }

    const doc = new GoogleSpreadsheet(primarySheetId, {
      token: session.accessToken,
    });
    await doc.loadInfo();
    const allSheets = doc.sheetsByTitle;
    let careerSheet = allSheets[SheetNames.CAREERS];

    // redirect to sheet link or creation page
    if (!careerSheet) {
      redirect("/link-sheet");
    }

    const careerRows = (await careerSheet.getRows<CareerType>()).map((career) =>
      career.toObject(),
    );

    return careerRows;
  } catch (err) {
    notFound();
  }
};

const CareerList = async () => {
  const careers = await fetchCareers();

  return (
    <div
      className={clsx(
        "grid w-full gap-8",
        "grid-cols-[repeat(auto-fill,minmax(256px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(480px,1fr))]",
      )}
    >
      {careers.map((career) => (
        <CareerCard key={career.company_name} career={career} />
      ))}
    </div>
  );
};

export { CareerList };
