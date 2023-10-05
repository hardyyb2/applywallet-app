import { Fragment, HTMLAttributes, PropsWithChildren } from "react";
import Image from "next/image";

import { useMDXComponent } from "next-contentlayer/hooks";

import { cn } from "@/utils/styles.utils";

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
