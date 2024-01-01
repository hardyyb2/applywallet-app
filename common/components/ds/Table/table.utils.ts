import { cva } from "cva";

export const tableVariants = cva("dui-table caption-bottom", {
  variants: {
    size: {
      xs: "dui-table-xs",
      sm: "dui-table-sm",
      md: "dui-table-md",
      lg: "dui-table-lg",
    },
    variant: {
      zebra: "dui-table-zebra",
    },
    pinRows: {
      true: "dui-table-pin-rows",
    },
    pinCols: {
      true: "dui-table-pin-cols",
    },
  },
});
