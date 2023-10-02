import { Fragment, HTMLAttributes, PropsWithChildren } from "react";
import Image from "next/image";

import { cn } from "@/_utils/styles.utils";
import { useMDXComponent } from "next-contentlayer/hooks";

const components = {
  Image,
};

const Header = ({ children }: PropsWithChildren) => {
  return <Fragment>{children}</Fragment>;
};

const Footer = ({ children }: PropsWithChildren) => {
  return <Fragment>{children}</Fragment>;
};

type MdxContentProps = {
  code: string;
};

const Content = ({ code }: MdxContentProps) => {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
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
Mdx.Content = Content;

export { Mdx };
