import React from "react";
import { useForm } from "react-hook-form";
import { AddCareerForm } from "./components/AddCareerForm";

const AddCareer = () => {
  return (
    <div className="p-4">
      <AddCareerForm />
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default AddCareer;
