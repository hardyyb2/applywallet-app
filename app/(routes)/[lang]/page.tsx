import { Metadata } from "next";

import { allBlogs } from "contentlayer/generated";

import { getDictionary } from "@/utils/dictionaries.utils";
import { Locale } from "@/utils/locale-utils";

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
