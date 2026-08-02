import { motion } from "framer-motion";

const SectionTitle = ({ children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className={`text-left mb-16 ${className}`}
  >
    {children}
  </motion.div>
);

export default SectionTitle;
