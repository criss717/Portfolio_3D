import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import { styles } from '../styles'
import { slideIn } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { EarthCanvas, StarsCanvas } from "./canvas";
import FeedbackToast from "./FeedbackToast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' })

  const handleChange = (e) => {
    const { target } = e
    const { name, value } = target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validaciones básicas
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setToast({ show: true, message: "Por favor, completa todos los campos.", type: 'error' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setToast({ show: true, message: "Por favor, introduce un correo electrónico válido.", type: 'error' });
      return;
    }

    setLoading(true)

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Cris',
        from_email: form.email,
        to_email: import.meta.env.VITE_EMAILJS_TO_EMAIL,
        message: form.message
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(
        () => {
          setLoading(false); 
          setToast({ show: true, message: "Gracias. Me comunicaré contigo lo antes posible.", type: 'success' });

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          setToast({ show: true, message: "Ahh, algo salió mal. Inténtalo de nuevo.", type: 'error' });
        }
      );

  }


  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      <FeedbackToast 
        {...toast} 
        onClose={() => setToast({ ...toast, show: false })} 
      />
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contacto.</h2>

        <form
          onSubmit={(e) => handleSubmit(e)}
          className='flex flex-col gap-8 mt-8 w-full'
        >
          <label
            className='flex flex-col'
          >
            <span>Tu nombre</span>
            <input
              type="text"
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='What`s your name?'
              className='bg-tertiary py-4 px-6 rounded-lg placeholder:text-secondary text-white outline-none border-none font-medium'
            />
          </label>
          <label
            className='flex flex-col'
          >
            <span>Tu correo</span>
            <input
              type="email"
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='What`s your email?'
              className='bg-tertiary py-4 px-6 rounded-lg placeholder:text-secondary text-white outline-none border-none font-medium'
            />
          </label>
          <label
            className='flex flex-col'
          >
            <span>Tu mensaje</span>
            <textarea
              rows='7'
              type="text"
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What do you want to say?'
              className='bg-tertiary py-4 px-6 rounded-lg placeholder:text-secondary text-white outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='w-fit bg-tertiary py-3 px-8 rounded-lg text-white outline-none font-bold shadow-md shadow-primary'
          >
            {loading ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </motion.div>


      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />

      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")