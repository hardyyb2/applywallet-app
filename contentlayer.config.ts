import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import Cobalt2Theme from "./public/editor-themes/cobalt2.json";

const defaultComputedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

export const BlogCategory = defineDocumentType(() => ({
  name: "BlogCategory",
  contentType: "mdx",
  filePathPattern: `blogs_categories/**/*.mdx`,
  fields: {
    name: {
      type: "enum",
      options: ["engineering", "interview", "misc"],
      default: "misc",
      description: "categories for blogs, default to misc (miscellaneous)",
      required: true,
    },
    description: {
      type: "string",
      description: "a small description of the category",
    },
    image: {
      type: "string",
    },
  },
  computedFields: defaultComputedFields,
}));

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  contentType: "mdx",
  filePathPattern: `blogs/**/*.mdx`,
  fields: {
    title: {
      type: "string",
      required: true,
    },
    category: {
      type: "reference",
      of: BlogCategory,
      description: "what category does this blog fall under",
      embedDocument: true,
      required: true,
    },
    description: {
      type: "string",
    },
    published: {
      type: "boolean",
      default: true,
    },
    date: {
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
  computedFields: defaultComputedFields,
}));

export default makeSource({
  contentDirPath: "./app/_content",
  documentTypes: [Blog, BlogCategory],
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
        // TODO - check a permafix for this
        //@ts-ignore
        rehypePrettyCode,
        {
          theme: Cobalt2Theme,
        },
      ],
    ],
  },
});
