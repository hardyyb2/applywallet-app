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

const FileUploadContext = React.createContext<DropzoneState | null>(null);

const useFileUpload = () => {
  const context = React.useContext(FileUploadContext);

  if (!context) {
    throw new Error("useFileUpload must be used within a FileUploadProvider");
  }

  return context;
};

interface FileUploadProviderProps extends PropsWithChildren<DropzoneOptions> {
  multiple?: boolean;
}

const FileUploadProvider = ({
  children,
  multiple,
  ...rest
}: FileUploadProviderProps) => {
  const value = useDropzone({
    multiple,
    ...rest,
  });

  return (
    <FileUploadContext.Provider value={value}>
      <Card>
        <Card.Body>{children}</Card.Body>
      </Card>
    </FileUploadContext.Provider>
  );
};

interface FileUploadProps extends HTMLAttributes<HTMLDivElement> {}

const FileUpload = ({ className, ...rest }: FileUploadProps) => {
  const { getRootProps, isDragActive } = useFileUpload();

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
          "bg-base-100 bg-primary/10 outline-primary/40 transition-colors",
          isDragActive && "outline-primary",
          className,
        ),
      })}
    />
  );
};

interface FileUploadInputProps {
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
}: FileUploadInputProps) => {
  const { getInputProps } = useFileUpload();

  return (
    <>
      <input {...getInputProps({ onChange })} />
      {showIcon && <Icons.FileUpload className="h-20 w-20" />}
      {children}
    </>
  );
};

const FileUploadLabel = () => {
  const { isDragActive } = useFileUpload();

  return (
    <p className="label-xs text-center lg:label-s">
      {isDragActive ? (
        "drop your files here"
      ) : (
        <span className="text-base-content/90">
          drop you files here. <br />
          or <span className="label-m-bold text-primary">browse</span>
        </span>
      )}
    </p>
  );
};

export { FileUploadProvider, FileUpload, FileUploadInput, FileUploadLabel };
