"use client";

import type { ComponentProps } from "react";
import Image from "next/image";

import { useMDXComponent } from "next-contentlayer2/hooks";

type MdxContentProps = {
  code: string;
};

type MdxComponentsType = ComponentProps<
  ReturnType<typeof useMDXComponent>
>["components"];

const components: MdxComponentsType = {
  Image: (props) => <Image {...props} />,
};

const Content = ({ code }: MdxContentProps) => {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
};

export { Content as MdxContent };
