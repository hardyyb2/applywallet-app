import { useEffect, useState } from "react";

import type { UseWindowSizeStateType } from "./useWindowSize.types";

const useWindowSize = (): { windowSize: UseWindowSizeStateType } => {
  const isSSR = typeof window !== "undefined";

  const [windowSize, setWindowSize] = useState<UseWindowSizeStateType>({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { windowSize };
};

export { useWindowSize };
