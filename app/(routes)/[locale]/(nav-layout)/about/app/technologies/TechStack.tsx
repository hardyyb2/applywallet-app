import Image from "next/image";
import Link from "next/link";

import { Card } from "~/components/ds/Card";
import { Flex } from "~/components/ds/Flex";
import { Typography } from "~/components/ds/Typography";

type Technology = {
  name: string;
  description: string;
  logo: string;
  url: string;
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

const technologies: Technology[] = [
  {
    name: "Next.js",
    description: "React framework for production",
    logo: "/images/tech/nextjs.svg",
    url: "https://nextjs.org",
    category: "core",
  },
  {
    name: "React",
    description: "UI development library",
    logo: "/images/tech/react.svg",
    url: "https://react.dev",
    category: "core",
  },
  {
    name: "TypeScript",
    description: "JavaScript with types",
    logo: "/images/tech/typescript.svg",
    url: "https://www.typescriptlang.org",
    category: "core",
  },
  {
    name: "TailwindCSS",
    description: "Utility-first CSS framework",
    logo: "/images/tech/tailwind.svg",
    url: "https://tailwindcss.com",
    category: "styling",
  },
  {
    name: "DaisyUI",
    description: "Tailwind component library",
    logo: "/images/tech/daisyui.svg",
    url: "https://daisyui.com",
    category: "ui",
  },
  {
    name: "React Hook Form",
    description: "Form validation library",
    logo: "/images/tech/react-hook-form.svg",
    url: "https://react-hook-form.com",
    category: "form",
  },
  {
    name: "Zod",
    description: "TypeScript-first schema validation",
    logo: "/images/tech/zod.svg",
    url: "https://zod.dev",
    category: "form",
  },
  {
    name: "React Query",
    description: "Data fetching & caching",
    logo: "/images/tech/react-query.svg",
    url: "https://tanstack.com/query",
    category: "state",
  },
  {
    name: "Zustand",
    description: "State management",
    logo: "/images/tech/zustand.png",
    url: "https://zustand-demo.pmnd.rs",
    category: "state",
  },
  {
    name: "Vitest",
    description: "Unit testing framework",
    logo: "/images/tech/vitest.svg",
    url: "https://vitest.dev",
    category: "testing",
  },
  {
    name: "Testing Library",
    description: "Testing utilities",
    logo: "/images/tech/testing-library.png",
    url: "https://testing-library.com",
    category: "testing",
  },
  {
    name: "Prisma",
    description: "Type-safe ORM",
    logo: "/images/tech/prisma.svg",
    url: "https://www.prisma.io",
    category: "core",
  },
  {
    name: "NextAuth",
    description: "Authentication for Next.js",
    logo: "/images/tech/nextauth.png",
    url: "https://next-auth.js.org",
    category: "core",
  },
  {
    name: "Storybook",
    description: "UI development environment",
    logo: "/images/tech/storybook.svg",
    url: "https://storybook.js.org",
    category: "ui",
  },
  {
    name: "Contentlayer",
    description: "Content SDK",
    logo: "/images/tech/contentlayer.png",
    url: "https://contentlayer.dev",
    category: "content",
  },
  {
    name: "Plasmo",
    description: "Browser extension framework",
    logo: "/images/tech/plasmo.svg",
    url: "https://www.plasmo.com",
    category: "core",
  },
  {
    name: "Plate",
    description: "Rich text editor framework",
    logo: "/images/tech/plate.svg",
    url: "https://platejs.org",
    category: "ui",
  },
  {
    name: "Radix UI",
    description: "Headless UI components",
    logo: "/images/tech/radix.svg",
    url: "https://www.radix-ui.com",
    category: "ui",
  },
  {
    name: "Lucide Icons",
    description: "Icon library",
    logo: "/images/tech/lucide.svg",
    url: "https://lucide.dev",
    category: "ui",
  },
  {
    name: "React Toastify",
    description: "Toast notifications",
    logo: "/images/tech/react-toastify.png",
    url: "https://fkhadra.github.io/react-toastify",
    category: "ui",
  },
  {
    name: "Axios",
    description: "HTTP client",
    logo: "/images/tech/axios.svg",
    url: "https://axios-http.com",
    category: "utilities",
  },
  {
    name: "DayJS",
    description: "Date utility library",
    logo: "/images/tech/dayjs.svg",
    url: "https://day.js.org",
    category: "utilities",
  },
  {
    name: "next-international",
    description: "i18n for Next.js",
    logo: "/images/tech/next-international.svg",
    url: "https://next-international.vercel.app",
    category: "utilities",
  },
  {
    name: "ESLint",
    description: "Code linting",
    logo: "/images/tech/eslint.svg",
    url: "https://eslint.org",
    category: "utilities",
  },
  {
    name: "Prettier",
    description: "Code formatting",
    logo: "/images/tech/prettier.svg",
    url: "https://prettier.io",
    category: "utilities",
  },
  {
    name: "Stylelint",
    description: "CSS linting",
    logo: "/images/tech/stylelint.svg",
    url: "https://stylelint.io",
    category: "utilities",
  },
  {
    name: "React DayPicker",
    description: "Date picker component",
    logo: "/images/tech/react-day-picker.svg",
    url: "https://react-day-picker.js.org",
    category: "ui",
  },
  {
    name: "React Dropzone",
    description: "File upload component",
    logo: "/images/tech/react-dropzone.svg",
    url: "https://react-dropzone.js.org",
    category: "ui",
  },
  {
    name: "React Select",
    description: "Select input component",
    logo: "/images/tech/react-select.svg",
    url: "https://react-select.com",
    category: "ui",
  },
  {
    name: "React Wavify",
    description: "Wave animation component",
    logo: "/images/tech/react-wavify.png",
    url: "https://wooorm.com/react-wavify/",
    category: "ui",
  },
  {
    name: "TanStack Table",
    description: "Headless tables",
    logo: "/images/tech/tanstack.svg",
    url: "https://tanstack.com/table",
    category: "ui",
  },
  {
    name: "Sentry",
    description: "Error monitoring",
    logo: "/images/tech/sentry.svg",
    url: "https://sentry.io",
    category: "utilities",
  },
  {
    name: "Knip",
    description: "Dead code detection",
    logo: "/images/tech/knip.svg",
    url: "https://github.com/webpro/knip",
    category: "utilities",
  },
];

const TechStack = () => {
  return (
    <Flex direction="column" className="gap-m">
      {Object.entries(
        technologies.reduce(
          (acc, tech) => {
            acc[tech.category] = [...(acc[tech.category] || []), tech];
            return acc;
          },
          {} as Record<string, Technology[]>,
        ),
      ).map(([category, techs]) => (
        <Flex key={category} direction="column" className="gap-s">
          <Typography variant="title-m" className="lowercase">
            {category}
          </Typography>
          <Flex wrap className="gap-2xs">
            {techs.map((tech) => (
              <Link
                key={tech.name}
                href={tech.url}
                target="_blank"
                className="transition-transform hover:scale-105"
              >
                <Card className="bg-base-100 h-32 w-32">
                  <Card.Figure className="h-full w-full">
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      width={48}
                      height={48}
                      className="h-full w-full object-contain lowercase"
                    />
                  </Card.Figure>
                </Card>
              </Link>
            ))}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export { TechStack };
