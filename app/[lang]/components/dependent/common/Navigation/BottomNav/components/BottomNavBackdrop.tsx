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
        "fixed bg-primary bg-opacity-80 backdrop-blur inset-0 overflow-y-auto h-full w-full",
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
