import type { DrEdgeType, DrNodeType } from "@/types/flowbuilder";

export const nodes: DrNodeType[] = [
  {
    id: ".",
    data: {
      name: ".",
      root: true,
      type: "folder",
      subType: "root",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: ".DS_Store",
    data: {
      name: ".DS_Store",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: ".eslintrc.json",
    data: {
      name: ".eslintrc.json",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: ".husky",
    data: {
      name: ".husky",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: ".husky/_",
    data: {
      name: "_",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: ".husky/_/husky.sh",
    data: {
      name: "husky.sh",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: ".husky/pre-commit",
    data: {
      name: "pre-commit",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: ".lintstagedrc.js",
    data: {
      name: ".lintstagedrc.js",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: ".npmrc",
    data: {
      name: ".npmrc",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: ".nvmrc",
    data: {
      name: ".nvmrc",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: ".prettierrc",
    data: {
      name: ".prettierrc",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: ".sentryclirc",
    data: {
      name: ".sentryclirc",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: ".storybook",
    data: {
      name: ".storybook",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: ".storybook/main.ts",
    data: {
      name: "main.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: ".storybook/preview.tsx",
    data: {
      name: "preview.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: ".stylelintrc.json",
    data: {
      name: ".stylelintrc.json",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: ".vscode",
    data: {
      name: ".vscode",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: ".vscode/settings.json",
    data: {
      name: "settings.json",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: ".vscode/tailwind.json",
    data: {
      name: "tailwind.json",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "ATTRIBUTION.md",
    data: {
      name: "ATTRIBUTION.md",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "TECH_TASK.md",
    data: {
      name: "TECH_TASK.md",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "TODO.md",
    data: {
      name: "TODO.md",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app",
    data: {
      name: "app",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)",
    data: {
      name: "(routes)",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]",
    data: {
      name: "[locale]",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(auth)",
    data: {
      name: "(auth)",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)",
    data: {
      name: "(nav-layout)",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/(docs)",
    data: {
      name: "(docs)",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs",
    data: {
      name: "blogs",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/BlogCard",
    data: {
      name: "BlogCard",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/BlogCard/BlogCard.tsx",
    data: {
      name: "BlogCard.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/BlogCard/blogCard.module.css",
    data: {
      name: "blogCard.module.css",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/BlogCard/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/BlogsListMobile.tsx",
    data: {
      name: "BlogsListMobile.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/BlogsWrapper.tsx",
    data: {
      name: "BlogsWrapper.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]",
    data: {
      name: "[...slug]",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]/BlogMetaInfo",
    data: {
      name: "BlogMetaInfo",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]/BlogMetaInfo/BlogMetaInfo.tsx",
    data: {
      name: "BlogMetaInfo.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]/BlogMetaInfo/blogMetaInfo.module.css",
    data: {
      name: "blogMetaInfo.module.css",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]/BlogScrollWrapper",
    data: {
      name: "BlogScrollWrapper",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]/BlogScrollWrapper/BlogScrollWrapper.tsx",
    data: {
      name: "BlogScrollWrapper.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]/page.tsx",
    data: {
      name: "page.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/not-found.tsx",
    data: {
      name: "not-found.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/page.tsx",
    data: {
      name: "page.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/(swr)",
    data: {
      name: "(swr)",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/about",
    data: {
      name: "about",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/about/AboutApp.tsx",
    data: {
      name: "AboutApp.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/about/AboutCreator.tsx",
    data: {
      name: "AboutCreator.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/about/app",
    data: {
      name: "app",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/about/app/structure",
    data: {
      name: "structure",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/about/app/structure/DirectoryFlowBuilder",
    data: {
      name: "DirectoryFlowBuilder",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/about/app/structure/DirectoryFlowBuilder/DFBWrapper.tsx",
    data: {
      name: "DFBWrapper.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/about/app/structure/DirectoryFlowBuilder/DirectoryFlowBuilder.tsx",
    data: {
      name: "DirectoryFlowBuilder.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/about/app/structure/DirectoryFlowBuilder/directoryFlowBuilder.utils.ts",
    data: {
      name: "directoryFlowBuilder.utils.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/about/app/structure/DirectoryFlowBuilder/nodes",
    data: {
      name: "nodes",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/about/app/structure/DirectoryFlowBuilder/nodes/CustomNode.tsx",
    data: {
      name: "CustomNode.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/about/app/structure/DirectoryFlowBuilder/nodes/customNode.utils.ts",
    data: {
      name: "customNode.utils.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/about/app/structure/page.tsx",
    data: {
      name: "page.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/about/app/technologies",
    data: {
      name: "technologies",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/about/app/technologies/TechStack.tsx",
    data: {
      name: "TechStack.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/about/app/technologies/page.tsx",
    data: {
      name: "page.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/about/app/technologies/technologies.utils.ts",
    data: {
      name: "technologies.utils.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/about/page.tsx",
    data: {
      name: "page.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/layout.tsx",
    data: {
      name: "layout.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/page.tsx",
    data: {
      name: "page.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/layout.tsx",
    data: {
      name: "layout.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/loading.tsx",
    data: {
      name: "loading.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/providers.tsx",
    data: {
      name: "providers.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/.eslintrc.json",
    data: {
      name: ".eslintrc.json",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_bin",
    data: {
      name: "_bin",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_bin/folderStructure.ts",
    data: {
      name: "folderStructure.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components",
    data: {
      name: "_components",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent",
    data: {
      name: "dependent",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/BaseCardActions",
    data: {
      name: "BaseCardActions",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/BaseCardActions/BaseCardActions.tsx",
    data: {
      name: "BaseCardActions.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/BaseCardActions/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/BaseLayout",
    data: {
      name: "BaseLayout",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/BaseLayout/BaseLayout.tsx",
    data: {
      name: "BaseLayout.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/BaseLayout/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/BasePageHeader",
    data: {
      name: "BasePageHeader",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/BasePageHeader/BasePageHeader.tsx",
    data: {
      name: "BasePageHeader.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/BasePageHeader/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/Header",
    data: {
      name: "Header",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/Header/Header.tsx",
    data: {
      name: "Header.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/Header/HeaderClient.tsx",
    data: {
      name: "HeaderClient.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/Header/LoginButton.tsx",
    data: {
      name: "LoginButton.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/Header/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/IconLink",
    data: {
      name: "IconLink",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/IconLink/IconLink.tsx",
    data: {
      name: "IconLink.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/IconLink/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/LocaleSwitcher",
    data: {
      name: "LocaleSwitcher",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/LocaleSwitcher/LocaleSwitcher.tsx",
    data: {
      name: "LocaleSwitcher.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/LocaleSwitcher/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/LoginCard",
    data: {
      name: "LoginCard",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/LoginCard/LCLoginButton.tsx",
    data: {
      name: "LCLoginButton.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/LoginCard/LoginCard.tsx",
    data: {
      name: "LoginCard.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/LoginCard/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/Mdx",
    data: {
      name: "Mdx",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/Mdx/Mdx.tsx",
    data: {
      name: "Mdx.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/Mdx/MdxContent.tsx",
    data: {
      name: "MdxContent.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/Mdx/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/Navigation",
    data: {
      name: "Navigation",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/Navigation/BottomNav",
    data: {
      name: "BottomNav",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/Navigation/BottomNav/BottomNav.tsx",
    data: {
      name: "BottomNav.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/Navigation/BottomNav/BottomNavBar.tsx",
    data: {
      name: "BottomNavBar.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/Navigation/BottomNav/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/Navigation/NavBackdrop.tsx",
    data: {
      name: "NavBackdrop.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/Navigation/Navigation.tsx",
    data: {
      name: "Navigation.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/Navigation/NavigationMenu.tsx",
    data: {
      name: "NavigationMenu.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/Navigation/SideNav",
    data: {
      name: "SideNav",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/Navigation/SideNav/SideNav.tsx",
    data: {
      name: "SideNav.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/Navigation/SideNav/SideNavBrand.tsx",
    data: {
      name: "SideNavBrand.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/Navigation/SideNav/SideNavMobile.tsx",
    data: {
      name: "SideNavMobile.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/Navigation/SideNav/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/Navigation/index.tsx",
    data: {
      name: "index.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/Navigation/navigation.types.ts",
    data: {
      name: "navigation.types.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/Navigation/navigation.utils.ts",
    data: {
      name: "navigation.utils.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/README.md",
    data: {
      name: "README.md",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/ThemesMenu",
    data: {
      name: "ThemesMenu",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/ThemesMenu/ThemesMenu.tsx",
    data: {
      name: "ThemesMenu.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/ThemesMenu/ThemesMenuItemColors.tsx",
    data: {
      name: "ThemesMenuItemColors.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/ThemesMenu/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/ThemesMenu/themesMenu.utils.ts",
    data: {
      name: "themesMenu.utils.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/TopLoader",
    data: {
      name: "TopLoader",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/TopLoader/TopLoader.tsx",
    data: {
      name: "TopLoader.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/TopLoader/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/UserMenu",
    data: {
      name: "UserMenu",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/UserMenu/UserMenu.tsx",
    data: {
      name: "UserMenu.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/UserMenu/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/rich-text",
    data: {
      name: "rich-text",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/rich-text/BlockQuote.tsx",
    data: {
      name: "BlockQuote.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/rich-text/CodeLeaf.tsx",
    data: {
      name: "CodeLeaf.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/rich-text/FixedToolbar.tsx",
    data: {
      name: "FixedToolbar.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/rich-text/FixedToolbarButtons.tsx",
    data: {
      name: "FixedToolbarButtons.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/rich-text/Heading.tsx",
    data: {
      name: "Heading.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/rich-text/HighlightLeaf.tsx",
    data: {
      name: "HighlightLeaf.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/rich-text/HrElement.tsx",
    data: {
      name: "HrElement.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/rich-text/InsertDropdownMenu.tsx",
    data: {
      name: "InsertDropdownMenu.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/rich-text/LinkElement.tsx",
    data: {
      name: "LinkElement.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/rich-text/LinkFloatingToolbar.tsx",
    data: {
      name: "LinkFloatingToolbar.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/rich-text/LinkToolbarButton.tsx",
    data: {
      name: "LinkToolbarButton.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/rich-text/ListElement.tsx",
    data: {
      name: "ListElement.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/rich-text/MarkToolbarButton.tsx",
    data: {
      name: "MarkToolbarButton.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/rich-text/ModeDropdownMenu.tsx",
    data: {
      name: "ModeDropdownMenu.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/rich-text/MoreDropdownMenu.tsx",
    data: {
      name: "MoreDropdownMenu.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/rich-text/ParagraphElement.tsx",
    data: {
      name: "ParagraphElement.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/rich-text/Placeholder.tsx",
    data: {
      name: "Placeholder.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/rich-text/PlateEditor.tsx",
    data: {
      name: "PlateEditor.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/rich-text/editors",
    data: {
      name: "editors",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/rich-text/editors/RTBaseEditor.tsx",
    data: {
      name: "RTBaseEditor.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/rich-text/utils",
    data: {
      name: "utils",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/rich-text/utils/rtAutoFormat.tsx",
    data: {
      name: "rtAutoFormat.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_content",
    data: {
      name: "_content",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_content/authors",
    data: {
      name: "authors",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_content/authors/hardik_badola.mdx",
    data: {
      name: "hardik_badola.mdx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_content/blogs",
    data: {
      name: "blogs",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_content/blogs/scalable-react.mdx",
    data: {
      name: "scalable-react.mdx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_content/blogs_categories",
    data: {
      name: "blogs_categories",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_content/blogs_categories/engineering.mdx",
    data: {
      name: "engineering.mdx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_hooks",
    data: {
      name: "_hooks",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_hooks/useBreakPoint.ts",
    data: {
      name: "useBreakPoint.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_hooks/useTheme.ts",
    data: {
      name: "useTheme.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_lib",
    data: {
      name: "_lib",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_lib/__tests__",
    data: {
      name: "__tests__",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_lib/__tests__/app-api.test.ts",
    data: {
      name: "app-api.test.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_lib/__tests__/custom-error.test.ts",
    data: {
      name: "custom-error.test.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_lib/app-api.ts",
    data: {
      name: "app-api.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_lib/auth.ts",
    data: {
      name: "auth.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_lib/custom-error.ts",
    data: {
      name: "custom-error.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_lib/fonts.ts",
    data: {
      name: "fonts.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_lib/prisma.ts",
    data: {
      name: "prisma.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_lib/schema",
    data: {
      name: "schema",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_lib/schema/experience.ts",
    data: {
      name: "experience.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_lib/schema/interviews.ts",
    data: {
      name: "interviews.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_lib/schema/link-sheet.ts",
    data: {
      name: "link-sheet.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_locales",
    data: {
      name: "_locales",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_locales/client.ts",
    data: {
      name: "client.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_locales/langs",
    data: {
      name: "langs",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_locales/langs/en.ts",
    data: {
      name: "en.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_locales/langs/es.ts",
    data: {
      name: "es.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_locales/server.ts",
    data: {
      name: "server.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_queries",
    data: {
      name: "_queries",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_queries/interviews.queries.ts",
    data: {
      name: "interviews.queries.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_store",
    data: {
      name: "_store",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_store/useSideNavMobile.ts",
    data: {
      name: "useSideNavMobile.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_styles",
    data: {
      name: "_styles",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_styles/globals.app.css",
    data: {
      name: "globals.app.css",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_styles/mdx.css",
    data: {
      name: "mdx.css",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_styles/overrides",
    data: {
      name: "overrides",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_styles/overrides/reactflow.css",
    data: {
      name: "reactflow.css",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_styles/tailwindcss-animate.css",
    data: {
      name: "tailwindcss-animate.css",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_types",
    data: {
      name: "_types",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_types/api.ts",
    data: {
      name: "api.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_types/axios.d.ts",
    data: {
      name: "axios.d.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_types/flowbuilder.ts",
    data: {
      name: "flowbuilder.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_types/globals.d.ts",
    data: {
      name: "globals.d.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_types/next-auth.d.ts",
    data: {
      name: "next-auth.d.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_types/reset.d.ts",
    data: {
      name: "reset.d.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_utils",
    data: {
      name: "_utils",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_utils/__tests__",
    data: {
      name: "__tests__",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_utils/__tests__/styles.test.ts",
    data: {
      name: "styles.test.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_utils/app.ts",
    data: {
      name: "app.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_utils/auth.ts",
    data: {
      name: "auth.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_utils/dom.ts",
    data: {
      name: "dom.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_utils/error",
    data: {
      name: "error",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_utils/func.ts",
    data: {
      name: "func.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_utils/localStorage.ts",
    data: {
      name: "localStorage.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_utils/locale-utils",
    data: {
      name: "locale-utils",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_utils/locale-utils/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_utils/locale-utils/language-options.tsx",
    data: {
      name: "language-options.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_utils/queries.ts",
    data: {
      name: "queries.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_utils/sheet.ts",
    data: {
      name: "sheet.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_utils/shimmer.ts",
    data: {
      name: "shimmer.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_utils/string.ts",
    data: {
      name: "string.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_utils/styles.ts",
    data: {
      name: "styles.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_utils/zod.ts",
    data: {
      name: "zod.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/api",
    data: {
      name: "api",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/api/_experiences",
    data: {
      name: "_experiences",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/api/_experiences/[experienceId]",
    data: {
      name: "[experienceId]",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/api/_experiences/[experienceId]/route.ts",
    data: {
      name: "route.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/api/_experiences/route.ts",
    data: {
      name: "route.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/api/_interviews",
    data: {
      name: "_interviews",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/api/_interviews/[interviewId]",
    data: {
      name: "[interviewId]",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/api/_interviews/[interviewId]/route.ts",
    data: {
      name: "route.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/api/_interviews/route.ts",
    data: {
      name: "route.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/api/_shared",
    data: {
      name: "_shared",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/api/_shared/open",
    data: {
      name: "open",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/api/_shared/open/route.ts",
    data: {
      name: "route.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/api/_sheet",
    data: {
      name: "_sheet",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/api/_sheet/link",
    data: {
      name: "link",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/api/_sheet/link/route.ts",
    data: {
      name: "route.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/api/_sheet/new",
    data: {
      name: "new",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/api/_sheet/new/route.ts",
    data: {
      name: "route.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/api/auth",
    data: {
      name: "auth",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/global-error.tsx",
    data: {
      name: "global-error.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/robots.ts",
    data: {
      name: "robots.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/sitemap.ts",
    data: {
      name: "sitemap.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "assets",
    data: {
      name: "assets",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "assets/_locales",
    data: {
      name: "_locales",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "assets/_locales/en",
    data: {
      name: "en",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "assets/_locales/en/messages.json",
    data: {
      name: "messages.json",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "assets/_locales/es",
    data: {
      name: "es",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "assets/_locales/es/messages.json",
    data: {
      name: "messages.json",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "assets/assets.INFO.md",
    data: {
      name: "assets.INFO.md",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "assets/icon.png",
    data: {
      name: "icon.png",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common",
    data: {
      name: "common",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/.DS_Store",
    data: {
      name: ".DS_Store",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components",
    data: {
      name: "components",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/.DS_Store",
    data: {
      name: ".DS_Store",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds",
    data: {
      name: "ds",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Accordion",
    data: {
      name: "Accordion",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Accordion/Accordion.tsx",
    data: {
      name: "Accordion.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Accordion/accordion.stories.tsx",
    data: {
      name: "accordion.stories.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Accordion/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Avatar",
    data: {
      name: "Avatar",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Avatar/Avatar.tsx",
    data: {
      name: "Avatar.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Avatar/avatar.stories.tsx",
    data: {
      name: "avatar.stories.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Avatar/avatar.utils.ts",
    data: {
      name: "avatar.utils.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Avatar/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Badge",
    data: {
      name: "Badge",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Badge/Badge.tsx",
    data: {
      name: "Badge.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Badge/badge.utils.ts",
    data: {
      name: "badge.utils.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Badge/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/BarLoader",
    data: {
      name: "BarLoader",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/BarLoader/BarLoader.tsx",
    data: {
      name: "BarLoader.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/BarLoader/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/BottomNavigation",
    data: {
      name: "BottomNavigation",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/BottomNavigation/BottomNavigation.tsx",
    data: {
      name: "BottomNavigation.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/BottomNavigation/bottomNavigation.types.ts",
    data: {
      name: "bottomNavigation.types.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/BottomNavigation/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Breadcrumbs",
    data: {
      name: "Breadcrumbs",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Breadcrumbs/Breadcrumbs.tsx",
    data: {
      name: "Breadcrumbs.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Breadcrumbs/index.tsx",
    data: {
      name: "index.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Button",
    data: {
      name: "Button",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Button/Button.tsx",
    data: {
      name: "Button.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Button/button.stories.tsx",
    data: {
      name: "button.stories.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Button/button.utils.ts",
    data: {
      name: "button.utils.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Button/index.tsx",
    data: {
      name: "index.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Calendar",
    data: {
      name: "Calendar",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Calendar/Calendar.tsx",
    data: {
      name: "Calendar.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Calendar/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Card",
    data: {
      name: "Card",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Card/Card.tsx",
    data: {
      name: "Card.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Card/card.types.ts",
    data: {
      name: "card.types.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Card/index.tsx",
    data: {
      name: "index.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Checkbox",
    data: {
      name: "Checkbox",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Checkbox/Checkbox.tsx",
    data: {
      name: "Checkbox.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Checkbox/checkbox.stories.tsx",
    data: {
      name: "checkbox.stories.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Checkbox/checkbox.utils.ts",
    data: {
      name: "checkbox.utils.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Checkbox/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/DatePicker",
    data: {
      name: "DatePicker",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/DatePicker/DatePicker.test.tsx",
    data: {
      name: "DatePicker.test.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/DatePicker/DatePicker.tsx",
    data: {
      name: "DatePicker.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/DatePicker/DatePickerInput.tsx",
    data: {
      name: "DatePickerInput.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/DatePicker/datePicker.types.ts",
    data: {
      name: "datePicker.types.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/DatePicker/datePickerInput.test.tsx",
    data: {
      name: "datePickerInput.test.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/DatePicker/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Dialog",
    data: {
      name: "Dialog",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Dialog/Dialog.tsx",
    data: {
      name: "Dialog.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Dialog/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Drawer",
    data: {
      name: "Drawer",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Drawer/Drawer.tsx",
    data: {
      name: "Drawer.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Drawer/drawer.stories.tsx",
    data: {
      name: "drawer.stories.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Drawer/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/DropdownMenu",
    data: {
      name: "DropdownMenu",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/DropdownMenu/DropdownMenu.tsx",
    data: {
      name: "DropdownMenu.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/DropdownMenu/dropdownMenu.stories.tsx",
    data: {
      name: "dropdownMenu.stories.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/DropdownMenu/index.tsx",
    data: {
      name: "index.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Emoji",
    data: {
      name: "Emoji",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Emoji/Emoji.tsx",
    data: {
      name: "Emoji.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Emoji/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/FileUpload",
    data: {
      name: "FileUpload",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/FileUpload/FileUpload.tsx",
    data: {
      name: "FileUpload.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/FileUpload/fileUpload.types.ts",
    data: {
      name: "fileUpload.types.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/FileUpload/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Flex",
    data: {
      name: "Flex",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Flex/Flex.tsx",
    data: {
      name: "Flex.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Flex/flex.utils.ts",
    data: {
      name: "flex.utils.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Flex/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/FormField",
    data: {
      name: "FormField",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/FormField/FormField.tsx",
    data: {
      name: "FormField.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/FormField/FormFieldCheckbox.tsx",
    data: {
      name: "FormFieldCheckbox.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/FormField/FormFieldDatePicker.tsx",
    data: {
      name: "FormFieldDatePicker.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/FormField/FormFieldDatePickerInput.tsx",
    data: {
      name: "FormFieldDatePickerInput.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/FormField/FormFieldFileUpload.tsx",
    data: {
      name: "FormFieldFileUpload.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/FormField/FormFieldInput.tsx",
    data: {
      name: "FormFieldInput.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/FormField/FormFieldRTBaseEditor.tsx",
    data: {
      name: "FormFieldRTBaseEditor.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/FormField/FormFieldSelect.tsx",
    data: {
      name: "FormFieldSelect.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/FormField/FormFieldTextarea.tsx",
    data: {
      name: "FormFieldTextarea.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/FormField/formField.utils.tsx",
    data: {
      name: "formField.utils.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/FormField/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Icons",
    data: {
      name: "Icons",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Icons/Icons.tsx",
    data: {
      name: "Icons.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Icons/index.tsx",
    data: {
      name: "index.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Indicator",
    data: {
      name: "Indicator",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Indicator/Indicator.tsx",
    data: {
      name: "Indicator.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Indicator/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Input",
    data: {
      name: "Input",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Input/Input.tsx",
    data: {
      name: "Input.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Input/index.tsx",
    data: {
      name: "index.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Input/input.test.tsx",
    data: {
      name: "input.test.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Input/input.utils.ts",
    data: {
      name: "input.utils.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/List",
    data: {
      name: "List",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/List/List.tsx",
    data: {
      name: "List.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/List/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Menu",
    data: {
      name: "Menu",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Menu/Menu.tsx",
    data: {
      name: "Menu.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Menu/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Popover",
    data: {
      name: "Popover",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Popover/Popover.tsx",
    data: {
      name: "Popover.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Popover/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/README.md",
    data: {
      name: "README.md",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/ScrollArea",
    data: {
      name: "ScrollArea",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/ScrollArea/ScrollArea.tsx",
    data: {
      name: "ScrollArea.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/ScrollArea/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Select",
    data: {
      name: "Select",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Select/Select.tsx",
    data: {
      name: "Select.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Select/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Select/select.utils.ts",
    data: {
      name: "select.utils.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Separator",
    data: {
      name: "Separator",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Separator/Separator.tsx",
    data: {
      name: "Separator.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Separator/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Separator/separator.stories.tsx",
    data: {
      name: "separator.stories.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Sheet",
    data: {
      name: "Sheet",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Sheet/Sheet.tsx",
    data: {
      name: "Sheet.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Sheet/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Skeleton",
    data: {
      name: "Skeleton",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Skeleton/Skeleton.tsx",
    data: {
      name: "Skeleton.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Skeleton/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Skeleton/skeleton.stories.tsx",
    data: {
      name: "skeleton.stories.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Table",
    data: {
      name: "Table",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Table/Table.tsx",
    data: {
      name: "Table.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Table/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Table/table.stories.tsx",
    data: {
      name: "table.stories.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Table/table.utils.ts",
    data: {
      name: "table.utils.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Textarea",
    data: {
      name: "Textarea",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Textarea/Textarea.tsx",
    data: {
      name: "Textarea.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Textarea/index.tsx",
    data: {
      name: "index.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Textarea/textarea.types.ts",
    data: {
      name: "textarea.types.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Toggle",
    data: {
      name: "Toggle",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Toggle/Toggle.tsx",
    data: {
      name: "Toggle.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Toggle/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Toggle/toggle.stories.tsx",
    data: {
      name: "toggle.stories.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Toolbar",
    data: {
      name: "Toolbar",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Toolbar/Toolbar.tsx",
    data: {
      name: "Toolbar.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Toolbar/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Tooltip",
    data: {
      name: "Tooltip",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Tooltip/Tooltip.tsx",
    data: {
      name: "Tooltip.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Tooltip/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Tooltip/tooltip.stories.tsx",
    data: {
      name: "tooltip.stories.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Tooltip/tooltip.utils.ts",
    data: {
      name: "tooltip.utils.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Typography",
    data: {
      name: "Typography",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Typography/Typography.tsx",
    data: {
      name: "Typography.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Typography/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/Typography/typography.utils.ts",
    data: {
      name: "typography.utils.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/VisuallyHidden",
    data: {
      name: "VisuallyHidden",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/VisuallyHidden/VisuallyHidden.tsx",
    data: {
      name: "VisuallyHidden.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/components/ds/VisuallyHidden/index.ts",
    data: {
      name: "index.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/lib",
    data: {
      name: "lib",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/lib/api-response.test.ts",
    data: {
      name: "api-response.test.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/lib/api-response.ts",
    data: {
      name: "api-response.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/styles",
    data: {
      name: "styles",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/styles/.DS_Store",
    data: {
      name: ".DS_Store",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/styles/overrides",
    data: {
      name: "overrides",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/styles/overrides/daisyui.css",
    data: {
      name: "daisyui.css",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/utils",
    data: {
      name: "utils",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/utils/.DS_Store",
    data: {
      name: ".DS_Store",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/utils/env.ts",
    data: {
      name: "env.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/utils/logs.ts",
    data: {
      name: "logs.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/utils/routes.ts",
    data: {
      name: "routes.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/utils/tailwind",
    data: {
      name: "tailwind",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/utils/tailwind/plugins.ts",
    data: {
      name: "plugins.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "common/utils/tailwind/theme.ts",
    data: {
      name: "theme.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "docs",
    data: {
      name: "docs",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "docs/README.md",
    data: {
      name: "README.md",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "docs/architecture",
    data: {
      name: "architecture",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "docs/architecture/README.md",
    data: {
      name: "README.md",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "docs/bugs",
    data: {
      name: "bugs",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "docs/bugs/README.md",
    data: {
      name: "README.md",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "docs/bugs/robots-middleware.md",
    data: {
      name: "robots-middleware.md",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "docs/bugs/typography-safelist.md",
    data: {
      name: "typography-safelist.md",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "docs/guides",
    data: {
      name: "guides",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "docs/guides/README.md",
    data: {
      name: "README.md",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "docs/learnings",
    data: {
      name: "learnings",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "docs/learnings/README.md",
    data: {
      name: "README.md",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "instrumentation.ts",
    data: {
      name: "instrumentation.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "knip-output.md",
    data: {
      name: "knip-output.md",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "knip.ts",
    data: {
      name: "knip.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "middleware.tsx",
    data: {
      name: "middleware.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "next-env.d.ts",
    data: {
      name: "next-env.d.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "package.json",
    data: {
      name: "package.json",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "prisma",
    data: {
      name: "prisma",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "prisma/schema.prisma",
    data: {
      name: "schema.prisma",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public",
    data: {
      name: "public",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/favicon.ico",
    data: {
      name: "favicon.ico",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images",
    data: {
      name: "images",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/about",
    data: {
      name: "about",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/app-architecture",
    data: {
      name: "app-architecture",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/app-architecture/experiences.png",
    data: {
      name: "experiences.png",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/app-architecture/sign-in-flow.png",
    data: {
      name: "sign-in-flow.png",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/blogs",
    data: {
      name: "blogs",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/blogs/scalable-react",
    data: {
      name: "scalable-react",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/blogs/scalable-react/css-layouting.png",
    data: {
      name: "css-layouting.png",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/blogs/scalable-react/scalable-react.jpg",
    data: {
      name: "scalable-react.jpg",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/blogs/scalable-react/use-enum.webp",
    data: {
      name: "use-enum.webp",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/blogs-categories",
    data: {
      name: "blogs-categories",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/content",
    data: {
      name: "content",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/content/authors",
    data: {
      name: "authors",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/content/authors/hardik_badola.jpeg",
    data: {
      name: "hardik_badola.jpeg",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/flags",
    data: {
      name: "flags",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/flags/english-uk.svg",
    data: {
      name: "english-uk.svg",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/flags/espanol-esp.svg",
    data: {
      name: "espanol-esp.svg",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/illustrations",
    data: {
      name: "illustrations",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/illustrations/under-construction.webp",
    data: {
      name: "under-construction.webp",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/logo",
    data: {
      name: "logo",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/logo/aw-logo.png",
    data: {
      name: "aw-logo.png",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/logo/aw-logo.svg",
    data: {
      name: "aw-logo.svg",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/seo",
    data: {
      name: "seo",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/seo/base-opengraph-image.png",
    data: {
      name: "base-opengraph-image.png",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/seo/base-twitter-image.png",
    data: {
      name: "base-twitter-image.png",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/technologies",
    data: {
      name: "technologies",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/technologies/contentlayer.png",
    data: {
      name: "contentlayer.png",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/technologies/daisyui.png",
    data: {
      name: "daisyui.png",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/technologies/dayjs.png",
    data: {
      name: "dayjs.png",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/technologies/eslint.svg",
    data: {
      name: "eslint.svg",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/technologies/knip.png",
    data: {
      name: "knip.png",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/technologies/lucide-icon.png",
    data: {
      name: "lucide-icon.png",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/technologies/next-international.webp",
    data: {
      name: "next-international.webp",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/technologies/nextjs.svg",
    data: {
      name: "nextjs.svg",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/technologies/prettier.svg",
    data: {
      name: "prettier.svg",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/technologies/radix-ui.svg",
    data: {
      name: "radix-ui.svg",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/technologies/react-testing-library.png",
    data: {
      name: "react-testing-library.png",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/technologies/react-wavify.gif",
    data: {
      name: "react-wavify.gif",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/technologies/react.svg",
    data: {
      name: "react.svg",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/technologies/reactflow.png",
    data: {
      name: "reactflow.png",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/technologies/sentry.svg",
    data: {
      name: "sentry.svg",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/technologies/storybook.svg",
    data: {
      name: "storybook.svg",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/technologies/stylelint.png",
    data: {
      name: "stylelint.png",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/technologies/tailwindcss.svg",
    data: {
      name: "tailwindcss.svg",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/technologies/typescript.svg",
    data: {
      name: "typescript.svg",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/technologies/vitest.svg",
    data: {
      name: "vitest.svg",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/technologies/zod.jpg",
    data: {
      name: "zod.jpg",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "public/images/technologies/zustand.svg",
    data: {
      name: "zustand.svg",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "scripts",
    data: {
      name: "scripts",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "scripts/createFolderStructure.ts",
    data: {
      name: "createFolderStructure.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "scripts/renderLogs.js",
    data: {
      name: "renderLogs.js",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "setupTest.ts",
    data: {
      name: "setupTest.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "yarn.lock",
    data: {
      name: "yarn.lock",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
];
export const edges: DrEdgeType[] = [
  {
    id: "e:.->.DS_Store",
    source: ".",
    target: ".DS_Store",
    type: "smoothstep",
  },
  {
    id: "e:.->.eslintrc.json",
    source: ".",
    target: ".eslintrc.json",
    type: "smoothstep",
  },
  {
    id: "e:.->.husky",
    source: ".",
    target: ".husky",
    type: "smoothstep",
  },
  {
    id: "e:.husky->.husky/_",
    source: ".husky",
    target: ".husky/_",
    type: "smoothstep",
  },
  {
    id: "e:.husky/_->.husky/_/husky.sh",
    source: ".husky/_",
    target: ".husky/_/husky.sh",
    type: "smoothstep",
  },
  {
    id: "e:.husky->.husky/pre-commit",
    source: ".husky",
    target: ".husky/pre-commit",
    type: "smoothstep",
  },
  {
    id: "e:.->.lintstagedrc.js",
    source: ".",
    target: ".lintstagedrc.js",
    type: "smoothstep",
  },
  {
    id: "e:.->.npmrc",
    source: ".",
    target: ".npmrc",
    type: "smoothstep",
  },
  {
    id: "e:.->.nvmrc",
    source: ".",
    target: ".nvmrc",
    type: "smoothstep",
  },
  {
    id: "e:.->.prettierrc",
    source: ".",
    target: ".prettierrc",
    type: "smoothstep",
  },
  {
    id: "e:.->.sentryclirc",
    source: ".",
    target: ".sentryclirc",
    type: "smoothstep",
  },
  {
    id: "e:.->.storybook",
    source: ".",
    target: ".storybook",
    type: "smoothstep",
  },
  {
    id: "e:.storybook->.storybook/main.ts",
    source: ".storybook",
    target: ".storybook/main.ts",
    type: "smoothstep",
  },
  {
    id: "e:.storybook->.storybook/preview.tsx",
    source: ".storybook",
    target: ".storybook/preview.tsx",
    type: "smoothstep",
  },
  {
    id: "e:.->.stylelintrc.json",
    source: ".",
    target: ".stylelintrc.json",
    type: "smoothstep",
  },
  {
    id: "e:.->.vscode",
    source: ".",
    target: ".vscode",
    type: "smoothstep",
  },
  {
    id: "e:.vscode->.vscode/settings.json",
    source: ".vscode",
    target: ".vscode/settings.json",
    type: "smoothstep",
  },
  {
    id: "e:.vscode->.vscode/tailwind.json",
    source: ".vscode",
    target: ".vscode/tailwind.json",
    type: "smoothstep",
  },
  {
    id: "e:.->ATTRIBUTION.md",
    source: ".",
    target: "ATTRIBUTION.md",
    type: "smoothstep",
  },
  {
    id: "e:.->TECH_TASK.md",
    source: ".",
    target: "TECH_TASK.md",
    type: "smoothstep",
  },
  {
    id: "e:.->TODO.md",
    source: ".",
    target: "TODO.md",
    type: "smoothstep",
  },
  {
    id: "e:.->app",
    source: ".",
    target: "app",
    type: "smoothstep",
  },
  {
    id: "e:app->app/(routes)",
    source: "app",
    target: "app/(routes)",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)->app/(routes)/[locale]",
    source: "app/(routes)",
    target: "app/(routes)/[locale]",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]->app/(routes)/[locale]/(auth)",
    source: "app/(routes)/[locale]",
    target: "app/(routes)/[locale]/(auth)",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]->app/(routes)/[locale]/(nav-layout)",
    source: "app/(routes)/[locale]",
    target: "app/(routes)/[locale]/(nav-layout)",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)->app/(routes)/[locale]/(nav-layout)/(docs)",
    source: "app/(routes)/[locale]/(nav-layout)",
    target: "app/(routes)/[locale]/(nav-layout)/(docs)",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(docs)->app/(routes)/[locale]/(nav-layout)/(docs)/blogs",
    source: "app/(routes)/[locale]/(nav-layout)/(docs)",
    target: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(docs)/blogs->app/(routes)/[locale]/(nav-layout)/(docs)/blogs/BlogCard",
    source: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs",
    target: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/BlogCard",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(docs)/blogs/BlogCard->app/(routes)/[locale]/(nav-layout)/(docs)/blogs/BlogCard/BlogCard.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/BlogCard",
    target:
      "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/BlogCard/BlogCard.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(docs)/blogs/BlogCard->app/(routes)/[locale]/(nav-layout)/(docs)/blogs/BlogCard/blogCard.module.css",
    source: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/BlogCard",
    target:
      "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/BlogCard/blogCard.module.css",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(docs)/blogs/BlogCard->app/(routes)/[locale]/(nav-layout)/(docs)/blogs/BlogCard/index.ts",
    source: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/BlogCard",
    target: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/BlogCard/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(docs)/blogs->app/(routes)/[locale]/(nav-layout)/(docs)/blogs/BlogsListMobile.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs",
    target:
      "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/BlogsListMobile.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(docs)/blogs->app/(routes)/[locale]/(nav-layout)/(docs)/blogs/BlogsWrapper.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs",
    target: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/BlogsWrapper.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(docs)/blogs->app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]",
    source: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs",
    target: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]->app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]/BlogMetaInfo",
    source: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]",
    target:
      "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]/BlogMetaInfo",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]/BlogMetaInfo->app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]/BlogMetaInfo/BlogMetaInfo.tsx",
    source:
      "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]/BlogMetaInfo",
    target:
      "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]/BlogMetaInfo/BlogMetaInfo.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]/BlogMetaInfo->app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]/BlogMetaInfo/blogMetaInfo.module.css",
    source:
      "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]/BlogMetaInfo",
    target:
      "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]/BlogMetaInfo/blogMetaInfo.module.css",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]->app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]/BlogScrollWrapper",
    source: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]",
    target:
      "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]/BlogScrollWrapper",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]/BlogScrollWrapper->app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]/BlogScrollWrapper/BlogScrollWrapper.tsx",
    source:
      "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]/BlogScrollWrapper",
    target:
      "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]/BlogScrollWrapper/BlogScrollWrapper.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]->app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]/page.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]",
    target:
      "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]/page.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(docs)/blogs->app/(routes)/[locale]/(nav-layout)/(docs)/blogs/not-found.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs",
    target: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/not-found.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(docs)/blogs->app/(routes)/[locale]/(nav-layout)/(docs)/blogs/page.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs",
    target: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/page.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)->app/(routes)/[locale]/(nav-layout)/(swr)",
    source: "app/(routes)/[locale]/(nav-layout)",
    target: "app/(routes)/[locale]/(nav-layout)/(swr)",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)->app/(routes)/[locale]/(nav-layout)/about",
    source: "app/(routes)/[locale]/(nav-layout)",
    target: "app/(routes)/[locale]/(nav-layout)/about",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/about->app/(routes)/[locale]/(nav-layout)/about/AboutApp.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/about",
    target: "app/(routes)/[locale]/(nav-layout)/about/AboutApp.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/about->app/(routes)/[locale]/(nav-layout)/about/AboutCreator.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/about",
    target: "app/(routes)/[locale]/(nav-layout)/about/AboutCreator.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/about->app/(routes)/[locale]/(nav-layout)/about/app",
    source: "app/(routes)/[locale]/(nav-layout)/about",
    target: "app/(routes)/[locale]/(nav-layout)/about/app",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/about/app->app/(routes)/[locale]/(nav-layout)/about/app/structure",
    source: "app/(routes)/[locale]/(nav-layout)/about/app",
    target: "app/(routes)/[locale]/(nav-layout)/about/app/structure",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/about/app/structure->app/(routes)/[locale]/(nav-layout)/about/app/structure/DirectoryFlowBuilder",
    source: "app/(routes)/[locale]/(nav-layout)/about/app/structure",
    target:
      "app/(routes)/[locale]/(nav-layout)/about/app/structure/DirectoryFlowBuilder",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/about/app/structure/DirectoryFlowBuilder->app/(routes)/[locale]/(nav-layout)/about/app/structure/DirectoryFlowBuilder/DFBWrapper.tsx",
    source:
      "app/(routes)/[locale]/(nav-layout)/about/app/structure/DirectoryFlowBuilder",
    target:
      "app/(routes)/[locale]/(nav-layout)/about/app/structure/DirectoryFlowBuilder/DFBWrapper.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/about/app/structure/DirectoryFlowBuilder->app/(routes)/[locale]/(nav-layout)/about/app/structure/DirectoryFlowBuilder/DirectoryFlowBuilder.tsx",
    source:
      "app/(routes)/[locale]/(nav-layout)/about/app/structure/DirectoryFlowBuilder",
    target:
      "app/(routes)/[locale]/(nav-layout)/about/app/structure/DirectoryFlowBuilder/DirectoryFlowBuilder.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/about/app/structure/DirectoryFlowBuilder->app/(routes)/[locale]/(nav-layout)/about/app/structure/DirectoryFlowBuilder/directoryFlowBuilder.utils.ts",
    source:
      "app/(routes)/[locale]/(nav-layout)/about/app/structure/DirectoryFlowBuilder",
    target:
      "app/(routes)/[locale]/(nav-layout)/about/app/structure/DirectoryFlowBuilder/directoryFlowBuilder.utils.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/about/app/structure/DirectoryFlowBuilder->app/(routes)/[locale]/(nav-layout)/about/app/structure/DirectoryFlowBuilder/nodes",
    source:
      "app/(routes)/[locale]/(nav-layout)/about/app/structure/DirectoryFlowBuilder",
    target:
      "app/(routes)/[locale]/(nav-layout)/about/app/structure/DirectoryFlowBuilder/nodes",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/about/app/structure/DirectoryFlowBuilder/nodes->app/(routes)/[locale]/(nav-layout)/about/app/structure/DirectoryFlowBuilder/nodes/CustomNode.tsx",
    source:
      "app/(routes)/[locale]/(nav-layout)/about/app/structure/DirectoryFlowBuilder/nodes",
    target:
      "app/(routes)/[locale]/(nav-layout)/about/app/structure/DirectoryFlowBuilder/nodes/CustomNode.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/about/app/structure/DirectoryFlowBuilder/nodes->app/(routes)/[locale]/(nav-layout)/about/app/structure/DirectoryFlowBuilder/nodes/customNode.utils.ts",
    source:
      "app/(routes)/[locale]/(nav-layout)/about/app/structure/DirectoryFlowBuilder/nodes",
    target:
      "app/(routes)/[locale]/(nav-layout)/about/app/structure/DirectoryFlowBuilder/nodes/customNode.utils.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/about/app/structure->app/(routes)/[locale]/(nav-layout)/about/app/structure/page.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/about/app/structure",
    target: "app/(routes)/[locale]/(nav-layout)/about/app/structure/page.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/about/app->app/(routes)/[locale]/(nav-layout)/about/app/technologies",
    source: "app/(routes)/[locale]/(nav-layout)/about/app",
    target: "app/(routes)/[locale]/(nav-layout)/about/app/technologies",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/about/app/technologies->app/(routes)/[locale]/(nav-layout)/about/app/technologies/TechStack.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/about/app/technologies",
    target:
      "app/(routes)/[locale]/(nav-layout)/about/app/technologies/TechStack.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/about/app/technologies->app/(routes)/[locale]/(nav-layout)/about/app/technologies/page.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/about/app/technologies",
    target:
      "app/(routes)/[locale]/(nav-layout)/about/app/technologies/page.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/about/app/technologies->app/(routes)/[locale]/(nav-layout)/about/app/technologies/technologies.utils.ts",
    source: "app/(routes)/[locale]/(nav-layout)/about/app/technologies",
    target:
      "app/(routes)/[locale]/(nav-layout)/about/app/technologies/technologies.utils.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/about->app/(routes)/[locale]/(nav-layout)/about/page.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/about",
    target: "app/(routes)/[locale]/(nav-layout)/about/page.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)->app/(routes)/[locale]/(nav-layout)/layout.tsx",
    source: "app/(routes)/[locale]/(nav-layout)",
    target: "app/(routes)/[locale]/(nav-layout)/layout.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)->app/(routes)/[locale]/(nav-layout)/page.tsx",
    source: "app/(routes)/[locale]/(nav-layout)",
    target: "app/(routes)/[locale]/(nav-layout)/page.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]->app/(routes)/[locale]/layout.tsx",
    source: "app/(routes)/[locale]",
    target: "app/(routes)/[locale]/layout.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]->app/(routes)/[locale]/loading.tsx",
    source: "app/(routes)/[locale]",
    target: "app/(routes)/[locale]/loading.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]->app/(routes)/[locale]/providers.tsx",
    source: "app/(routes)/[locale]",
    target: "app/(routes)/[locale]/providers.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app->app/.eslintrc.json",
    source: "app",
    target: "app/.eslintrc.json",
    type: "smoothstep",
  },
  {
    id: "e:app->app/_bin",
    source: "app",
    target: "app/_bin",
    type: "smoothstep",
  },
  {
    id: "e:app/_bin->app/_bin/folderStructure.ts",
    source: "app/_bin",
    target: "app/_bin/folderStructure.ts",
    type: "smoothstep",
  },
  {
    id: "e:app->app/_components",
    source: "app",
    target: "app/_components",
    type: "smoothstep",
  },
  {
    id: "e:app/_components->app/_components/dependent",
    source: "app/_components",
    target: "app/_components/dependent",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent->app/_components/dependent/BaseCardActions",
    source: "app/_components/dependent",
    target: "app/_components/dependent/BaseCardActions",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/BaseCardActions->app/_components/dependent/BaseCardActions/BaseCardActions.tsx",
    source: "app/_components/dependent/BaseCardActions",
    target: "app/_components/dependent/BaseCardActions/BaseCardActions.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/BaseCardActions->app/_components/dependent/BaseCardActions/index.ts",
    source: "app/_components/dependent/BaseCardActions",
    target: "app/_components/dependent/BaseCardActions/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent->app/_components/dependent/BaseLayout",
    source: "app/_components/dependent",
    target: "app/_components/dependent/BaseLayout",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/BaseLayout->app/_components/dependent/BaseLayout/BaseLayout.tsx",
    source: "app/_components/dependent/BaseLayout",
    target: "app/_components/dependent/BaseLayout/BaseLayout.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/BaseLayout->app/_components/dependent/BaseLayout/index.ts",
    source: "app/_components/dependent/BaseLayout",
    target: "app/_components/dependent/BaseLayout/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent->app/_components/dependent/BasePageHeader",
    source: "app/_components/dependent",
    target: "app/_components/dependent/BasePageHeader",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/BasePageHeader->app/_components/dependent/BasePageHeader/BasePageHeader.tsx",
    source: "app/_components/dependent/BasePageHeader",
    target: "app/_components/dependent/BasePageHeader/BasePageHeader.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/BasePageHeader->app/_components/dependent/BasePageHeader/index.ts",
    source: "app/_components/dependent/BasePageHeader",
    target: "app/_components/dependent/BasePageHeader/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent->app/_components/dependent/Header",
    source: "app/_components/dependent",
    target: "app/_components/dependent/Header",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/Header->app/_components/dependent/Header/Header.tsx",
    source: "app/_components/dependent/Header",
    target: "app/_components/dependent/Header/Header.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/Header->app/_components/dependent/Header/HeaderClient.tsx",
    source: "app/_components/dependent/Header",
    target: "app/_components/dependent/Header/HeaderClient.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/Header->app/_components/dependent/Header/LoginButton.tsx",
    source: "app/_components/dependent/Header",
    target: "app/_components/dependent/Header/LoginButton.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/Header->app/_components/dependent/Header/index.ts",
    source: "app/_components/dependent/Header",
    target: "app/_components/dependent/Header/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent->app/_components/dependent/IconLink",
    source: "app/_components/dependent",
    target: "app/_components/dependent/IconLink",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/IconLink->app/_components/dependent/IconLink/IconLink.tsx",
    source: "app/_components/dependent/IconLink",
    target: "app/_components/dependent/IconLink/IconLink.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/IconLink->app/_components/dependent/IconLink/index.ts",
    source: "app/_components/dependent/IconLink",
    target: "app/_components/dependent/IconLink/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent->app/_components/dependent/LocaleSwitcher",
    source: "app/_components/dependent",
    target: "app/_components/dependent/LocaleSwitcher",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/LocaleSwitcher->app/_components/dependent/LocaleSwitcher/LocaleSwitcher.tsx",
    source: "app/_components/dependent/LocaleSwitcher",
    target: "app/_components/dependent/LocaleSwitcher/LocaleSwitcher.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/LocaleSwitcher->app/_components/dependent/LocaleSwitcher/index.ts",
    source: "app/_components/dependent/LocaleSwitcher",
    target: "app/_components/dependent/LocaleSwitcher/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent->app/_components/dependent/LoginCard",
    source: "app/_components/dependent",
    target: "app/_components/dependent/LoginCard",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/LoginCard->app/_components/dependent/LoginCard/LCLoginButton.tsx",
    source: "app/_components/dependent/LoginCard",
    target: "app/_components/dependent/LoginCard/LCLoginButton.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/LoginCard->app/_components/dependent/LoginCard/LoginCard.tsx",
    source: "app/_components/dependent/LoginCard",
    target: "app/_components/dependent/LoginCard/LoginCard.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/LoginCard->app/_components/dependent/LoginCard/index.ts",
    source: "app/_components/dependent/LoginCard",
    target: "app/_components/dependent/LoginCard/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent->app/_components/dependent/Mdx",
    source: "app/_components/dependent",
    target: "app/_components/dependent/Mdx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/Mdx->app/_components/dependent/Mdx/Mdx.tsx",
    source: "app/_components/dependent/Mdx",
    target: "app/_components/dependent/Mdx/Mdx.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/Mdx->app/_components/dependent/Mdx/MdxContent.tsx",
    source: "app/_components/dependent/Mdx",
    target: "app/_components/dependent/Mdx/MdxContent.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/Mdx->app/_components/dependent/Mdx/index.ts",
    source: "app/_components/dependent/Mdx",
    target: "app/_components/dependent/Mdx/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent->app/_components/dependent/Navigation",
    source: "app/_components/dependent",
    target: "app/_components/dependent/Navigation",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/Navigation->app/_components/dependent/Navigation/BottomNav",
    source: "app/_components/dependent/Navigation",
    target: "app/_components/dependent/Navigation/BottomNav",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/Navigation/BottomNav->app/_components/dependent/Navigation/BottomNav/BottomNav.tsx",
    source: "app/_components/dependent/Navigation/BottomNav",
    target: "app/_components/dependent/Navigation/BottomNav/BottomNav.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/Navigation/BottomNav->app/_components/dependent/Navigation/BottomNav/BottomNavBar.tsx",
    source: "app/_components/dependent/Navigation/BottomNav",
    target: "app/_components/dependent/Navigation/BottomNav/BottomNavBar.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/Navigation/BottomNav->app/_components/dependent/Navigation/BottomNav/index.ts",
    source: "app/_components/dependent/Navigation/BottomNav",
    target: "app/_components/dependent/Navigation/BottomNav/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/Navigation->app/_components/dependent/Navigation/NavBackdrop.tsx",
    source: "app/_components/dependent/Navigation",
    target: "app/_components/dependent/Navigation/NavBackdrop.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/Navigation->app/_components/dependent/Navigation/Navigation.tsx",
    source: "app/_components/dependent/Navigation",
    target: "app/_components/dependent/Navigation/Navigation.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/Navigation->app/_components/dependent/Navigation/NavigationMenu.tsx",
    source: "app/_components/dependent/Navigation",
    target: "app/_components/dependent/Navigation/NavigationMenu.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/Navigation->app/_components/dependent/Navigation/SideNav",
    source: "app/_components/dependent/Navigation",
    target: "app/_components/dependent/Navigation/SideNav",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/Navigation/SideNav->app/_components/dependent/Navigation/SideNav/SideNav.tsx",
    source: "app/_components/dependent/Navigation/SideNav",
    target: "app/_components/dependent/Navigation/SideNav/SideNav.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/Navigation/SideNav->app/_components/dependent/Navigation/SideNav/SideNavBrand.tsx",
    source: "app/_components/dependent/Navigation/SideNav",
    target: "app/_components/dependent/Navigation/SideNav/SideNavBrand.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/Navigation/SideNav->app/_components/dependent/Navigation/SideNav/SideNavMobile.tsx",
    source: "app/_components/dependent/Navigation/SideNav",
    target: "app/_components/dependent/Navigation/SideNav/SideNavMobile.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/Navigation/SideNav->app/_components/dependent/Navigation/SideNav/index.ts",
    source: "app/_components/dependent/Navigation/SideNav",
    target: "app/_components/dependent/Navigation/SideNav/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/Navigation->app/_components/dependent/Navigation/index.tsx",
    source: "app/_components/dependent/Navigation",
    target: "app/_components/dependent/Navigation/index.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/Navigation->app/_components/dependent/Navigation/navigation.types.ts",
    source: "app/_components/dependent/Navigation",
    target: "app/_components/dependent/Navigation/navigation.types.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/Navigation->app/_components/dependent/Navigation/navigation.utils.ts",
    source: "app/_components/dependent/Navigation",
    target: "app/_components/dependent/Navigation/navigation.utils.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent->app/_components/dependent/README.md",
    source: "app/_components/dependent",
    target: "app/_components/dependent/README.md",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent->app/_components/dependent/ThemesMenu",
    source: "app/_components/dependent",
    target: "app/_components/dependent/ThemesMenu",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/ThemesMenu->app/_components/dependent/ThemesMenu/ThemesMenu.tsx",
    source: "app/_components/dependent/ThemesMenu",
    target: "app/_components/dependent/ThemesMenu/ThemesMenu.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/ThemesMenu->app/_components/dependent/ThemesMenu/ThemesMenuItemColors.tsx",
    source: "app/_components/dependent/ThemesMenu",
    target: "app/_components/dependent/ThemesMenu/ThemesMenuItemColors.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/ThemesMenu->app/_components/dependent/ThemesMenu/index.ts",
    source: "app/_components/dependent/ThemesMenu",
    target: "app/_components/dependent/ThemesMenu/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/ThemesMenu->app/_components/dependent/ThemesMenu/themesMenu.utils.ts",
    source: "app/_components/dependent/ThemesMenu",
    target: "app/_components/dependent/ThemesMenu/themesMenu.utils.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent->app/_components/dependent/TopLoader",
    source: "app/_components/dependent",
    target: "app/_components/dependent/TopLoader",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/TopLoader->app/_components/dependent/TopLoader/TopLoader.tsx",
    source: "app/_components/dependent/TopLoader",
    target: "app/_components/dependent/TopLoader/TopLoader.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/TopLoader->app/_components/dependent/TopLoader/index.ts",
    source: "app/_components/dependent/TopLoader",
    target: "app/_components/dependent/TopLoader/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent->app/_components/dependent/UserMenu",
    source: "app/_components/dependent",
    target: "app/_components/dependent/UserMenu",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/UserMenu->app/_components/dependent/UserMenu/UserMenu.tsx",
    source: "app/_components/dependent/UserMenu",
    target: "app/_components/dependent/UserMenu/UserMenu.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/UserMenu->app/_components/dependent/UserMenu/index.ts",
    source: "app/_components/dependent/UserMenu",
    target: "app/_components/dependent/UserMenu/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_components->app/_components/rich-text",
    source: "app/_components",
    target: "app/_components/rich-text",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/rich-text->app/_components/rich-text/BlockQuote.tsx",
    source: "app/_components/rich-text",
    target: "app/_components/rich-text/BlockQuote.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/rich-text->app/_components/rich-text/CodeLeaf.tsx",
    source: "app/_components/rich-text",
    target: "app/_components/rich-text/CodeLeaf.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/rich-text->app/_components/rich-text/FixedToolbar.tsx",
    source: "app/_components/rich-text",
    target: "app/_components/rich-text/FixedToolbar.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/rich-text->app/_components/rich-text/FixedToolbarButtons.tsx",
    source: "app/_components/rich-text",
    target: "app/_components/rich-text/FixedToolbarButtons.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/rich-text->app/_components/rich-text/Heading.tsx",
    source: "app/_components/rich-text",
    target: "app/_components/rich-text/Heading.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/rich-text->app/_components/rich-text/HighlightLeaf.tsx",
    source: "app/_components/rich-text",
    target: "app/_components/rich-text/HighlightLeaf.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/rich-text->app/_components/rich-text/HrElement.tsx",
    source: "app/_components/rich-text",
    target: "app/_components/rich-text/HrElement.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/rich-text->app/_components/rich-text/InsertDropdownMenu.tsx",
    source: "app/_components/rich-text",
    target: "app/_components/rich-text/InsertDropdownMenu.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/rich-text->app/_components/rich-text/LinkElement.tsx",
    source: "app/_components/rich-text",
    target: "app/_components/rich-text/LinkElement.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/rich-text->app/_components/rich-text/LinkFloatingToolbar.tsx",
    source: "app/_components/rich-text",
    target: "app/_components/rich-text/LinkFloatingToolbar.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/rich-text->app/_components/rich-text/LinkToolbarButton.tsx",
    source: "app/_components/rich-text",
    target: "app/_components/rich-text/LinkToolbarButton.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/rich-text->app/_components/rich-text/ListElement.tsx",
    source: "app/_components/rich-text",
    target: "app/_components/rich-text/ListElement.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/rich-text->app/_components/rich-text/MarkToolbarButton.tsx",
    source: "app/_components/rich-text",
    target: "app/_components/rich-text/MarkToolbarButton.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/rich-text->app/_components/rich-text/ModeDropdownMenu.tsx",
    source: "app/_components/rich-text",
    target: "app/_components/rich-text/ModeDropdownMenu.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/rich-text->app/_components/rich-text/MoreDropdownMenu.tsx",
    source: "app/_components/rich-text",
    target: "app/_components/rich-text/MoreDropdownMenu.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/rich-text->app/_components/rich-text/ParagraphElement.tsx",
    source: "app/_components/rich-text",
    target: "app/_components/rich-text/ParagraphElement.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/rich-text->app/_components/rich-text/Placeholder.tsx",
    source: "app/_components/rich-text",
    target: "app/_components/rich-text/Placeholder.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/rich-text->app/_components/rich-text/PlateEditor.tsx",
    source: "app/_components/rich-text",
    target: "app/_components/rich-text/PlateEditor.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/rich-text->app/_components/rich-text/editors",
    source: "app/_components/rich-text",
    target: "app/_components/rich-text/editors",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/rich-text/editors->app/_components/rich-text/editors/RTBaseEditor.tsx",
    source: "app/_components/rich-text/editors",
    target: "app/_components/rich-text/editors/RTBaseEditor.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/rich-text->app/_components/rich-text/utils",
    source: "app/_components/rich-text",
    target: "app/_components/rich-text/utils",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/rich-text/utils->app/_components/rich-text/utils/rtAutoFormat.tsx",
    source: "app/_components/rich-text/utils",
    target: "app/_components/rich-text/utils/rtAutoFormat.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app->app/_content",
    source: "app",
    target: "app/_content",
    type: "smoothstep",
  },
  {
    id: "e:app/_content->app/_content/authors",
    source: "app/_content",
    target: "app/_content/authors",
    type: "smoothstep",
  },
  {
    id: "e:app/_content/authors->app/_content/authors/hardik_badola.mdx",
    source: "app/_content/authors",
    target: "app/_content/authors/hardik_badola.mdx",
    type: "smoothstep",
  },
  {
    id: "e:app/_content->app/_content/blogs",
    source: "app/_content",
    target: "app/_content/blogs",
    type: "smoothstep",
  },
  {
    id: "e:app/_content/blogs->app/_content/blogs/scalable-react.mdx",
    source: "app/_content/blogs",
    target: "app/_content/blogs/scalable-react.mdx",
    type: "smoothstep",
  },
  {
    id: "e:app/_content->app/_content/blogs_categories",
    source: "app/_content",
    target: "app/_content/blogs_categories",
    type: "smoothstep",
  },
  {
    id: "e:app/_content/blogs_categories->app/_content/blogs_categories/engineering.mdx",
    source: "app/_content/blogs_categories",
    target: "app/_content/blogs_categories/engineering.mdx",
    type: "smoothstep",
  },
  {
    id: "e:app->app/_hooks",
    source: "app",
    target: "app/_hooks",
    type: "smoothstep",
  },
  {
    id: "e:app/_hooks->app/_hooks/useBreakPoint.ts",
    source: "app/_hooks",
    target: "app/_hooks/useBreakPoint.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_hooks->app/_hooks/useTheme.ts",
    source: "app/_hooks",
    target: "app/_hooks/useTheme.ts",
    type: "smoothstep",
  },
  {
    id: "e:app->app/_lib",
    source: "app",
    target: "app/_lib",
    type: "smoothstep",
  },
  {
    id: "e:app/_lib->app/_lib/__tests__",
    source: "app/_lib",
    target: "app/_lib/__tests__",
    type: "smoothstep",
  },
  {
    id: "e:app/_lib/__tests__->app/_lib/__tests__/app-api.test.ts",
    source: "app/_lib/__tests__",
    target: "app/_lib/__tests__/app-api.test.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_lib/__tests__->app/_lib/__tests__/custom-error.test.ts",
    source: "app/_lib/__tests__",
    target: "app/_lib/__tests__/custom-error.test.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_lib->app/_lib/app-api.ts",
    source: "app/_lib",
    target: "app/_lib/app-api.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_lib->app/_lib/auth.ts",
    source: "app/_lib",
    target: "app/_lib/auth.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_lib->app/_lib/custom-error.ts",
    source: "app/_lib",
    target: "app/_lib/custom-error.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_lib->app/_lib/fonts.ts",
    source: "app/_lib",
    target: "app/_lib/fonts.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_lib->app/_lib/prisma.ts",
    source: "app/_lib",
    target: "app/_lib/prisma.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_lib->app/_lib/schema",
    source: "app/_lib",
    target: "app/_lib/schema",
    type: "smoothstep",
  },
  {
    id: "e:app/_lib/schema->app/_lib/schema/experience.ts",
    source: "app/_lib/schema",
    target: "app/_lib/schema/experience.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_lib/schema->app/_lib/schema/interviews.ts",
    source: "app/_lib/schema",
    target: "app/_lib/schema/interviews.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_lib/schema->app/_lib/schema/link-sheet.ts",
    source: "app/_lib/schema",
    target: "app/_lib/schema/link-sheet.ts",
    type: "smoothstep",
  },
  {
    id: "e:app->app/_locales",
    source: "app",
    target: "app/_locales",
    type: "smoothstep",
  },
  {
    id: "e:app/_locales->app/_locales/client.ts",
    source: "app/_locales",
    target: "app/_locales/client.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_locales->app/_locales/langs",
    source: "app/_locales",
    target: "app/_locales/langs",
    type: "smoothstep",
  },
  {
    id: "e:app/_locales/langs->app/_locales/langs/en.ts",
    source: "app/_locales/langs",
    target: "app/_locales/langs/en.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_locales/langs->app/_locales/langs/es.ts",
    source: "app/_locales/langs",
    target: "app/_locales/langs/es.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_locales->app/_locales/server.ts",
    source: "app/_locales",
    target: "app/_locales/server.ts",
    type: "smoothstep",
  },
  {
    id: "e:app->app/_queries",
    source: "app",
    target: "app/_queries",
    type: "smoothstep",
  },
  {
    id: "e:app/_queries->app/_queries/interviews.queries.ts",
    source: "app/_queries",
    target: "app/_queries/interviews.queries.ts",
    type: "smoothstep",
  },
  {
    id: "e:app->app/_store",
    source: "app",
    target: "app/_store",
    type: "smoothstep",
  },
  {
    id: "e:app/_store->app/_store/useSideNavMobile.ts",
    source: "app/_store",
    target: "app/_store/useSideNavMobile.ts",
    type: "smoothstep",
  },
  {
    id: "e:app->app/_styles",
    source: "app",
    target: "app/_styles",
    type: "smoothstep",
  },
  {
    id: "e:app/_styles->app/_styles/globals.app.css",
    source: "app/_styles",
    target: "app/_styles/globals.app.css",
    type: "smoothstep",
  },
  {
    id: "e:app/_styles->app/_styles/mdx.css",
    source: "app/_styles",
    target: "app/_styles/mdx.css",
    type: "smoothstep",
  },
  {
    id: "e:app/_styles->app/_styles/overrides",
    source: "app/_styles",
    target: "app/_styles/overrides",
    type: "smoothstep",
  },
  {
    id: "e:app/_styles/overrides->app/_styles/overrides/reactflow.css",
    source: "app/_styles/overrides",
    target: "app/_styles/overrides/reactflow.css",
    type: "smoothstep",
  },
  {
    id: "e:app/_styles->app/_styles/tailwindcss-animate.css",
    source: "app/_styles",
    target: "app/_styles/tailwindcss-animate.css",
    type: "smoothstep",
  },
  {
    id: "e:app->app/_types",
    source: "app",
    target: "app/_types",
    type: "smoothstep",
  },
  {
    id: "e:app/_types->app/_types/api.ts",
    source: "app/_types",
    target: "app/_types/api.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_types->app/_types/axios.d.ts",
    source: "app/_types",
    target: "app/_types/axios.d.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_types->app/_types/flowbuilder.ts",
    source: "app/_types",
    target: "app/_types/flowbuilder.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_types->app/_types/globals.d.ts",
    source: "app/_types",
    target: "app/_types/globals.d.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_types->app/_types/next-auth.d.ts",
    source: "app/_types",
    target: "app/_types/next-auth.d.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_types->app/_types/reset.d.ts",
    source: "app/_types",
    target: "app/_types/reset.d.ts",
    type: "smoothstep",
  },
  {
    id: "e:app->app/_utils",
    source: "app",
    target: "app/_utils",
    type: "smoothstep",
  },
  {
    id: "e:app/_utils->app/_utils/__tests__",
    source: "app/_utils",
    target: "app/_utils/__tests__",
    type: "smoothstep",
  },
  {
    id: "e:app/_utils/__tests__->app/_utils/__tests__/styles.test.ts",
    source: "app/_utils/__tests__",
    target: "app/_utils/__tests__/styles.test.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_utils->app/_utils/app.ts",
    source: "app/_utils",
    target: "app/_utils/app.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_utils->app/_utils/auth.ts",
    source: "app/_utils",
    target: "app/_utils/auth.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_utils->app/_utils/dom.ts",
    source: "app/_utils",
    target: "app/_utils/dom.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_utils->app/_utils/error",
    source: "app/_utils",
    target: "app/_utils/error",
    type: "smoothstep",
  },
  {
    id: "e:app/_utils->app/_utils/func.ts",
    source: "app/_utils",
    target: "app/_utils/func.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_utils->app/_utils/localStorage.ts",
    source: "app/_utils",
    target: "app/_utils/localStorage.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_utils->app/_utils/locale-utils",
    source: "app/_utils",
    target: "app/_utils/locale-utils",
    type: "smoothstep",
  },
  {
    id: "e:app/_utils/locale-utils->app/_utils/locale-utils/index.ts",
    source: "app/_utils/locale-utils",
    target: "app/_utils/locale-utils/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_utils/locale-utils->app/_utils/locale-utils/language-options.tsx",
    source: "app/_utils/locale-utils",
    target: "app/_utils/locale-utils/language-options.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_utils->app/_utils/queries.ts",
    source: "app/_utils",
    target: "app/_utils/queries.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_utils->app/_utils/sheet.ts",
    source: "app/_utils",
    target: "app/_utils/sheet.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_utils->app/_utils/shimmer.ts",
    source: "app/_utils",
    target: "app/_utils/shimmer.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_utils->app/_utils/string.ts",
    source: "app/_utils",
    target: "app/_utils/string.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_utils->app/_utils/styles.ts",
    source: "app/_utils",
    target: "app/_utils/styles.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_utils->app/_utils/zod.ts",
    source: "app/_utils",
    target: "app/_utils/zod.ts",
    type: "smoothstep",
  },
  {
    id: "e:app->app/api",
    source: "app",
    target: "app/api",
    type: "smoothstep",
  },
  {
    id: "e:app/api->app/api/_experiences",
    source: "app/api",
    target: "app/api/_experiences",
    type: "smoothstep",
  },
  {
    id: "e:app/api/_experiences->app/api/_experiences/[experienceId]",
    source: "app/api/_experiences",
    target: "app/api/_experiences/[experienceId]",
    type: "smoothstep",
  },
  {
    id: "e:app/api/_experiences/[experienceId]->app/api/_experiences/[experienceId]/route.ts",
    source: "app/api/_experiences/[experienceId]",
    target: "app/api/_experiences/[experienceId]/route.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/api/_experiences->app/api/_experiences/route.ts",
    source: "app/api/_experiences",
    target: "app/api/_experiences/route.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/api->app/api/_interviews",
    source: "app/api",
    target: "app/api/_interviews",
    type: "smoothstep",
  },
  {
    id: "e:app/api/_interviews->app/api/_interviews/[interviewId]",
    source: "app/api/_interviews",
    target: "app/api/_interviews/[interviewId]",
    type: "smoothstep",
  },
  {
    id: "e:app/api/_interviews/[interviewId]->app/api/_interviews/[interviewId]/route.ts",
    source: "app/api/_interviews/[interviewId]",
    target: "app/api/_interviews/[interviewId]/route.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/api/_interviews->app/api/_interviews/route.ts",
    source: "app/api/_interviews",
    target: "app/api/_interviews/route.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/api->app/api/_shared",
    source: "app/api",
    target: "app/api/_shared",
    type: "smoothstep",
  },
  {
    id: "e:app/api/_shared->app/api/_shared/open",
    source: "app/api/_shared",
    target: "app/api/_shared/open",
    type: "smoothstep",
  },
  {
    id: "e:app/api/_shared/open->app/api/_shared/open/route.ts",
    source: "app/api/_shared/open",
    target: "app/api/_shared/open/route.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/api->app/api/_sheet",
    source: "app/api",
    target: "app/api/_sheet",
    type: "smoothstep",
  },
  {
    id: "e:app/api/_sheet->app/api/_sheet/link",
    source: "app/api/_sheet",
    target: "app/api/_sheet/link",
    type: "smoothstep",
  },
  {
    id: "e:app/api/_sheet/link->app/api/_sheet/link/route.ts",
    source: "app/api/_sheet/link",
    target: "app/api/_sheet/link/route.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/api/_sheet->app/api/_sheet/new",
    source: "app/api/_sheet",
    target: "app/api/_sheet/new",
    type: "smoothstep",
  },
  {
    id: "e:app/api/_sheet/new->app/api/_sheet/new/route.ts",
    source: "app/api/_sheet/new",
    target: "app/api/_sheet/new/route.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/api->app/api/auth",
    source: "app/api",
    target: "app/api/auth",
    type: "smoothstep",
  },
  {
    id: "e:app->app/global-error.tsx",
    source: "app",
    target: "app/global-error.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app->app/robots.ts",
    source: "app",
    target: "app/robots.ts",
    type: "smoothstep",
  },
  {
    id: "e:app->app/sitemap.ts",
    source: "app",
    target: "app/sitemap.ts",
    type: "smoothstep",
  },
  {
    id: "e:.->assets",
    source: ".",
    target: "assets",
    type: "smoothstep",
  },
  {
    id: "e:assets->assets/_locales",
    source: "assets",
    target: "assets/_locales",
    type: "smoothstep",
  },
  {
    id: "e:assets/_locales->assets/_locales/en",
    source: "assets/_locales",
    target: "assets/_locales/en",
    type: "smoothstep",
  },
  {
    id: "e:assets/_locales/en->assets/_locales/en/messages.json",
    source: "assets/_locales/en",
    target: "assets/_locales/en/messages.json",
    type: "smoothstep",
  },
  {
    id: "e:assets/_locales->assets/_locales/es",
    source: "assets/_locales",
    target: "assets/_locales/es",
    type: "smoothstep",
  },
  {
    id: "e:assets/_locales/es->assets/_locales/es/messages.json",
    source: "assets/_locales/es",
    target: "assets/_locales/es/messages.json",
    type: "smoothstep",
  },
  {
    id: "e:assets->assets/assets.INFO.md",
    source: "assets",
    target: "assets/assets.INFO.md",
    type: "smoothstep",
  },
  {
    id: "e:assets->assets/icon.png",
    source: "assets",
    target: "assets/icon.png",
    type: "smoothstep",
  },
  {
    id: "e:.->common",
    source: ".",
    target: "common",
    type: "smoothstep",
  },
  {
    id: "e:common->common/.DS_Store",
    source: "common",
    target: "common/.DS_Store",
    type: "smoothstep",
  },
  {
    id: "e:common->common/components",
    source: "common",
    target: "common/components",
    type: "smoothstep",
  },
  {
    id: "e:common/components->common/components/.DS_Store",
    source: "common/components",
    target: "common/components/.DS_Store",
    type: "smoothstep",
  },
  {
    id: "e:common/components->common/components/ds",
    source: "common/components",
    target: "common/components/ds",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds->common/components/ds/Accordion",
    source: "common/components/ds",
    target: "common/components/ds/Accordion",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Accordion->common/components/ds/Accordion/Accordion.tsx",
    source: "common/components/ds/Accordion",
    target: "common/components/ds/Accordion/Accordion.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Accordion->common/components/ds/Accordion/accordion.stories.tsx",
    source: "common/components/ds/Accordion",
    target: "common/components/ds/Accordion/accordion.stories.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Accordion->common/components/ds/Accordion/index.ts",
    source: "common/components/ds/Accordion",
    target: "common/components/ds/Accordion/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds->common/components/ds/Avatar",
    source: "common/components/ds",
    target: "common/components/ds/Avatar",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Avatar->common/components/ds/Avatar/Avatar.tsx",
    source: "common/components/ds/Avatar",
    target: "common/components/ds/Avatar/Avatar.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Avatar->common/components/ds/Avatar/avatar.stories.tsx",
    source: "common/components/ds/Avatar",
    target: "common/components/ds/Avatar/avatar.stories.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Avatar->common/components/ds/Avatar/avatar.utils.ts",
    source: "common/components/ds/Avatar",
    target: "common/components/ds/Avatar/avatar.utils.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Avatar->common/components/ds/Avatar/index.ts",
    source: "common/components/ds/Avatar",
    target: "common/components/ds/Avatar/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds->common/components/ds/Badge",
    source: "common/components/ds",
    target: "common/components/ds/Badge",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Badge->common/components/ds/Badge/Badge.tsx",
    source: "common/components/ds/Badge",
    target: "common/components/ds/Badge/Badge.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Badge->common/components/ds/Badge/badge.utils.ts",
    source: "common/components/ds/Badge",
    target: "common/components/ds/Badge/badge.utils.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Badge->common/components/ds/Badge/index.ts",
    source: "common/components/ds/Badge",
    target: "common/components/ds/Badge/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds->common/components/ds/BarLoader",
    source: "common/components/ds",
    target: "common/components/ds/BarLoader",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/BarLoader->common/components/ds/BarLoader/BarLoader.tsx",
    source: "common/components/ds/BarLoader",
    target: "common/components/ds/BarLoader/BarLoader.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/BarLoader->common/components/ds/BarLoader/index.ts",
    source: "common/components/ds/BarLoader",
    target: "common/components/ds/BarLoader/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds->common/components/ds/BottomNavigation",
    source: "common/components/ds",
    target: "common/components/ds/BottomNavigation",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/BottomNavigation->common/components/ds/BottomNavigation/BottomNavigation.tsx",
    source: "common/components/ds/BottomNavigation",
    target: "common/components/ds/BottomNavigation/BottomNavigation.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/BottomNavigation->common/components/ds/BottomNavigation/bottomNavigation.types.ts",
    source: "common/components/ds/BottomNavigation",
    target: "common/components/ds/BottomNavigation/bottomNavigation.types.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/BottomNavigation->common/components/ds/BottomNavigation/index.ts",
    source: "common/components/ds/BottomNavigation",
    target: "common/components/ds/BottomNavigation/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds->common/components/ds/Breadcrumbs",
    source: "common/components/ds",
    target: "common/components/ds/Breadcrumbs",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Breadcrumbs->common/components/ds/Breadcrumbs/Breadcrumbs.tsx",
    source: "common/components/ds/Breadcrumbs",
    target: "common/components/ds/Breadcrumbs/Breadcrumbs.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Breadcrumbs->common/components/ds/Breadcrumbs/index.tsx",
    source: "common/components/ds/Breadcrumbs",
    target: "common/components/ds/Breadcrumbs/index.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds->common/components/ds/Button",
    source: "common/components/ds",
    target: "common/components/ds/Button",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Button->common/components/ds/Button/Button.tsx",
    source: "common/components/ds/Button",
    target: "common/components/ds/Button/Button.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Button->common/components/ds/Button/button.stories.tsx",
    source: "common/components/ds/Button",
    target: "common/components/ds/Button/button.stories.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Button->common/components/ds/Button/button.utils.ts",
    source: "common/components/ds/Button",
    target: "common/components/ds/Button/button.utils.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Button->common/components/ds/Button/index.tsx",
    source: "common/components/ds/Button",
    target: "common/components/ds/Button/index.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds->common/components/ds/Calendar",
    source: "common/components/ds",
    target: "common/components/ds/Calendar",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Calendar->common/components/ds/Calendar/Calendar.tsx",
    source: "common/components/ds/Calendar",
    target: "common/components/ds/Calendar/Calendar.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Calendar->common/components/ds/Calendar/index.ts",
    source: "common/components/ds/Calendar",
    target: "common/components/ds/Calendar/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds->common/components/ds/Card",
    source: "common/components/ds",
    target: "common/components/ds/Card",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Card->common/components/ds/Card/Card.tsx",
    source: "common/components/ds/Card",
    target: "common/components/ds/Card/Card.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Card->common/components/ds/Card/card.types.ts",
    source: "common/components/ds/Card",
    target: "common/components/ds/Card/card.types.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Card->common/components/ds/Card/index.tsx",
    source: "common/components/ds/Card",
    target: "common/components/ds/Card/index.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds->common/components/ds/Checkbox",
    source: "common/components/ds",
    target: "common/components/ds/Checkbox",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Checkbox->common/components/ds/Checkbox/Checkbox.tsx",
    source: "common/components/ds/Checkbox",
    target: "common/components/ds/Checkbox/Checkbox.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Checkbox->common/components/ds/Checkbox/checkbox.stories.tsx",
    source: "common/components/ds/Checkbox",
    target: "common/components/ds/Checkbox/checkbox.stories.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Checkbox->common/components/ds/Checkbox/checkbox.utils.ts",
    source: "common/components/ds/Checkbox",
    target: "common/components/ds/Checkbox/checkbox.utils.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Checkbox->common/components/ds/Checkbox/index.ts",
    source: "common/components/ds/Checkbox",
    target: "common/components/ds/Checkbox/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds->common/components/ds/DatePicker",
    source: "common/components/ds",
    target: "common/components/ds/DatePicker",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/DatePicker->common/components/ds/DatePicker/DatePicker.test.tsx",
    source: "common/components/ds/DatePicker",
    target: "common/components/ds/DatePicker/DatePicker.test.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/DatePicker->common/components/ds/DatePicker/DatePicker.tsx",
    source: "common/components/ds/DatePicker",
    target: "common/components/ds/DatePicker/DatePicker.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/DatePicker->common/components/ds/DatePicker/DatePickerInput.tsx",
    source: "common/components/ds/DatePicker",
    target: "common/components/ds/DatePicker/DatePickerInput.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/DatePicker->common/components/ds/DatePicker/datePicker.types.ts",
    source: "common/components/ds/DatePicker",
    target: "common/components/ds/DatePicker/datePicker.types.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/DatePicker->common/components/ds/DatePicker/datePickerInput.test.tsx",
    source: "common/components/ds/DatePicker",
    target: "common/components/ds/DatePicker/datePickerInput.test.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/DatePicker->common/components/ds/DatePicker/index.ts",
    source: "common/components/ds/DatePicker",
    target: "common/components/ds/DatePicker/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds->common/components/ds/Dialog",
    source: "common/components/ds",
    target: "common/components/ds/Dialog",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Dialog->common/components/ds/Dialog/Dialog.tsx",
    source: "common/components/ds/Dialog",
    target: "common/components/ds/Dialog/Dialog.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Dialog->common/components/ds/Dialog/index.ts",
    source: "common/components/ds/Dialog",
    target: "common/components/ds/Dialog/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds->common/components/ds/Drawer",
    source: "common/components/ds",
    target: "common/components/ds/Drawer",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Drawer->common/components/ds/Drawer/Drawer.tsx",
    source: "common/components/ds/Drawer",
    target: "common/components/ds/Drawer/Drawer.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Drawer->common/components/ds/Drawer/drawer.stories.tsx",
    source: "common/components/ds/Drawer",
    target: "common/components/ds/Drawer/drawer.stories.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Drawer->common/components/ds/Drawer/index.ts",
    source: "common/components/ds/Drawer",
    target: "common/components/ds/Drawer/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds->common/components/ds/DropdownMenu",
    source: "common/components/ds",
    target: "common/components/ds/DropdownMenu",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/DropdownMenu->common/components/ds/DropdownMenu/DropdownMenu.tsx",
    source: "common/components/ds/DropdownMenu",
    target: "common/components/ds/DropdownMenu/DropdownMenu.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/DropdownMenu->common/components/ds/DropdownMenu/dropdownMenu.stories.tsx",
    source: "common/components/ds/DropdownMenu",
    target: "common/components/ds/DropdownMenu/dropdownMenu.stories.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/DropdownMenu->common/components/ds/DropdownMenu/index.tsx",
    source: "common/components/ds/DropdownMenu",
    target: "common/components/ds/DropdownMenu/index.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds->common/components/ds/Emoji",
    source: "common/components/ds",
    target: "common/components/ds/Emoji",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Emoji->common/components/ds/Emoji/Emoji.tsx",
    source: "common/components/ds/Emoji",
    target: "common/components/ds/Emoji/Emoji.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Emoji->common/components/ds/Emoji/index.ts",
    source: "common/components/ds/Emoji",
    target: "common/components/ds/Emoji/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds->common/components/ds/FileUpload",
    source: "common/components/ds",
    target: "common/components/ds/FileUpload",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/FileUpload->common/components/ds/FileUpload/FileUpload.tsx",
    source: "common/components/ds/FileUpload",
    target: "common/components/ds/FileUpload/FileUpload.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/FileUpload->common/components/ds/FileUpload/fileUpload.types.ts",
    source: "common/components/ds/FileUpload",
    target: "common/components/ds/FileUpload/fileUpload.types.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/FileUpload->common/components/ds/FileUpload/index.ts",
    source: "common/components/ds/FileUpload",
    target: "common/components/ds/FileUpload/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds->common/components/ds/Flex",
    source: "common/components/ds",
    target: "common/components/ds/Flex",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Flex->common/components/ds/Flex/Flex.tsx",
    source: "common/components/ds/Flex",
    target: "common/components/ds/Flex/Flex.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Flex->common/components/ds/Flex/flex.utils.ts",
    source: "common/components/ds/Flex",
    target: "common/components/ds/Flex/flex.utils.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Flex->common/components/ds/Flex/index.ts",
    source: "common/components/ds/Flex",
    target: "common/components/ds/Flex/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds->common/components/ds/FormField",
    source: "common/components/ds",
    target: "common/components/ds/FormField",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/FormField->common/components/ds/FormField/FormField.tsx",
    source: "common/components/ds/FormField",
    target: "common/components/ds/FormField/FormField.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/FormField->common/components/ds/FormField/FormFieldCheckbox.tsx",
    source: "common/components/ds/FormField",
    target: "common/components/ds/FormField/FormFieldCheckbox.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/FormField->common/components/ds/FormField/FormFieldDatePicker.tsx",
    source: "common/components/ds/FormField",
    target: "common/components/ds/FormField/FormFieldDatePicker.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/FormField->common/components/ds/FormField/FormFieldDatePickerInput.tsx",
    source: "common/components/ds/FormField",
    target: "common/components/ds/FormField/FormFieldDatePickerInput.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/FormField->common/components/ds/FormField/FormFieldFileUpload.tsx",
    source: "common/components/ds/FormField",
    target: "common/components/ds/FormField/FormFieldFileUpload.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/FormField->common/components/ds/FormField/FormFieldInput.tsx",
    source: "common/components/ds/FormField",
    target: "common/components/ds/FormField/FormFieldInput.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/FormField->common/components/ds/FormField/FormFieldRTBaseEditor.tsx",
    source: "common/components/ds/FormField",
    target: "common/components/ds/FormField/FormFieldRTBaseEditor.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/FormField->common/components/ds/FormField/FormFieldSelect.tsx",
    source: "common/components/ds/FormField",
    target: "common/components/ds/FormField/FormFieldSelect.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/FormField->common/components/ds/FormField/FormFieldTextarea.tsx",
    source: "common/components/ds/FormField",
    target: "common/components/ds/FormField/FormFieldTextarea.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/FormField->common/components/ds/FormField/formField.utils.tsx",
    source: "common/components/ds/FormField",
    target: "common/components/ds/FormField/formField.utils.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/FormField->common/components/ds/FormField/index.ts",
    source: "common/components/ds/FormField",
    target: "common/components/ds/FormField/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds->common/components/ds/Icons",
    source: "common/components/ds",
    target: "common/components/ds/Icons",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Icons->common/components/ds/Icons/Icons.tsx",
    source: "common/components/ds/Icons",
    target: "common/components/ds/Icons/Icons.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Icons->common/components/ds/Icons/index.tsx",
    source: "common/components/ds/Icons",
    target: "common/components/ds/Icons/index.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds->common/components/ds/Indicator",
    source: "common/components/ds",
    target: "common/components/ds/Indicator",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Indicator->common/components/ds/Indicator/Indicator.tsx",
    source: "common/components/ds/Indicator",
    target: "common/components/ds/Indicator/Indicator.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Indicator->common/components/ds/Indicator/index.ts",
    source: "common/components/ds/Indicator",
    target: "common/components/ds/Indicator/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds->common/components/ds/Input",
    source: "common/components/ds",
    target: "common/components/ds/Input",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Input->common/components/ds/Input/Input.tsx",
    source: "common/components/ds/Input",
    target: "common/components/ds/Input/Input.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Input->common/components/ds/Input/index.tsx",
    source: "common/components/ds/Input",
    target: "common/components/ds/Input/index.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Input->common/components/ds/Input/input.test.tsx",
    source: "common/components/ds/Input",
    target: "common/components/ds/Input/input.test.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Input->common/components/ds/Input/input.utils.ts",
    source: "common/components/ds/Input",
    target: "common/components/ds/Input/input.utils.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds->common/components/ds/List",
    source: "common/components/ds",
    target: "common/components/ds/List",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/List->common/components/ds/List/List.tsx",
    source: "common/components/ds/List",
    target: "common/components/ds/List/List.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/List->common/components/ds/List/index.ts",
    source: "common/components/ds/List",
    target: "common/components/ds/List/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds->common/components/ds/Menu",
    source: "common/components/ds",
    target: "common/components/ds/Menu",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Menu->common/components/ds/Menu/Menu.tsx",
    source: "common/components/ds/Menu",
    target: "common/components/ds/Menu/Menu.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Menu->common/components/ds/Menu/index.ts",
    source: "common/components/ds/Menu",
    target: "common/components/ds/Menu/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds->common/components/ds/Popover",
    source: "common/components/ds",
    target: "common/components/ds/Popover",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Popover->common/components/ds/Popover/Popover.tsx",
    source: "common/components/ds/Popover",
    target: "common/components/ds/Popover/Popover.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Popover->common/components/ds/Popover/index.ts",
    source: "common/components/ds/Popover",
    target: "common/components/ds/Popover/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds->common/components/ds/README.md",
    source: "common/components/ds",
    target: "common/components/ds/README.md",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds->common/components/ds/ScrollArea",
    source: "common/components/ds",
    target: "common/components/ds/ScrollArea",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/ScrollArea->common/components/ds/ScrollArea/ScrollArea.tsx",
    source: "common/components/ds/ScrollArea",
    target: "common/components/ds/ScrollArea/ScrollArea.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/ScrollArea->common/components/ds/ScrollArea/index.ts",
    source: "common/components/ds/ScrollArea",
    target: "common/components/ds/ScrollArea/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds->common/components/ds/Select",
    source: "common/components/ds",
    target: "common/components/ds/Select",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Select->common/components/ds/Select/Select.tsx",
    source: "common/components/ds/Select",
    target: "common/components/ds/Select/Select.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Select->common/components/ds/Select/index.ts",
    source: "common/components/ds/Select",
    target: "common/components/ds/Select/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Select->common/components/ds/Select/select.utils.ts",
    source: "common/components/ds/Select",
    target: "common/components/ds/Select/select.utils.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds->common/components/ds/Separator",
    source: "common/components/ds",
    target: "common/components/ds/Separator",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Separator->common/components/ds/Separator/Separator.tsx",
    source: "common/components/ds/Separator",
    target: "common/components/ds/Separator/Separator.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Separator->common/components/ds/Separator/index.ts",
    source: "common/components/ds/Separator",
    target: "common/components/ds/Separator/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Separator->common/components/ds/Separator/separator.stories.tsx",
    source: "common/components/ds/Separator",
    target: "common/components/ds/Separator/separator.stories.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds->common/components/ds/Sheet",
    source: "common/components/ds",
    target: "common/components/ds/Sheet",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Sheet->common/components/ds/Sheet/Sheet.tsx",
    source: "common/components/ds/Sheet",
    target: "common/components/ds/Sheet/Sheet.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Sheet->common/components/ds/Sheet/index.ts",
    source: "common/components/ds/Sheet",
    target: "common/components/ds/Sheet/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds->common/components/ds/Skeleton",
    source: "common/components/ds",
    target: "common/components/ds/Skeleton",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Skeleton->common/components/ds/Skeleton/Skeleton.tsx",
    source: "common/components/ds/Skeleton",
    target: "common/components/ds/Skeleton/Skeleton.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Skeleton->common/components/ds/Skeleton/index.ts",
    source: "common/components/ds/Skeleton",
    target: "common/components/ds/Skeleton/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Skeleton->common/components/ds/Skeleton/skeleton.stories.tsx",
    source: "common/components/ds/Skeleton",
    target: "common/components/ds/Skeleton/skeleton.stories.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds->common/components/ds/Table",
    source: "common/components/ds",
    target: "common/components/ds/Table",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Table->common/components/ds/Table/Table.tsx",
    source: "common/components/ds/Table",
    target: "common/components/ds/Table/Table.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Table->common/components/ds/Table/index.ts",
    source: "common/components/ds/Table",
    target: "common/components/ds/Table/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Table->common/components/ds/Table/table.stories.tsx",
    source: "common/components/ds/Table",
    target: "common/components/ds/Table/table.stories.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Table->common/components/ds/Table/table.utils.ts",
    source: "common/components/ds/Table",
    target: "common/components/ds/Table/table.utils.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds->common/components/ds/Textarea",
    source: "common/components/ds",
    target: "common/components/ds/Textarea",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Textarea->common/components/ds/Textarea/Textarea.tsx",
    source: "common/components/ds/Textarea",
    target: "common/components/ds/Textarea/Textarea.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Textarea->common/components/ds/Textarea/index.tsx",
    source: "common/components/ds/Textarea",
    target: "common/components/ds/Textarea/index.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Textarea->common/components/ds/Textarea/textarea.types.ts",
    source: "common/components/ds/Textarea",
    target: "common/components/ds/Textarea/textarea.types.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds->common/components/ds/Toggle",
    source: "common/components/ds",
    target: "common/components/ds/Toggle",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Toggle->common/components/ds/Toggle/Toggle.tsx",
    source: "common/components/ds/Toggle",
    target: "common/components/ds/Toggle/Toggle.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Toggle->common/components/ds/Toggle/index.ts",
    source: "common/components/ds/Toggle",
    target: "common/components/ds/Toggle/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Toggle->common/components/ds/Toggle/toggle.stories.tsx",
    source: "common/components/ds/Toggle",
    target: "common/components/ds/Toggle/toggle.stories.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds->common/components/ds/Toolbar",
    source: "common/components/ds",
    target: "common/components/ds/Toolbar",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Toolbar->common/components/ds/Toolbar/Toolbar.tsx",
    source: "common/components/ds/Toolbar",
    target: "common/components/ds/Toolbar/Toolbar.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Toolbar->common/components/ds/Toolbar/index.ts",
    source: "common/components/ds/Toolbar",
    target: "common/components/ds/Toolbar/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds->common/components/ds/Tooltip",
    source: "common/components/ds",
    target: "common/components/ds/Tooltip",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Tooltip->common/components/ds/Tooltip/Tooltip.tsx",
    source: "common/components/ds/Tooltip",
    target: "common/components/ds/Tooltip/Tooltip.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Tooltip->common/components/ds/Tooltip/index.ts",
    source: "common/components/ds/Tooltip",
    target: "common/components/ds/Tooltip/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Tooltip->common/components/ds/Tooltip/tooltip.stories.tsx",
    source: "common/components/ds/Tooltip",
    target: "common/components/ds/Tooltip/tooltip.stories.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Tooltip->common/components/ds/Tooltip/tooltip.utils.ts",
    source: "common/components/ds/Tooltip",
    target: "common/components/ds/Tooltip/tooltip.utils.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds->common/components/ds/Typography",
    source: "common/components/ds",
    target: "common/components/ds/Typography",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Typography->common/components/ds/Typography/Typography.tsx",
    source: "common/components/ds/Typography",
    target: "common/components/ds/Typography/Typography.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Typography->common/components/ds/Typography/index.ts",
    source: "common/components/ds/Typography",
    target: "common/components/ds/Typography/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/Typography->common/components/ds/Typography/typography.utils.ts",
    source: "common/components/ds/Typography",
    target: "common/components/ds/Typography/typography.utils.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds->common/components/ds/VisuallyHidden",
    source: "common/components/ds",
    target: "common/components/ds/VisuallyHidden",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/VisuallyHidden->common/components/ds/VisuallyHidden/VisuallyHidden.tsx",
    source: "common/components/ds/VisuallyHidden",
    target: "common/components/ds/VisuallyHidden/VisuallyHidden.tsx",
    type: "smoothstep",
  },
  {
    id: "e:common/components/ds/VisuallyHidden->common/components/ds/VisuallyHidden/index.ts",
    source: "common/components/ds/VisuallyHidden",
    target: "common/components/ds/VisuallyHidden/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:common->common/lib",
    source: "common",
    target: "common/lib",
    type: "smoothstep",
  },
  {
    id: "e:common/lib->common/lib/api-response.test.ts",
    source: "common/lib",
    target: "common/lib/api-response.test.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/lib->common/lib/api-response.ts",
    source: "common/lib",
    target: "common/lib/api-response.ts",
    type: "smoothstep",
  },
  {
    id: "e:common->common/styles",
    source: "common",
    target: "common/styles",
    type: "smoothstep",
  },
  {
    id: "e:common/styles->common/styles/.DS_Store",
    source: "common/styles",
    target: "common/styles/.DS_Store",
    type: "smoothstep",
  },
  {
    id: "e:common/styles->common/styles/overrides",
    source: "common/styles",
    target: "common/styles/overrides",
    type: "smoothstep",
  },
  {
    id: "e:common/styles/overrides->common/styles/overrides/daisyui.css",
    source: "common/styles/overrides",
    target: "common/styles/overrides/daisyui.css",
    type: "smoothstep",
  },
  {
    id: "e:common->common/utils",
    source: "common",
    target: "common/utils",
    type: "smoothstep",
  },
  {
    id: "e:common/utils->common/utils/.DS_Store",
    source: "common/utils",
    target: "common/utils/.DS_Store",
    type: "smoothstep",
  },
  {
    id: "e:common/utils->common/utils/env.ts",
    source: "common/utils",
    target: "common/utils/env.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/utils->common/utils/logs.ts",
    source: "common/utils",
    target: "common/utils/logs.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/utils->common/utils/routes.ts",
    source: "common/utils",
    target: "common/utils/routes.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/utils->common/utils/tailwind",
    source: "common/utils",
    target: "common/utils/tailwind",
    type: "smoothstep",
  },
  {
    id: "e:common/utils/tailwind->common/utils/tailwind/plugins.ts",
    source: "common/utils/tailwind",
    target: "common/utils/tailwind/plugins.ts",
    type: "smoothstep",
  },
  {
    id: "e:common/utils/tailwind->common/utils/tailwind/theme.ts",
    source: "common/utils/tailwind",
    target: "common/utils/tailwind/theme.ts",
    type: "smoothstep",
  },
  {
    id: "e:.->docs",
    source: ".",
    target: "docs",
    type: "smoothstep",
  },
  {
    id: "e:docs->docs/README.md",
    source: "docs",
    target: "docs/README.md",
    type: "smoothstep",
  },
  {
    id: "e:docs->docs/architecture",
    source: "docs",
    target: "docs/architecture",
    type: "smoothstep",
  },
  {
    id: "e:docs/architecture->docs/architecture/README.md",
    source: "docs/architecture",
    target: "docs/architecture/README.md",
    type: "smoothstep",
  },
  {
    id: "e:docs->docs/bugs",
    source: "docs",
    target: "docs/bugs",
    type: "smoothstep",
  },
  {
    id: "e:docs/bugs->docs/bugs/README.md",
    source: "docs/bugs",
    target: "docs/bugs/README.md",
    type: "smoothstep",
  },
  {
    id: "e:docs/bugs->docs/bugs/robots-middleware.md",
    source: "docs/bugs",
    target: "docs/bugs/robots-middleware.md",
    type: "smoothstep",
  },
  {
    id: "e:docs/bugs->docs/bugs/typography-safelist.md",
    source: "docs/bugs",
    target: "docs/bugs/typography-safelist.md",
    type: "smoothstep",
  },
  {
    id: "e:docs->docs/guides",
    source: "docs",
    target: "docs/guides",
    type: "smoothstep",
  },
  {
    id: "e:docs/guides->docs/guides/README.md",
    source: "docs/guides",
    target: "docs/guides/README.md",
    type: "smoothstep",
  },
  {
    id: "e:docs->docs/learnings",
    source: "docs",
    target: "docs/learnings",
    type: "smoothstep",
  },
  {
    id: "e:docs/learnings->docs/learnings/README.md",
    source: "docs/learnings",
    target: "docs/learnings/README.md",
    type: "smoothstep",
  },
  {
    id: "e:.->instrumentation.ts",
    source: ".",
    target: "instrumentation.ts",
    type: "smoothstep",
  },
  {
    id: "e:.->knip-output.md",
    source: ".",
    target: "knip-output.md",
    type: "smoothstep",
  },
  {
    id: "e:.->knip.ts",
    source: ".",
    target: "knip.ts",
    type: "smoothstep",
  },
  {
    id: "e:.->middleware.tsx",
    source: ".",
    target: "middleware.tsx",
    type: "smoothstep",
  },
  {
    id: "e:.->next-env.d.ts",
    source: ".",
    target: "next-env.d.ts",
    type: "smoothstep",
  },
  {
    id: "e:.->package.json",
    source: ".",
    target: "package.json",
    type: "smoothstep",
  },
  {
    id: "e:.->prisma",
    source: ".",
    target: "prisma",
    type: "smoothstep",
  },
  {
    id: "e:prisma->prisma/schema.prisma",
    source: "prisma",
    target: "prisma/schema.prisma",
    type: "smoothstep",
  },
  {
    id: "e:.->public",
    source: ".",
    target: "public",
    type: "smoothstep",
  },
  {
    id: "e:public->public/favicon.ico",
    source: "public",
    target: "public/favicon.ico",
    type: "smoothstep",
  },
  {
    id: "e:public->public/images",
    source: "public",
    target: "public/images",
    type: "smoothstep",
  },
  {
    id: "e:public/images->public/images/about",
    source: "public/images",
    target: "public/images/about",
    type: "smoothstep",
  },
  {
    id: "e:public/images->public/images/app-architecture",
    source: "public/images",
    target: "public/images/app-architecture",
    type: "smoothstep",
  },
  {
    id: "e:public/images/app-architecture->public/images/app-architecture/experiences.png",
    source: "public/images/app-architecture",
    target: "public/images/app-architecture/experiences.png",
    type: "smoothstep",
  },
  {
    id: "e:public/images/app-architecture->public/images/app-architecture/sign-in-flow.png",
    source: "public/images/app-architecture",
    target: "public/images/app-architecture/sign-in-flow.png",
    type: "smoothstep",
  },
  {
    id: "e:public/images->public/images/blogs",
    source: "public/images",
    target: "public/images/blogs",
    type: "smoothstep",
  },
  {
    id: "e:public/images/blogs->public/images/blogs/scalable-react",
    source: "public/images/blogs",
    target: "public/images/blogs/scalable-react",
    type: "smoothstep",
  },
  {
    id: "e:public/images/blogs/scalable-react->public/images/blogs/scalable-react/css-layouting.png",
    source: "public/images/blogs/scalable-react",
    target: "public/images/blogs/scalable-react/css-layouting.png",
    type: "smoothstep",
  },
  {
    id: "e:public/images/blogs/scalable-react->public/images/blogs/scalable-react/scalable-react.jpg",
    source: "public/images/blogs/scalable-react",
    target: "public/images/blogs/scalable-react/scalable-react.jpg",
    type: "smoothstep",
  },
  {
    id: "e:public/images/blogs/scalable-react->public/images/blogs/scalable-react/use-enum.webp",
    source: "public/images/blogs/scalable-react",
    target: "public/images/blogs/scalable-react/use-enum.webp",
    type: "smoothstep",
  },
  {
    id: "e:public/images->public/images/blogs-categories",
    source: "public/images",
    target: "public/images/blogs-categories",
    type: "smoothstep",
  },
  {
    id: "e:public/images->public/images/content",
    source: "public/images",
    target: "public/images/content",
    type: "smoothstep",
  },
  {
    id: "e:public/images/content->public/images/content/authors",
    source: "public/images/content",
    target: "public/images/content/authors",
    type: "smoothstep",
  },
  {
    id: "e:public/images/content/authors->public/images/content/authors/hardik_badola.jpeg",
    source: "public/images/content/authors",
    target: "public/images/content/authors/hardik_badola.jpeg",
    type: "smoothstep",
  },
  {
    id: "e:public/images->public/images/flags",
    source: "public/images",
    target: "public/images/flags",
    type: "smoothstep",
  },
  {
    id: "e:public/images/flags->public/images/flags/english-uk.svg",
    source: "public/images/flags",
    target: "public/images/flags/english-uk.svg",
    type: "smoothstep",
  },
  {
    id: "e:public/images/flags->public/images/flags/espanol-esp.svg",
    source: "public/images/flags",
    target: "public/images/flags/espanol-esp.svg",
    type: "smoothstep",
  },
  {
    id: "e:public/images->public/images/illustrations",
    source: "public/images",
    target: "public/images/illustrations",
    type: "smoothstep",
  },
  {
    id: "e:public/images/illustrations->public/images/illustrations/under-construction.webp",
    source: "public/images/illustrations",
    target: "public/images/illustrations/under-construction.webp",
    type: "smoothstep",
  },
  {
    id: "e:public/images->public/images/logo",
    source: "public/images",
    target: "public/images/logo",
    type: "smoothstep",
  },
  {
    id: "e:public/images/logo->public/images/logo/aw-logo.png",
    source: "public/images/logo",
    target: "public/images/logo/aw-logo.png",
    type: "smoothstep",
  },
  {
    id: "e:public/images/logo->public/images/logo/aw-logo.svg",
    source: "public/images/logo",
    target: "public/images/logo/aw-logo.svg",
    type: "smoothstep",
  },
  {
    id: "e:public/images->public/images/seo",
    source: "public/images",
    target: "public/images/seo",
    type: "smoothstep",
  },
  {
    id: "e:public/images/seo->public/images/seo/base-opengraph-image.png",
    source: "public/images/seo",
    target: "public/images/seo/base-opengraph-image.png",
    type: "smoothstep",
  },
  {
    id: "e:public/images/seo->public/images/seo/base-twitter-image.png",
    source: "public/images/seo",
    target: "public/images/seo/base-twitter-image.png",
    type: "smoothstep",
  },
  {
    id: "e:public/images->public/images/technologies",
    source: "public/images",
    target: "public/images/technologies",
    type: "smoothstep",
  },
  {
    id: "e:public/images/technologies->public/images/technologies/contentlayer.png",
    source: "public/images/technologies",
    target: "public/images/technologies/contentlayer.png",
    type: "smoothstep",
  },
  {
    id: "e:public/images/technologies->public/images/technologies/daisyui.png",
    source: "public/images/technologies",
    target: "public/images/technologies/daisyui.png",
    type: "smoothstep",
  },
  {
    id: "e:public/images/technologies->public/images/technologies/dayjs.png",
    source: "public/images/technologies",
    target: "public/images/technologies/dayjs.png",
    type: "smoothstep",
  },
  {
    id: "e:public/images/technologies->public/images/technologies/eslint.svg",
    source: "public/images/technologies",
    target: "public/images/technologies/eslint.svg",
    type: "smoothstep",
  },
  {
    id: "e:public/images/technologies->public/images/technologies/knip.png",
    source: "public/images/technologies",
    target: "public/images/technologies/knip.png",
    type: "smoothstep",
  },
  {
    id: "e:public/images/technologies->public/images/technologies/lucide-icon.png",
    source: "public/images/technologies",
    target: "public/images/technologies/lucide-icon.png",
    type: "smoothstep",
  },
  {
    id: "e:public/images/technologies->public/images/technologies/next-international.webp",
    source: "public/images/technologies",
    target: "public/images/technologies/next-international.webp",
    type: "smoothstep",
  },
  {
    id: "e:public/images/technologies->public/images/technologies/nextjs.svg",
    source: "public/images/technologies",
    target: "public/images/technologies/nextjs.svg",
    type: "smoothstep",
  },
  {
    id: "e:public/images/technologies->public/images/technologies/prettier.svg",
    source: "public/images/technologies",
    target: "public/images/technologies/prettier.svg",
    type: "smoothstep",
  },
  {
    id: "e:public/images/technologies->public/images/technologies/radix-ui.svg",
    source: "public/images/technologies",
    target: "public/images/technologies/radix-ui.svg",
    type: "smoothstep",
  },
  {
    id: "e:public/images/technologies->public/images/technologies/react-testing-library.png",
    source: "public/images/technologies",
    target: "public/images/technologies/react-testing-library.png",
    type: "smoothstep",
  },
  {
    id: "e:public/images/technologies->public/images/technologies/react-wavify.gif",
    source: "public/images/technologies",
    target: "public/images/technologies/react-wavify.gif",
    type: "smoothstep",
  },
  {
    id: "e:public/images/technologies->public/images/technologies/react.svg",
    source: "public/images/technologies",
    target: "public/images/technologies/react.svg",
    type: "smoothstep",
  },
  {
    id: "e:public/images/technologies->public/images/technologies/reactflow.png",
    source: "public/images/technologies",
    target: "public/images/technologies/reactflow.png",
    type: "smoothstep",
  },
  {
    id: "e:public/images/technologies->public/images/technologies/sentry.svg",
    source: "public/images/technologies",
    target: "public/images/technologies/sentry.svg",
    type: "smoothstep",
  },
  {
    id: "e:public/images/technologies->public/images/technologies/storybook.svg",
    source: "public/images/technologies",
    target: "public/images/technologies/storybook.svg",
    type: "smoothstep",
  },
  {
    id: "e:public/images/technologies->public/images/technologies/stylelint.png",
    source: "public/images/technologies",
    target: "public/images/technologies/stylelint.png",
    type: "smoothstep",
  },
  {
    id: "e:public/images/technologies->public/images/technologies/tailwindcss.svg",
    source: "public/images/technologies",
    target: "public/images/technologies/tailwindcss.svg",
    type: "smoothstep",
  },
  {
    id: "e:public/images/technologies->public/images/technologies/typescript.svg",
    source: "public/images/technologies",
    target: "public/images/technologies/typescript.svg",
    type: "smoothstep",
  },
  {
    id: "e:public/images/technologies->public/images/technologies/vitest.svg",
    source: "public/images/technologies",
    target: "public/images/technologies/vitest.svg",
    type: "smoothstep",
  },
  {
    id: "e:public/images/technologies->public/images/technologies/zod.jpg",
    source: "public/images/technologies",
    target: "public/images/technologies/zod.jpg",
    type: "smoothstep",
  },
  {
    id: "e:public/images/technologies->public/images/technologies/zustand.svg",
    source: "public/images/technologies",
    target: "public/images/technologies/zustand.svg",
    type: "smoothstep",
  },
  {
    id: "e:.->scripts",
    source: ".",
    target: "scripts",
    type: "smoothstep",
  },
  {
    id: "e:scripts->scripts/createFolderStructure.ts",
    source: "scripts",
    target: "scripts/createFolderStructure.ts",
    type: "smoothstep",
  },
  {
    id: "e:scripts->scripts/renderLogs.js",
    source: "scripts",
    target: "scripts/renderLogs.js",
    type: "smoothstep",
  },
  {
    id: "e:.->setupTest.ts",
    source: ".",
    target: "setupTest.ts",
    type: "smoothstep",
  },
  {
    id: "e:.->yarn.lock",
    source: ".",
    target: "yarn.lock",
    type: "smoothstep",
  },
];
