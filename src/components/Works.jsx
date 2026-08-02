import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../constants";
import SectionTitle from "./SectionTitle";

const cardVariants = {
  hidden: { opacity: 0, y: 72 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.5, delayChildren: 0.1 },
  },
};

const Works = () => {
  return (
    <section id="projects" className="pt-16">
      <SectionTitle>
        <h2 className="text-[28px] md:text-[50px] font-bold tracking-tight text-ink dark:text-snow leading-[1.07]">
          Proyectos Destacados.
        </h2>
      </SectionTitle>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[24px]"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={cardVariants}>
            <Link
              to={`/proyecto/${project.id}`}
              className="group bg-white dark:bg-[#1d1d1f] rounded-[28px] p-[24px] flex flex-col h-full overflow-hidden no-underline transition-transform duration-300 ease-out hover:-translate-y-1.5"
            >
              <div className="rounded-[16px] overflow-hidden aspect-[4/3] bg-[#f5f5f7] dark:bg-black mb-5">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
                />
              </div>

              <div className="mb-4">
                <h3 className="text-[22px] md:text-[24px] font-bold tracking-tight text-ink dark:text-snow leading-tight mb-2 inline-block transition-colors duration-300 group-hover:text-[rgb(65,89,118)]">
                  {project.name}
                </h3>
                <p className="text-[15px] md:text-[16px] font-normal tracking-tight text-graphite dark:text-[#a1a1a6] line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="mt-auto flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag.name}
                    className="text-[11px] md:text-[12px] font-medium tracking-tight px-3 py-1 bg-[#f5f5f7] dark:bg-black text-ink dark:text-snow rounded-full"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Works;
