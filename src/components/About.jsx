import { motion } from 'framer-motion'
import React from 'react'
import { Tilt } from 'react-tilt'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 sm:min-h-[280px] min-h-[110px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain hidden sm:block'
        />

        <h3 className='text-white text-[18px] sm:text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introducción</p>
        <h2 className={styles.sectionHeadText}>Descripción general.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.5, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Full Stack Developer con experiencia en el desarrollo de aplicaciones completas orientadas a producto. He participado en la creación de soluciones SAAS/ERP utilizadas por usuarios reales, integrando APIs externas, sistemas de geolocalización, algoritmos y grafos y dashboards completos.
        Con backgorund en diseño industrial tengo amplia experiencia y conocimiento en empresas manufactura y producción, actualmente ampliando conocimientos en ciberseguridad, Linux y hacking web, con interés en evolucionar hacia perfiles de Application Security o DevSecOps.
      </motion.p>

      <div className='mt-20 hidden sm:flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about")