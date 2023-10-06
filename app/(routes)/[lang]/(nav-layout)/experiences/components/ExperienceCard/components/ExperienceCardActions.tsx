"use client";

import { useRouter } from "next/navigation";

import axios from "axios";
import { toast } from "react-toastify";

import { Flex } from "@/components/ui/isolated/common";
import {
  Button,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverPortal,
  PopoverTrigger,
} from "@/components/ui/isolated/wrapped";
import { Icons } from "@/components/ui/isolated/wrapped/Icons";
import { ApiRoutes, AppRoutes, SearchParams } from "@/utils/routes.utils";
import { ExperienceType } from "@/utils/schema-utils";

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
    axios
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
