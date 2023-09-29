"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/_components/ui/isolated/wrapped";
import { CustomError } from "@/_utils/error";
import { ApiRoutes, AppRoutes } from "@/_utils/routes.utils";
import axios from "axios";
import { toast } from "react-toastify";

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
