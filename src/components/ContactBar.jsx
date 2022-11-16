import React from 'react'
import { NavLink } from 'react-router-dom'
import * as Icon from 'react-feather'
import CV from '../assets/CV.pdf'

const ContactBar = () => {
  return (
    <nav className='contact-bar'>
      <div className='cbar-c'>
        <div className='cbar-1'>
          <NavLink to='https://www.linkedin.com/in/joshua-dupin/'><Icon.Linkedin size='20' /></NavLink>
          <NavLink to='https://github.com/Joshua35260'><Icon.GitHub size='20' /></NavLink>
          <NavLink to='https://www.instagram.com/sunji_josh/?hl=fr'><Icon.Instagram size='20' /></NavLink>
          <NavLink to='https://www.facebook.com/SunjiDJosh'><Icon.Facebook size='20' /></NavLink>
        </div>
        <div className='cbar-2'></div>
        <a href={CV} download onClick={CV}>
          Télécharger mon CV
        </a>
        <div className='cbar-3'>
          <a href='mailto:joshua35260@gmail.com'>
            <Icon.Mail size='14' className='mailIcon' />
            joshua35260@gmail.com
          </a>
        </div>
      </div>
    </nav>
  )
}

export default ContactBar
