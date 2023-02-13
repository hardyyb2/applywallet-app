import clsx from "clsx";

export type DropdownMenuProps = React.HTMLAttributes<HTMLUListElement>;

const DropdownMenu = ({ className, ...props }: DropdownMenuProps) => {
  return (
    <ul
      {...props}
      tabIndex={0}
      className={clsx(
        "dropdown-content menu p-2 shadow bg-base-100 rounded-box",
        className,
      )}
    />
  );
};

export { DropdownMenu };
