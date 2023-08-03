import React, { ReactNode } from "react";

const NewUserLayout = ({ children }: { children: ReactNode }) => {
  return (
    // inset-0 and fixed are workaround till we find a way for non nested layouts without composition of layout components
    <div className="fixed inset-0 z-50 h-screen w-screen bg-primary">
      <div className="h-full w-full bg-gradient-to-br from-primary/40 to-secondary/40 ">
        {children}
      </div>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default NewUserLayout;
