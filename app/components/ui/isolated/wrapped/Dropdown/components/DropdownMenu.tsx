import clsx from "clsx";

export type DropdownMenuProps = React.HTMLAttributes<HTMLUListElement>;

const DropdownMenu = ({ className, ...props }: DropdownMenuProps) => {
  return (
    <ul
      {...props}
      tabIndex={0}
      className={clsx(
        "dropdown-content menu rounded-box bg-base-100 p-2 shadow",
        className,
      )}
    />
  );
};

export { DropdownMenu };
