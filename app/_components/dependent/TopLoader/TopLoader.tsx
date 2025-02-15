"use client";

import { memo } from "react";

import NextTopLoader from "nextjs-toploader";

const TopLoader = memo(() => {
  return (
    <NextTopLoader
      height={8}
      color="var(--color-secondary)"
      shadow={`0 0 8px var(--color-secondary),0 0 4px var(--color-secondary)`}
    />
  );
});

TopLoader.displayName = "TopLoader";

export { TopLoader };
