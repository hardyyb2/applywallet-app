"use client";

import { useEffect } from "react";

interface NewSheetErrorProps {
  error: Error;
  reset: () => void;
}

const NewSheetError = ({ error }: NewSheetErrorProps) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  console.log("here", error);

  return <div>NewSheetError occurred</div>;
};

export default NewSheetError;
