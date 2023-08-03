import clsx from "clsx";

interface BottomNavBackdropProps {
  visible: boolean;
  toggleVisible: () => void;
  className?: string;
}

const BottomNavBackdrop = ({
  visible,
  toggleVisible,
  className = "",
}: BottomNavBackdropProps) => {
  return (
    <div
      className={clsx(
        "fixed inset-0 h-full w-full overflow-y-auto bg-primary bg-opacity-80 backdrop-blur",
        visible ? "block" : "hidden",
        className,
      )}
      role="dialog"
      aria-hidden="true"
      onClick={toggleVisible}
    />
  );
};

export { BottomNavBackdrop };
