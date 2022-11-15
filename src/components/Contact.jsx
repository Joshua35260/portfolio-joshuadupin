import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import contactMe from '../assets/img/contactme.png'

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
    <div className='contact'>
      <div className='contact-left'>
        <h1>Contactez-moi</h1>
      <img src={contactMe} alt="Contactez-moi" className='contact-img' />
        {/* darkMode */}
       
        
      </div>
      {/* right side form */}
      <div className='contact-right'>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='user_name'
            className='user'
            placeholder='Nom'
          />
          <input
            type='email'
            name='user_email'
            className='user'
            placeholder='Email'
          />
          <textarea name='message' className='user' placeholder='Message' />
          <input type='submit' value='Envoyer' className='button-contact' />
          <span>{done && 'Thanks for Contacting me'}</span>
        </form>
      </div>
    </div>
  )
}

export default Contact
