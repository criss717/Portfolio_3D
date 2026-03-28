import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ToastInvitation = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Mostrar después de un pequeño retraso
    const timer = setTimeout(() => {
      setShow(true);
    }, 3000);

    // Desaparecer después de 8 segundos
    const hideTimer = setTimeout(() => {
      setShow(false);
    }, 11000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-10 right-10 z-[100] flex items-center gap-3 px-6 py-4 bg-black-100/60 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] cursor-default select-none group"
        >
          <div className="w-10 h-10 flex items-center justify-center bg-blue-500/20 rounded-xl group-hover:bg-blue-500/30 transition-colors">
            <span className="text-xl">🖱️</span>
          </div>
          <div className="flex flex-col">
            <p className="text-white font-medium text-sm">
              ¡Hola! ¿Sabías que podías mover la imagen del PC?
            </p>
            <p className="text-blue-400 text-xs font-semibold">
              Pruébalo arrastrando el ratón
            </p>
          </div>
          <button
            onClick={() => setShow(false)}
            className="ml-2 text-white/30 hover:text-white transition-colors"
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ToastInvitation;
