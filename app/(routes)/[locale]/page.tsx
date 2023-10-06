import { Metadata } from "next";

import { allBlogs } from "contentlayer/generated";

import { Locale } from "@/utils/locale-utils";

export const metadata: Metadata = {
  title: "home",
};

const Home = async ({
  params: { lang = "en" },
}: {
  params: { lang: Locale };
}) => {
  return (
    <section className="h-full">
      {allBlogs.map((blog, index) => (
        <div key={index}>{blog.title}</div>
      ))}
      current {lang}
      hi
    </section>
  );
};

export default Home;
