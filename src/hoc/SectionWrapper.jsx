import { motion } from "framer-motion"
import { styles } from "../styles"
import { staggerContainer } from "../utils/motion"

const SectionWrapper = (Component,idName) => 
function HOC(){ //!funcion hight order component!
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden' // inicia como oculta la animación
        whileInView='show' //cuando la sección este en la vista se debe mostrar la animacion
        viewport={{once:true,amount:0.25}} // configura la animación para activarse una vez y cuando el 25% de la sección esté en la vista.
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
            &nbsp;
        </span>
        <Component/>
      </motion.section>
    )

}


export default SectionWrapper
