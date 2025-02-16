import React, { Fragment, type PropsWithChildren } from "react";
import Link, { type LinkProps } from "next/link";

import type { getI18n } from "@/locales/server";

import { type NavItemType } from "../Navigation/navigation.types";
import { navItemToIconsMapping } from "../Navigation/navigation.utils";

type IconLinkProps = Omit<LinkProps, "href"> & {
  href: NavItemType["link"];
  translate: Awaited<ReturnType<typeof getI18n>>;
};

const IconLink = ({
  href,
  children,
  translate,
  ...linkProps
}: PropsWithChildren<IconLinkProps>) => {
  const Icon = navItemToIconsMapping[href]?.icon;
  // TODO: fix this
  // @ts-expect-error
  const title = translate(navItemToIconsMapping[href]?.label) ?? href;

  return (
    <Fragment>
      <Link href={href} {...linkProps}>
        {Icon ? <Icon className="h-s-m mr-2" /> : null}
        {children ?? title}
      </Link>
    </Fragment>
  );
};

export { IconLink };
