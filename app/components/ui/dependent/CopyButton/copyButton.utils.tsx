import { Fragment, ReactElement } from "react";

import { Icons } from "@/components/ui/isolated/wrapped/Icons";

import { CopyButtonStateTypes } from "./copyButton.types";

export const copyButtonIcons: { [key in CopyButtonStateTypes]: ReactElement } =
  {
    copy: (
      <Fragment>
        <Icons.Files />
        <span className="hidden lg:inline">copy</span>
      </Fragment>
    ),
    copied: (
      <Fragment>
        <Icons.ClipboardCheck />
        <span className="hidden lg:inline">copied</span>
      </Fragment>
    ),
  };
