import { Inter } from "@next/font/google";

import { Locale } from "@/utils/locale-utils/i18n-config";

import { getDictionary } from "./utils/locale-utils/dictionaries";

const inter = Inter({ subsets: ["latin"] });

// eslint-disable-next-line import/no-default-export
export default async function Home({
  params: { lang = "en" },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang); // en

  return (
    <section className="h-full prose">
      current {lang}
      lang is {dict["counter"].increment}
      hi
    </section>
  );
}

// eslint-disable-next-line import/no-default-export
// export default Home;

console.log("[RENDER] page.tsx");