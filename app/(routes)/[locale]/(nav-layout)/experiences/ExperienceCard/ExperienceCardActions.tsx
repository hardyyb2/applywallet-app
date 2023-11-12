"use client";

import { useRouter } from "next/navigation";

import { toast } from "react-toastify";

import { Button } from "@/components/isolated/Button";
import { Flex } from "@/components/isolated/Flex";
import { Icons } from "@/components/isolated/Icons";
import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverPortal,
  PopoverTrigger,
} from "@/components/isolated/Popover";
import { appApi } from "@/lib/appApi";
import { type ExperienceType } from "@/lib/schema/experience";
import { ApiRoutes, AppRoutes } from "@/utils/routes";

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
        // TODO - replace with revalidatePath when it works
        toast.success("experience deleted");
        router.refresh();
      })
      .catch(() => {
        toast.error("failed to delete experience, please try again");
      });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          color="ghost"
          startIcon={<Icons.MoreVertical />}
          className="p-0"
        />
      </PopoverTrigger>
      <PopoverPortal>
        <PopoverContent
          className="rounded-lg border-2 border-primary bg-base-200 p-2"
          collisionPadding={8}
        >
          <Flex direction="row" className="gap-2">
            <Button
              color="primary"
              responsive
              startIcon={<Icons.Pencil />}
              onClick={handleEditClick}
            />
            <Button
              color="error"
              responsive
              startIcon={<Icons.Trash2 />}
              onClick={handleDeleteClick}
            />
          </Flex>

          <PopoverArrow className="fill-primary" />
        </PopoverContent>
      </PopoverPortal>
    </Popover>
  );
};

export { ExperienceCardActions };
