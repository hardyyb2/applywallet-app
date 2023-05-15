"use client";

import axios from "axios";

import { Button } from "@/components/ui/isolated/wrapped";
import { AppRoutes } from "@/utils/routes.utils";

const CreateNewSheetButton = () => {
  const handleCreateNewSheetClick = async () => {
    axios.post(`/api/${AppRoutes.NEW_USER}`).catch((err) => {
      console.log(err);
    });
  };

  return (
    <Button onClick={handleCreateNewSheetClick}>CreateNewSheetButton</Button>
  );
};

export { CreateNewSheetButton };
