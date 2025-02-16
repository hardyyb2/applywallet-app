import { cva } from "cva";

const flexVariants = cva("flex", {
  variants: {
    direction: {
      row: "flex-row",
      "row-reverse": "flex-row-reverse",
      column: "flex-col",
      "column-reverse": "flex-col-reverse",
    },
    align: {
      stretch: "items-stretch",
      "flex-start": "items-start",
      "flex-end": "items-end",
      center: "items-center",
    },
    justify: {
      "flex-start": "justify-start",
      "flex-end": "justify-end",
      center: "justify-center",
      "space-between": "justify-between",
      "space-around": "justify-around",
    },
    wrap: {
      true: "flex-wrap",
      wrap: "flex-wrap",
      nowrap: "flex-nowrap",
      "wrap-reverse": "flex-wrap-reverse",
    },
  },
  defaultVariants: {
    align: "stretch",
    justify: "flex-start",
    wrap: "nowrap",
  },
});

export { flexVariants };
