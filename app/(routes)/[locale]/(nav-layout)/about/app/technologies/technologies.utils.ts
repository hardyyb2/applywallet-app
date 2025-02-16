export type Technology = {
  name: string;
  description: string;
  logo: string;
  url: string;
  enabled?: boolean;
  category:
    | "core"
    | "ui"
    | "state"
    | "form"
    | "testing"
    | "styling"
    | "utilities"
    | "content";
};

export const technologies: Technology[] = [
  {
    name: "Next.js",
    description: "React framework for production",
    logo: "/images/technologies/nextjs.svg",
    url: "https://nextjs.org",
    category: "core",
  },
  {
    name: "React",
    description: "UI development library",
    logo: "/images/technologies/react.svg",
    url: "https://react.dev",
    category: "core",
  },
  {
    name: "TypeScript",
    description: "JavaScript with types",
    logo: "/images/technologies/typescript.svg",
    url: "https://www.typescriptlang.org",
    category: "core",
  },
  {
    name: "TailwindCSS",
    description: "Utility-first CSS framework",
    logo: "/images/technologies/tailwindcss.svg",
    url: "https://tailwindcss.com",
    category: "styling",
  },
  {
    name: "DaisyUI",
    description: "Tailwind component library",
    logo: "/images/technologies/daisyui.png",
    url: "https://daisyui.com",
    category: "ui",
  },
  {
    name: "React Hook Form",
    description: "Form validation library",
    logo: "/images/technologies/react-hook-form.svg",
    url: "https://react-hook-form.com",
    category: "form",
    enabled: false,
  },
  {
    name: "Zod",
    description: "TypeScript-first schema validation",
    logo: "/images/technologies/zod.jpg",
    url: "https://zod.dev",
    category: "form",
  },
  {
    name: "React Query",
    description: "Data fetching & caching",
    logo: "/images/technologies/react-query.svg",
    url: "https://tanstack.com/query",
    category: "state",
    enabled: false,
  },
  {
    name: "Zustand",
    description: "State management",
    logo: "/images/technologies/zustand.svg",
    url: "https://zustand-demo.pmnd.rs",
    category: "state",
  },
  {
    name: "Vitest",
    description: "Unit testing framework",
    logo: "/images/technologies/vitest.svg",
    url: "https://vitest.dev",
    category: "testing",
  },
  {
    name: "Testing Library",
    description: "Testing utilities",
    logo: "/images/technologies/react-testing-library.png",
    url: "https://testing-library.com",
    category: "testing",
  },
  {
    name: "Prisma",
    description: "Type-safe ORM",
    logo: "/images/technologies/prisma.svg",
    url: "https://www.prisma.io",
    category: "core",
    enabled: false,
  },
  {
    name: "NextAuth",
    description: "Authentication for Next.js",
    logo: "/images/technologies/nextauth.png",
    url: "https://next-auth.js.org",
    category: "core",
    enabled: false,
  },
  {
    name: "Storybook",
    description: "UI development environment",
    logo: "/images/technologies/storybook.svg",
    url: "https://storybook.js.org",
    category: "ui",
  },
  {
    name: "Contentlayer",
    description: "Content SDK",
    logo: "/images/technologies/contentlayer.png",
    url: "https://contentlayer.dev",
    category: "content",
  },
  {
    name: "Plasmo",
    description: "Browser extension framework",
    logo: "/images/technologies/plasmo.svg",
    url: "https://www.plasmo.com",
    category: "core",
    enabled: false,
  },
  {
    name: "Plate",
    description: "Rich text editor framework",
    logo: "/images/technologies/plate.svg",
    url: "https://platejs.org",
    category: "ui",
    enabled: false,
  },
  {
    name: "Radix UI",
    description: "Headless UI components",
    logo: "/images/technologies/radix-ui.svg",
    url: "https://www.radix-ui.com",
    category: "ui",
  },
  {
    name: "Lucide Icons",
    description: "Icon library",
    logo: "/images/technologies/lucide-icon.png",
    url: "https://lucide.dev",
    category: "ui",
  },
  {
    name: "React Toastify",
    description: "Toast notifications",
    logo: "/images/technologies/react-toastify.png",
    url: "https://fkhadra.github.io/react-toastify",
    category: "ui",
    enabled: false,
  },
  {
    name: "Axios",
    description: "HTTP client",
    logo: "/images/technologies/axios.svg",
    url: "https://axios-http.com",
    category: "utilities",
    enabled: false,
  },
  {
    name: "DayJS",
    description: "Date utility library",
    logo: "/images/technologies/dayjs.png",
    url: "https://day.js.org",
    category: "utilities",
  },
  {
    name: "next-international",
    description: "i18n for Next.js",
    logo: "/images/technologies/next-international.webp",
    url: "https://next-international.vercel.app",
    category: "utilities",
  },
  {
    name: "ESLint",
    description: "Code linting",
    logo: "/images/technologies/eslint.svg",
    url: "https://eslint.org",
    category: "utilities",
  },
  {
    name: "Prettier",
    description: "Code formatting",
    logo: "/images/technologies/prettier.svg",
    url: "https://prettier.io",
    category: "utilities",
  },
  {
    name: "Stylelint",
    description: "CSS linting",
    logo: "/images/technologies/stylelint.png",
    url: "https://stylelint.io",
    category: "utilities",
  },
  {
    name: "React DayPicker",
    description: "Date picker component",
    logo: "/images/technologies/react-day-picker.svg",
    url: "https://react-day-picker.js.org",
    category: "ui",
    enabled: false,
  },
  {
    name: "React Dropzone",
    description: "File upload component",
    logo: "/images/technologies/react-dropzone.svg",
    url: "https://react-dropzone.js.org",
    category: "ui",
    enabled: false,
  },
  {
    name: "React Select",
    description: "Select input component",
    logo: "/images/technologies/react-select.svg",
    url: "https://react-select.com",
    category: "ui",
    enabled: false,
  },
  {
    name: "React Wavify",
    description: "Wave animation component",
    logo: "/images/technologies/react-wavify.gif",
    url: "https://www.npmjs.com/package/react-wavify",
    category: "ui",
  },
  {
    name: "TanStack Table",
    description: "Headless tables",
    logo: "/images/technologies/tanstack.svg",
    url: "https://tanstack.com/table",
    category: "ui",
    enabled: false,
  },
  {
    name: "Sentry",
    description: "Error monitoring",
    logo: "/images/technologies/sentry.svg",
    url: "https://sentry.io",
    category: "utilities",
  },
  {
    name: "Knip",
    description: "Dead code detection",
    logo: "/images/technologies/knip.png",
    url: "https://knip.dev/",
    category: "utilities",
  },
];
