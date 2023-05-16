import React, { ReactNode } from "react";

const NewUserLayout = ({ children }: { children: ReactNode }) => {
  return (
    // inset-0 and fixed are workaround till we find a way for non nested layouts without composition of layout components
    <div className="fixed inset-0 / w-screen h-screen / bg-red-300 / z-50">
      {children}
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default NewUserLayout;
