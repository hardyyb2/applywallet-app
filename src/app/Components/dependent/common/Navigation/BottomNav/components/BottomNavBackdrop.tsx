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
        "fixed bg-gray-800 bg-opacity-50 backdrop-blur-[2px] inset-0 overflow-y-auto h-full w-full",
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
