"use client";

import axios from "axios";

import { Button } from "app/components/ui/isolated/wrapped";
import { ApiRoutes } from "app/utils/routes.utils";

const CreateNewSheetButton = () => {
  const handleCreateNewSheetClick = async () => {
    axios.post(`/api${ApiRoutes.NEW_USER}`).catch((error) => {
      if (axios.isAxiosError(error)) {
        console.log(error);
      }
    });
  };

  return (
    <Button onClick={handleCreateNewSheetClick}>Create New Sheet Button</Button>
  );
};

export { CreateNewSheetButton };
