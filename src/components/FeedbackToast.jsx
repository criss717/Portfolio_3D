import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * @module FeedbackToast
 * @description Toast reusable para notificaciones de éxito o error.
 * 
 * @param {Object} props
 * @param {boolean} props.show - Si se debe mostrar el toast.
 * @param {string} props.message - Mensaje a mostrar.
 * @param {'success' | 'error'} props.type - Tipo de notificación.
 * @param {Function} props.onClose - Función para cerrar el toast.
 */
const FeedbackToast = ({ show, message, type, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  const config = {
    success: {
      icon: "✅",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-500/40",
      textColor: "text-green-400",
    },
    error: {
      icon: "❌",
      bgColor: "bg-red-500/20",
      borderColor: "border-red-500/40",
      textColor: "text-red-400",
    },
  };

  const current = config[type] || config.success;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 50, scale: 0.9 }}
          className={`fixed bottom-10 right-10 z-[100] flex items-center gap-4 px-6 py-4 backdrop-blur-md rounded-2xl border ${current.borderColor} ${current.bgColor} shadow-2xl cursor-default`}
        >
          <div className="w-10 h-10 flex items-center justify-center bg-black/20 rounded-xl">
            <span className="text-xl">{current.icon}</span>
          </div>
          <div className="flex flex-col pr-4">
            <p className="text-white font-medium text-sm">
              {type === 'success' ? '¡Excelente!' : 'Ups, algo falló'}
            </p>
            <p className={`${current.textColor} text-xs font-semibold`}>
              {message}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white/30 hover:text-white transition-colors text-lg"
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FeedbackToast;
