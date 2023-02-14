import { Inter } from "@next/font/google";

import { Locale } from "i18n-config";

import { getDictionary } from "./dictionaries";

const inter = Inter({ subsets: ["latin"] });

// eslint-disable-next-line import/no-default-export
export default async function Home({
  params: { lang = "en" },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang); // en

  console.log({ lang }, dict);

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
