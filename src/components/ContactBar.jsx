import React from 'react'
import * as Icon from 'react-feather'
import CV from '../assets/CV.pdf'

const ContactBar = () => {
  return (
    <nav className='contact-bar'>
      <div className='cbar-c'>
        <div className='cbar-1'>
          <Icon.Linkedin size='20' />
          <Icon.GitHub size='20' />
          <Icon.Instagram size='20' />
          <Icon.Facebook size='20' />
        </div>
        <div className='cbar-2'></div>
        <a href={CV} download onClick={CV}>
          Télécharger mon CV
        </a>
        <div className='c-bar3'>
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
