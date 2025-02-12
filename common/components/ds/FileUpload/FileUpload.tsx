import React, { type HTMLAttributes, type PropsWithChildren } from "react";

import {
  useDropzone,
  type DropzoneOptions,
  type DropzoneState,
} from "react-dropzone";

import { cnM } from "@/utils/styles";

import { Card } from "../Card";
import { flexVariants } from "../Flex/flex.utils";
import { Icons } from "../Icons";
import type { FileUploadColorType } from "./fileUpload.types";

interface FileUploadContextType extends DropzoneState {
  color?: FileUploadColorType;
}

const FileUploadContext = React.createContext<FileUploadContextType | null>(
  null,
);

const useFileUpload = () => {
  const context = React.useContext(FileUploadContext);

  if (!context) {
    throw new Error("useFileUpload must be used within a FileUploadProvider");
  }

  return context;
};

interface FileUploadProviderProps extends PropsWithChildren<DropzoneOptions> {
  multiple?: boolean;
  color?: FileUploadColorType;
}

const FileUploadProvider = ({
  children,
  multiple,
  color = "primary",
  ...rest
}: FileUploadProviderProps) => {
  const value = useDropzone({
    multiple,
    ...rest,
  });

  return (
    <FileUploadContext.Provider value={{ ...value, color }}>
      <Card>
        <Card.Body>{children}</Card.Body>
      </Card>
    </FileUploadContext.Provider>
  );
};

interface FileUploadProps extends HTMLAttributes<HTMLDivElement> {}

const FileUpload = ({ className, ...rest }: FileUploadProps) => {
  const { getRootProps, isDragActive, color } = useFileUpload();

  return (
    <div
      {...rest}
      {...getRootProps()}
      className={flexVariants({
        direction: "column",
        align: "center",
        justify: "center",
        className: cnM(
          "w-full cursor-pointer gap-2xs rounded-xl px-xs py-l outline-dashed",
          "bg-base-100transition-colors",
          {
            "bg-primary/10 outline-primary/40": color === "primary",
            "bg-secondary/10 outline-secondary/40": color === "secondary",
            "bg-accent/10 outline-accent/40": color === "accent",
            "bg-success/10 outline-success/40": color === "success",
            "bg-warning/10 outline-warning/40": color === "warning",
            "bg-error/10 outline outline-error": color === "error",
            "bg-info/10 outline-info/40": color === "info",
          },
          isDragActive && [
            "d-skeleton",
            {
              "outline-primary": color === "primary",
              "outline-secondary": color === "secondary",
              "outline-accent": color === "accent",
              "outline-success": color === "success",
              "outline-warning": color === "warning",
              "outline-error": color === "error",
              "outline-info": color === "info",
            },
          ],
          className,
        ),
      })}
    />
  );
};

interface FileUploadInputProps
  extends Omit<HTMLAttributes<HTMLInputElement>, "color"> {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
  /** show default file upload icon
   * @default true
   */
  showIcon?: boolean;
}

const FileUploadInput = ({
  onChange,
  children,
  showIcon = true,
  ...rest
}: FileUploadInputProps) => {
  const { getInputProps, isDragActive, color } = useFileUpload();

  return (
    <>
      <input {...rest} {...getInputProps({ onChange })} />
      {showIcon && (
        <Icons.FileUpload
          className={cnM(
            "h-20 w-20",
            {
              "text-primary": color === "primary",
              "text-secondary": color === "secondary",
              "text-accent": color === "accent",
              "text-success": color === "success",
              "text-warning": color === "warning",
              "text-error": color === "error",
              "text-info": color === "info",
            },
            isDragActive && "animate-bounce",
          )}
        />
      )}
      {children}
    </>
  );
};

const FileUploadLabel = () => {
  const { color } = useFileUpload();

  return (
    <p className="label-xs text-center lg:label-s">
      <span className="text-base-content/90">
        drop you files here. <br />
        or{" "}
        <span
          className={cnM("label-m-bold", {
            "text-primary": color === "primary",
            "text-secondary": color === "secondary",
            "text-accent": color === "accent",
            "text-success": color === "success",
            "text-warning": color === "warning",
            "text-error": color === "error",
            "text-info": color === "info",
          })}
        >
          browse
        </span>
      </span>
    </p>
  );
};

export {
  FileUploadProvider,
  FileUpload,
  FileUploadInput,
  FileUploadLabel,
  type FileUploadProviderProps,
};
