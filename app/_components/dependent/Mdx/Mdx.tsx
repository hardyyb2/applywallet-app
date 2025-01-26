import {
  Fragment,
  type ComponentProps,
  type HTMLAttributes,
  type PropsWithChildren,
} from "react";
import Image, { type ImageProps } from "next/image";

import { useMDXComponent } from "next-contentlayer2/hooks";

import { cn } from "@/utils/styles";

type MdxComponentsType = ComponentProps<
  ReturnType<typeof useMDXComponent>
>["components"];

const components: MdxComponentsType = {
  // TODO - check when just Image will work
  // eslint-disable-next-line jsx-a11y/alt-text
  Image: (props: ImageProps) => <Image {...props} />,
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
