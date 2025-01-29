import { Fragment, type HTMLAttributes, type PropsWithChildren } from "react";

import { cn } from "@/utils/styles";

import { MdxContent } from "./MdxContent";

const Header = ({ children }: PropsWithChildren) => {
  return <Fragment>{children}</Fragment>;
};

const Footer = ({ children }: PropsWithChildren) => {
  return <Fragment>{children}</Fragment>;
};

interface MdxProps extends HTMLAttributes<HTMLDivElement> {}

const Mdx = ({ children, className, ...rest }: MdxProps) => {
  return (
    <div {...rest} className={cn(className)}>
      {children}
    </div>
  );
};

Mdx.Header = Header;
Mdx.Footer = Footer;
Mdx.Content = MdxContent;

export { Mdx };
