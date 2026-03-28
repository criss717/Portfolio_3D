import { motion } from "framer-motion"
import { Tilt } from "react-tilt"
import { useNavigate } from "react-router-dom"
import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { github, webs } from "../assets"

const ProjectCard = ({
  index,
  id,
  name,
  description,
  tags,
  image,
  source_code_link,
  source_link,
}) => {
  const navigate = useNavigate();

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-[20px] sm:w-[360px] w-full border border-secondary/10 group cursor-pointer'
      >
        <div 
          className='relative w-full h-[230px]'
          onClick={() => navigate(`/proyecto/${id}`)}
        >
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-[10px]'
          />

          <div className='absolute inset-0 flex justify-between m-3 card-img_hover opacity-0 group-hover:opacity-100 transition-opacity'>
            {source_code_link ? (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(source_code_link, "_blank");
                }}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border border-white/10'
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            ) : (
              <div className='bg-red-500/80 px-2 py-1 rounded-lg h-10 flex items-center border border-white/20' title="Código Privado">
                <span className="text-[10px] text-white font-bold">CÓDIGO PRIVADO</span>
              </div>
            )}

            {source_link && (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(source_link, "_blank");
                }}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border border-white/10'
              >
                <img
                  src={webs}
                  alt='web'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            )}
          </div>
        </div>

        <div className='mt-5' onClick={() => navigate(`/proyecto/${id}`)}>
          <h3 className='text-white font-bold text-[24px] group-hover:text-pink-500 transition-colors uppercase tracking-wider'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px] line-clamp-3 leading-relaxed'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2' onClick={() => navigate(`/proyecto/${id}`)}>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color} font-medium`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

        <button
          onClick={() => navigate(`/proyecto/${id}`)}
          className="mt-6 w-full py-3 bg-black-200 text-white rounded-xl border border-secondary/10 group-hover:green-pink-gradient transition-all text-sm font-bold uppercase tracking-widest shadow-lg"
        >
          Explorar Detalles
        </button>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Mi portafolio profesional</p>
        <h2 className={styles.sectionHeadText}>Proyectos.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Los siguientes proyectos demuestran mis habilidades técnica y experiencia a través de casos reales de éxito. Cada uno incluye el problema abordado, la solución implementada y los retos técnicos superados.
        </motion.p>
      </div>

      <div className="flex flex-wrap gap-7 mt-20 justify-center">
        {projects.map((project, index) => (
          <ProjectCard 
            {...project} 
            index={index} 
            key={project.id} 
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "work")
