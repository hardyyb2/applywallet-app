"use client";

import { useRouter } from "next/navigation";

import axios from "axios";

import { Button } from "app/components/ui/isolated/wrapped";
import { ApiRoutes, AppRoutes } from "app/utils/routes.utils";

const CreateNewSheetButton = () => {
  const router = useRouter();

  const handleCreateNewSheetClick = async () => {
    axios
      .post(ApiRoutes.NEW_USER)
      .then(() => {
        router.replace(AppRoutes.CAREERS);
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
        }
      });
  };

  return (
    <Button onClick={handleCreateNewSheetClick}>Create New Sheet Button</Button>
  );
};

export { CreateNewSheetButton };
