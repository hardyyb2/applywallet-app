import { Metadata } from "next";

import { getDictionary } from "@/_utils/dictionaries.utils";
import { Locale } from "@/_utils/locale-utils";
import { allBlogs } from "contentlayer/generated";

export const metadata: Metadata = {
  title: "home",
};

const Home = async ({
  params: { lang = "en" },
}: {
  params: { lang: Locale };
}) => {
  const dict = await getDictionary(lang); // en

  return (
    <section className="h-full">
      {allBlogs.map((blog, index) => (
        <div key={index}>{blog.title}</div>
      ))}
      current {lang}
      lang is {dict["counter"].increment}
      hi
    </section>
  );
};

export default Home;
