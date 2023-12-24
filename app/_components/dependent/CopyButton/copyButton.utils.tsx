import { Fragment, type ReactElement } from "react";

import { Icons } from "~/components/ds/Icons";

import { type CopyButtonStateTypes } from "./copyButton.types";

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
