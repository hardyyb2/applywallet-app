import { Fragment, ReactElement } from "react";

import { CopiedIcon, CopyIcon } from "public/images";

import { CopyButtonStateTypes } from "./copyButton.types";

export const copyButtonIcons: { [key in CopyButtonStateTypes]: ReactElement } =
  {
    copy: (
      <Fragment>
        <CopyIcon />
        <span className="hidden lg:inline">copy</span>
      </Fragment>
    ),
    copied: (
      <Fragment>
        <CopiedIcon />
        <span className="hidden lg:inline">copied</span>
      </Fragment>
    ),
  };
