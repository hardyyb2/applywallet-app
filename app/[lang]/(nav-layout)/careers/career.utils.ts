import { AddEditCareerFormProps } from "./components/AddEditCareerForm";

export const getAddEditCareerFormCopy = (
  operationType: AddEditCareerFormProps["type"],
  loading: boolean,
): {
  buttonText: string;
  titleText: string;
} => {
  let textArr = ["save", "saving", "add career"];

  if (operationType === "edit") {
    textArr = ["update", "updating", "edit career"];
  }

  return {
    buttonText: loading ? textArr[1] : textArr[0],
    titleText: textArr[2],
  };
};
