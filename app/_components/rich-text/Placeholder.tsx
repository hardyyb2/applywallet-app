import React from "react";

import {
  createNodeHOC,
  createNodesHOC,
  usePlaceholderState,
  type PlaceholderProps,
} from "@udecode/plate-common";
import {
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
} from "@udecode/plate-heading";
import { ELEMENT_PARAGRAPH } from "@udecode/plate-paragraph";

import { cnM } from "@/utils/styles";

export const Placeholder = (props: PlaceholderProps) => {
  const { children, placeholder, nodeProps } = props;

  const { enabled } = usePlaceholderState(props);

  return React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      className: child.props.className,
      nodeProps: {
        ...nodeProps,
        className: cnM(
          enabled &&
            "before:absolute before:cursor-text before:opacity-30 before:content-[attr(placeholder)]",
        ),
        placeholder,
      },
    });
  });
};

export const withPlaceholder = createNodeHOC(Placeholder);
export const withPlaceholdersPrimitive = createNodesHOC(Placeholder);

export const withPlaceholders = (components: any) =>
  withPlaceholdersPrimitive(components, [
    {
      key: ELEMENT_PARAGRAPH,
      placeholder: "Type a paragraph",
      hideOnBlur: true,
      query: {
        maxLevel: 1,
      },
    },
    {
      key: ELEMENT_H1,
      placeholder: "Type a heading 1",
      hideOnBlur: false,
    },
    {
      key: ELEMENT_H2,
      placeholder: "Type a heading 2",
      hideOnBlur: true,
    },
    {
      key: ELEMENT_H3,
      placeholder: "Type a heading 3",
      hideOnBlur: true,
    },
    {
      key: ELEMENT_H4,
      placeholder: "Type a heading 4",
      hideOnBlur: true,
    },
    {
      key: ELEMENT_H5,
      placeholder: "Type a heading 5",
      hideOnBlur: true,
    },
    {
      key: ELEMENT_H6,
      placeholder: "Type a heading 6",
      hideOnBlur: true,
    },
  ]);
