import { useEffect } from "react";

export function useResizeWindow(callback) {
  useEffect(() => {
    window.addEventListener("resize", callback);
    return () => window.removeEventListener("resize", callback);
  }, [callback]);
}
