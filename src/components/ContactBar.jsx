import React from 'react'
import { NavLink } from 'react-router-dom'
import { Linkedin, GitHub, Facebook, Instagram, Mail } from 'react-feather';
import CV from '../assets/CV.pdf'

const ContactBar = () => {
  return (
    <nav className='contact-bar'>
      <div className='cbar-c'>
        <div className='cbar-1'>
          <a href='https://www.linkedin.com/in/joshua-dupin/' aria-label="linkedin" target="_blank" rel="noreferrer">
            <Linkedin size='20' />
          </a>
          <a href='https://github.com/Joshua35260' aria-label="GitHub" target="_blank" rel="noreferrer">
            <GitHub size='20' />
          </a>
          <a href='https://www.instagram.com/sunji_josh/?hl=fr' aria-label="Instagram" target="_blank" rel="noreferrer">
            <Instagram size='20' />
          </a>
          <a href='https://www.facebook.com/SunjiDJosh' aria-label="Facebook" target="_blank" rel="noreferrer">
            <Facebook size='20' />
          </a>
        </div>

        <a href={CV} download onClick={CV}>
          Télécharger mon CV
        </a>
        <div className='cbar-3'>
          <a href='mailto:joshua35260@gmail.com'>
            <Mail size='14' className='mailIcon' />
            joshua35260@gmail.com
          </a>
        </div>
      </div>
    </nav>
  )
}

export default ContactBar
