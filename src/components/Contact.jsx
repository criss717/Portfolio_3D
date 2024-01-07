import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import { styles } from '../styles'
import { slideIn} from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { EarthCanvas } from "./canvas";

const Contact = () => {
  const formRef = useRef()
  const [form, setform] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { target } = e
    const { name, value } = target
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
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
        variants={slideIn("left", "tween", 0.2, 1)}
        className=''
      >
        <EarthCanvas/>
        
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")