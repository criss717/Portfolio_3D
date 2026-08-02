import { motion } from "framer-motion";
import { technologies } from "../constants";
import SectionTitle from "./SectionTitle";

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const Tech = () => {
  return (
    <section id="tech" className="pt-16 pb-8">
      <div className="bg-white dark:bg-[#1d1d1f] rounded-[28px] p-[40px] md:p-[64px]">
        <SectionTitle className="mb-12">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-tight text-ink dark:text-snow leading-[1.17]">
            Tecnologías Core.
          </h2>
        </SectionTitle>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-3 md:grid-cols-5 gap-8 md:gap-12 justify-items-center"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              className={`flex flex-col items-center group ${tech.name === "AWS" ? "hidden md:flex" : ""}`}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#f5f5f7] dark:bg-black rounded-full flex items-center justify-center mb-4 transition-transform group-hover:-translate-y-2">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-8 h-8 md:w-10 md:h-10 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <p className="text-[14px] font-medium text-graphite dark:text-[#a1a1a6]">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Tech;
