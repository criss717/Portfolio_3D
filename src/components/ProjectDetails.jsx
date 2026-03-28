/** @module ProjectDetails */
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { github, close, webs } from "../assets";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";

/**
 * Componente de página independiente para mostrar los detalles de un proyecto.
 * 
 * @returns {JSX.Element} El componente de página de detalles.
 */
const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    const foundProject = projects.find((p) => p.id === id);
    if (foundProject) {
      setProject(foundProject);
      window.scrollTo(0, 0);
    } else {
      navigate("/");
    }
  }, [id, navigate]);

  if (!project) return null;

  return (
    <div className="min-h-screen bg-primary py-8 px-4">
      {/* Botón Volver - SPA Friendly */}
      <div className="max-w-[90rem] mx-auto mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-tertiary rounded-lg border border-secondary/20 text-white text-sm font-bold hover:bg-black-200 transition-all group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Volver
        </Link>
      </div>

      <div className="max-w-[90rem] mx-auto bg-tertiary rounded-2xl border border-secondary/10 shadow-2xl overflow-hidden">
        {/* Header con imagen destacada y título reducidos */}
        <div className="relative h-[200px] w-full">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover opacity-40 backdrop-blur-sm"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 bg-gradient-to-t from-tertiary to-transparent">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{project.name}</h1>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag.name} className={`px-3 py-0.5 rounded-full text-xs font-semibold bg-black/40 ${tag.color}`}>
                  #{tag.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 md:p-10">
          {/* Links de Acción más compactos */}
          <div className="flex flex-wrap gap-3 mb-10">
            {project.source_code_link && (
              <button
                onClick={() => window.open(project.source_code_link, "_blank")}
                className="flex items-center gap-2 px-6 py-3 bg-black-200 rounded-xl hover:bg-black-100 transition-all border border-secondary/20 shadow-lg"
              >
                <img src={github} alt="github" className="w-5 h-5 object-contain" />
                <span className="text-white text-sm font-bold">Ver código</span>
              </button>
            )}
            {project.source_link && (
              <button
                onClick={() => window.open(project.source_link, "_blank")}
                className="flex items-center gap-2 px-6 py-3 green-pink-gradient rounded-xl hover:opacity-90 transition-all shadow-xl"
              >
                <img src={webs} alt="web" className="w-5 h-5 object-contain" />
                <span className="text-white text-sm font-bold">Visitar Proyecto</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Carrusel / Galería */}
            <div className="space-y-4 order-1">
              <h3 className="text-xl font-bold text-white border-b border-secondary/20 pb-2">Galería del Proyecto</h3>
              <p className="text-secondary text-xs italic">Haz clic para ampliar</p>
              <div className={`grid grid-cols-1 ${project.isVertical ? "md:grid-cols-3" : "md:grid-cols-2"} gap-4`}>
                {project.images?.map((img, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className="relative rounded-xl overflow-hidden border border-secondary/10 shadow-xl cursor-zoom-in group"
                    onClick={() => setSelectedImg(img)}
                  >
                    <img
                      src={img}
                      alt={`${project.name}-${idx}`}
                      className={`w-full ${project.isVertical ? "h-[500px]" : "h-[180px] md:h-[220px]"} object-cover`}
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Información Técnica más comprimida */}
            <div className="space-y-6 order-2">
              <section className="bg-black-100/30 p-6 rounded-2xl border border-secondary/5">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span className="p-1.5 bg-blue-500 rounded-lg text-sm">🎯</span>
                  El Problema
                </h3>
                <p className="text-secondary leading-[1.6] text-base">
                  {project.details.problem}
                </p>
              </section>

              <section className="bg-black-100/30 p-6 rounded-2xl border border-secondary/5">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span className="p-1.5 bg-green-500 rounded-lg text-sm">💡</span>
                  Nuestra Solución
                </h3>
                <p className="text-secondary leading-[1.6] text-base">
                  {project.details.solution}
                </p>
              </section>

              <section className="bg-black-100/30 p-6 rounded-2xl border border-secondary/5">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span className="p-1.5 bg-pink-500 rounded-lg text-sm">🔥</span>
                  Retos Técnicos
                </h3>
                <p className="text-secondary leading-[1.6] text-base">
                  {project.details.challenges}
                </p>
              </section>

              <section className="p-6 bg-gradient-to-br from-black-200 to-tertiary rounded-2xl border border-secondary/10">
                <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-widest text-center">Stack</h3>
                <div className="text-center">
                  <p className="text-xl text-blue-400 font-extrabold">
                    {project.details.stack}
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>


      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 p-4 md:p-10 cursor-zoom-out"
            onClick={() => setSelectedImg(null)}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImg}
              alt="Enlarged"
              className="max-w-full max-h-full object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            />
            <button
              className="absolute top-8 right-8 p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <img src={close} alt="Close" className="w-8 h-8 invert" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetails;
