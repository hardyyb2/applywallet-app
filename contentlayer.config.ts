import {
  defineDocumentType,
  makeSource,
  type ComputedFields,
} from "contentlayer2/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

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

export const Author = defineDocumentType(() => ({
  name: "Author",
  contentType: "mdx",
  filePathPattern: `authors/**/*.mdx`,
  fields: {
    name: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    image: {
      type: "string",
    },
  },
  computedFields: {
    ...defaultComputedFields,
    slug: {
      type: "string",
      resolve: (doc) =>
        `/blogs/authors/${doc._raw.flattenedPath.split("/").slice(1).join("/")}`,
    },
  },
}));

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
  computedFields: {
    ...defaultComputedFields,
    slug: {
      type: "string",
      resolve: (doc) => {
        // Ignore "blog_categories" prefix and take the rest of the path
        return `/blogs/categories/${doc._raw.flattenedPath
          .split("/")
          .slice(1)
          .join("/")}`;
      },
    },
  },
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
    author: {
      type: "reference",
      of: Author,
      required: true,
      embedDocument: true,
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
      required: true,
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
  documentTypes: [Blog, BlogCategory, Author],
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
          theme: "catppuccin-macchiato",
        },
      ],
    ],
  },
});
