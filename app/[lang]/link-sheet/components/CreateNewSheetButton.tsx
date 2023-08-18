"use client";

import { useRouter } from "next/navigation";

import axios from "axios";
import { toast } from "react-toastify";

import { Button } from "app/components/ui/isolated/wrapped";
import { ApiRoutes, AppRoutes } from "app/utils/routes.utils";

import { CustomError } from "@/utils/error";

const CreateNewSheetButton = () => {
  const router = useRouter();

  const handleCreateNewSheetClick = async () => {
    axios
      .post(ApiRoutes.CREATE_SHEET)
      .then(() => {
        router.replace(AppRoutes.CAREERS);
      })
      .catch((error) => {
        const message = new CustomError(error).message;
        toast.error(message);
      });
  };

  return (
    <Button onClick={handleCreateNewSheetClick}>Create New Sheet Button</Button>
  );
};

export { CreateNewSheetButton };
