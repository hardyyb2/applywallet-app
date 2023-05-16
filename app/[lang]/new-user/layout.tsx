import React, { ReactNode } from "react";

const NewUserLayout = ({ children }: { children: ReactNode }) => {
  return (
    // inset-0 and fixed are workaround till we find a way for non nested layouts without composition of layout components
    <div className="fixed inset-0 / w-screen h-screen / bg-primary / z-50">
      <div className="w-full h-full / bg-gradient-to-br to-secondary/40 from-primary/40 ">
        {children}
      </div>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default NewUserLayout;
