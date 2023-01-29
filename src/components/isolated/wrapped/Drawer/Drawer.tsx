import clsx from "clsx";
import { forwardRef, HTMLAttributes, ReactNode } from "react";

export type DrawerProps = HTMLAttributes<HTMLDivElement> & {
  side: ReactNode;
  open?: boolean;
  mobile?: boolean;
  end?: boolean;
  className?: string;
  toggleClassName?: string;
  contentClassName?: string;
  sideClassName?: string;
  overlayClassName?: string;
  onClickOverlay?: () => void;
};

const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      children,
      side,
      open,
      mobile,
      end,
      className,
      toggleClassName,
      contentClassName,
      sideClassName,
      overlayClassName,
      onClickOverlay,
      ...props
    },
    ref,
  ) => {
    const classes = clsx(
      "drawer",
      {
        "drawer-mobile": mobile,
        "drawer-end": end,
      },
      className,
    );

    const handleKeyDown = (event: React.KeyboardEvent): void => {
      if (event.key === "Escape") {
        onClickOverlay?.();
      }
    };

    return (
      <div aria-expanded={open} className={classes} ref={ref} {...props}>
        <input
          id="drawer-toggle"
          type="checkbox"
          className={clsx("drawer-toggle", toggleClassName)}
          checked={open}
          readOnly
          aria-label="Open/Close Drawer"
        />
        <div className={clsx("drawer-content", contentClassName)}>{children}</div>
        <div className={clsx("drawer-side", sideClassName)}>
          <div
            role="button"
            className={clsx("drawer-overlay", overlayClassName)}
            tabIndex={0}
            onClick={onClickOverlay}
            onKeyDown={handleKeyDown}
            aria-label="Close"
          />
          {side}
        </div>
      </div>
    );
  },
);

Drawer.displayName = "Drawer";

export default Drawer;
