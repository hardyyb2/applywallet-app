"use client";

import { useRouter } from "next/navigation";

import axios from "axios";
import { toast } from "react-toastify";

import { Button } from "@/components/isolated";
import { CustomError } from "@/utils/error";
import { ApiRoutes, AppRoutes } from "@/utils/routes.utils";

const CreateNewSheetButton = () => {
  const router = useRouter();

  const handleCreateNewSheetClick = async () => {
    axios
      .post(ApiRoutes.CREATE_SHEET)
      .then(() => {
        router.replace(AppRoutes.EXPERIENCES);
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
