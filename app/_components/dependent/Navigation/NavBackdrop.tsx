import { cn } from "@/utils/styles";

interface NavBackdropProps {
  visible: boolean;
  toggleVisible: () => void;
  className?: string;
}

const NavBackdrop = ({
  visible,
  toggleVisible,
  className = "",
}: NavBackdropProps) => {
  return (
    <div
      className={cn(
        "bg-neutral/80 bg-opacity-80 fixed inset-0 h-full w-full overflow-y-auto backdrop-blur-xs",
        visible ? "block" : "hidden",
        className,
      )}
      role="dialog"
      aria-hidden="true"
      onClick={toggleVisible}
    />
  );
};

export { NavBackdrop };
