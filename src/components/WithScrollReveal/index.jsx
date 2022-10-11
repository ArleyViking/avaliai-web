import { useEffect, useRef, ReactNode } from "react";
import scrollReveal from "scrollreveal";

export function WithScrollReveal({ delay, children }) {
  const ref = useRef(null);

  useEffect(() => {
    const refCurrent = ref?.current;
    async function animate() {
      if (refCurrent) {
        scrollReveal().reveal(refCurrent, {
          reset: false,
          delay: delay ?? 500,
          scale: 1,
          easing: "ease",
        });
      }
    }

    animate();
  }, []);

  return <div ref={ref}>{children}</div>;
}
