import { cva } from "cva";

export const tableVariants = cva(
  "d-table caption-bottom bg-base-100 rounded-xl",
  {
    variants: {
      size: {
        xs: "d-table-xs",
        sm: "d-table-sm",
        md: "d-table-md",
        lg: "d-table-lg",
      },
      variant: {
        zebra: "d-table-zebra",
      },
      pinRows: {
        true: "d-table-pin-rows",
      },
      pinCols: {
        true: "d-table-pin-cols",
      },
      responsive: {
        true: "d-table-xs sm:d-table-sm md:d-table-md lg:d-table-lg",
      },
    },
  },
);
