"use client";

import { useRouter } from "next/navigation";

import { toast } from "react-toastify";

import { ApiRoutes, AppRoutes } from "~/utils/routes";

import {
  BaseCardActions,
  type BaseCardActionsProps,
} from "@/components/dependent/BaseCardActions";
import { appApi } from "@/lib/app-api";
import { type ExperienceType } from "@/lib/schema/experience";

type ExperienceCardActionsProps = {
  id: ExperienceType["id"];
};

const ExperienceCardActions = ({ id }: ExperienceCardActionsProps) => {
  // hooks
  const router = useRouter();

  // functions
  const handleEditClick = () => {
    router.push(AppRoutes.editExperience(id));
  };

  const handleDeleteClick = () => {
    appApi
      .delete(ApiRoutes.deleteExperience(id))
      .then(() => {
        toast.success("experience deleted");
        router.refresh();
      })
      .catch(() => {
        toast.error("failed to delete experience, please try again");
      });
  };

  const handleAction: BaseCardActionsProps["handleAction"] = (action) => {
    if (action === "edit") {
      handleEditClick();
      return;
    }

    if (action === "delete") {
      handleDeleteClick();
      return;
    }
  };

  return <BaseCardActions handleAction={handleAction} />;
};

export { ExperienceCardActions };
