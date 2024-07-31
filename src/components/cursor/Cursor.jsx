// CustomCursor.js

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { useCursorState } from "./CursorContext";

const CustomCursor = () => {
  const { isHovered } = useCursorState();

  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    const onMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out"
      });
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  useEffect(() => {
    if (isHovered) {
      gsap.to(".cursor", { scale: 1.5, backgroundColor: "rgba(255, 255, 255, 0.8)", duration: 0.3 });
    } else {
      gsap.to(".cursor", { scale: 1, backgroundColor: "rgba(255, 255, 255, 0.5)", duration: 0.3 });
    }
  }, [isHovered]);

  return <div className="cursor"></div>;
};

export default CustomCursor;
