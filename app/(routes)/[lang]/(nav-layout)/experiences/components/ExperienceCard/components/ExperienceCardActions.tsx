"use client";

import { useRouter } from "next/navigation";

import { Flex } from "@/_components/ui/isolated/common";
import { Button, Popover } from "@/_components/ui/isolated/wrapped";
import { ApiRoutes, AppRoutes, SearchParams } from "@/_utils/routes.utils";
import { ExperienceType } from "@/_utils/schema-utils";
import axios from "axios";
import { toast } from "react-toastify";

import { Icons } from "@/components/ui/isolated/wrapped/Icons";

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
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button
          color="ghost"
          startIcon={<Icons.MoreVertical />}
          className="p-0"
        />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
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

          <Popover.Arrow className="fill-primary" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export { ExperienceCardActions };
