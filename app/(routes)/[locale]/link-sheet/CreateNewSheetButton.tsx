"use client";

import { useRouter } from "next/navigation";

import { toast } from "react-toastify";

import { Button } from "@/components/isolated/Button";
import { appApi } from "@/lib/appApi";
import { CustomError } from "@/lib/custom-error";
import { ApiRoutes, AppRoutes } from "@/utils/routes";

const CreateNewSheetButton = () => {
  const router = useRouter();

  const handleCreateNewSheetClick = async () => {
    appApi
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
