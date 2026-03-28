/** @module ProjectModal */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { github, close, webs } from "../assets";

/**
 * Componente de modal para mostrar los detalles de un proyecto.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {Object|null} props.project - Objeto del proyecto seleccionado o null si está cerrado.
 * @param {Function} props.onClose - Función para cerrar el modal.
 * @returns {JSX.Element} El componente Modal de detalles.
 */
const ProjectModal = ({ project, onClose }) => {
  const [selectedImg, setSelectedImg] = useState(null);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 20, opacity: 0 }}
          className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-tertiary rounded-3xl border border-secondary/20 shadow-2xl custom-scrollbar"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header con botón de cerrar */}
          <div className="sticky top-0 right-0 z-10 flex justify-end p-4">
            <button
              onClick={onClose}
              className="p-2 transition-colors rounded-full bg-black/50 hover:bg-black/70 group"
            >
              <img src={close} alt="Cerrar" className="w-6 h-6 object-contain invert group-hover:scale-110 transition-transform" />
            </button>
          </div>

          <div className="p-8 pt-0">
            {/* Título y links */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div>
                <h2 className="text-4xl font-bold text-white mb-2">{project.name}</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag.name} className={`text-sm font-medium ${tag.color}`}>
                      #{tag.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                {project.source_code_link && (
                  <button
                    onClick={() => window.open(project.source_code_link, "_blank")}
                    className="flex items-center gap-2 px-6 py-3 bg-black-200 rounded-xl hover:bg-black-100 transition-all border border-secondary/10"
                  >
                    <img src={github} alt="github" className="w-5 h-5 object-contain" />
                    <span className="text-white text-sm font-semibold">Código</span>
                  </button>
                )}
                {project.source_link && (
                  <button
                    onClick={() => window.open(project.source_link, "_blank")}
                    className="flex items-center gap-2 px-6 py-3 green-pink-gradient rounded-xl hover:opacity-90 transition-all shadow-lg"
                  >
                    <img src={webs} alt="web" className="w-5 h-5 object-contain" />
                    <span className="text-white text-sm font-semibold">Ver Proyecto</span>
                  </button>
                )}
              </div>
            </div>

            {/* Grid de Contenido */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Carrusel / Imágenes */}
              <div className="space-y-4">
                 <p className="text-secondary text-sm italic">Haz clic en las imágenes para verlas en grande</p>
                 <div className="grid grid-cols-1 gap-4">
                    {project.images?.map((img, idx) => (
                        <motion.img 
                            key={idx}
                            src={img} 
                            alt={`${project.name}-${idx}`} 
                            className="w-full rounded-2xl object-cover border border-secondary/10 shadow-lg cursor-zoom-in"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            onClick={() => setSelectedImg(img)}
                        />
                    ))}
                 </div>
              </div>

              {/* Información técnica */}
              <div className="space-y-8">
                <section>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <div className="w-2 h-6 bg-blue-500 rounded-full" />
                    El Problema
                  </h3>
                  <p className="text-secondary leading-relaxed text-lg">
                    {project.details.problem}
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <div className="w-2 h-6 bg-green-500 rounded-full" />
                    Nuestra Solución
                  </h3>
                  <p className="text-secondary leading-relaxed text-lg">
                    {project.details.solution}
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <div className="w-2 h-6 bg-pink-500 rounded-full" />
                    Retos Técnicos
                  </h3>
                  <p className="text-secondary leading-relaxed text-lg">
                    {project.details.challenges}
                  </p>
                </section>

                <section className="p-6 bg-black-200/50 rounded-2xl border border-secondary/10">
                  <h3 className="text-xl font-bold text-white mb-4">Stack Tecnológico</h3>
                  <p className="text-blue-400 font-medium text-lg">
                    {project.details.stack}
                  </p>
                </section>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Modal de imagen ampliada (Lightbox) */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10 cursor-zoom-out"
              onClick={() => setSelectedImg(null)}
            >
              <motion.img
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                src={selectedImg}
                alt="Enlarged"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
              <button
                className="absolute top-5 right-5 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                onClick={() => setSelectedImg(null)}
              >
                <img src={close} alt="Close" className="w-8 h-8 invert" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;

