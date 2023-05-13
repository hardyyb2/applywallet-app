"use client";

import { useEffect } from "react";

interface NewSheetErrorProps {
  error: Error;
  reset: () => void;
}

const NewSheetError = ({ error }: NewSheetErrorProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <div>NewSheetError occurred</div>;
};

// eslint-disable-next-line import/no-default-export
export default NewSheetError;
