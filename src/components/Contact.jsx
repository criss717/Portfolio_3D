import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import { styles } from '../styles'
import { slideIn } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { EarthCanvas, StarsCanvas } from "./canvas";
import emailjs from "@emailjs/browser";
//template_dro9j9r
//service_qpiv4ca    //del emailjs
//HV4alGMed4Br9Hh5a  //publikey

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { target } = e
    const { name, value } = target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      "service_qpiv4ca",
      "template_dro9j9r",
      {
        from_name: form.name,
        to_name: 'Cris',
        from_email: form.email,
        to_email: 'mono-717@hotmail.com',
        message: form.message
      },
      'HV4alGMed4Br9Hh5a'
    )
      .then(
        () => {
          setLoading(false); // ya se envió
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );

  }


  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>

        <form
          onSubmit={(e) => handleSubmit(e)}
          className='flex flex-col gap-8 mt-8 w-full'
        >
          <label
            className='flex flex-col'
          >
            <span>Your Name</span>
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
            <span>Your Email</span>
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
            <span>Your Message</span>
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
            {loading ? 'Sending...' : 'Send'}
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