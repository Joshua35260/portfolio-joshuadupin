import React from 'react'
import * as Icon from 'react-feather'
import CV from '../assets/CV.pdf'

const ContactBar = () => {
  return (
    <nav className='contact-bar'>
      <div className='cbar-c'>
        <div className='cbar-1'>
          <Icon.Linkedin />
          <Icon.GitHub />
          <Icon.Instagram />
          <Icon.Facebook />
        </div>
        <div className='cbar-2'></div>
        <a href={CV} download onClick={CV}>
          Télécharger mon CV
        </a>
        <div className='c-bar3'>
          <Icon.Phone />
          (+33)6.99.64.89.06
          <a href='mailto:joshua35260@gmail.com'>
            <Icon.Mail />
            joshua35260@gmail.com
          </a>
        </div>
      </div>
    </nav>
  )
}

export default ContactBar
