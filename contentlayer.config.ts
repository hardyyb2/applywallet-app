import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import Cobalt2Theme from "./public/editor-themes/cobalt2.json";

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  contentType: "mdx",
  filePathPattern: `blogs/**/*.mdx`,
  fields: {
    title: {
      type: "string",
      required: true,
    },
    topic: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    published: {
      type: "boolean",
      default: true,
    },
    publishedAt: {
      type: "date",
    },
    image: {
      type: "string",
    },
    tags: {
      type: "list",
      of: { type: "enum", options: ["react", "frontend", "backend"] },
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
  },
}));

export default makeSource({
  contentDirPath: "./app/_content",
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "append",
          properties: {
            className: ["rehypeHeadAnchor"],
          },
        },
      ],
      [
        rehypePrettyCode,
        {
          theme: Cobalt2Theme,
        },
      ],
    ],
  },
});
