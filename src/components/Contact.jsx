import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Leaflet from './Leaflet'
import { motion } from 'framer-motion'

const Contact = () => {
  const form = useRef()
  const [done, setDone] = useState(false)
  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_pub11bu',
        'template_tzb274w',
        form.current,
        'O7IwaOmXcqBx2F-e0'
      )
      .then(
        result => {
          console.log(result.text)
          setDone(true)
          form.reset()
        },
        error => {
          console.log(error.text)
        }
      )
  }

  return (
    <>
      <section className='contact'>
        <motion.h1
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0, type: 'spring' }}
          variants={{
            visible: { opacity: 1, scale: 1},
            hidden: { opacity: 0, scale: 0 }
          }}
        >
          CONTACTEZ-MOI
        </motion.h1>
        <motion.div
          className='contact-in'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0, type: 'spring' }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 300 }
          }}
        >
          <div className='contact-left'>
            <Leaflet />
          </div>
          <div className='contact-right'>
            <form ref={form} onSubmit={sendEmail}>
              <input
                type='text'
                name='user_name'
                className='user'
                placeholder='Nom / Prénom'
              />
              <input
                type='email'
                name='user_email'
                className='user'
                placeholder='Email'
              />
              <textarea name='message' className='user' placeholder='Message' />
              <input
                type='submit'
                value='Envoyer'
                className='button-contact'
                onClick={setDone}
              />
              <span className='span-button'>
                {done && "Merci de m'avoir contacté !"}
              </span>
            </form>
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default Contact
