import { createContext, useCallback, useEffect, useState } from "react";

export const SizeContext = createContext({ innerWidth: 0 });

const SizeObserver = ({ children }) => {
  if (typeof window === "undefined") return children;

  const [innerWidth, setInnerWidth] = useState(0);
  const handleResize = useCallback(() => {
    setInnerWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });

    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return <SizeContext.Provider value={{ innerWidth }}>{children}</SizeContext.Provider>;
};

export default SizeObserver;
