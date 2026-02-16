import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const MouseGlow = () => {
  const { primary } = useTheme();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 600,
    damping: 40,
  });

  const springY = useSpring(mouseY, {
    stiffness: 600,
    damping: 40,
  });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      style={{
        position: "fixed",
        x: springX,
        y: springY,
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        background: primary,
        pointerEvents: "none",
        zIndex: 9999,
        translateX: "-50%",
        translateY: "-50%",
        boxShadow: `0 0 10px ${primary}, 0 0 20px ${primary}`,
      }}
    />
  );
};

export default MouseGlow;
