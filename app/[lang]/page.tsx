import { Metadata } from "next";

import { getDictionary } from "@/utils/dictionaries.utils";
import { Locale } from "@/utils/locale-utils";

export const metadata: Metadata = {
  title: "home",
};

// eslint-disable-next-line import/no-default-export
export default async function Home({
  params: { lang = "en" },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang); // en

  return (
    <section className="h-full">
      current {lang}
      lang is {dict["counter"].increment}
      hi
    </section>
  );
}

// eslint-disable-next-line import/no-default-export
// export default Home;
