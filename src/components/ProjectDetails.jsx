import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../constants";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const galleryContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.4 },
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [nextProject, setNextProject] = useState(null);

  useEffect(() => {
    const foundProject = projects.find((p) => p.id === id);
    if (foundProject) {
      setProject(foundProject);
      const currentIdx = projects.findIndex((p) => p.id === id);
      setNextProject(projects[(currentIdx + 1) % projects.length]);
      setSelectedIdx(null);
      window.scrollTo(0, 0);
    } else {
      navigate("/");
    }
  }, [id, navigate]);

  const goToImage = useCallback(
    (dir) => {
      if (!project || !project.images?.length) return;
      setSelectedIdx(
        (prev) => (prev + dir + project.images.length) % project.images.length
      );
    },
    [project]
  );

  useEffect(() => {
    if (selectedIdx === null) return;
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") goToImage(-1);
      if (e.key === "ArrowRight") goToImage(1);
      if (e.key === "Escape") setSelectedIdx(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIdx, goToImage]);

  if (!project || project.id !== id) return null;

  return (
    <div className="min-h-screen bg-fog dark:bg-obsidian pt-24 pb-8 px-4 md:px-8">
      {/* Top Bar */}
      <div className="max-w-5xl mx-auto mb-8 flex items-center justify-between gap-4 flex-wrap">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-[14px] font-medium text-ink dark:text-snow hover:underline"
        >
          <span>&larr;</span> Volver a proyectos
        </Link>
        {nextProject && (
          <button
            onClick={() => navigate(`/proyecto/${nextProject.id}`)}
            className="text-[14px] font-medium text-ink dark:text-snow hover:underline"
          >
            Siguiente proyecto &rarr;
          </button>
        )}
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-[40px] md:text-[56px] font-bold tracking-tight text-ink dark:text-snow leading-[1.07] mb-4">
            {project.name}
          </h1>
          <p className="text-[17px] md:text-[20px] font-normal tracking-tight text-graphite dark:text-[#a1a1a6] max-w-3xl mb-6">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag.name}
                className="text-[12px] font-medium tracking-tight px-3 py-1 bg-white dark:bg-[#1d1d1f] text-ink dark:text-snow rounded-full"
              >
                {tag.name}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            {project.source_code_link && (
              <a
                href={project.source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-ink dark:bg-snow text-snow dark:text-ink text-[14px] font-medium px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
              >
                GitHub
              </a>
            )}
            {project.source_link && (
              <a
                href={project.source_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[rgb(65,89,118)] text-white text-[14px] font-medium px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
              >
                Ver Demo
              </a>
            )}
          </div>
        </div>

        {/* Technical Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] mb-12">
          <div className="bg-white dark:bg-[#1d1d1f] rounded-[28px] p-[28px]">
            <p className="text-[12px] font-bold tracking-wide uppercase text-graphite dark:text-[#a1a1a6] mb-3">
              El Problema
            </p>
            <p className="text-[17px] font-normal tracking-tight text-ink dark:text-snow leading-relaxed">
              {project.details.problem}
            </p>
          </div>
          <div className="bg-white dark:bg-[#1d1d1f] rounded-[28px] p-[28px]">
            <p className="text-[12px] font-bold tracking-wide uppercase text-graphite dark:text-[#a1a1a6] mb-3">
              La Solución
            </p>
            <p className="text-[17px] font-normal tracking-tight text-ink dark:text-snow leading-relaxed">
              {project.details.solution}
            </p>
          </div>
          <div className="bg-white dark:bg-[#1d1d1f] rounded-[28px] p-[28px]">
            <p className="text-[12px] font-bold tracking-wide uppercase text-graphite dark:text-[#a1a1a6] mb-3">
              Retos Técnicos
            </p>
            <p className="text-[17px] font-normal tracking-tight text-ink dark:text-snow leading-relaxed">
              {project.details.challenges}
            </p>
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-12">
          <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-ink dark:text-snow mb-6">
            Galería
          </h3>
          <motion.div
            variants={galleryContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-[16px]"
          >
            {project.images?.map((img, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="rounded-[16px] overflow-hidden bg-white dark:bg-[#1d1d1f] cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                onClick={() => setSelectedIdx(idx)}
              >
                <img
                  src={img}
                  alt={`${project.name}-${idx}`}
                  className="w-full h-[220px] md:h-[280px] object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIdx !== null && project.images?.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10"
            onClick={() => setSelectedIdx(null)}
          >
            <motion.img
              key={selectedIdx}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              src={project.images[selectedIdx]}
              alt={`${project.name}-${selectedIdx}`}
              className="max-w-full max-h-full object-contain rounded-[16px]"
            />
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl transition-colors cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIdx(null);
              }}
              aria-label="Cerrar"
            >
              ✕
            </button>
            <button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl md:text-5xl transition-colors cursor-pointer select-none"
              onClick={(e) => {
                e.stopPropagation();
                goToImage(-1);
              }}
              aria-label="Anterior"
            >
              &lsaquo;
            </button>
            <button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl md:text-5xl transition-colors cursor-pointer select-none"
              onClick={(e) => {
                e.stopPropagation();
                goToImage(1);
              }}
              aria-label="Siguiente"
            >
              &rsaquo;
            </button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-[14px] font-medium tracking-tight">
              {selectedIdx + 1} / {project.images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetails;
