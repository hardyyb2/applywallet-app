"use client";

import { forwardRef, ReactNode } from "react";

import clsx from "clsx";

interface DrawerSideProps {
  children: ReactNode;
  className?: string;
  onClickOverlay?: () => void;
  overlayClassName?: string;
}

const DrawerSide = forwardRef<HTMLDivElement, DrawerSideProps>(
  ({ className, overlayClassName, onClickOverlay, children, ...rest }, ref) => {
    const classes = clsx("drawer-side", className);

    const handleKeyDown = (event: React.KeyboardEvent): void => {
      if (event.key === "Escape") {
        onClickOverlay?.();
      }
    };

    return (
      <aside {...rest} className={classes} ref={ref}>
        <div
          role="button"
          className={clsx("drawer-overlay", overlayClassName)}
          tabIndex={0}
          onClick={onClickOverlay}
          onKeyDown={handleKeyDown}
          aria-label="Close"
        />
        {children}
      </aside>
    );
  },
);

DrawerSide.displayName = "DrawerSide";

export { DrawerSide };
