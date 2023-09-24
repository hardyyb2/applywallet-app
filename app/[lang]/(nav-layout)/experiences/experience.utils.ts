import { AddEditExperienceFormProps } from "./components/AddEditExperienceForm";

export const getAddEditExperienceFormCopy = (
  operationType: AddEditExperienceFormProps["type"],
  loading: boolean,
): {
  buttonText: string;
  titleText: string;
} => {
  let textArr = ["save", "saving", "add experience"];

  if (operationType === "edit") {
    textArr = ["update", "updating", "edit experience"];
  }

  return {
    buttonText: loading ? textArr[1] : textArr[0],
    titleText: textArr[2],
  };
};
