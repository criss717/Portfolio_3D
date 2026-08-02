import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { services } from "../constants";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const About = () => {
  return (
    <section id="about" className="pt-16">
      <SectionTitle>
        <h2 className="text-[28px] md:text-[50px] font-bold tracking-tight text-ink dark:text-snow leading-[1.07]">
          Diseño Industrial <br/> potenciado por código.
        </h2>
      </SectionTitle>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="max-w-3xl"
      >
        <p className="text-[17px] md:text-[20px] font-normal tracking-tight text-graphite dark:text-[#a1a1a6] leading-relaxed">
          Mi formación como diseñador industrial me enseñó a entender la materia y los procesos de fabricación (CAD/CAM). Mi experiencia como desarrollador me dio las herramientas para crear software. Hoy, uno ambos mundos integrando <span className="font-semibold text-ink dark:text-snow">Inteligencia Artificial y flujos de datos</span> para revolucionar la industria 4.0. No solo hago webs; construyo sistemas que optimizan tiempos, reducen costes de tokens en modelos de IA y eliminan la entrada manual de datos en la planta.
        </p>
        <p className="mt-6 text-[17px] md:text-[20px] font-normal tracking-tight text-graphite dark:text-[#a1a1a6] leading-relaxed">
          Mi valor diferencial es el profundo entendimiento del dominio de negocio industrial, permitiéndome diseñar arquitecturas de software eficientes, seguras y orientadas a optimizar flujos de fabricación desde el primer día.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[24px]"
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={cardVariants}
            className="bg-white dark:bg-[#1d1d1f] rounded-[28px] p-[24px]"
          >
            <div className="w-12 h-12 rounded-[14px] bg-[#f5f5f7] dark:bg-black flex items-center justify-center mb-4">
              <img
                src={service.icon}
                alt={service.title}
                className="w-6 h-6 object-contain"
              />
            </div>
            <h3 className="text-[17px] md:text-[18px] font-bold tracking-tight text-ink dark:text-snow leading-tight mb-2">
              {service.title}
            </h3>
            <p className="text-[14px] font-normal tracking-tight text-graphite dark:text-[#a1a1a6] leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
