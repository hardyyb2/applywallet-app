import React, { Fragment, type PropsWithChildren } from "react";
import Link, { type LinkProps } from "next/link";

import { type NavItemType } from "../Navigation/navigation.types";
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
        {Icon ? <Icon className="mr-2 h-s-m" /> : null}
        {children ?? title}
      </Link>
    </Fragment>
  );
};

export { IconLink };
