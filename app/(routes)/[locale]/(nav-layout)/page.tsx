import { allBlogs } from "contentlayer/generated";

import { type Locale } from "@/utils/locale-utils";

const Home = async (props: { params: Promise<{ lang: Locale }> }) => {
  const params = await props.params;

  const { lang = "en" } = params;

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
