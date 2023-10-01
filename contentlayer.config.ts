import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  contentType: "mdx",
  filePathPattern: `blogs/**/*.mdx`,
  fields: {
    title: {
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
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
  },
}));

// eslint-disable-next-line import/no-default-export
export default makeSource({
  contentDirPath: "./app/_content",
  documentTypes: [Blog],
});
