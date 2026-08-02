import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useProgress } from "@react-three/drei";

const ModelLoader = () => {
  const { progress, active } = useProgress();
  const [visible, setVisible] = useState(() => progress < 100);
  const [display, setDisplay] = useState(0);
  const shownRef = useRef(0);
  const rafRef = useRef();

  useEffect(() => {
    const tick = () => {
      const diff = progress - shownRef.current;
      shownRef.current =
        Math.abs(diff) < 0.5 ? progress : shownRef.current + diff * 0.08;
      setDisplay(shownRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [progress]);

  useEffect(() => {
    if (progress >= 100) {
      const t = setTimeout(() => setVisible(false), 450);
      return () => clearTimeout(t);
    }
  }, [progress]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
        >
          <span className="text-[44px] md:text-[56px] font-semibold tracking-tight text-ink dark:text-snow">
            {Math.min(Math.round(display), active ? 80 : 100)}%
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModelLoader;
