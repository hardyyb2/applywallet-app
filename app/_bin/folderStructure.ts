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
    id: "app/(routes)/[locale]/(nav-layout)/about/app-structure",
    data: {
      name: "app-structure",
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
    id: "app/(routes)/[locale]/(nav-layout)/about/app-structure/DirectoryFlowBuilder",
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
    id: "app/(routes)/[locale]/(nav-layout)/about/app-structure/DirectoryFlowBuilder/DFBWrapper.tsx",
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
    id: "app/(routes)/[locale]/(nav-layout)/about/app-structure/DirectoryFlowBuilder/DirectoryFlowBuilder.tsx",
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
    id: "app/(routes)/[locale]/(nav-layout)/about/app-structure/DirectoryFlowBuilder/directoryFlowBuilder.utils.ts",
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
    id: "app/(routes)/[locale]/(nav-layout)/about/app-structure/DirectoryFlowBuilder/nodes",
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
    id: "app/(routes)/[locale]/(nav-layout)/about/app-structure/DirectoryFlowBuilder/nodes/CustomNode.tsx",
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
    id: "app/(routes)/[locale]/(nav-layout)/about/app-structure/DirectoryFlowBuilder/nodes/customNode.utils.ts",
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
    id: "app/(routes)/[locale]/(nav-layout)/about/app-structure/page.tsx",
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
    id: "e:app/(routes)/[locale]/(nav-layout)/about->app/(routes)/[locale]/(nav-layout)/about/app-structure",
    source: "app/(routes)/[locale]/(nav-layout)/about",
    target: "app/(routes)/[locale]/(nav-layout)/about/app-structure",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/about/app-structure->app/(routes)/[locale]/(nav-layout)/about/app-structure/DirectoryFlowBuilder",
    source: "app/(routes)/[locale]/(nav-layout)/about/app-structure",
    target:
      "app/(routes)/[locale]/(nav-layout)/about/app-structure/DirectoryFlowBuilder",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/about/app-structure/DirectoryFlowBuilder->app/(routes)/[locale]/(nav-layout)/about/app-structure/DirectoryFlowBuilder/DFBWrapper.tsx",
    source:
      "app/(routes)/[locale]/(nav-layout)/about/app-structure/DirectoryFlowBuilder",
    target:
      "app/(routes)/[locale]/(nav-layout)/about/app-structure/DirectoryFlowBuilder/DFBWrapper.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/about/app-structure/DirectoryFlowBuilder->app/(routes)/[locale]/(nav-layout)/about/app-structure/DirectoryFlowBuilder/DirectoryFlowBuilder.tsx",
    source:
      "app/(routes)/[locale]/(nav-layout)/about/app-structure/DirectoryFlowBuilder",
    target:
      "app/(routes)/[locale]/(nav-layout)/about/app-structure/DirectoryFlowBuilder/DirectoryFlowBuilder.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/about/app-structure/DirectoryFlowBuilder->app/(routes)/[locale]/(nav-layout)/about/app-structure/DirectoryFlowBuilder/directoryFlowBuilder.utils.ts",
    source:
      "app/(routes)/[locale]/(nav-layout)/about/app-structure/DirectoryFlowBuilder",
    target:
      "app/(routes)/[locale]/(nav-layout)/about/app-structure/DirectoryFlowBuilder/directoryFlowBuilder.utils.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/about/app-structure/DirectoryFlowBuilder->app/(routes)/[locale]/(nav-layout)/about/app-structure/DirectoryFlowBuilder/nodes",
    source:
      "app/(routes)/[locale]/(nav-layout)/about/app-structure/DirectoryFlowBuilder",
    target:
      "app/(routes)/[locale]/(nav-layout)/about/app-structure/DirectoryFlowBuilder/nodes",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/about/app-structure/DirectoryFlowBuilder/nodes->app/(routes)/[locale]/(nav-layout)/about/app-structure/DirectoryFlowBuilder/nodes/CustomNode.tsx",
    source:
      "app/(routes)/[locale]/(nav-layout)/about/app-structure/DirectoryFlowBuilder/nodes",
    target:
      "app/(routes)/[locale]/(nav-layout)/about/app-structure/DirectoryFlowBuilder/nodes/CustomNode.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/about/app-structure/DirectoryFlowBuilder/nodes->app/(routes)/[locale]/(nav-layout)/about/app-structure/DirectoryFlowBuilder/nodes/customNode.utils.ts",
    source:
      "app/(routes)/[locale]/(nav-layout)/about/app-structure/DirectoryFlowBuilder/nodes",
    target:
      "app/(routes)/[locale]/(nav-layout)/about/app-structure/DirectoryFlowBuilder/nodes/customNode.utils.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/about/app-structure->app/(routes)/[locale]/(nav-layout)/about/app-structure/page.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/about/app-structure",
    target: "app/(routes)/[locale]/(nav-layout)/about/app-structure/page.tsx",
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
    id: "e:app->app/api",
    source: "app",
    target: "app/api",
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
