"use client";

import { useRouter } from "next/navigation";

import axios from "axios";
import { toast } from "react-toastify";

import { Flex } from "app/components/ui/isolated/common";
import { Button, Popover } from "app/components/ui/isolated/wrapped";

import { Icons } from "@/components/ui/isolated/wrapped/Icons";
import { ApiRoutes, AppRoutes, SearchParams } from "@/utils/routes.utils";
import { CareerType } from "@/utils/schema-utils";

type CareerCardActionsProps = {
  id: CareerType["id"];
};

const CareerCardActions = ({ id }: CareerCardActionsProps) => {
  // hooks
  const router = useRouter();

  // functions
  const handleDeleteClick = () => {
    axios
      .delete(`${ApiRoutes.DELETE_CAREER}/${id}`)
      .then(() => {
        // TODO - replace with revalidatePath when it works
        toast.success("career deleted");
        router.refresh();
      })
      .catch(() => {
        toast.error("failed to delete career, please try again");
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
            <Button color="primary" responsive startIcon={<Icons.Pencil />} />
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

export { CareerCardActions };
