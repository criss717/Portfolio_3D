import { Suspense, lazy } from "react";
import { motion } from "framer-motion";

const Gearbox3D = lazy(() => import("./canvas/Gearbox3D"));
const ModelLoader = lazy(() => import("./canvas/ModelLoader"));

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const Hero = () => {
  return (
    <section className="relative w-full min-h-[100vh] flex items-center pt-28 pb-16 overflow-hidden bg-fog dark:bg-obsidian">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-8 items-center">
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start z-10">
          <motion.h2
            {...fadeUp(0)}
            className="text-[20px] md:text-[24px] font-semibold tracking-tight text-graphite dark:text-[#a1a1a6] mb-4 uppercase"
          >
            Industria 4.0 & Software
          </motion.h2>
          <motion.h1
            {...fadeUp(0.15)}
            className="text-[40px] md:text-[56px] xl:text-[58px] font-bold tracking-tightest text-ink dark:text-snow leading-[1.07] mb-8"
          >
            Diseñador Industrial y Desarrollador Full Stack
          </motion.h1>
          <motion.p
            {...fadeUp(0.3)}
            className="text-[17px] md:text-[20px] font-normal tracking-tight text-graphite dark:text-[#a1a1a6] max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
          >
            Más de 7 años en diseño mecánico avanzado (CAD/CAM) y 3 años
            desarrollando software a medida. &lt;&lt; herramientas y pipelines
            que conectan la ingeniería de producto con sistemas ERP, SaaS y
            automatización mediante IA. &gt;&gt;{" "}
          </motion.p>
          <motion.div {...fadeUp(0.45)} className="flex items-center space-x-4">
            <a
              href="#projects"
              className="bg-[rgb(65,89,118)] text-white text-[17px] font-medium tracking-tight px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Ver Proyectos
            </a>
            <a
              href="#contact"
              className="text-ink dark:text-snow text-[17px] font-medium tracking-tight hover:underline"
            >
              Contactar &gt;
            </a>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp(0.2)}
          className="relative h-[50vh] md:h-[60vh] lg:h-[75vh] z-0"
        >
          <Suspense fallback={null}>
            <Gearbox3D />
          </Suspense>
          <ModelLoader />
          <div className="absolute bottom-0 left-0 w-full h-16 md:h-20 bg-gradient-to-t from-fog dark:from-obsidian to-transparent pointer-events-none z-10" />
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Ir a Sobre mí"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex justify-center items-start p-2 w-[35px] h-[64px] rounded-3xl border-2 border-[#d2d2d7] dark:border-[#48484a] hover:border-[rgb(65,89,118)] dark:hover:border-[rgb(65,89,118)] transition-colors"
      >
        <motion.div
          animate={{ y: [0, 24, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="w-3 h-3 rounded-full bg-[rgb(65,89,118)]"
        />
      </a>
    </section>
  );
};

export default Hero;
