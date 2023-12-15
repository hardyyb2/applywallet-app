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
    id: "app/(routes)/[locale]/(auth)/login",
    data: {
      name: "login",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(auth)/login/page.tsx",
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
    id: "app/(routes)/[locale]/(nav-layout)/(swr)/interviews",
    data: {
      name: "interviews",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/(swr)/interviews/AddEditInterviewForm.tsx",
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
    id: "app/(routes)/[locale]/(nav-layout)/(swr)/interviews/InterviewActions",
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
    id: "app/(routes)/[locale]/(nav-layout)/(swr)/interviews/InterviewActions/InterviewActions.tsx",
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
    id: "app/(routes)/[locale]/(nav-layout)/(swr)/interviews/InterviewsList.tsx",
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
    id: "app/(routes)/[locale]/(nav-layout)/(swr)/interviews/add",
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
    id: "app/(routes)/[locale]/(nav-layout)/(swr)/interviews/add/page.tsx",
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
    id: "app/(routes)/[locale]/(nav-layout)/(swr)/interviews/edit",
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
    id: "app/(routes)/[locale]/(nav-layout)/(swr)/interviews/edit/[interviewId]",
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
    id: "app/(routes)/[locale]/(nav-layout)/(swr)/interviews/edit/[interviewId]/error.tsx",
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
    id: "app/(routes)/[locale]/(nav-layout)/(swr)/interviews/edit/[interviewId]/page.tsx",
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
    id: "app/(routes)/[locale]/(nav-layout)/(swr)/interviews/interview.utils.ts",
    data: {
      name: "interview.utils.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/(swr)/interviews/page.tsx",
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
    id: "app/(routes)/[locale]/(nav-layout)/(swr)/layout.tsx",
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
    id: "app/(routes)/[locale]/(nav-layout)/(swr)/providers.tsx",
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
    id: "app/(routes)/[locale]/(nav-layout)/about/about.state.ts",
    data: {
      name: "about.state.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/about/about.types.ts",
    data: {
      name: "about.types.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/about/about.utils.ts",
    data: {
      name: "about.utils.ts",
      type: "file",
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
    id: "app/(routes)/[locale]/(nav-layout)/about/project-structure",
    data: {
      name: "project-structure",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/about/project-structure/AboutCard.tsx",
    data: {
      name: "AboutCard.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/about/project-structure/DFBWrapper.tsx",
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
    id: "app/(routes)/[locale]/(nav-layout)/about/project-structure/DirectoryFlowBuilder",
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
    id: "app/(routes)/[locale]/(nav-layout)/about/project-structure/DirectoryFlowBuilder/DirectoryFlowBuilder.tsx",
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
    id: "app/(routes)/[locale]/(nav-layout)/about/project-structure/DirectoryFlowBuilder/directoryFlowBuilder.utils.ts",
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
    id: "app/(routes)/[locale]/(nav-layout)/about/project-structure/DirectoryFlowBuilder/nodes",
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
    id: "app/(routes)/[locale]/(nav-layout)/about/project-structure/DirectoryFlowBuilder/nodes/CustomNode.tsx",
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
    id: "app/(routes)/[locale]/(nav-layout)/about/project-structure/DirectoryFlowBuilder/nodes/customNode.utils.ts",
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
    id: "app/(routes)/[locale]/(nav-layout)/about/project-structure/page.tsx",
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
    id: "app/(routes)/[locale]/(nav-layout)/experiences",
    data: {
      name: "experiences",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/experiences/AddEditExperienceForm.tsx",
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
    id: "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceActions",
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
    id: "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceActions/ExperienceActions.tsx",
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
    id: "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceActions/ExperienceSettingsModal",
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
    id: "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceActions/ExperienceSettingsModal/ExperienceSettingsModal.tsx",
    data: {
      name: "ExperienceSettingsModal.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceActions/ExperienceSettingsModal/experienceSettingsModal.module.scss",
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
    id: "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceActions/index.ts",
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
    id: "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceCard",
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
    id: "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceCard/ExperienceCard.tsx",
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
    id: "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceCard/ExperienceCardActions.tsx",
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
    id: "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceCard/index.ts",
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
    id: "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceCardMini",
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
    id: "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceCardMini/ExperienceCardMini.tsx",
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
    id: "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceList.tsx",
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
    id: "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceSettings",
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
    id: "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceSettings/ESInformationSettings.tsx",
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
    id: "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceSettings/ExperienceSettings.tsx",
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
    id: "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceSettings/experienceSettings.types.ts",
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
    id: "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceSettings/index.ts",
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
    id: "app/(routes)/[locale]/(nav-layout)/experiences/add",
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
    id: "app/(routes)/[locale]/(nav-layout)/experiences/add/page.tsx",
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
    id: "app/(routes)/[locale]/(nav-layout)/experiences/edit",
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
    id: "app/(routes)/[locale]/(nav-layout)/experiences/edit/[experienceId]",
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
    id: "app/(routes)/[locale]/(nav-layout)/experiences/edit/[experienceId]/page.tsx",
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
    id: "app/(routes)/[locale]/(nav-layout)/experiences/experience.utils.ts",
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
    id: "app/(routes)/[locale]/(nav-layout)/experiences/not-found.tsx",
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
    id: "app/(routes)/[locale]/(nav-layout)/experiences/page.tsx",
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
    id: "app/(routes)/[locale]/(nav-layout)/experiences/settings",
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
    id: "app/(routes)/[locale]/(nav-layout)/experiences/settings/page.tsx",
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
    id: "app/(routes)/[locale]/link-sheet",
    data: {
      name: "link-sheet",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/link-sheet/CreateNewSheetButton.tsx",
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
    id: "app/(routes)/[locale]/link-sheet/LinkSheetInput.tsx",
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
    id: "app/(routes)/[locale]/link-sheet/page.tsx",
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
    id: "app/(routes)/[locale]/page.tsx",
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
    id: "app/(routes)/[locale]/post-login",
    data: {
      name: "post-login",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/(routes)/[locale]/post-login/loading.tsx",
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
    id: "app/(routes)/[locale]/post-login/page.tsx",
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
    id: "app/(routes)/[locale]/post-login/post-login.utils.ts",
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
    id: "app/_components/dependent/BlogCard",
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
    id: "app/_components/dependent/BlogCard/BlogCard.tsx",
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
    id: "app/_components/dependent/BlogCard/blogCard.module.scss",
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
    id: "app/_components/dependent/BlogCard/index.ts",
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
    id: "app/_components/dependent/CopyButton",
    data: {
      name: "CopyButton",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/CopyButton/CopyButton.tsx",
    data: {
      name: "CopyButton.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/CopyButton/copyButton.types.ts",
    data: {
      name: "copyButton.types.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/CopyButton/copyButton.utils.tsx",
    data: {
      name: "copyButton.utils.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/dependent/CopyButton/index.ts",
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
    id: "app/_components/dependent/Navigation/BottomNav/BottomNavBackdrop.tsx",
    data: {
      name: "BottomNavBackdrop.tsx",
      type: "file",
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
    id: "app/_components/isolated",
    data: {
      name: "isolated",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/isolated/Avatar",
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
    id: "app/_components/isolated/Avatar/Avatar.tsx",
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
    id: "app/_components/isolated/Avatar/avatar.utils.ts",
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
    id: "app/_components/isolated/Avatar/index.ts",
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
    id: "app/_components/isolated/Badge",
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
    id: "app/_components/isolated/Badge/Badge.tsx",
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
    id: "app/_components/isolated/Badge/badge.utils.ts",
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
    id: "app/_components/isolated/Badge/index.ts",
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
    id: "app/_components/isolated/BarLoader",
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
    id: "app/_components/isolated/BarLoader/BarLoader.tsx",
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
    id: "app/_components/isolated/BarLoader/index.ts",
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
    id: "app/_components/isolated/BottomNavigation",
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
    id: "app/_components/isolated/BottomNavigation/BottomNavigation.tsx",
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
    id: "app/_components/isolated/BottomNavigation/bottomNavigation.types.ts",
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
    id: "app/_components/isolated/BottomNavigation/index.ts",
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
    id: "app/_components/isolated/Breadcrumbs",
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
    id: "app/_components/isolated/Breadcrumbs/Breadcrumbs.tsx",
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
    id: "app/_components/isolated/Breadcrumbs/index.tsx",
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
    id: "app/_components/isolated/Button",
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
    id: "app/_components/isolated/Button/Button.tsx",
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
    id: "app/_components/isolated/Button/button.utils.ts",
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
    id: "app/_components/isolated/Button/index.tsx",
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
    id: "app/_components/isolated/Card",
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
    id: "app/_components/isolated/Card/Card.tsx",
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
    id: "app/_components/isolated/Card/card.types.ts",
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
    id: "app/_components/isolated/Card/index.tsx",
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
    id: "app/_components/isolated/CopyToClipboard",
    data: {
      name: "CopyToClipboard",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/isolated/CopyToClipboard/CopyToClipboard.tsx",
    data: {
      name: "CopyToClipboard.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/isolated/CopyToClipboard/copyToClipboard.utils.ts",
    data: {
      name: "copyToClipboard.utils.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/isolated/CopyToClipboard/index.ts",
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
    id: "app/_components/isolated/Dialog",
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
    id: "app/_components/isolated/Dialog/Dialog.tsx",
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
    id: "app/_components/isolated/Dialog/index.ts",
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
    id: "app/_components/isolated/Divider",
    data: {
      name: "Divider",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/isolated/Divider/Divider.tsx",
    data: {
      name: "Divider.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/isolated/Divider/index.ts",
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
    id: "app/_components/isolated/Dropdown",
    data: {
      name: "Dropdown",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/isolated/Dropdown/Dropdown.tsx",
    data: {
      name: "Dropdown.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/isolated/Dropdown/dropDown.types.ts",
    data: {
      name: "dropDown.types.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/isolated/Dropdown/index.tsx",
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
    id: "app/_components/isolated/Flex",
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
    id: "app/_components/isolated/Flex/Flex.tsx",
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
    id: "app/_components/isolated/Flex/flex.types.ts",
    data: {
      name: "flex.types.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/isolated/Flex/index.ts",
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
    id: "app/_components/isolated/FormField",
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
    id: "app/_components/isolated/FormField/FormField.tsx",
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
    id: "app/_components/isolated/FormField/FormFieldInput.tsx",
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
    id: "app/_components/isolated/FormField/FormFieldTextarea.tsx",
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
    id: "app/_components/isolated/FormField/FormField.utils.tsx",
    data: {
      name: "FormField.utils.tsx",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/isolated/FormField/index.ts",
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
    id: "app/_components/isolated/Icons",
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
    id: "app/_components/isolated/Icons/Icons.tsx",
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
    id: "app/_components/isolated/Icons/index.tsx",
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
    id: "app/_components/isolated/Input",
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
    id: "app/_components/isolated/Input/Input.tsx",
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
    id: "app/_components/isolated/Input/Input.types.ts",
    data: {
      name: "Input.types.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/isolated/Input/index.tsx",
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
    id: "app/_components/isolated/Popover",
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
    id: "app/_components/isolated/Popover/Popover.tsx",
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
    id: "app/_components/isolated/Popover/index.ts",
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
    id: "app/_components/isolated/README.md",
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
    id: "app/_components/isolated/ScrollArea",
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
    id: "app/_components/isolated/ScrollArea/ScrollArea.tsx",
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
    id: "app/_components/isolated/ScrollArea/index.ts",
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
    id: "app/_components/isolated/Textarea",
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
    id: "app/_components/isolated/Textarea/Textarea.tsx",
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
    id: "app/_components/isolated/Textarea/Textarea.types.ts",
    data: {
      name: "Textarea.types.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_components/isolated/Textarea/index.tsx",
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
    id: "app/_components/isolated/Tooltip",
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
    id: "app/_components/isolated/Tooltip/Tooltip.tsx",
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
    id: "app/_components/isolated/Tooltip/index.ts",
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
    id: "app/_components/isolated/Tooltip/tooltip.utils.ts",
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
    id: "app/_components/isolated/Typography",
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
    id: "app/_components/isolated/Typography/Typography.tsx",
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
    id: "app/_components/isolated/Typography/index.ts",
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
    id: "app/_components/isolated/Typography/typography.utils.tsx",
    data: {
      name: "typography.utils.tsx",
      type: "file",
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
    id: "app/_lib/__tests__/api-response.test.ts",
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
    id: "app/_lib/api-response.ts",
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
    id: "app/_lib/logs.ts",
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
    id: "app/_styles/globals.scss",
    data: {
      name: "globals.scss",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_styles/mdx.scss",
    data: {
      name: "mdx.scss",
      type: "file",
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
    id: "app/_styles/overrides/daisyui.scss",
    data: {
      name: "daisyui.scss",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_styles/overrides/reactflow.scss",
    data: {
      name: "reactflow.scss",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_styles/overrides/toast.scss",
    data: {
      name: "toast.scss",
      type: "file",
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
    id: "app/_utils/env.ts",
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
    id: "app/_utils/routes.ts",
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
    id: "app/_utils/tailwind.ts",
    data: {
      name: "tailwind.ts",
      type: "file",
      subType: "page",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/_utils/theme.ts",
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
    id: "app/api/experiences",
    data: {
      name: "experiences",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/api/experiences/[experienceId]",
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
    id: "app/api/experiences/[experienceId]/route.ts",
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
    id: "app/api/experiences/route.ts",
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
    id: "app/api/interviews",
    data: {
      name: "interviews",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/api/interviews/[interviewId]",
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
    id: "app/api/interviews/[interviewId]/route.ts",
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
    id: "app/api/interviews/route.ts",
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
    id: "app/api/sentry",
    data: {
      name: "sentry",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/api/shared",
    data: {
      name: "shared",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/api/shared/open",
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
    id: "app/api/shared/open/route.ts",
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
    id: "app/api/sheet",
    data: {
      name: "sheet",
      type: "folder",
      subType: "route-group",
    },
    position: {
      x: 0,
      y: 0,
    },
    type: "custom",
  },
  {
    id: "app/api/sheet/link",
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
    id: "app/api/sheet/link/route.ts",
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
    id: "app/api/sheet/new",
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
    id: "app/api/sheet/new/route.ts",
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
    id: "e:app/(routes)/[locale]/(auth)->app/(routes)/[locale]/(auth)/login",
    source: "app/(routes)/[locale]/(auth)",
    target: "app/(routes)/[locale]/(auth)/login",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(auth)/login->app/(routes)/[locale]/(auth)/login/page.tsx",
    source: "app/(routes)/[locale]/(auth)/login",
    target: "app/(routes)/[locale]/(auth)/login/page.tsx",
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
    id: "e:app/(routes)/[locale]/(nav-layout)/(swr)->app/(routes)/[locale]/(nav-layout)/(swr)/interviews",
    source: "app/(routes)/[locale]/(nav-layout)/(swr)",
    target: "app/(routes)/[locale]/(nav-layout)/(swr)/interviews",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(swr)/interviews->app/(routes)/[locale]/(nav-layout)/(swr)/interviews/AddEditInterviewForm.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/(swr)/interviews",
    target:
      "app/(routes)/[locale]/(nav-layout)/(swr)/interviews/AddEditInterviewForm.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(swr)/interviews->app/(routes)/[locale]/(nav-layout)/(swr)/interviews/InterviewActions",
    source: "app/(routes)/[locale]/(nav-layout)/(swr)/interviews",
    target:
      "app/(routes)/[locale]/(nav-layout)/(swr)/interviews/InterviewActions",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(swr)/interviews/InterviewActions->app/(routes)/[locale]/(nav-layout)/(swr)/interviews/InterviewActions/InterviewActions.tsx",
    source:
      "app/(routes)/[locale]/(nav-layout)/(swr)/interviews/InterviewActions",
    target:
      "app/(routes)/[locale]/(nav-layout)/(swr)/interviews/InterviewActions/InterviewActions.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(swr)/interviews->app/(routes)/[locale]/(nav-layout)/(swr)/interviews/InterviewsList.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/(swr)/interviews",
    target:
      "app/(routes)/[locale]/(nav-layout)/(swr)/interviews/InterviewsList.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(swr)/interviews->app/(routes)/[locale]/(nav-layout)/(swr)/interviews/add",
    source: "app/(routes)/[locale]/(nav-layout)/(swr)/interviews",
    target: "app/(routes)/[locale]/(nav-layout)/(swr)/interviews/add",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(swr)/interviews/add->app/(routes)/[locale]/(nav-layout)/(swr)/interviews/add/page.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/(swr)/interviews/add",
    target: "app/(routes)/[locale]/(nav-layout)/(swr)/interviews/add/page.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(swr)/interviews->app/(routes)/[locale]/(nav-layout)/(swr)/interviews/edit",
    source: "app/(routes)/[locale]/(nav-layout)/(swr)/interviews",
    target: "app/(routes)/[locale]/(nav-layout)/(swr)/interviews/edit",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(swr)/interviews/edit->app/(routes)/[locale]/(nav-layout)/(swr)/interviews/edit/[interviewId]",
    source: "app/(routes)/[locale]/(nav-layout)/(swr)/interviews/edit",
    target:
      "app/(routes)/[locale]/(nav-layout)/(swr)/interviews/edit/[interviewId]",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(swr)/interviews/edit/[interviewId]->app/(routes)/[locale]/(nav-layout)/(swr)/interviews/edit/[interviewId]/error.tsx",
    source:
      "app/(routes)/[locale]/(nav-layout)/(swr)/interviews/edit/[interviewId]",
    target:
      "app/(routes)/[locale]/(nav-layout)/(swr)/interviews/edit/[interviewId]/error.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(swr)/interviews/edit/[interviewId]->app/(routes)/[locale]/(nav-layout)/(swr)/interviews/edit/[interviewId]/page.tsx",
    source:
      "app/(routes)/[locale]/(nav-layout)/(swr)/interviews/edit/[interviewId]",
    target:
      "app/(routes)/[locale]/(nav-layout)/(swr)/interviews/edit/[interviewId]/page.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(swr)/interviews->app/(routes)/[locale]/(nav-layout)/(swr)/interviews/interview.utils.ts",
    source: "app/(routes)/[locale]/(nav-layout)/(swr)/interviews",
    target:
      "app/(routes)/[locale]/(nav-layout)/(swr)/interviews/interview.utils.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(swr)/interviews->app/(routes)/[locale]/(nav-layout)/(swr)/interviews/page.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/(swr)/interviews",
    target: "app/(routes)/[locale]/(nav-layout)/(swr)/interviews/page.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(swr)->app/(routes)/[locale]/(nav-layout)/(swr)/layout.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/(swr)",
    target: "app/(routes)/[locale]/(nav-layout)/(swr)/layout.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/(swr)->app/(routes)/[locale]/(nav-layout)/(swr)/providers.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/(swr)",
    target: "app/(routes)/[locale]/(nav-layout)/(swr)/providers.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)->app/(routes)/[locale]/(nav-layout)/about",
    source: "app/(routes)/[locale]/(nav-layout)",
    target: "app/(routes)/[locale]/(nav-layout)/about",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/about->app/(routes)/[locale]/(nav-layout)/about/about.state.ts",
    source: "app/(routes)/[locale]/(nav-layout)/about",
    target: "app/(routes)/[locale]/(nav-layout)/about/about.state.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/about->app/(routes)/[locale]/(nav-layout)/about/about.types.ts",
    source: "app/(routes)/[locale]/(nav-layout)/about",
    target: "app/(routes)/[locale]/(nav-layout)/about/about.types.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/about->app/(routes)/[locale]/(nav-layout)/about/about.utils.ts",
    source: "app/(routes)/[locale]/(nav-layout)/about",
    target: "app/(routes)/[locale]/(nav-layout)/about/about.utils.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/about->app/(routes)/[locale]/(nav-layout)/about/page.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/about",
    target: "app/(routes)/[locale]/(nav-layout)/about/page.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/about->app/(routes)/[locale]/(nav-layout)/about/project-structure",
    source: "app/(routes)/[locale]/(nav-layout)/about",
    target: "app/(routes)/[locale]/(nav-layout)/about/project-structure",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/about/project-structure->app/(routes)/[locale]/(nav-layout)/about/project-structure/AboutCard.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/about/project-structure",
    target:
      "app/(routes)/[locale]/(nav-layout)/about/project-structure/AboutCard.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/about/project-structure->app/(routes)/[locale]/(nav-layout)/about/project-structure/DFBWrapper.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/about/project-structure",
    target:
      "app/(routes)/[locale]/(nav-layout)/about/project-structure/DFBWrapper.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/about/project-structure->app/(routes)/[locale]/(nav-layout)/about/project-structure/DirectoryFlowBuilder",
    source: "app/(routes)/[locale]/(nav-layout)/about/project-structure",
    target:
      "app/(routes)/[locale]/(nav-layout)/about/project-structure/DirectoryFlowBuilder",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/about/project-structure/DirectoryFlowBuilder->app/(routes)/[locale]/(nav-layout)/about/project-structure/DirectoryFlowBuilder/DirectoryFlowBuilder.tsx",
    source:
      "app/(routes)/[locale]/(nav-layout)/about/project-structure/DirectoryFlowBuilder",
    target:
      "app/(routes)/[locale]/(nav-layout)/about/project-structure/DirectoryFlowBuilder/DirectoryFlowBuilder.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/about/project-structure/DirectoryFlowBuilder->app/(routes)/[locale]/(nav-layout)/about/project-structure/DirectoryFlowBuilder/directoryFlowBuilder.utils.ts",
    source:
      "app/(routes)/[locale]/(nav-layout)/about/project-structure/DirectoryFlowBuilder",
    target:
      "app/(routes)/[locale]/(nav-layout)/about/project-structure/DirectoryFlowBuilder/directoryFlowBuilder.utils.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/about/project-structure/DirectoryFlowBuilder->app/(routes)/[locale]/(nav-layout)/about/project-structure/DirectoryFlowBuilder/nodes",
    source:
      "app/(routes)/[locale]/(nav-layout)/about/project-structure/DirectoryFlowBuilder",
    target:
      "app/(routes)/[locale]/(nav-layout)/about/project-structure/DirectoryFlowBuilder/nodes",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/about/project-structure/DirectoryFlowBuilder/nodes->app/(routes)/[locale]/(nav-layout)/about/project-structure/DirectoryFlowBuilder/nodes/CustomNode.tsx",
    source:
      "app/(routes)/[locale]/(nav-layout)/about/project-structure/DirectoryFlowBuilder/nodes",
    target:
      "app/(routes)/[locale]/(nav-layout)/about/project-structure/DirectoryFlowBuilder/nodes/CustomNode.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/about/project-structure/DirectoryFlowBuilder/nodes->app/(routes)/[locale]/(nav-layout)/about/project-structure/DirectoryFlowBuilder/nodes/customNode.utils.ts",
    source:
      "app/(routes)/[locale]/(nav-layout)/about/project-structure/DirectoryFlowBuilder/nodes",
    target:
      "app/(routes)/[locale]/(nav-layout)/about/project-structure/DirectoryFlowBuilder/nodes/customNode.utils.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/about/project-structure->app/(routes)/[locale]/(nav-layout)/about/project-structure/page.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/about/project-structure",
    target:
      "app/(routes)/[locale]/(nav-layout)/about/project-structure/page.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)->app/(routes)/[locale]/(nav-layout)/experiences",
    source: "app/(routes)/[locale]/(nav-layout)",
    target: "app/(routes)/[locale]/(nav-layout)/experiences",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/experiences->app/(routes)/[locale]/(nav-layout)/experiences/AddEditExperienceForm.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/experiences",
    target:
      "app/(routes)/[locale]/(nav-layout)/experiences/AddEditExperienceForm.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/experiences->app/(routes)/[locale]/(nav-layout)/experiences/ExperienceActions",
    source: "app/(routes)/[locale]/(nav-layout)/experiences",
    target: "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceActions",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/experiences/ExperienceActions->app/(routes)/[locale]/(nav-layout)/experiences/ExperienceActions/ExperienceActions.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceActions",
    target:
      "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceActions/ExperienceActions.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/experiences/ExperienceActions->app/(routes)/[locale]/(nav-layout)/experiences/ExperienceActions/ExperienceSettingsModal",
    source: "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceActions",
    target:
      "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceActions/ExperienceSettingsModal",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/experiences/ExperienceActions/ExperienceSettingsModal->app/(routes)/[locale]/(nav-layout)/experiences/ExperienceActions/ExperienceSettingsModal/ExperienceSettingsModal.tsx",
    source:
      "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceActions/ExperienceSettingsModal",
    target:
      "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceActions/ExperienceSettingsModal/ExperienceSettingsModal.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/experiences/ExperienceActions/ExperienceSettingsModal->app/(routes)/[locale]/(nav-layout)/experiences/ExperienceActions/ExperienceSettingsModal/experienceSettingsModal.module.scss",
    source:
      "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceActions/ExperienceSettingsModal",
    target:
      "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceActions/ExperienceSettingsModal/experienceSettingsModal.module.scss",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/experiences/ExperienceActions->app/(routes)/[locale]/(nav-layout)/experiences/ExperienceActions/index.ts",
    source: "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceActions",
    target:
      "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceActions/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/experiences->app/(routes)/[locale]/(nav-layout)/experiences/ExperienceCard",
    source: "app/(routes)/[locale]/(nav-layout)/experiences",
    target: "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceCard",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/experiences/ExperienceCard->app/(routes)/[locale]/(nav-layout)/experiences/ExperienceCard/ExperienceCard.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceCard",
    target:
      "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceCard/ExperienceCard.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/experiences/ExperienceCard->app/(routes)/[locale]/(nav-layout)/experiences/ExperienceCard/ExperienceCardActions.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceCard",
    target:
      "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceCard/ExperienceCardActions.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/experiences/ExperienceCard->app/(routes)/[locale]/(nav-layout)/experiences/ExperienceCard/index.ts",
    source: "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceCard",
    target:
      "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceCard/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/experiences->app/(routes)/[locale]/(nav-layout)/experiences/ExperienceCardMini",
    source: "app/(routes)/[locale]/(nav-layout)/experiences",
    target: "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceCardMini",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/experiences/ExperienceCardMini->app/(routes)/[locale]/(nav-layout)/experiences/ExperienceCardMini/ExperienceCardMini.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceCardMini",
    target:
      "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceCardMini/ExperienceCardMini.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/experiences->app/(routes)/[locale]/(nav-layout)/experiences/ExperienceList.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/experiences",
    target: "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceList.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/experiences->app/(routes)/[locale]/(nav-layout)/experiences/ExperienceSettings",
    source: "app/(routes)/[locale]/(nav-layout)/experiences",
    target: "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceSettings",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/experiences/ExperienceSettings->app/(routes)/[locale]/(nav-layout)/experiences/ExperienceSettings/ESInformationSettings.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceSettings",
    target:
      "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceSettings/ESInformationSettings.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/experiences/ExperienceSettings->app/(routes)/[locale]/(nav-layout)/experiences/ExperienceSettings/ExperienceSettings.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceSettings",
    target:
      "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceSettings/ExperienceSettings.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/experiences/ExperienceSettings->app/(routes)/[locale]/(nav-layout)/experiences/ExperienceSettings/experienceSettings.types.ts",
    source: "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceSettings",
    target:
      "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceSettings/experienceSettings.types.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/experiences/ExperienceSettings->app/(routes)/[locale]/(nav-layout)/experiences/ExperienceSettings/index.ts",
    source: "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceSettings",
    target:
      "app/(routes)/[locale]/(nav-layout)/experiences/ExperienceSettings/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/experiences->app/(routes)/[locale]/(nav-layout)/experiences/add",
    source: "app/(routes)/[locale]/(nav-layout)/experiences",
    target: "app/(routes)/[locale]/(nav-layout)/experiences/add",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/experiences/add->app/(routes)/[locale]/(nav-layout)/experiences/add/page.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/experiences/add",
    target: "app/(routes)/[locale]/(nav-layout)/experiences/add/page.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/experiences->app/(routes)/[locale]/(nav-layout)/experiences/edit",
    source: "app/(routes)/[locale]/(nav-layout)/experiences",
    target: "app/(routes)/[locale]/(nav-layout)/experiences/edit",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/experiences/edit->app/(routes)/[locale]/(nav-layout)/experiences/edit/[experienceId]",
    source: "app/(routes)/[locale]/(nav-layout)/experiences/edit",
    target:
      "app/(routes)/[locale]/(nav-layout)/experiences/edit/[experienceId]",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/experiences/edit/[experienceId]->app/(routes)/[locale]/(nav-layout)/experiences/edit/[experienceId]/page.tsx",
    source:
      "app/(routes)/[locale]/(nav-layout)/experiences/edit/[experienceId]",
    target:
      "app/(routes)/[locale]/(nav-layout)/experiences/edit/[experienceId]/page.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/experiences->app/(routes)/[locale]/(nav-layout)/experiences/experience.utils.ts",
    source: "app/(routes)/[locale]/(nav-layout)/experiences",
    target:
      "app/(routes)/[locale]/(nav-layout)/experiences/experience.utils.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/experiences->app/(routes)/[locale]/(nav-layout)/experiences/not-found.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/experiences",
    target: "app/(routes)/[locale]/(nav-layout)/experiences/not-found.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/experiences->app/(routes)/[locale]/(nav-layout)/experiences/page.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/experiences",
    target: "app/(routes)/[locale]/(nav-layout)/experiences/page.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/experiences->app/(routes)/[locale]/(nav-layout)/experiences/settings",
    source: "app/(routes)/[locale]/(nav-layout)/experiences",
    target: "app/(routes)/[locale]/(nav-layout)/experiences/settings",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)/experiences/settings->app/(routes)/[locale]/(nav-layout)/experiences/settings/page.tsx",
    source: "app/(routes)/[locale]/(nav-layout)/experiences/settings",
    target: "app/(routes)/[locale]/(nav-layout)/experiences/settings/page.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/(nav-layout)->app/(routes)/[locale]/(nav-layout)/layout.tsx",
    source: "app/(routes)/[locale]/(nav-layout)",
    target: "app/(routes)/[locale]/(nav-layout)/layout.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]->app/(routes)/[locale]/layout.tsx",
    source: "app/(routes)/[locale]",
    target: "app/(routes)/[locale]/layout.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]->app/(routes)/[locale]/link-sheet",
    source: "app/(routes)/[locale]",
    target: "app/(routes)/[locale]/link-sheet",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/link-sheet->app/(routes)/[locale]/link-sheet/CreateNewSheetButton.tsx",
    source: "app/(routes)/[locale]/link-sheet",
    target: "app/(routes)/[locale]/link-sheet/CreateNewSheetButton.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/link-sheet->app/(routes)/[locale]/link-sheet/LinkSheetInput.tsx",
    source: "app/(routes)/[locale]/link-sheet",
    target: "app/(routes)/[locale]/link-sheet/LinkSheetInput.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/link-sheet->app/(routes)/[locale]/link-sheet/page.tsx",
    source: "app/(routes)/[locale]/link-sheet",
    target: "app/(routes)/[locale]/link-sheet/page.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]->app/(routes)/[locale]/loading.tsx",
    source: "app/(routes)/[locale]",
    target: "app/(routes)/[locale]/loading.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]->app/(routes)/[locale]/page.tsx",
    source: "app/(routes)/[locale]",
    target: "app/(routes)/[locale]/page.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]->app/(routes)/[locale]/post-login",
    source: "app/(routes)/[locale]",
    target: "app/(routes)/[locale]/post-login",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/post-login->app/(routes)/[locale]/post-login/loading.tsx",
    source: "app/(routes)/[locale]/post-login",
    target: "app/(routes)/[locale]/post-login/loading.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/post-login->app/(routes)/[locale]/post-login/page.tsx",
    source: "app/(routes)/[locale]/post-login",
    target: "app/(routes)/[locale]/post-login/page.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]/post-login->app/(routes)/[locale]/post-login/post-login.utils.ts",
    source: "app/(routes)/[locale]/post-login",
    target: "app/(routes)/[locale]/post-login/post-login.utils.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/(routes)/[locale]->app/(routes)/[locale]/providers.tsx",
    source: "app/(routes)/[locale]",
    target: "app/(routes)/[locale]/providers.tsx",
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
    id: "e:app/_components/dependent->app/_components/dependent/BlogCard",
    source: "app/_components/dependent",
    target: "app/_components/dependent/BlogCard",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/BlogCard->app/_components/dependent/BlogCard/BlogCard.tsx",
    source: "app/_components/dependent/BlogCard",
    target: "app/_components/dependent/BlogCard/BlogCard.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/BlogCard->app/_components/dependent/BlogCard/blogCard.module.scss",
    source: "app/_components/dependent/BlogCard",
    target: "app/_components/dependent/BlogCard/blogCard.module.scss",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/BlogCard->app/_components/dependent/BlogCard/index.ts",
    source: "app/_components/dependent/BlogCard",
    target: "app/_components/dependent/BlogCard/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent->app/_components/dependent/CopyButton",
    source: "app/_components/dependent",
    target: "app/_components/dependent/CopyButton",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/CopyButton->app/_components/dependent/CopyButton/CopyButton.tsx",
    source: "app/_components/dependent/CopyButton",
    target: "app/_components/dependent/CopyButton/CopyButton.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/CopyButton->app/_components/dependent/CopyButton/copyButton.types.ts",
    source: "app/_components/dependent/CopyButton",
    target: "app/_components/dependent/CopyButton/copyButton.types.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/CopyButton->app/_components/dependent/CopyButton/copyButton.utils.tsx",
    source: "app/_components/dependent/CopyButton",
    target: "app/_components/dependent/CopyButton/copyButton.utils.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/dependent/CopyButton->app/_components/dependent/CopyButton/index.ts",
    source: "app/_components/dependent/CopyButton",
    target: "app/_components/dependent/CopyButton/index.ts",
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
    id: "e:app/_components/dependent/Navigation/BottomNav->app/_components/dependent/Navigation/BottomNav/BottomNavBackdrop.tsx",
    source: "app/_components/dependent/Navigation/BottomNav",
    target:
      "app/_components/dependent/Navigation/BottomNav/BottomNavBackdrop.tsx",
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
    id: "e:app/_components->app/_components/isolated",
    source: "app/_components",
    target: "app/_components/isolated",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated->app/_components/isolated/Avatar",
    source: "app/_components/isolated",
    target: "app/_components/isolated/Avatar",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/Avatar->app/_components/isolated/Avatar/Avatar.tsx",
    source: "app/_components/isolated/Avatar",
    target: "app/_components/isolated/Avatar/Avatar.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/Avatar->app/_components/isolated/Avatar/avatar.utils.ts",
    source: "app/_components/isolated/Avatar",
    target: "app/_components/isolated/Avatar/avatar.utils.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/Avatar->app/_components/isolated/Avatar/index.ts",
    source: "app/_components/isolated/Avatar",
    target: "app/_components/isolated/Avatar/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated->app/_components/isolated/Badge",
    source: "app/_components/isolated",
    target: "app/_components/isolated/Badge",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/Badge->app/_components/isolated/Badge/Badge.tsx",
    source: "app/_components/isolated/Badge",
    target: "app/_components/isolated/Badge/Badge.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/Badge->app/_components/isolated/Badge/badge.utils.ts",
    source: "app/_components/isolated/Badge",
    target: "app/_components/isolated/Badge/badge.utils.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/Badge->app/_components/isolated/Badge/index.ts",
    source: "app/_components/isolated/Badge",
    target: "app/_components/isolated/Badge/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated->app/_components/isolated/BarLoader",
    source: "app/_components/isolated",
    target: "app/_components/isolated/BarLoader",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/BarLoader->app/_components/isolated/BarLoader/BarLoader.tsx",
    source: "app/_components/isolated/BarLoader",
    target: "app/_components/isolated/BarLoader/BarLoader.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/BarLoader->app/_components/isolated/BarLoader/index.ts",
    source: "app/_components/isolated/BarLoader",
    target: "app/_components/isolated/BarLoader/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated->app/_components/isolated/BottomNavigation",
    source: "app/_components/isolated",
    target: "app/_components/isolated/BottomNavigation",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/BottomNavigation->app/_components/isolated/BottomNavigation/BottomNavigation.tsx",
    source: "app/_components/isolated/BottomNavigation",
    target: "app/_components/isolated/BottomNavigation/BottomNavigation.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/BottomNavigation->app/_components/isolated/BottomNavigation/bottomNavigation.types.ts",
    source: "app/_components/isolated/BottomNavigation",
    target:
      "app/_components/isolated/BottomNavigation/bottomNavigation.types.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/BottomNavigation->app/_components/isolated/BottomNavigation/index.ts",
    source: "app/_components/isolated/BottomNavigation",
    target: "app/_components/isolated/BottomNavigation/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated->app/_components/isolated/Breadcrumbs",
    source: "app/_components/isolated",
    target: "app/_components/isolated/Breadcrumbs",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/Breadcrumbs->app/_components/isolated/Breadcrumbs/Breadcrumbs.tsx",
    source: "app/_components/isolated/Breadcrumbs",
    target: "app/_components/isolated/Breadcrumbs/Breadcrumbs.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/Breadcrumbs->app/_components/isolated/Breadcrumbs/index.tsx",
    source: "app/_components/isolated/Breadcrumbs",
    target: "app/_components/isolated/Breadcrumbs/index.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated->app/_components/isolated/Button",
    source: "app/_components/isolated",
    target: "app/_components/isolated/Button",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/Button->app/_components/isolated/Button/Button.tsx",
    source: "app/_components/isolated/Button",
    target: "app/_components/isolated/Button/Button.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/Button->app/_components/isolated/Button/button.utils.ts",
    source: "app/_components/isolated/Button",
    target: "app/_components/isolated/Button/button.utils.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/Button->app/_components/isolated/Button/index.tsx",
    source: "app/_components/isolated/Button",
    target: "app/_components/isolated/Button/index.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated->app/_components/isolated/Card",
    source: "app/_components/isolated",
    target: "app/_components/isolated/Card",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/Card->app/_components/isolated/Card/Card.tsx",
    source: "app/_components/isolated/Card",
    target: "app/_components/isolated/Card/Card.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/Card->app/_components/isolated/Card/card.types.ts",
    source: "app/_components/isolated/Card",
    target: "app/_components/isolated/Card/card.types.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/Card->app/_components/isolated/Card/index.tsx",
    source: "app/_components/isolated/Card",
    target: "app/_components/isolated/Card/index.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated->app/_components/isolated/CopyToClipboard",
    source: "app/_components/isolated",
    target: "app/_components/isolated/CopyToClipboard",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/CopyToClipboard->app/_components/isolated/CopyToClipboard/CopyToClipboard.tsx",
    source: "app/_components/isolated/CopyToClipboard",
    target: "app/_components/isolated/CopyToClipboard/CopyToClipboard.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/CopyToClipboard->app/_components/isolated/CopyToClipboard/copyToClipboard.utils.ts",
    source: "app/_components/isolated/CopyToClipboard",
    target: "app/_components/isolated/CopyToClipboard/copyToClipboard.utils.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/CopyToClipboard->app/_components/isolated/CopyToClipboard/index.ts",
    source: "app/_components/isolated/CopyToClipboard",
    target: "app/_components/isolated/CopyToClipboard/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated->app/_components/isolated/Dialog",
    source: "app/_components/isolated",
    target: "app/_components/isolated/Dialog",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/Dialog->app/_components/isolated/Dialog/Dialog.tsx",
    source: "app/_components/isolated/Dialog",
    target: "app/_components/isolated/Dialog/Dialog.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/Dialog->app/_components/isolated/Dialog/index.ts",
    source: "app/_components/isolated/Dialog",
    target: "app/_components/isolated/Dialog/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated->app/_components/isolated/Divider",
    source: "app/_components/isolated",
    target: "app/_components/isolated/Divider",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/Divider->app/_components/isolated/Divider/Divider.tsx",
    source: "app/_components/isolated/Divider",
    target: "app/_components/isolated/Divider/Divider.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/Divider->app/_components/isolated/Divider/index.ts",
    source: "app/_components/isolated/Divider",
    target: "app/_components/isolated/Divider/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated->app/_components/isolated/Dropdown",
    source: "app/_components/isolated",
    target: "app/_components/isolated/Dropdown",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/Dropdown->app/_components/isolated/Dropdown/Dropdown.tsx",
    source: "app/_components/isolated/Dropdown",
    target: "app/_components/isolated/Dropdown/Dropdown.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/Dropdown->app/_components/isolated/Dropdown/dropDown.types.ts",
    source: "app/_components/isolated/Dropdown",
    target: "app/_components/isolated/Dropdown/dropDown.types.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/Dropdown->app/_components/isolated/Dropdown/index.tsx",
    source: "app/_components/isolated/Dropdown",
    target: "app/_components/isolated/Dropdown/index.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated->app/_components/isolated/Flex",
    source: "app/_components/isolated",
    target: "app/_components/isolated/Flex",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/Flex->app/_components/isolated/Flex/Flex.tsx",
    source: "app/_components/isolated/Flex",
    target: "app/_components/isolated/Flex/Flex.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/Flex->app/_components/isolated/Flex/flex.types.ts",
    source: "app/_components/isolated/Flex",
    target: "app/_components/isolated/Flex/flex.types.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/Flex->app/_components/isolated/Flex/index.ts",
    source: "app/_components/isolated/Flex",
    target: "app/_components/isolated/Flex/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated->app/_components/isolated/FormField",
    source: "app/_components/isolated",
    target: "app/_components/isolated/FormField",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/FormField->app/_components/isolated/FormField/FormField.tsx",
    source: "app/_components/isolated/FormField",
    target: "app/_components/isolated/FormField/FormField.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/FormField->app/_components/isolated/FormField/FormFieldInput.tsx",
    source: "app/_components/isolated/FormField",
    target: "app/_components/isolated/FormField/FormFieldInput.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/FormField->app/_components/isolated/FormField/FormFieldTextarea.tsx",
    source: "app/_components/isolated/FormField",
    target: "app/_components/isolated/FormField/FormFieldTextarea.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/FormField->app/_components/isolated/FormField/FormField.utils.tsx",
    source: "app/_components/isolated/FormField",
    target: "app/_components/isolated/FormField/FormField.utils.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/FormField->app/_components/isolated/FormField/index.ts",
    source: "app/_components/isolated/FormField",
    target: "app/_components/isolated/FormField/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated->app/_components/isolated/Icons",
    source: "app/_components/isolated",
    target: "app/_components/isolated/Icons",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/Icons->app/_components/isolated/Icons/Icons.tsx",
    source: "app/_components/isolated/Icons",
    target: "app/_components/isolated/Icons/Icons.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/Icons->app/_components/isolated/Icons/index.tsx",
    source: "app/_components/isolated/Icons",
    target: "app/_components/isolated/Icons/index.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated->app/_components/isolated/Input",
    source: "app/_components/isolated",
    target: "app/_components/isolated/Input",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/Input->app/_components/isolated/Input/Input.tsx",
    source: "app/_components/isolated/Input",
    target: "app/_components/isolated/Input/Input.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/Input->app/_components/isolated/Input/Input.types.ts",
    source: "app/_components/isolated/Input",
    target: "app/_components/isolated/Input/Input.types.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/Input->app/_components/isolated/Input/index.tsx",
    source: "app/_components/isolated/Input",
    target: "app/_components/isolated/Input/index.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated->app/_components/isolated/Popover",
    source: "app/_components/isolated",
    target: "app/_components/isolated/Popover",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/Popover->app/_components/isolated/Popover/Popover.tsx",
    source: "app/_components/isolated/Popover",
    target: "app/_components/isolated/Popover/Popover.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/Popover->app/_components/isolated/Popover/index.ts",
    source: "app/_components/isolated/Popover",
    target: "app/_components/isolated/Popover/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated->app/_components/isolated/README.md",
    source: "app/_components/isolated",
    target: "app/_components/isolated/README.md",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated->app/_components/isolated/ScrollArea",
    source: "app/_components/isolated",
    target: "app/_components/isolated/ScrollArea",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/ScrollArea->app/_components/isolated/ScrollArea/ScrollArea.tsx",
    source: "app/_components/isolated/ScrollArea",
    target: "app/_components/isolated/ScrollArea/ScrollArea.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/ScrollArea->app/_components/isolated/ScrollArea/index.ts",
    source: "app/_components/isolated/ScrollArea",
    target: "app/_components/isolated/ScrollArea/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated->app/_components/isolated/Textarea",
    source: "app/_components/isolated",
    target: "app/_components/isolated/Textarea",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/Textarea->app/_components/isolated/Textarea/Textarea.tsx",
    source: "app/_components/isolated/Textarea",
    target: "app/_components/isolated/Textarea/Textarea.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/Textarea->app/_components/isolated/Textarea/Textarea.types.ts",
    source: "app/_components/isolated/Textarea",
    target: "app/_components/isolated/Textarea/Textarea.types.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/Textarea->app/_components/isolated/Textarea/index.tsx",
    source: "app/_components/isolated/Textarea",
    target: "app/_components/isolated/Textarea/index.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated->app/_components/isolated/Tooltip",
    source: "app/_components/isolated",
    target: "app/_components/isolated/Tooltip",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/Tooltip->app/_components/isolated/Tooltip/Tooltip.tsx",
    source: "app/_components/isolated/Tooltip",
    target: "app/_components/isolated/Tooltip/Tooltip.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/Tooltip->app/_components/isolated/Tooltip/index.ts",
    source: "app/_components/isolated/Tooltip",
    target: "app/_components/isolated/Tooltip/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/Tooltip->app/_components/isolated/Tooltip/tooltip.utils.ts",
    source: "app/_components/isolated/Tooltip",
    target: "app/_components/isolated/Tooltip/tooltip.utils.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated->app/_components/isolated/Typography",
    source: "app/_components/isolated",
    target: "app/_components/isolated/Typography",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/Typography->app/_components/isolated/Typography/Typography.tsx",
    source: "app/_components/isolated/Typography",
    target: "app/_components/isolated/Typography/Typography.tsx",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/Typography->app/_components/isolated/Typography/index.ts",
    source: "app/_components/isolated/Typography",
    target: "app/_components/isolated/Typography/index.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_components/isolated/Typography->app/_components/isolated/Typography/typography.utils.tsx",
    source: "app/_components/isolated/Typography",
    target: "app/_components/isolated/Typography/typography.utils.tsx",
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
    id: "e:app/_lib/__tests__->app/_lib/__tests__/api-response.test.ts",
    source: "app/_lib/__tests__",
    target: "app/_lib/__tests__/api-response.test.ts",
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
    id: "e:app/_lib->app/_lib/api-response.ts",
    source: "app/_lib",
    target: "app/_lib/api-response.ts",
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
    id: "e:app/_lib->app/_lib/logs.ts",
    source: "app/_lib",
    target: "app/_lib/logs.ts",
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
    id: "e:app->app/_styles",
    source: "app",
    target: "app/_styles",
    type: "smoothstep",
  },
  {
    id: "e:app/_styles->app/_styles/globals.scss",
    source: "app/_styles",
    target: "app/_styles/globals.scss",
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
    id: "e:app/_styles/overrides->app/_styles/overrides/daisyui.scss",
    source: "app/_styles/overrides",
    target: "app/_styles/overrides/daisyui.scss",
    type: "smoothstep",
  },
  {
    id: "e:app/_styles/overrides->app/_styles/overrides/reactflow.scss",
    source: "app/_styles/overrides",
    target: "app/_styles/overrides/reactflow.scss",
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
    id: "e:app/_utils->app/_utils/env.ts",
    source: "app/_utils",
    target: "app/_utils/env.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_utils->app/_utils/error",
    source: "app/_utils",
    target: "app/_utils/error",
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
    id: "e:app/_utils->app/_utils/routes.ts",
    source: "app/_utils",
    target: "app/_utils/routes.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_utils->app/_utils/sheet.ts",
    source: "app/_utils",
    target: "app/_utils/sheet.ts",
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
    id: "e:app/_utils->app/_utils/tailwind.ts",
    source: "app/_utils",
    target: "app/_utils/tailwind.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/_utils->app/_utils/theme.ts",
    source: "app/_utils",
    target: "app/_utils/theme.ts",
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
    id: "e:app/api->app/api/experiences",
    source: "app/api",
    target: "app/api/experiences",
    type: "smoothstep",
  },
  {
    id: "e:app/api/experiences->app/api/experiences/[experienceId]",
    source: "app/api/experiences",
    target: "app/api/experiences/[experienceId]",
    type: "smoothstep",
  },
  {
    id: "e:app/api/experiences/[experienceId]->app/api/experiences/[experienceId]/route.ts",
    source: "app/api/experiences/[experienceId]",
    target: "app/api/experiences/[experienceId]/route.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/api/experiences->app/api/experiences/route.ts",
    source: "app/api/experiences",
    target: "app/api/experiences/route.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/api->app/api/interviews",
    source: "app/api",
    target: "app/api/interviews",
    type: "smoothstep",
  },
  {
    id: "e:app/api/interviews->app/api/interviews/[interviewId]",
    source: "app/api/interviews",
    target: "app/api/interviews/[interviewId]",
    type: "smoothstep",
  },
  {
    id: "e:app/api/interviews/[interviewId]->app/api/interviews/[interviewId]/route.ts",
    source: "app/api/interviews/[interviewId]",
    target: "app/api/interviews/[interviewId]/route.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/api/interviews->app/api/interviews/route.ts",
    source: "app/api/interviews",
    target: "app/api/interviews/route.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/api->app/api/sentry",
    source: "app/api",
    target: "app/api/sentry",
    type: "smoothstep",
  },
  {
    id: "e:app/api->app/api/shared",
    source: "app/api",
    target: "app/api/shared",
    type: "smoothstep",
  },
  {
    id: "e:app/api/shared->app/api/shared/open",
    source: "app/api/shared",
    target: "app/api/shared/open",
    type: "smoothstep",
  },
  {
    id: "e:app/api/shared/open->app/api/shared/open/route.ts",
    source: "app/api/shared/open",
    target: "app/api/shared/open/route.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/api->app/api/sheet",
    source: "app/api",
    target: "app/api/sheet",
    type: "smoothstep",
  },
  {
    id: "e:app/api/sheet->app/api/sheet/link",
    source: "app/api/sheet",
    target: "app/api/sheet/link",
    type: "smoothstep",
  },
  {
    id: "e:app/api/sheet/link->app/api/sheet/link/route.ts",
    source: "app/api/sheet/link",
    target: "app/api/sheet/link/route.ts",
    type: "smoothstep",
  },
  {
    id: "e:app/api/sheet->app/api/sheet/new",
    source: "app/api/sheet",
    target: "app/api/sheet/new",
    type: "smoothstep",
  },
  {
    id: "e:app/api/sheet/new->app/api/sheet/new/route.ts",
    source: "app/api/sheet/new",
    target: "app/api/sheet/new/route.ts",
    type: "smoothstep",
  },
];
