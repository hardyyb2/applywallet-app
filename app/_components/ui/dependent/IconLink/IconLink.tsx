import React, { Fragment, PropsWithChildren } from "react";
import Link, { LinkProps } from "next/link";

import { NavItemType } from "../Navigation/navigation.types";
import { navItemToIconsMapping } from "../Navigation/navigation.utils";

type IconLinkProps = Omit<LinkProps, "href"> & {
  href: NavItemType["link"];
};

const IconLink = ({
  href,
  children,
  ...linkProps
}: PropsWithChildren<IconLinkProps>) => {
  const Icon = navItemToIconsMapping[href]?.icon;
  const title = navItemToIconsMapping[href]?.label ?? href;

  return (
    <Fragment>
      <Link href={href} {...linkProps}>
        {Icon ? <Icon className="mr-2" /> : null}
        {children ?? title}
      </Link>
    </Fragment>
  );
};

export { IconLink };
