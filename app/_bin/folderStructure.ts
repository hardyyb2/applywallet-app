import type { DrEdgeType, DrNodeType } from "@/types/flowbuilder";

export const nodes: DrNodeType[] = [
  {
    id: "app",
    data: {
      name: "app",
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
    id: "app/(routes)/[locale]/(auth)/_login",
    data: {
      name: "_login",
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
    id: "app/(routes)/[locale]/(auth)/_login/page.tsx",
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
    id: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/BlogCard/BlogCardMobile.tsx",
    data: {
      name: "BlogCardMobile.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/BlogCard/blogCard.module.scss",
    data: {
      name: "blogCard.module.scss",
      type: "file",
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
    id: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/BlogCardClient.tsx",
    data: {
      name: "BlogCardClient.tsx",
      type: "file",
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
    id: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]/BlogCardsWrapper.tsx",
    data: {
      name: "BlogCardsWrapper.tsx",
      type: "file",
      subType: "page",
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
    id: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]/BlogMetaInfo/blogMetaInfo.module.scss",
    data: {
      name: "blogMetaInfo.module.scss",
      type: "file",
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
    id: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/categories",
    data: {
      name: "categories",
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
    id: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/categories/BlogCategoryCard",
    data: {
      name: "BlogCategoryCard",
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
    id: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/categories/BlogCategoryCard/BlogCategoryCard.tsx",
    data: {
      name: "BlogCategoryCard.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/categories/BlogCategoryCardsWrapper.tsx",
    data: {
      name: "BlogCategoryCardsWrapper.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/categories/[...slug]",
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
    id: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/categories/[...slug]/page.tsx",
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
    id: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/categories/page.tsx",
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
    id: "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews",
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
    id: "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/AddEditInterviewForm.tsx",
    data: {
      name: "AddEditInterviewForm.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/InterviewActions",
    data: {
      name: "InterviewActions",
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
    id: "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/InterviewActions/InterviewActions.tsx",
    data: {
      name: "InterviewActions.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/InterviewsFilter.tsx",
    data: {
      name: "InterviewsFilter.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/InterviewsList.tsx",
    data: {
      name: "InterviewsList.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/InterviewsTable.tsx",
    data: {
      name: "InterviewsTable.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/add",
    data: {
      name: "add",
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
    id: "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/add/page.tsx",
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
    id: "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/edit",
    data: {
      name: "edit",
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
    id: "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/edit/[interviewId]",
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
    id: "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/edit/[interviewId]/error.tsx",
    data: {
      name: "error.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/edit/[interviewId]/page.tsx",
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
    id: "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/interview.utils.tsx",
    data: {
      name: "interview.utils.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/page.tsx",
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
    id: "app/(routes)/[locale]/(nav-layout)/_experiences",
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
    id: "app/(routes)/[locale]/(nav-layout)/_experiences/AddEditExperienceForm.tsx",
    data: {
      name: "AddEditExperienceForm.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceActions",
    data: {
      name: "ExperienceActions",
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
    id: "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceActions/ExperienceActions.tsx",
    data: {
      name: "ExperienceActions.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceActions/ExperienceSettingsModal",
    data: {
      name: "ExperienceSettingsModal",
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
    id: "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceActions/ExperienceSettingsModal/experienceSettingsModal.module.scss",
    data: {
      name: "experienceSettingsModal.module.scss",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceActions/index.ts",
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
    id: "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceCard",
    data: {
      name: "ExperienceCard",
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
    id: "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceCard/ExperienceCard.tsx",
    data: {
      name: "ExperienceCard.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceCard/ExperienceCardActions.tsx",
    data: {
      name: "ExperienceCardActions.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceCard/index.ts",
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
    id: "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceCardMini",
    data: {
      name: "ExperienceCardMini",
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
    id: "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceCardMini/ExperienceCardMini.tsx",
    data: {
      name: "ExperienceCardMini.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceList.tsx",
    data: {
      name: "ExperienceList.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceSettings",
    data: {
      name: "ExperienceSettings",
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
    id: "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceSettings/ESInformationSettings.tsx",
    data: {
      name: "ESInformationSettings.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceSettings/ExperienceSettings.tsx",
    data: {
      name: "ExperienceSettings.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceSettings/experienceSettings.types.ts",
    data: {
      name: "experienceSettings.types.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceSettings/index.ts",
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
    id: "app/(routes)/[locale]/(nav-layout)/_experiences/add",
    data: {
      name: "add",
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
    id: "app/(routes)/[locale]/(nav-layout)/_experiences/add/page.tsx",
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
    id: "app/(routes)/[locale]/(nav-layout)/_experiences/edit",
    data: {
      name: "edit",
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
    id: "app/(routes)/[locale]/(nav-layout)/_experiences/edit/[experienceId]",
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
    id: "app/(routes)/[locale]/(nav-layout)/_experiences/edit/[experienceId]/page.tsx",
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
    id: "app/(routes)/[locale]/(nav-layout)/_experiences/experience.utils.ts",
    data: {
      name: "experience.utils.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/_experiences/not-found.tsx",
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
    id: "app/(routes)/[locale]/(nav-layout)/_experiences/page.tsx",
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
    id: "app/(routes)/[locale]/(nav-layout)/_experiences/settings",
    data: {
      name: "settings",
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
    id: "app/(routes)/[locale]/(nav-layout)/_experiences/settings/page.tsx",
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
    id: "app/(routes)/[locale]/_link-sheet",
    data: {
      name: "_link-sheet",
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
    id: "app/(routes)/[locale]/_link-sheet/CreateNewSheetButton.tsx",
    data: {
      name: "CreateNewSheetButton.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/_link-sheet/LinkSheetInput.tsx",
    data: {
      name: "LinkSheetInput.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/_link-sheet/page.tsx",
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
    id: "app/(routes)/[locale]/_post-login",
    data: {
      name: "_post-login",
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
    id: "app/(routes)/[locale]/_post-login/loading.tsx",
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
    id: "app/(routes)/[locale]/_post-login/page.tsx",
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
    id: "app/(routes)/[locale]/_post-login/post-login.utils.ts",
    data: {
      name: "post-login.utils.ts",
      type: "file",
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
    id: "app/_components/dependent/GoogleAnalytics",
    data: {
      name: "GoogleAnalytics",
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
    id: "app/_components/dependent/GoogleAnalytics/GoogleAnalytics.tsx",
    data: {
      name: "GoogleAnalytics.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/GoogleAnalytics/index.ts",
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
    id: "app/_components/dependent/LocaleSwitcher/localeSwitcher.utils.ts",
    data: {
      name: "localeSwitcher.utils.ts",
      type: "file",
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
    id: "app/_hooks/useThemeColors.ts",
    data: {
      name: "useThemeColors.ts",
      type: "file",
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
    id: "app/_lib/__tests__/__snapshots__",
    data: {
      name: "__snapshots__",
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
    id: "app/_lib/gtag.ts",
    data: {
      name: "gtag.ts",
      type: "file",
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
    id: "app/_styles/overrides/toast.css",
    data: {
      name: "toast.css",
      type: "file",
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
    id: "app/_utils/locale-utils/i18n-config.ts",
    data: {
      name: "i18n-config.ts",
      type: "file",
      subType: "page",
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
    id: "app/api/auth/[...nextauth]",
    data: {
      name: "[...nextauth]",
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
    id: "app/api/auth/[...nextauth]/route.ts",
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
    id: "app/sentry-example-page",
    data: {
      name: "sentry-example-page",
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
];
export const edges: DrEdgeType[] = [
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
    id: "e:app/(routes)/[locale]/(auth)->app/(routes)/[locale]/(auth)/_login",
    source: "app/(routes)/[locale]/(auth)",
    target: "app/(routes)/[locale]/(auth)/_login",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(auth)/_login->app/(routes)/[locale]/(auth)/_login/page.tsx",
    source: "app/(routes)/[locale]/(auth)/_login",
    target: "app/(routes)/[locale]/(auth)/_login/page.tsx",
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
    id: "e:app/(routes)/[locale]/(nav-layout)/(docs)/blogs/BlogCard->app/(routes)/[locale]/(nav-layout)/(docs)/blogs/BlogCard/BlogCardMobile.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/BlogCard",
    target:
      "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/BlogCard/BlogCardMobile.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(docs)/blogs/BlogCard->app/(routes)/[locale]/(nav-layout)/(docs)/blogs/BlogCard/blogCard.module.scss",
    source: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/BlogCard",
    target:
      "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/BlogCard/blogCard.module.scss",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(docs)/blogs/BlogCard->app/(routes)/[locale]/(nav-layout)/(docs)/blogs/BlogCard/index.ts",
    source: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/BlogCard",
    target: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/BlogCard/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(docs)/blogs->app/(routes)/[locale]/(nav-layout)/(docs)/blogs/BlogCardClient.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs",
    target:
      "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/BlogCardClient.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(docs)/blogs->app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]",
    source: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs",
    target: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]->app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]/BlogCardsWrapper.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]",
    target:
      "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]/BlogCardsWrapper.tsx",
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
    id: "e:app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]/BlogMetaInfo->app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]/BlogMetaInfo/blogMetaInfo.module.scss",
    source:
      "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]/BlogMetaInfo",
    target:
      "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/[...slug]/BlogMetaInfo/blogMetaInfo.module.scss",
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
    id: "e:app/(routes)/[locale]/(nav-layout)/(docs)/blogs->app/(routes)/[locale]/(nav-layout)/(docs)/blogs/categories",
    source: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs",
    target: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/categories",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(docs)/blogs/categories->app/(routes)/[locale]/(nav-layout)/(docs)/blogs/categories/BlogCategoryCard",
    source: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/categories",
    target:
      "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/categories/BlogCategoryCard",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(docs)/blogs/categories/BlogCategoryCard->app/(routes)/[locale]/(nav-layout)/(docs)/blogs/categories/BlogCategoryCard/BlogCategoryCard.tsx",
    source:
      "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/categories/BlogCategoryCard",
    target:
      "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/categories/BlogCategoryCard/BlogCategoryCard.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(docs)/blogs/categories->app/(routes)/[locale]/(nav-layout)/(docs)/blogs/categories/BlogCategoryCardsWrapper.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/categories",
    target:
      "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/categories/BlogCategoryCardsWrapper.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(docs)/blogs/categories->app/(routes)/[locale]/(nav-layout)/(docs)/blogs/categories/[...slug]",
    source: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/categories",
    target:
      "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/categories/[...slug]",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(docs)/blogs/categories/[...slug]->app/(routes)/[locale]/(nav-layout)/(docs)/blogs/categories/[...slug]/page.tsx",
    source:
      "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/categories/[...slug]",
    target:
      "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/categories/[...slug]/page.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(docs)/blogs/categories->app/(routes)/[locale]/(nav-layout)/(docs)/blogs/categories/page.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/categories",
    target:
      "app/(routes)/[locale]/(nav-layout)/(docs)/blogs/categories/page.tsx",
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
    id: "e:app/(routes)/[locale]/(nav-layout)/(swr)->app/(routes)/[locale]/(nav-layout)/(swr)/_interviews",
    source: "app/(routes)/[locale]/(nav-layout)/(swr)",
    target: "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(swr)/_interviews->app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/AddEditInterviewForm.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews",
    target:
      "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/AddEditInterviewForm.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(swr)/_interviews->app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/InterviewActions",
    source: "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews",
    target:
      "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/InterviewActions",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/InterviewActions->app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/InterviewActions/InterviewActions.tsx",
    source:
      "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/InterviewActions",
    target:
      "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/InterviewActions/InterviewActions.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(swr)/_interviews->app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/InterviewsFilter.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews",
    target:
      "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/InterviewsFilter.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(swr)/_interviews->app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/InterviewsList.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews",
    target:
      "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/InterviewsList.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(swr)/_interviews->app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/InterviewsTable.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews",
    target:
      "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/InterviewsTable.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(swr)/_interviews->app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/add",
    source: "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews",
    target: "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/add",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/add->app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/add/page.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/add",
    target: "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/add/page.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(swr)/_interviews->app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/edit",
    source: "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews",
    target: "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/edit",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/edit->app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/edit/[interviewId]",
    source: "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/edit",
    target:
      "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/edit/[interviewId]",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/edit/[interviewId]->app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/edit/[interviewId]/error.tsx",
    source:
      "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/edit/[interviewId]",
    target:
      "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/edit/[interviewId]/error.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/edit/[interviewId]->app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/edit/[interviewId]/page.tsx",
    source:
      "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/edit/[interviewId]",
    target:
      "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/edit/[interviewId]/page.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(swr)/_interviews->app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/interview.utils.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews",
    target:
      "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/interview.utils.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(swr)/_interviews->app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/page.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews",
    target: "app/(routes)/[locale]/(nav-layout)/(swr)/_interviews/page.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)->app/(routes)/[locale]/(nav-layout)/_experiences",
    source: "app/(routes)/[locale]/(nav-layout)",
    target: "app/(routes)/[locale]/(nav-layout)/_experiences",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/_experiences->app/(routes)/[locale]/(nav-layout)/_experiences/AddEditExperienceForm.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/_experiences",
    target:
      "app/(routes)/[locale]/(nav-layout)/_experiences/AddEditExperienceForm.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/_experiences->app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceActions",
    source: "app/(routes)/[locale]/(nav-layout)/_experiences",
    target: "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceActions",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceActions->app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceActions/ExperienceActions.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceActions",
    target:
      "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceActions/ExperienceActions.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceActions->app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceActions/ExperienceSettingsModal",
    source: "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceActions",
    target:
      "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceActions/ExperienceSettingsModal",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceActions/ExperienceSettingsModal->app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceActions/ExperienceSettingsModal/experienceSettingsModal.module.scss",
    source:
      "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceActions/ExperienceSettingsModal",
    target:
      "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceActions/ExperienceSettingsModal/experienceSettingsModal.module.scss",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceActions->app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceActions/index.ts",
    source: "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceActions",
    target:
      "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceActions/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/_experiences->app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceCard",
    source: "app/(routes)/[locale]/(nav-layout)/_experiences",
    target: "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceCard",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceCard->app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceCard/ExperienceCard.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceCard",
    target:
      "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceCard/ExperienceCard.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceCard->app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceCard/ExperienceCardActions.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceCard",
    target:
      "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceCard/ExperienceCardActions.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceCard->app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceCard/index.ts",
    source: "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceCard",
    target:
      "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceCard/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/_experiences->app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceCardMini",
    source: "app/(routes)/[locale]/(nav-layout)/_experiences",
    target:
      "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceCardMini",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceCardMini->app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceCardMini/ExperienceCardMini.tsx",
    source:
      "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceCardMini",
    target:
      "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceCardMini/ExperienceCardMini.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/_experiences->app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceList.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/_experiences",
    target:
      "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceList.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/_experiences->app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceSettings",
    source: "app/(routes)/[locale]/(nav-layout)/_experiences",
    target:
      "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceSettings",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceSettings->app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceSettings/ESInformationSettings.tsx",
    source:
      "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceSettings",
    target:
      "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceSettings/ESInformationSettings.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceSettings->app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceSettings/ExperienceSettings.tsx",
    source:
      "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceSettings",
    target:
      "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceSettings/ExperienceSettings.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceSettings->app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceSettings/experienceSettings.types.ts",
    source:
      "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceSettings",
    target:
      "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceSettings/experienceSettings.types.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceSettings->app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceSettings/index.ts",
    source:
      "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceSettings",
    target:
      "app/(routes)/[locale]/(nav-layout)/_experiences/ExperienceSettings/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/_experiences->app/(routes)/[locale]/(nav-layout)/_experiences/add",
    source: "app/(routes)/[locale]/(nav-layout)/_experiences",
    target: "app/(routes)/[locale]/(nav-layout)/_experiences/add",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/_experiences/add->app/(routes)/[locale]/(nav-layout)/_experiences/add/page.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/_experiences/add",
    target: "app/(routes)/[locale]/(nav-layout)/_experiences/add/page.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/_experiences->app/(routes)/[locale]/(nav-layout)/_experiences/edit",
    source: "app/(routes)/[locale]/(nav-layout)/_experiences",
    target: "app/(routes)/[locale]/(nav-layout)/_experiences/edit",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/_experiences/edit->app/(routes)/[locale]/(nav-layout)/_experiences/edit/[experienceId]",
    source: "app/(routes)/[locale]/(nav-layout)/_experiences/edit",
    target:
      "app/(routes)/[locale]/(nav-layout)/_experiences/edit/[experienceId]",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/_experiences/edit/[experienceId]->app/(routes)/[locale]/(nav-layout)/_experiences/edit/[experienceId]/page.tsx",
    source:
      "app/(routes)/[locale]/(nav-layout)/_experiences/edit/[experienceId]",
    target:
      "app/(routes)/[locale]/(nav-layout)/_experiences/edit/[experienceId]/page.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/_experiences->app/(routes)/[locale]/(nav-layout)/_experiences/experience.utils.ts",
    source: "app/(routes)/[locale]/(nav-layout)/_experiences",
    target:
      "app/(routes)/[locale]/(nav-layout)/_experiences/experience.utils.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/_experiences->app/(routes)/[locale]/(nav-layout)/_experiences/not-found.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/_experiences",
    target: "app/(routes)/[locale]/(nav-layout)/_experiences/not-found.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/_experiences->app/(routes)/[locale]/(nav-layout)/_experiences/page.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/_experiences",
    target: "app/(routes)/[locale]/(nav-layout)/_experiences/page.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/_experiences->app/(routes)/[locale]/(nav-layout)/_experiences/settings",
    source: "app/(routes)/[locale]/(nav-layout)/_experiences",
    target: "app/(routes)/[locale]/(nav-layout)/_experiences/settings",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/_experiences/settings->app/(routes)/[locale]/(nav-layout)/_experiences/settings/page.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/_experiences/settings",
    target: "app/(routes)/[locale]/(nav-layout)/_experiences/settings/page.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)->app/(routes)/[locale]/(nav-layout)/about",
    source: "app/(routes)/[locale]/(nav-layout)",
    target: "app/(routes)/[locale]/(nav-layout)/about",
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
    id: "e:app/(routes)/[locale]->app/(routes)/[locale]/_link-sheet",
    source: "app/(routes)/[locale]",
    target: "app/(routes)/[locale]/_link-sheet",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/_link-sheet->app/(routes)/[locale]/_link-sheet/CreateNewSheetButton.tsx",
    source: "app/(routes)/[locale]/_link-sheet",
    target: "app/(routes)/[locale]/_link-sheet/CreateNewSheetButton.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/_link-sheet->app/(routes)/[locale]/_link-sheet/LinkSheetInput.tsx",
    source: "app/(routes)/[locale]/_link-sheet",
    target: "app/(routes)/[locale]/_link-sheet/LinkSheetInput.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/_link-sheet->app/(routes)/[locale]/_link-sheet/page.tsx",
    source: "app/(routes)/[locale]/_link-sheet",
    target: "app/(routes)/[locale]/_link-sheet/page.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]->app/(routes)/[locale]/_post-login",
    source: "app/(routes)/[locale]",
    target: "app/(routes)/[locale]/_post-login",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/_post-login->app/(routes)/[locale]/_post-login/loading.tsx",
    source: "app/(routes)/[locale]/_post-login",
    target: "app/(routes)/[locale]/_post-login/loading.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/_post-login->app/(routes)/[locale]/_post-login/page.tsx",
    source: "app/(routes)/[locale]/_post-login",
    target: "app/(routes)/[locale]/_post-login/page.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/_post-login->app/(routes)/[locale]/_post-login/post-login.utils.ts",
    source: "app/(routes)/[locale]/_post-login",
    target: "app/(routes)/[locale]/_post-login/post-login.utils.ts",
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
    id: "e:app/_components/dependent->app/_components/dependent/GoogleAnalytics",
    source: "app/_components/dependent",
    target: "app/_components/dependent/GoogleAnalytics",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/GoogleAnalytics->app/_components/dependent/GoogleAnalytics/GoogleAnalytics.tsx",
    source: "app/_components/dependent/GoogleAnalytics",
    target: "app/_components/dependent/GoogleAnalytics/GoogleAnalytics.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/GoogleAnalytics->app/_components/dependent/GoogleAnalytics/index.ts",
    source: "app/_components/dependent/GoogleAnalytics",
    target: "app/_components/dependent/GoogleAnalytics/index.ts",
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
    id: "e:app/_components/dependent/LocaleSwitcher->app/_components/dependent/LocaleSwitcher/localeSwitcher.utils.ts",
    source: "app/_components/dependent/LocaleSwitcher",
    target: "app/_components/dependent/LocaleSwitcher/localeSwitcher.utils.ts",
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
    id: "e:app/_hooks->app/_hooks/useThemeColors.ts",
    source: "app/_hooks",
    target: "app/_hooks/useThemeColors.ts",
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
    id: "e:app/_lib/__tests__->app/_lib/__tests__/__snapshots__",
    source: "app/_lib/__tests__",
    target: "app/_lib/__tests__/__snapshots__",
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
    id: "e:app/_lib->app/_lib/gtag.ts",
    source: "app/_lib",
    target: "app/_lib/gtag.ts",
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
    id: "e:app/_styles->app/_styles/mdx.scss",
    source: "app/_styles",
    target: "app/_styles/mdx.scss",
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
    id: "e:app/_styles/overrides->app/_styles/overrides/toast.scss",
    source: "app/_styles/overrides",
    target: "app/_styles/overrides/toast.scss",
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
    id: "e:app/_utils/locale-utils->app/_utils/locale-utils/i18n-config.ts",
    source: "app/_utils/locale-utils",
    target: "app/_utils/locale-utils/i18n-config.ts",
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
    id: "e:app/api/auth->app/api/auth/[...nextauth]",
    source: "app/api/auth",
    target: "app/api/auth/[...nextauth]",
    type: "smoothstep",
  },
  {
    id: "e:app/api/auth/[...nextauth]->app/api/auth/[...nextauth]/route.ts",
    source: "app/api/auth/[...nextauth]",
    target: "app/api/auth/[...nextauth]/route.ts",
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
    id: "e:app->app/sentry-example-page",
    source: "app",
    target: "app/sentry-example-page",
    type: "smoothstep",
  },
  {
    id: "e:app->app/sitemap.ts",
    source: "app",
    target: "app/sitemap.ts",
    type: "smoothstep",
  },
];
